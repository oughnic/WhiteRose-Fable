import * as THREE from 'three';
import { FullScreenQuad } from 'three/addons/postprocessing/Pass.js';
import { addDebugControls } from '../debug/debugPane';
import { ACTIVE_LOOK } from './lookMode';
import { LOOK_FRAGMENT_SHADER, LOOK_VERTEX_SHADER } from './lookShader';

/**
 * The toon outline and the sketchy drawing: the scene renders into a target (colour + depth
 * texture), then one full-screen pass draws the look (lookShader.ts) to the screen.
 * The current look renders straight to the screen, as before.
 */

/** Toon outline tunables (Toon outline folder). */
const toonOutline = {
  lineWidth: 1,
  depthSensitivity: 0.02,
  creaseSensitivity: 0.25,
  lineColor: '#1d2329',
  lineOpacity: 0.25,
};

/** Sketchy drawing tunables (Sketchy drawing folder). */
const sketchyDrawing = {
  lineWidth: 1,
  depthSensitivity: 0.02,
  creaseSensitivity: 0.25,
  lineColor: '#2b2a33',
  lineOpacity: 0.25,
  paperColor: '#f4efe2',
  colourAmount: 0.75,
  paperGrain: 0.08,
  /** Overall brightness of the drawing (colour and paper; the lines stay as dark). */
  brightness: 0.5,
  /** How far colour and lines are pushed apart, as a fraction of the screen width (owner's 0.007). */
  uncertainty: 0.0007,
  wobbleAngle: 30,
  noiseScale: 3,
  stickToSurfaces: true,
  lineCopies: 2,
  boilFps: 4,
};

const SKETCH = ACTIVE_LOOK === 'sketch';
const lookSettings = SKETCH ? sketchyDrawing : toonOutline;

/** A rotation by `angle`: one wobble matrix (the shader scales it by the uncertainty). */
const setWobbleMatrix = (matrix: THREE.Matrix2, angleDeg: number) => {
  const a = THREE.MathUtils.degToRad(angleDeg);
  matrix.set(Math.cos(a), -Math.sin(a), Math.sin(a), Math.cos(a));
};

