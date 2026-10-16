import * as THREE from 'three';
import { addDebugControls } from '../debug/debugPane';
import { ACTIVE_LOOK } from './lookMode';

/**
 * The look's materials. The world is built with standard (PBR) materials; in the toon and
 * sketch looks every one of them is swapped, as it enters the scene, for its look twin:
 *
 * - toon: MeshToonMaterial — light falls in a few hard bands (Toon materials folder).
 * - sketch: MeshBasicMaterial — flat, unlit colour patches: the "shade map" the sketchy
 *   post-process wobbles under its lines.
 *
 * A twin shares its source's colour object, texture and vertex colours, so anything that
 * recolours the source at run time (the theatre's house lights) recolours the twin too.
 * Basic materials (signs, LED panels, glazing glow) are already flat and stay as they are.
 */

/** Toon tunables, bound to the debug panel (Toon materials folder). */
const toonSettings = {
  /** How many tones the light falls into, darkest to brightest. */
  bands: 3,
  /** Brightness of the darkest band (0 black … 1 no shading at all). */
  shadowTone: 0.45,
};

/** The toon ramp: `bands` hard steps from shadowTone up to full light (nearest-filtered). */
const createToonGradient = () => {
  const bands = Math.max(2, Math.round(toonSettings.bands));
  const data = new Uint8Array(bands * 4);
  for (let i = 0; i < bands; i++) {
    const tone = Math.round(255 * THREE.MathUtils.lerp(toonSettings.shadowTone, 1, i / (bands - 1)));
    data.set([tone, tone, tone, 255], i * 4);
  }
  const gradient = new THREE.DataTexture(data, bands, 1, THREE.RGBAFormat);
  gradient.minFilter = gradient.magFilter = THREE.NearestFilter;
  gradient.generateMipmaps = false;
  gradient.needsUpdate = true;
  return gradient;
};

let toonGradient: THREE.DataTexture | null = ACTIVE_LOOK === 'toon' ? createToonGradient() : null;
const toonMaterials: THREE.MeshToonMaterial[] = [];

/** Standard material → its twin for the active look (one twin per source, shared by every mesh). */
const twins = new Map<THREE.Material, THREE.Material>();

const createTwin = (source: THREE.MeshStandardMaterial): THREE.Material => {
  const shared = {
    name: source.name,
    map: source.map,
    vertexColors: source.vertexColors,
    transparent: source.transparent,
    opacity: source.opacity,
    side: source.side,
    alphaTest: source.alphaTest,
    depthWrite: source.depthWrite,
    polygonOffset: source.polygonOffset,
    polygonOffsetFactor: source.polygonOffsetFactor,
    polygonOffsetUnits: source.polygonOffsetUnits,
    userData: source.userData,
  };
  const twin =
    ACTIVE_LOOK === 'toon'
      ? new THREE.MeshToonMaterial({ ...shared, gradientMap: toonGradient, emissive: source.emissive, emissiveMap: source.emissiveMap })
      : new THREE.MeshBasicMaterial(shared);
  // the same Color object, not a copy: run-time recolouring reaches the twin
  twin.color = source.color;
  if (twin instanceof THREE.MeshToonMaterial) toonMaterials.push(twin);
  return twin;
};

const twinOf = (material: THREE.Material) => {
  if (!(material instanceof THREE.MeshStandardMaterial)) return material;
  let twin = twins.get(material);
  if (!twin) twins.set(material, (twin = createTwin(material)));
  return twin;
};

const swapMaterials = (root: THREE.Object3D) =>
  root.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    if (!mesh.isMesh) return;
    mesh.material = Array.isArray(mesh.material) ? mesh.material.map(twinOf) : twinOf(mesh.material);
  });

/**
 * Give everything in the scene its look's materials — now, and whenever something is added
 * later (walkers, the swinging door leaf). No-op in the current look.
 */
export const applyLookMaterials = (scene: THREE.Scene) => {
  if (ACTIVE_LOOK === 'current') return;
  swapMaterials(scene);
  scene.addEventListener('childadded', ({ child }) => swapMaterials(child));
};

/** Rebuild the ramp and hand it to every toon material (same texture type: no recompile). */
const applyToonGradient = () => {
  const previous = toonGradient;
  toonGradient = createToonGradient();
  for (const m of toonMaterials) m.gradientMap = toonGradient;
  previous?.dispose();
};

/** Toon materials folder in the debug panel (toon look only). */
export const addLookMaterialControls = () => {
  if (ACTIVE_LOOK !== 'toon') return;
  addDebugControls((pane) => {
    const folder = pane.addFolder({ title: 'Toon materials' });
    folder.addBinding(toonSettings, 'bands', { label: 'light bands', min: 2, max: 8, step: 1 });
    folder.addBinding(toonSettings, 'shadowTone', { label: 'darkest band', min: 0, max: 1, step: 0.01 });
    folder.on('change', applyToonGradient);
  });
};
