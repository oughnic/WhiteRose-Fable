import * as THREE from 'three';
import { ColorEnvironment } from 'three/addons/environments/ColorEnvironment.js';
import { addDebugControls } from '../debug/debugPane';
import { createCeilingLights } from './ceilingLights';
import { addLightProbeControls, createWalkingLightProbe } from './lightProbe';

/**
 * Scene lighting, tunable from the debug panel (Lighting folder).
 *
 * Every lit surface is a standard (PBR) material, so the hospital is lit the way a building
 * is: by its ceiling panels — real RectAreaLights on the panels nearest you — plus a uniform
 * surrounding light (image-based), which every PBR material picks up and which stands in
 * for the general fill. No sky fill, sun or flat ambient (owner choice, 13 Oct 2026).
 *
 * The surround is one flat colour on purpose: three's RoomEnvironment has bright emissive
 * panels and a point light baked in, and the mirror floor reflected them as sun-like
 * patches that slid with the view. A uniform surround has nothing to reflect, so the only
 * highlights on the floor are the real ceiling panels.
 *
 * Bounce light comes from a light probe that walks with you (lightProbe.ts): the light the
 * panels put on the walls and floor around you, handed on to everything else.
 */

const LIGHTING_DEFAULTS = { ceiling: 40, ceilingCount: 12, environment: 0.35, environmentColor: '#ffffff' };

/** Current light levels, bound to the debug panel. */
const lighting = { ...LIGHTING_DEFAULTS };

let rig: {
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  ceilingLights: ReturnType<typeof createCeilingLights>;
  lightProbe: ReturnType<typeof createWalkingLightProbe>;
} | null = null;
let surroundEnvironment: THREE.Texture | null = null;
let surroundColor = '';

/** Push `lighting` into the lights. */
const applyLighting = () => {
  if (!rig) return;
  rig.ceilingLights.configureCeilingLights(lighting.ceilingCount, lighting.ceiling);
  if (lighting.environment > 0 && surroundColor !== lighting.environmentColor) {
    // (re)built on first use and when the colour changes: one flat colour all round
    const pmrem = new THREE.PMREMGenerator(rig.renderer);
    const surround = new ColorEnvironment(lighting.environmentColor);
    surroundEnvironment?.dispose();
    surroundEnvironment = pmrem.fromScene(surround).texture;
    surroundColor = lighting.environmentColor;
    surround.dispose();
    pmrem.dispose();
  }
  rig.scene.environment = lighting.environment > 0 ? surroundEnvironment : null;
  rig.scene.environmentIntensity = lighting.environment;
};

/** Create the hospital's lights. */
export const createLighting = (scene: THREE.Scene, renderer: THREE.WebGLRenderer) => {
  rig = { scene, renderer, ceilingLights: createCeilingLights(scene), lightProbe: createWalkingLightProbe(scene, renderer) };
  applyLighting();
};

/** Per frame: the ceiling light pool follows the eye, then the light probe captures what it lights. */
export const updateLighting = (eye: THREE.Vector3, feetY: number) => {
  rig?.ceilingLights.updateCeilingLights(eye, feetY);
  rig?.lightProbe.updateWalkingLightProbe(eye);
};

/** Lighting folder in the debug panel. */
export const addLightingControls = () =>
  addDebugControls((pane) => {
    const folder = pane.addFolder({ title: 'Lighting' });
    folder.addBinding(lighting, 'ceiling', { label: 'ceiling panels', min: 0, max: 120, step: 0.5 });
    folder.addBinding(lighting, 'ceilingCount', { label: 'lit panels nearby', min: 1, max: 32, step: 1 });
    folder.addBinding(lighting, 'environment', { label: 'surround light', min: 0, max: 2, step: 0.01 });
    folder.addBinding(lighting, 'environmentColor', { label: 'surround colour' });
    folder.addButton({ title: 'Reset lighting' }).on('click', () => {
      Object.assign(lighting, LIGHTING_DEFAULTS);
      applyLighting();
      pane.refresh();
    });
    folder.on('change', applyLighting);
    addLightProbeControls(folder, () => rig?.lightProbe.recaptureLightProbe());
  });
