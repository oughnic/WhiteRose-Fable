import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { addDebugControls } from '../debug/debugPane';
import { createBoxGeometry } from '../look/roundedBoxes';
import { addWallDetail } from '../look/wallDetail';

/**
 * 1960s NHS palette and procedural materials, all standard (PBR) where lit.
 * Calm colours, washable finishes: flecked sheet vinyl polished to a mirror,
 * pale sage walls, white ceilings, oak protection rails, stainless lift.
 */

/** Flecked washable vinyl, 1 texture tile = 1 m (pair with scaleBoxUV). */
function makeVinylTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = '#89928b';
  ctx.fillRect(0, 0, 256, 256);
  // deterministic fleck pattern (no Math.random — stable across reloads)
  let seed = 42;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const tones = ['#9aa39b', '#78817a', '#a7ada3', '#6e766f', '#93856f'];
  for (let i = 0; i < 1400; i++) {
    ctx.fillStyle = tones[Math.floor(rnd() * tones.length)];
    ctx.globalAlpha = 0.35 + rnd() * 0.4;
    const s = 1 + rnd() * 2.6;
    ctx.fillRect(rnd() * 256, rnd() * 256, s, s);
  }
  ctx.globalAlpha = 1;
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

/** Suspended ceiling: 600 mm mineral-fibre tile grid (canvas = 1.2 m × 1.2 m). */
function makeCeilingTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = '#f5f6f3';
  ctx.fillRect(0, 0, 256, 256);
  let seed = 7;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  ctx.fillStyle = '#e8eae4';
  for (let i = 0; i < 600; i++) {
    ctx.globalAlpha = 0.35 + rnd() * 0.3;
    ctx.fillRect(rnd() * 256, rnd() * 256, 1.6, 1.6);
  }
  ctx.globalAlpha = 1;
  ctx.strokeStyle = '#cfd3cb';
  ctx.lineWidth = 3;
  for (const p of [0, 128, 256]) {
    ctx.beginPath();
    ctx.moveTo(p, 0);
    ctx.lineTo(p, 256);
    ctx.moveTo(0, p);
    ctx.lineTo(256, p);
    ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(1 / 1.2, 1 / 1.2); // with metre-true UVs: one canvas per 1.2 m
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

/** The finish of every lit surface but the floor: standard (PBR), matte, non-metal. */
export const SURFACE_ROUGHNESS = 0.8;
export const createMatteMaterial = (params: THREE.MeshStandardMaterialParameters) =>
  new THREE.MeshStandardMaterial({ roughness: SURFACE_ROUGHNESS, metalness: 0, ...params });

export const MATS = {
  /** Washable sheet vinyl, polished to a mirror finish (roughness 0 — owner choice, 13 Oct 2026). */
  floor: new THREE.MeshStandardMaterial({ map: makeVinylTexture(), roughness: 0, metalness: 0, userData: { floor: true } }),
  wall: createMatteMaterial({ color: 0xdde3d6 }), // pale sage, calm
  endWall: createMatteMaterial({ color: 0xb9c8bd }), // deeper feature wall
  ceiling: createMatteMaterial({ map: makeCeilingTexture() }),
  door: createMatteMaterial({ color: 0x8a9a80 }), // painted sage door
  liftDoor: createMatteMaterial({ color: 0xb7bfc6 }), // stainless
  stair: createMatteMaterial({ color: 0xb9c2bd }),
  stairDark: createMatteMaterial({ color: 0x3a4147 }),
  rail: createMatteMaterial({ color: 0x7f8b96 }),
  oak: createMatteMaterial({ color: 0x8a6a45 }), // trolley rail + skirting
  glass: createMatteMaterial({ color: 0x2f3a40 }), // door vision panels
  steel: createMatteMaterial({ color: 0xc3c9ce }), // push/kick plates
  led: new THREE.MeshBasicMaterial({ color: 0xf7f9ff }), // luminaires read as lit
  chair: createMatteMaterial({ color: 0x4e6e6a }), // utility-chair vinyl
  daylight: new THREE.MeshBasicMaterial({ color: 0xd8e6ee }), // window glazing glow
};
// barely-there relief on the painted walls (current look only)
addWallDetail(MATS.wall);
addWallDetail(MATS.endWall);

/** Finishes, bound to the debug panel (Surfaces folder). */
const surfaceFinish = { floorRoughness: 0, otherRoughness: SURFACE_ROUGHNESS };

/** Apply the finishes to every PBR material in the scene (floors are tagged userData.floor). */
const applySurfaceFinish = (scene: THREE.Scene) =>
  scene.traverse((obj) => {
    const mat = (obj as THREE.Mesh).material;
    for (const m of Array.isArray(mat) ? mat : mat ? [mat] : []) {
      if (m instanceof THREE.MeshStandardMaterial) {
        m.roughness = m.userData.floor ? surfaceFinish.floorRoughness : surfaceFinish.otherRoughness;
      }
    }
  });

/** Surfaces folder in the debug panel. */
export const addSurfaceControls = (scene: THREE.Scene) =>
  addDebugControls((pane) => {
    const folder = pane.addFolder({ title: 'Surfaces' });
    folder.addBinding(surfaceFinish, 'floorRoughness', { label: 'floor roughness', min: 0, max: 1, step: 0.01 });
    folder.addBinding(surfaceFinish, 'otherRoughness', { label: 'other roughness', min: 0, max: 1, step: 0.01 });
    folder.on('change', () => applySurfaceFinish(scene));
  });

/**
 * Rescale a box's UVs so 1 texture tile = 1 metre on every face
 * (boxes default to one tile per face regardless of size). Plain and rounded boxes
 * (createBoxGeometry) both list their faces in the same order, equal vertex counts each.
 */
export function scaleBoxUV(geo: THREE.BufferGeometry, w: number, h: number, d: number) {
  const uv = geo.attributes.uv as THREE.BufferAttribute;
  const faceVerts = uv.count / 6;
  // face order: +x −x (d×h), +y −y (w×d), +z −z (w×h)
  const scales: [number, number][] = [
    [d, h], [d, h],
    [w, d], [w, d],
    [w, h], [w, h],
  ];
  for (let f = 0; f < 6; f++) {
    const [su, sv] = scales[f];
    for (let v = 0; v < faceVerts; v++) {
      const i = f * faceVerts + v;
      uv.setXY(i, uv.getX(i) * su, uv.getY(i) * sv);
    }
  }
  uv.needsUpdate = true;
}

export interface BoxSpec {
  w: number;
  h: number;
  d: number;
  x: number;
  y: number;
  z: number;
  /** Optional rotation about x (radians) — sloping stair handrails. */
  rx?: number;
}

/** Merge many boxes into a single mesh (one draw call) — trims, LED panels, plates. */
export function mergeBoxMesh(specs: BoxSpec[], material: THREE.Material): THREE.Mesh | null {
  if (!specs.length) return null;
  const geos = specs.map((s) => {
    const g = createBoxGeometry(s.w, s.h, s.d);
    if (s.rx) g.rotateX(s.rx);
    g.translate(s.x, s.y, s.z);
    return g;
  });
  const merged = mergeGeometries(geos);
  geos.forEach((g) => g.dispose());
  const mesh = new THREE.Mesh(merged, material);
  mesh.matrixAutoUpdate = false;
  return mesh;
}

/** 6-inch oak protection: skirting at the floor and a trolley rail at 0.95 m. */
export const TRIM = {
  skirtH: 0.152, // 6 inches
  railH: 0.152,
  railCentre: 0.95, // trolley-bed height
  proud: 0.05,
};
