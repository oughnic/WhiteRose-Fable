import * as THREE from 'three';
import type { FolderApi } from 'tweakpane';
import { LightProbeGenerator } from 'three/addons/lights/LightProbeGenerator.js';

/**
 * A light probe that walks with you: bounce light for the current (PBR) look.
 *
 * The ceiling panels light the walls and floor directly, and the surround light is one flat
 * colour from every side — so nothing carries light from one surface to the next. The probe
 * does: a small cube map captured at your eye (the sage walls lit by the panels, the grey
 * floor, the white ceiling) is reduced to spherical harmonics, a THREE.LightProbe. Every
 * lit material then gets a fill that depends on which way it faces — the colour of what it
 * faces — so normal detail (the wall finish) shows in the fill too, not only under the panels.
 *
 * One probe lights the whole scene, so it is re-captured as you walk: after a set distance
 * and every few seconds (doors swing, the theatre dims). A capture renders the scene six
 * times into a 16 px cube, spread over a few frames; the pixels come back asynchronously
 * (no GPU stall), and the probe eases into the new light so the hand-over never pops.
 * At render time a probe costs every lit pixel nine coefficients: next to nothing.
 *
 * Why not three's LightProbeGridWebGL (probes interpolated across space)? The panels are
 * a pool of lights that follows you, so a grid baked over the hospital would capture dark
 * corridors; a grid that follows you puts probes inside the corridor walls (light leaks)
 * and costs dozens of probe captures per move.
 */

const LIGHT_PROBE_DEFAULTS = {
  /** Bounce light on or off (off keeps the probe at zero: no shader recompile). */
  enabled: true,
  /** Strength of the bounce light. */
  intensity: 1,
  /** Walk this far from the last capture and the probe re-captures (metres). */
  recaptureDistance: 1.5,
  /** Re-capture this often even standing still (seconds). */
  refreshSeconds: 4,
  /** Cube faces rendered per frame while capturing: 6 = one frame, 1 = spread over six. */
  facesPerFrame: 2,
  /** Time to ease into a new capture (seconds). */
  blendSeconds: 0.6,
};

/** Light probe settings, bound to the debug panel (Lighting › Bounce light). */
const lightProbeSettings = { ...LIGHT_PROBE_DEFAULTS };

const CUBE_SIZE = 16;
const CAPTURE_NEAR = 0.05;
const CAPTURE_FAR = 60;
/** A capture this far from the last (a lift ride, a travel jump) replaces the light at once. */
const SNAP_DISTANCE_M = 8;

