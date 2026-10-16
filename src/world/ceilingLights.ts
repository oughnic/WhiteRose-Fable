import * as THREE from 'three';
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js';

/**
 * The ceiling LED panels as real lights: RectAreaLights the size of the panels.
 *
 * There are well over a thousand panels, and every light costs shading work on every lit
 * pixel, so a fixed pool of lights follows you — always on the panels nearest you on your
 * storey. A light fades out as its panel drops towards the edge of the pool, so the hand-over
 * never pops. The pool size stays constant (spare lights sit at zero), because a changing
 * light count recompiles every shader.
 *
 * RectAreaLight only lights standard (PBR) materials — which every lit surface now is.
 */

export interface CeilingPanel {
  /** World-space centre of the panel's lit (bottom) face. */
  center: THREE.Vector3;
  /** Size along world x and world z. */
  width: number;
  depth: number;
}

/** Every ceiling LED panel in the hospital, registered by AreaKit.led() as areas are built. */
export const CEILING_PANELS: CeilingPanel[] = [];

/** The last metres before the pool's edge, over which a light fades to nothing. */
const FADE_M = 3;
/** Panels this far above your feet are on your storey (rooms are 3 m, the street 4 m). */
const STOREY_REACH_M = 4.5;
const PANEL_WHITE = 0xf7f9ff; // the LED material's colour

export const createCeilingLights = (scene: THREE.Scene) => {
  RectAreaLightUniformsLib.init();
  const pool: THREE.RectAreaLight[] = [];
  let brightness = 0;

  /** Pool size and panel brightness (luminance). Brightness 0 removes the lights altogether. */
  const configureCeilingLights = (count: number, panelBrightness: number) => {
    brightness = panelBrightness;
    const wanted = panelBrightness > 0 ? count : 0;
    while (pool.length < wanted) {
      const light = new THREE.RectAreaLight(PANEL_WHITE, 0, 1, 1);
      light.rotation.x = -Math.PI / 2; // facing straight down
      scene.add(light);
      pool.push(light);
    }
    while (pool.length > wanted) pool.pop()!.removeFromParent();
  };

  /** Move the pool onto the panels nearest the eye, on the storey your feet are on. */
  const updateCeilingLights = (eye: THREE.Vector3, feetY: number) => {
    if (!pool.length) return;
    const nearby = CEILING_PANELS.filter((p) => p.center.y > feetY && p.center.y < feetY + STOREY_REACH_M)
      .map((panel) => ({ panel, distance: panel.center.distanceTo(eye) }))
      .sort((a, b) => a.distance - b.distance);
    // the first panel left out of the pool: lights fade to zero as they near its distance
    const poolEdge = nearby[pool.length]?.distance ?? Infinity;
    pool.forEach((light, i) => {
      const near = nearby[i];
      if (!near) {
        light.intensity = 0;
        return;
      }
      light.position.copy(near.panel.center);
      light.width = near.panel.width;
      light.height = near.panel.depth;
      light.intensity = brightness * THREE.MathUtils.clamp((poolEdge - near.distance) / FADE_M, 0, 1);
    });
  };

  return { configureCeilingLights, updateCeilingLights };
};