export const createLookRenderer = (renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera) => {
  if (ACTIVE_LOOK === 'current') {
    return { renderLook: () => renderer.render(scene, camera), resizeLook: () => {} };
  }

  const size = renderer.getDrawingBufferSize(new THREE.Vector2());
  const target = new THREE.WebGLRenderTarget(size.x, size.y, {
    type: THREE.HalfFloatType,
    // the canvas's own antialiasing does not reach a render target: multisample it instead
    samples: renderer.getContext().getContextAttributes()?.antialias ? 4 : 0,
    depthTexture: new THREE.DepthTexture(size.x, size.y, THREE.FloatType),
  });

  const uniforms = {
    tColor: { value: target.texture },
    tDepth: { value: target.depthTexture },
    resolution: { value: size.clone() },
    projectionInverse: { value: camera.projectionMatrixInverse },
    cameraWorld: { value: camera.matrixWorld },
    cameraFar: { value: camera.far },
    fogNear: { value: 0 },
    fogFar: { value: 1e6 },
    sketchMode: { value: SKETCH ? 1 : 0 },
    lineWidth: { value: 1 },
    depthSensitivity: { value: 0 },
    creaseSensitivity: { value: 0 },
    lineColor: { value: new THREE.Color() },
    lineOpacity: { value: 1 },
    paperColor: { value: new THREE.Color() },
    colourAmount: { value: 1 },
    paperGrain: { value: 0 },
    brightness: { value: 1 },
    uncertainty: { value: 0 },
    shadeWobble: { value: new THREE.Matrix2() },
    lineWobble: { value: new THREE.Matrix2() },
    noiseScale: { value: 1 },
    stickToSurfaces: { value: true },
    lineCopies: { value: 1 },
    boilSeed: { value: 0 },
  };
  const quad = new FullScreenQuad(
    new THREE.ShaderMaterial({ uniforms, vertexShader: LOOK_VERTEX_SHADER, fragmentShader: LOOK_FRAGMENT_SHADER, depthTest: false, depthWrite: false })
  );

  const applyLookSettings = () => {
    uniforms.lineWidth.value = lookSettings.lineWidth;
    uniforms.depthSensitivity.value = lookSettings.depthSensitivity;
    uniforms.creaseSensitivity.value = lookSettings.creaseSensitivity;
    uniforms.lineColor.value.set(lookSettings.lineColor);
    uniforms.lineOpacity.value = lookSettings.lineOpacity;
    if (!SKETCH) return;
    uniforms.paperColor.value.set(sketchyDrawing.paperColor);
    // the distance (fog) and the sky fade into the paper, not into grey
    if (scene.background instanceof THREE.Color) scene.background.set(sketchyDrawing.paperColor);
    if (scene.fog) scene.fog.color.set(sketchyDrawing.paperColor);
    uniforms.colourAmount.value = sketchyDrawing.colourAmount;
    uniforms.paperGrain.value = sketchyDrawing.paperGrain;
    // shade and lines wobble along opposite directions, so they never quite register
    setWobbleMatrix(uniforms.shadeWobble.value, sketchyDrawing.wobbleAngle);
    setWobbleMatrix(uniforms.lineWobble.value, sketchyDrawing.wobbleAngle + 180);
    uniforms.uncertainty.value = sketchyDrawing.uncertainty;
    uniforms.brightness.value = sketchyDrawing.brightness;
    uniforms.noiseScale.value = sketchyDrawing.noiseScale;
    uniforms.stickToSurfaces.value = sketchyDrawing.stickToSurfaces;
    uniforms.lineCopies.value = sketchyDrawing.lineCopies;
  };
  applyLookSettings();

  /** Render the scene in the active look. */
  const renderLook = () => {
    renderer.setRenderTarget(target);
    renderer.render(scene, camera);
    renderer.setRenderTarget(null);
    uniforms.cameraFar.value = camera.far;
    const fog = scene.fog instanceof THREE.Fog ? scene.fog : null;
    uniforms.fogNear.value = fog ? fog.near : 0;
    uniforms.fogFar.value = fog ? fog.far : 1e6;
    if (SKETCH) {
      // the boil: a new draw of the wobble a few times a second, like hand-drawn frames
      uniforms.boilSeed.value = sketchyDrawing.boilFps > 0 ? Math.floor((performance.now() / 1000) * sketchyDrawing.boilFps) % 64 : 0;
    }
    quad.render(renderer);
  };

  const resizeLook = () => {
    renderer.getDrawingBufferSize(size);
    target.setSize(size.x, size.y);
    uniforms.resolution.value.copy(size);
  };

  addDebugControls((pane) => {
    const folder = pane.addFolder({ title: SKETCH ? 'Sketchy drawing' : 'Toon outline' });
    folder.addBinding(lookSettings, 'lineWidth', { label: 'line width (px)', min: 1, max: 5, step: 1 });
    folder.addBinding(lookSettings, 'lineColor', { label: 'line colour' });
    folder.addBinding(lookSettings, 'lineOpacity', { label: 'line strength', min: 0, max: 1, step: 0.01 });
    folder.addBinding(lookSettings, 'depthSensitivity', { label: 'outline threshold (lower = more)', min: 0.001, max: 0.2, step: 0.001 });
    folder.addBinding(lookSettings, 'creaseSensitivity', { label: 'fold threshold (lower = more)', min: 0.01, max: 1, step: 0.01 });
    if (SKETCH) {
      folder.addBinding(sketchyDrawing, 'paperColor', { label: 'paper colour' });
      folder.addBinding(sketchyDrawing, 'colourAmount', { label: 'colour wash', min: 0, max: 1, step: 0.01 });
      folder.addBinding(sketchyDrawing, 'paperGrain', { label: 'paper grain', min: 0, max: 0.5, step: 0.01 });
      folder.addBinding(sketchyDrawing, 'brightness', { label: 'brightness', min: 0.2, max: 1.2, step: 0.01 });
      folder.addBinding(sketchyDrawing, 'uncertainty', { label: 'uncertainty (× screen width)', min: 0, max: 0.03, step: 0.0005 });
      folder.addBinding(sketchyDrawing, 'wobbleAngle', { label: 'wobble direction (°)', min: 0, max: 360, step: 1 });
      folder.addBinding(sketchyDrawing, 'noiseScale', { label: 'wobble detail', min: 0.1, max: 20, step: 0.1 });
      folder.addBinding(sketchyDrawing, 'stickToSurfaces', { label: 'wobble sticks to walls' });
      folder.addBinding(sketchyDrawing, 'lineCopies', { label: 'pencil strokes per line', min: 1, max: 4, step: 1 });
      folder.addBinding(sketchyDrawing, 'boilFps', { label: 'boil (redraws/s)', min: 0, max: 24, step: 1 });
    }
    folder.on('change', applyLookSettings);
  });

  return { renderLook, resizeLook };
};
