import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { addDebugControls } from '../debug/debugPane';
import { ACTIVE_LOOK, reloadWithLook, type LookPose } from './lookMode';

/**
 * Every box in the hospital comes from createBoxGeometry: a plain box, or — in the toon
 * look — a box with rounded edges and corners (no hard angles anywhere).
 *
 * The corners are baked into the merged meshes as the hospital is built, so the settings
 * are saved and take effect on the next load ("Rebuild" in the Toon shapes folder).
 * A rounded box costs far more triangles than a plain one (108 at 1 segment, 300 at 2,
 * against 12), which is why the segment count is exposed.
 */

const CORNER_STORAGE_KEY = 'whiterose.toonCorners';
const CORNER_DEFAULTS = { radius: 0.06, segments: 2 };

const loadCornerSettings = (): typeof CORNER_DEFAULTS => {
  try {
    return { ...CORNER_DEFAULTS, ...JSON.parse(localStorage.getItem(CORNER_STORAGE_KEY) ?? '{}') };
  } catch {
    return { ...CORNER_DEFAULTS };
  }
};

/** Rounding used by this page load (the panel edits a copy, applied on rebuild). */
const cornerSettings = loadCornerSettings();
const ROUNDED = ACTIVE_LOOK === 'toon' && cornerSettings.radius > 0 && cornerSettings.segments > 0;

/** A w × h × d box centred on the origin; rounded in the toon look (radius capped at half the thinnest side). */
export const createBoxGeometry = (w: number, h: number, d: number): THREE.BufferGeometry =>
  ROUNDED ? new RoundedBoxGeometry(w, h, d, cornerSettings.segments, cornerSettings.radius) : new THREE.BoxGeometry(w, h, d);

/** Toon shapes folder: corner radius and smoothness, applied by reloading where you stand. */
export const addRoundedBoxControls = (getPose: () => LookPose) => {
  if (ACTIVE_LOOK !== 'toon') return;
  addDebugControls((pane) => {
    const folder = pane.addFolder({ title: 'Toon shapes' });
    const edited = { ...cornerSettings };
    folder.addBinding(edited, 'radius', { label: 'corner radius (m)', min: 0, max: 0.3, step: 0.005 });
    folder.addBinding(edited, 'segments', { label: 'corner smoothness', min: 1, max: 6, step: 1 });
    folder.addButton({ title: 'Rebuild with these corners' }).on('click', () => {
      localStorage.setItem(CORNER_STORAGE_KEY, JSON.stringify(edited));
      reloadWithLook(ACTIVE_LOOK, getPose());
    });
  });
};
