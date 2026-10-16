import { addDebugControls } from '../debug/debugPane';

/**
 * A/B test of the hospital's look, picked from the debug panel (Look A/B folder).
 *
 * - current: the shipping look — standard (PBR) materials, RectAreaLight ceiling panels.
 * - toon: toon materials, rounded boxes, a screen-space outline, and hemisphere +
 *   directional light + a point light that walks with you.
 * - sketch: flat (basic) colours under a "sketchy drawing" post-process — edges and colour
 *   patches pushed apart by noise (Nienhaus & Döllner, GPU Gems 2 ch. 15) — with a
 *   blueprint minimap.
 *
 * The look is fixed for a page load: the rounded boxes are baked into the merged meshes as
 * the hospital is built. Changing it saves where you stand and reloads; you come back to the
 * same spot. `?look=toon` in the URL overrides the saved choice.
 */

export const LOOK_NAMES = ['current', 'toon', 'sketch'] as const;
export type LookName = (typeof LOOK_NAMES)[number];

const LOOK_STORAGE_KEY = 'whiterose.look';
const POSE_STORAGE_KEY = 'whiterose.lookPose';

const isLookName = (value: string | null): value is LookName => LOOK_NAMES.includes(value as LookName);

const resolveActiveLook = (): LookName => {
  const fromUrl = new URLSearchParams(location.search).get('look');
  if (isLookName(fromUrl)) return fromUrl;
  const saved = localStorage.getItem(LOOK_STORAGE_KEY);
  return isLookName(saved) ? saved : 'current';
};

/** The look this page load was built with. */
export const ACTIVE_LOOK: LookName = resolveActiveLook();

/** Where you stood when the look changed: restored after the reload. */
export interface LookPose {
  x: number;
  y: number;
  z: number;
  yaw: number;
  pitch: number;
}

/** Save the pose and reload with the page built for `look`. */
export const reloadWithLook = (look: LookName, pose: LookPose) => {
  localStorage.setItem(LOOK_STORAGE_KEY, look);
  sessionStorage.setItem(POSE_STORAGE_KEY, JSON.stringify(pose));
  // a ?look= in the URL would win over the saved choice: drop it
  const url = new URL(location.href);
  url.searchParams.delete('look');
  location.replace(url.href);
};

/** The pose saved by the last look change, once (it is cleared as it is read). */
export const takeSavedLookPose = (): LookPose | null => {
  const saved = sessionStorage.getItem(POSE_STORAGE_KEY);
  sessionStorage.removeItem(POSE_STORAGE_KEY);
  return saved ? (JSON.parse(saved) as LookPose) : null;
};

/** Look A/B folder: the select (reloads into the chosen look where you stand). */
export const addLookControls = (getPose: () => LookPose) =>
  addDebugControls((pane) => {
    const folder = pane.addFolder({ title: 'Look A/B' });
    const choice = { look: ACTIVE_LOOK };
    folder
      .addBinding(choice, 'look', {
        label: 'look (reloads)',
        options: { 'current (PBR)': 'current', 'toon + outline': 'toon', 'sketchy drawing': 'sketch' },
      })
      .on('change', (ev) => {
        if (ev.value !== ACTIVE_LOOK) reloadWithLook(ev.value as LookName, getPose());
      });
  });
