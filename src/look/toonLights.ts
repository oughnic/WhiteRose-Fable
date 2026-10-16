import * as THREE from 'three';
import { addDebugControls } from '../debug/debugPane';

/**
 * The toon look's lights, in place of the RectAreaLight ceiling panels (which cannot light
 * toon materials):
 *
 * - hemisphere: soft sky-above / floor-below fill — it lifts the shadows but never bands;
 * - directional: one steady key from a fixed direction — every wall facing it reads as one
 *   flat band, so the building's shape shows;
 * - lamp: a point light that walks with you, just above your head — the bands round the
 *   corners near you, and the light falls off along the corridor ahead.
 *
 * Toon materials band only the direct lights (directional and lamp); the hemisphere is
 * smooth fill.
 */

const TOON_LIGHT_DEFAULTS = {
  skyColor: '#ffffff',
  groundColor: '#b9bec2',
  hemisphere: 1.1,
  sunColor: '#fff6e8',
  sun: 1.2,
  /** Compass bearing the key light comes from (degrees, 0 = from +z, the north street). */
  sunBearing: 35,
  /** Height of the key light above the horizon (degrees). */
  sunElevation: 55,
  lampColor: '#fff2dc',
  lamp: 6,
  /** Metres at which the lamp has faded to nothing (0 = never). */
  lampReach: 14,
  /** How fast the lamp fades with distance (2 = physically correct). */
  lampFalloff: 1.4,
  /** Lamp height above your eyes (metres). */
  lampAboveEyes: 0.6,
};

const toonLighting = { ...TOON_LIGHT_DEFAULTS };

export const createToonLights = (scene: THREE.Scene) => {
  const hemisphere = new THREE.HemisphereLight();
  const sun = new THREE.DirectionalLight();
  const lamp = new THREE.PointLight();
  scene.add(hemisphere, sun, sun.target, lamp);

  const applyToonLighting = () => {
    hemisphere.color.set(toonLighting.skyColor);
    hemisphere.groundColor.set(toonLighting.groundColor);
    hemisphere.intensity = toonLighting.hemisphere;
    sun.color.set(toonLighting.sunColor);
    sun.intensity = toonLighting.sun;
    lamp.color.set(toonLighting.lampColor);
    lamp.intensity = toonLighting.lamp;
    lamp.distance = toonLighting.lampReach;
    lamp.decay = toonLighting.lampFalloff;
  };
  applyToonLighting();

  const sunDirection = new THREE.Vector3();
  /** Per frame: the lamp rides above your head; the key light keeps its direction as you move. */
  const updateToonLights = (eye: THREE.Vector3) => {
    lamp.position.set(eye.x, eye.y + toonLighting.lampAboveEyes, eye.z);
    const bearing = THREE.MathUtils.degToRad(toonLighting.sunBearing);
    const elevation = THREE.MathUtils.degToRad(toonLighting.sunElevation);
    sunDirection.set(Math.sin(bearing) * Math.cos(elevation), Math.sin(elevation), Math.cos(bearing) * Math.cos(elevation));
    // a directional light shines from its position towards its target: keep both near you
    sun.target.position.copy(eye);
    sun.position.copy(eye).addScaledVector(sunDirection, 10);
  };

  addDebugControls((pane) => {
    const folder = pane.addFolder({ title: 'Toon lighting' });
    folder.addBinding(toonLighting, 'hemisphere', { label: 'sky/floor fill', min: 0, max: 4, step: 0.01 });
    folder.addBinding(toonLighting, 'skyColor', { label: 'fill from above' });
    folder.addBinding(toonLighting, 'groundColor', { label: 'fill from below' });
    folder.addBinding(toonLighting, 'sun', { label: 'key light', min: 0, max: 6, step: 0.01 });
    folder.addBinding(toonLighting, 'sunColor', { label: 'key colour' });
    folder.addBinding(toonLighting, 'sunBearing', { label: 'key bearing (°)', min: 0, max: 360, step: 1 });
    folder.addBinding(toonLighting, 'sunElevation', { label: 'key height (°)', min: -90, max: 90, step: 1 });
    folder.addBinding(toonLighting, 'lamp', { label: 'your lamp', min: 0, max: 60, step: 0.1 });
    folder.addBinding(toonLighting, 'lampColor', { label: 'lamp colour' });
    folder.addBinding(toonLighting, 'lampReach', { label: 'lamp reach (m)', min: 0, max: 60, step: 0.5 });
    folder.addBinding(toonLighting, 'lampFalloff', { label: 'lamp falloff', min: 0, max: 3, step: 0.05 });
    folder.addBinding(toonLighting, 'lampAboveEyes', { label: 'lamp above eyes (m)', min: -1, max: 2, step: 0.05 });
    folder.addButton({ title: 'Reset toon lighting' }).on('click', () => {
      Object.assign(toonLighting, TOON_LIGHT_DEFAULTS);
      applyToonLighting();
      pane.refresh();
    });
    folder.on('change', applyToonLighting);
  });

  return { updateToonLights };
};
