/// <reference types="vite/client" />
import * as THREE from 'three';

/** One world-space box an area builder placed: walls, headers, trims, plates, the lot. */
export interface LoggedBox {
  box: THREE.Box3;
  mat: THREE.Material;
  area: string;
}

/**
 * Only dev servers and `?audit` runs keep the log: ~100k boxes is memory a phone in
 * production can't spare, and only the debug audits (__hospital.signAudit / zfight) read it.
 */
export const BOX_LOG_ON = import.meta.env.DEV || new URLSearchParams(location.search).has('audit');

export const boxLog: LoggedBox[] = [];

export const logBox = (box: THREE.Box3, mat: THREE.Material, area: string) => {
  if (BOX_LOG_ON) boxLog.push({ box, mat, area });
};

const CELL = 4; // spatial hash cell (m) on x/z
const cellKey = (i: number, k: number) => `${i},${k}`;
let grid: Map<string, LoggedBox[]> | null = null;

/** The log hashed on x/z (built on first use — the world is static once built). */
const boxGrid = () => {
  if (grid) return grid;
  grid = new Map();
  for (const lb of boxLog) {
    for (let i = Math.floor(lb.box.min.x / CELL); i <= Math.floor(lb.box.max.x / CELL); i++) {
      for (let k = Math.floor(lb.box.min.z / CELL); k <= Math.floor(lb.box.max.z / CELL); k++) {
        const key = cellKey(i, k);
        const list = grid.get(key);
        if (list) list.push(lb);
        else grid.set(key, [lb]);
      }
    }
  }
  return grid;
};

/** Logged boxes whose x/z cells touch `region`. */
export const boxesNear = (region: THREE.Box3) => {
  const cells = boxGrid();
  const found = new Set<LoggedBox>();
  for (let i = Math.floor(region.min.x / CELL); i <= Math.floor(region.max.x / CELL); i++) {
    for (let k = Math.floor(region.min.z / CELL); k <= Math.floor(region.max.z / CELL); k++) {
      for (const lb of cells.get(cellKey(i, k)) ?? []) found.add(lb);
    }
  }
  return found;
};

/** Is the point buried inside an opaque logged box (so nothing there can be seen)? */
export const isInsideOpaqueBox = (p: THREE.Vector3) => {
  const probe = new THREE.Box3(p, p);
  for (const lb of boxesNear(probe)) {
    if (!lb.mat.transparent && lb.box.containsPoint(p)) return true;
  }
  return false;
};

export const describeLoggedBox = (lb: LoggedBox) => {
  const color = (lb.mat as THREE.MeshBasicMaterial).color;
  const type = lb.mat.type.replace(/^Mesh/, '').replace(/Material$/, '');
  return `${type}${color ? ` #${color.getHexString()}` : ''} (${lb.area.replace(/^area:/, '')})`;
};

/** Every logged box within `r` of a point, with its extents (__hospital.boxesAt). */
export const boxesAround = (x: number, y: number, z: number, r = 0.05) => {
  const region = new THREE.Box3().setFromCenterAndSize(new THREE.Vector3(x, y, z), new THREE.Vector3(r * 2, r * 2, r * 2));
  const round = (v: THREE.Vector3) => [+v.x.toFixed(3), +v.y.toFixed(3), +v.z.toFixed(3)];
  return [...boxesNear(region)]
    .filter((lb) => lb.box.intersectsBox(region))
    .map((lb) => ({ what: describeLoggedBox(lb), min: round(lb.box.min), max: round(lb.box.max) }));
};
