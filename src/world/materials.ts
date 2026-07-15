import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/**
 * 1960s NHS palette and procedural materials.
 * Calm colours, washable finishes: flecked sheet vinyl with a subtle sheen,
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

export const MATS = {
  /** Washable sheet vinyl with welded seams and a subtle sheen. */
  floor: new THREE.MeshPhongMaterial({
    map: makeVinylTexture(),
    shininess: 60,
    specular: new THREE.Color(0x2e2e2e),
  }),
  wall: new THREE.MeshLambertMaterial({ color: 0xdde3d6 }), // pale sage, calm
  endWall: new THREE.MeshLambertMaterial({ color: 0xb9c8bd }), // deeper feature wall
  ceiling: new THREE.MeshLambertMaterial({ map: makeCeilingTexture() }),
  door: new THREE.MeshLambertMaterial({ color: 0x8a9a80 }), // painted sage door
  liftDoor: new THREE.MeshLambertMaterial({ color: 0xb7bfc6 }), // stainless
  stair: new THREE.MeshLambertMaterial({ color: 0xb9c2bd }),
  stairDark: new THREE.MeshLambertMaterial({ color: 0x3a4147 }),
  rail: new THREE.MeshLambertMaterial({ color: 0x7f8b96 }),
  oak: new THREE.MeshLambertMaterial({ color: 0x8a6a45 }), // trolley rail + skirting
  glass: new THREE.MeshLambertMaterial({ color: 0x2f3a40 }), // door vision panels
  steel: new THREE.MeshLambertMaterial({ color: 0xc3c9ce }), // push/kick plates
  led: new THREE.MeshBasicMaterial({ color: 0xf7f9ff }), // luminaires read as lit
  chair: new THREE.MeshLambertMaterial({ color: 0x4e6e6a }), // utility-chair vinyl
  daylight: new THREE.MeshBasicMaterial({ color: 0xd8e6ee }), // window glazing glow
};

/**
 * Rescale a BoxGeometry's UVs so 1 texture tile = 1 metre on every face
 * (BoxGeometry defaults to one tile per face regardless of size).
 */
export function scaleBoxUV(geo: THREE.BoxGeometry, w: number, h: number, d: number) {
  const uv = geo.attributes.uv as THREE.BufferAttribute;
  // face order: +x −x (d×h), +y −y (w×d), +z −z (w×h); 4 verts each
  const scales: [number, number][] = [
    [d, h], [d, h],
    [w, d], [w, d],
    [w, h], [w, h],
  ];
  for (let f = 0; f < 6; f++) {
    const [su, sv] = scales[f];
    for (let v = 0; v < 4; v++) {
      const i = f * 4 + v;
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
    const g = new THREE.BoxGeometry(s.w, s.h, s.d);
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