export const createWalkingLightProbe = (scene: THREE.Scene, renderer: THREE.WebGLRenderer) => {
  const probe = new THREE.LightProbe(); // black until the first capture lands
  scene.add(probe);
  const cubeTarget = new THREE.WebGLCubeRenderTarget(CUBE_SIZE, { type: THREE.HalfFloatType });
  cubeTarget.texture.colorSpace = THREE.LinearSRGBColorSpace;
  const cubeCamera = new THREE.CubeCamera(CAPTURE_NEAR, CAPTURE_FAR, cubeTarget);
  cubeCamera.coordinateSystem = renderer.coordinateSystem;
  cubeCamera.updateCoordinateSystem();
  const faceCameras = cubeCamera.children as THREE.PerspectiveCamera[];

  /** The latest capture: the probe eases towards it. */
  const capturedLight = new THREE.SphericalHarmonics3();
  const lastCapturePosition = new THREE.Vector3(Infinity, Infinity, Infinity);
  let hasCapture = false;
  let snapNext = true;
  /** Next cube face to render, or -1 when no capture is under way. */
  let nextFace = -1;
  let readingPixels = false;
  let lastCaptureTime = -Infinity;
  let lastFrameTime = performance.now();

  /** Render cube faces into the target. The probe is off meanwhile: it captures direct light only. */
  const renderCubeFaces = (count: number) => {
    const previousTarget = renderer.getRenderTarget();
    const previousFace = renderer.getActiveCubeFace();
    const previousMipmapLevel = renderer.getActiveMipmapLevel();
    const previousIntensity = probe.intensity;
    probe.intensity = 0;
    for (let i = 0; i < count && nextFace < 6; i++, nextFace++) {
      renderer.setRenderTarget(cubeTarget, nextFace);
      renderer.render(scene, faceCameras[nextFace]);
    }
    probe.intensity = previousIntensity;
    renderer.setRenderTarget(previousTarget, previousFace, previousMipmapLevel);
  };

  /** Read the finished cube back (asynchronously) and project it to spherical harmonics. */
  const readCapture = async () => {
    readingPixels = true;
    try {
      const captured = await LightProbeGenerator.fromCubeRenderTarget(renderer, cubeTarget);
      capturedLight.copy(captured.sh);
      if (!hasCapture || snapNext) probe.sh.copy(capturedLight);
      hasCapture = true;
    } finally {
      readingPixels = false;
    }
  };

  const startCapture = (eye: THREE.Vector3, now: number) => {
    snapNext = eye.distanceTo(lastCapturePosition) > SNAP_DISTANCE_M;
    lastCapturePosition.copy(eye);
    lastCaptureTime = now;
    cubeCamera.position.copy(eye);
    cubeCamera.updateMatrixWorld(true);
    nextFace = 0;
  };

  /** Per frame, after the ceiling light pool has moved: capture when due, ease the probe. */
  const updateWalkingLightProbe = (eye: THREE.Vector3) => {
    const now = performance.now();
    const dt = (now - lastFrameTime) / 1000;
    lastFrameTime = now;
    probe.intensity = lightProbeSettings.enabled ? lightProbeSettings.intensity : 0;
    if (!lightProbeSettings.enabled) return;

    if (nextFace < 0 && !readingPixels) {
      const walkedAway = eye.distanceTo(lastCapturePosition) > lightProbeSettings.recaptureDistance;
      const stale = now - lastCaptureTime > lightProbeSettings.refreshSeconds * 1000;
      if (walkedAway || stale) startCapture(eye, now);
    }
    if (nextFace >= 0) {
      renderCubeFaces(Math.max(1, Math.round(lightProbeSettings.facesPerFrame)));
      if (nextFace >= 6) {
        nextFace = -1;
        void readCapture();
      }
    }
    if (hasCapture) probe.sh.lerp(capturedLight, 1 - Math.exp(-dt / Math.max(0.01, lightProbeSettings.blendSeconds)));
  };

  /** Capture again on the next frame (debug panel button). */
  const recaptureLightProbe = () => {
    lastCaptureTime = -Infinity;
  };

  return { updateWalkingLightProbe, recaptureLightProbe };
};

/** Bounce light sub-folder (inside the Lighting folder). */
export const addLightProbeControls = (parent: FolderApi, recapture: () => void) => {
  const folder = parent.addFolder({ title: 'Bounce light (light probe)' });
  folder.addBinding(lightProbeSettings, 'enabled', { label: 'bounce light on' });
  folder.addBinding(lightProbeSettings, 'intensity', { label: 'bounce strength', min: 0, max: 4, step: 0.05 });
  folder.addBinding(lightProbeSettings, 'recaptureDistance', { label: 'recapture every (m)', min: 0.25, max: 10, step: 0.25 });
  folder.addBinding(lightProbeSettings, 'refreshSeconds', { label: 'refresh standing (s)', min: 0.5, max: 30, step: 0.5 });
  folder.addBinding(lightProbeSettings, 'facesPerFrame', { label: 'cube faces per frame', min: 1, max: 6, step: 1 });
  folder.addBinding(lightProbeSettings, 'blendSeconds', { label: 'ease into new light (s)', min: 0, max: 3, step: 0.05 });
  folder.addButton({ title: 'Recapture now' }).on('click', recapture);
  folder.addButton({ title: 'Reset bounce light' }).on('click', () => {
    Object.assign(lightProbeSettings, LIGHT_PROBE_DEFAULTS);
    folder.refresh();
  });
};
