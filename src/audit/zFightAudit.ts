import * as THREE from 'three';
import { isInsideOpaqueBox, BOX_LOG_ON } from './boxRegistry';

/** One axis-aligned face (a quad's two triangles collapse to one rect) in world space. */
interface FaceRect {
  axis: 0 | 1 | 2;
  dir: 1 | -1;
  offset: number;
  mm: number;
  u0: number;
  v0: number;
  u1: number;
  v1: number;
  /** What draws it: the material for merged batches, the mesh itself for signs. */
  drawKey: string;
  /** Short kind for clustering (`doorsign`, `Standard #dde3d6`). */
  kind: string;
  /** Full name for the report (`doorsign:has part:1`). */
  label: string;
  area: string;
  /** polygonOffset units, when the material uses one (null otherwise). */
  offsetUnits: number | null;
}

export interface ZFightCluster {
  materials: [string, string];
  /** Which way the fighting faces point (`+x`, `-y`…). */
  normal: string;
  examples: string[];
  area: string;
  areas: number;
  worldPos: { x: number; y: number; z: number };
  overlapArea: number;
  pairs: number;
  /** Overlaps with an opaque box right in front of them: buried, never seen. */
  hiddenPairs: number;
}

const PLANE_TOLERANCE = 0.003; // faces within 3 mm of each other fight
const MIN_SIDE = 0.005; // ignore slivers where faces merely touch

const IN_PLANE: Record<0 | 1 | 2, [number, number]> = { 0: [1, 2], 1: [0, 2], 2: [0, 1] };
const AXIS_NAME = ['x', 'y', 'z'];
const PROBE_DEPTH = 0.01; // 1 cm in front of the faces

/** Buried faces can't flicker: probe the overlap's centre and inset corners just in front. */
const isBuried = (p: FaceRect, u0: number, u1: number, v0: number, v1: number) => {
  if (!BOX_LOG_ON) return false;
  const [ui, vi] = IN_PLANE[p.axis];
  const du = (u1 - u0) / 4;
  const dv = (v1 - v0) / 4;
  const probe = new THREE.Vector3();
  probe.setComponent(p.axis, p.offset + p.dir * PROBE_DEPTH);
  for (const [u, v] of [
    [(u0 + u1) / 2, (v0 + v1) / 2],
    [u0 + du, v0 + dv],
    [u1 - du, v0 + dv],
    [u0 + du, v1 - dv],
    [u1 - du, v1 - dv],
  ]) {
    probe.setComponent(ui, u);
    probe.setComponent(vi, v);
    if (!isInsideOpaqueBox(probe)) return false;
  }
  return true;
};

const describeMaterial = (mat: THREE.Material) => {
  const color = (mat as THREE.MeshBasicMaterial).color;
  const type = mat.type.replace(/^Mesh/, '').replace(/Material$/, '');
  return color ? `${type} #${color.getHexString()}` : type;
};

const areaNameOf = (obj: THREE.Object3D) => {
  for (let o: THREE.Object3D | null = obj; o; o = o.parent) {
    if (o.name.startsWith('area:')) return o.name.slice(5);
  }
  return '(scene)';
};

const collectFaceRects = (scene: THREE.Object3D): FaceRect[] => {
  const rects: FaceRect[] = [];
  const a = new THREE.Vector3();
  const b = new THREE.Vector3();
  const c = new THREE.Vector3();
  const ab = new THREE.Vector3();
  const ac = new THREE.Vector3();
  scene.updateMatrixWorld(true);
  scene.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    if (!mesh.isMesh || Array.isArray(mesh.material)) return;
    const mat = mesh.material;
    if (mat.vertexColors) return; // people: moving, rounded, never flat against a wall
    const pos = mesh.geometry.getAttribute('position');
    if (!pos) return;
    const index = mesh.geometry.getIndex();
    const triCount = Math.floor((index ? index.count : pos.count) / 3);
    const drawKey = mesh.name ? `mesh:${mesh.uuid}` : `mat:${mat.uuid}`;
    const kind = mesh.name ? mesh.name.split(':')[0] : describeMaterial(mat);
    const label = mesh.name || describeMaterial(mat);
    const area = areaNameOf(mesh);
    const offsetUnits = mat.polygonOffset ? mat.polygonOffsetUnits : null;
    const seen = new Set<string>();
    for (let t = 0; t < triCount; t++) {
      const i0 = index ? index.getX(t * 3) : t * 3;
      const i1 = index ? index.getX(t * 3 + 1) : t * 3 + 1;
      const i2 = index ? index.getX(t * 3 + 2) : t * 3 + 2;
      a.fromBufferAttribute(pos, i0).applyMatrix4(mesh.matrixWorld);
      b.fromBufferAttribute(pos, i1).applyMatrix4(mesh.matrixWorld);
      c.fromBufferAttribute(pos, i2).applyMatrix4(mesh.matrixWorld);
      const n = ab.subVectors(b, a).cross(ac.subVectors(c, a));
      const len = n.length();
      if (len < 1e-10) continue;
      n.divideScalar(len);
      const axis = Math.abs(n.x) > 0.999 ? 0 : Math.abs(n.y) > 0.999 ? 1 : Math.abs(n.z) > 0.999 ? 2 : -1;
      if (axis < 0) continue;
      const [ui, vi] = IN_PLANE[axis];
      const offset = (a.getComponent(axis) + b.getComponent(axis) + c.getComponent(axis)) / 3;
      const u0 = Math.min(a.getComponent(ui), b.getComponent(ui), c.getComponent(ui));
      const u1 = Math.max(a.getComponent(ui), b.getComponent(ui), c.getComponent(ui));
      const v0 = Math.min(a.getComponent(vi), b.getComponent(vi), c.getComponent(vi));
      const v1 = Math.max(a.getComponent(vi), b.getComponent(vi), c.getComponent(vi));
      const dir = n.getComponent(axis) > 0 ? 1 : -1;
      const id = [axis, dir, offset, u0, u1, v0, v1].map((x) => x.toFixed(4)).join();
      if (seen.has(id)) continue;
      seen.add(id);
      rects.push({ axis, dir, offset, mm: Math.round(offset * 1000), u0, v0, u1, v1, drawKey, kind, label, area, offsetUnits });
    }
  });
  return rects;
};

/**
 * Coplanar-face detector (__hospital.zfight()): every pair of axis-aligned faces that
 * face the same way, sit within 3 mm of each other, overlap, and are drawn by DIFFERENT
 * materials — same-material overlaps render identically, so they can't flicker.
 * Clustered by the pair of material kinds and the facing; worldPos is the biggest single
 * visible overlap. Overlaps buried behind an opaque box are counted (hiddenPairs) but
 * only listed with `includeBuried`.
 */
export const findZFighting = (scene: THREE.Object3D, includeBuried = false): ZFightCluster[] => {
  const rects = collectFaceRects(scene);
  const buckets = new Map<string, FaceRect[]>();
  for (const r of rects) {
    const key = `${r.axis}${r.dir}:${r.mm}`;
    const list = buckets.get(key);
    if (list) list.push(r);
    else buckets.set(key, [r]);
  }
  const clusters = new Map<string, ZFightCluster & { best: number; areaSet: Set<string> }>();
  const record = (p: FaceRect, q: FaceRect, ou: number, ov: number) => {
    const [x, y] = [p, q].sort((m, n) => (m.kind < n.kind ? -1 : 1));
    const normal = `${p.dir > 0 ? '+' : '-'}${AXIS_NAME[p.axis]}`;
    const key = `${x.kind}|${y.kind}|${normal}`;
    const area = ou * ov;
    const [u0, u1] = [Math.max(p.u0, q.u0), Math.min(p.u1, q.u1)];
    const [v0, v1] = [Math.max(p.v0, q.v0), Math.min(p.v1, q.v1)];
    const [ui, vi] = IN_PLANE[p.axis];
    const centre = new THREE.Vector3();
    centre.setComponent(p.axis, (p.offset + q.offset) / 2);
    centre.setComponent(ui, (u0 + u1) / 2);
    centre.setComponent(vi, (v0 + v1) / 2);
    let cl = clusters.get(key);
    if (!cl) {
      cl = { materials: [x.kind, y.kind], normal, examples: [], area: p.area, areas: 0, worldPos: { x: 0, y: 0, z: 0 }, overlapArea: 0, pairs: 0, hiddenPairs: 0, best: 0, areaSet: new Set() };
      clusters.set(key, cl);
    }
    if (isBuried(p, u0, u1, v0, v1)) {
      cl.hiddenPairs++;
      return;
    }
    cl.pairs++;
    cl.overlapArea += area;
    cl.areaSet.add(p.area);
    if (cl.examples.length < 3) cl.examples.push(`${x.label} × ${y.label} @ ${p.area}`);
    if (area > cl.best) {
      cl.best = area;
      cl.area = p.area;
      cl.worldPos = { x: +centre.x.toFixed(3), y: +centre.y.toFixed(3), z: +centre.z.toFixed(3) };
    }
  };
  for (const [key, own] of buckets) {
    const [head, mmText] = key.split(':');
    const mm = Number(mmText);
    const candidates = [...own];
    for (let k = 1; k <= PLANE_TOLERANCE * 1000; k++) candidates.push(...(buckets.get(`${head}:${mm + k}`) ?? []));
    candidates.sort((p, q) => p.u0 - q.u0);
    for (let i = 0; i < candidates.length; i++) {
      const p = candidates[i];
      for (let j = i + 1; j < candidates.length && candidates[j].u0 < p.u1 - MIN_SIDE; j++) {
        const q = candidates[j];
        // each pair is counted once: in the sweep of its lower bucket
        if (p.mm !== mm && q.mm !== mm) continue;
        if (p.drawKey === q.drawKey) continue;
        // distinct depth offsets (the wayfinding lines) decide the winner: no flicker
        if (p.offsetUnits !== null && q.offsetUnits !== null && p.offsetUnits !== q.offsetUnits) continue;
        if (Math.abs(p.offset - q.offset) > PLANE_TOLERANCE) continue;
        const ou = Math.min(p.u1, q.u1) - Math.max(p.u0, q.u0);
        const ov = Math.min(p.v1, q.v1) - Math.max(p.v0, q.v0);
        if (ou > MIN_SIDE && ov > MIN_SIDE) record(p, q, ou, ov);
      }
    }
  }
  return [...clusters.values()]
    .map((cl) => ({
      materials: cl.materials,
      normal: cl.normal,
      examples: cl.examples,
      area: cl.area,
      areas: cl.areaSet.size,
      worldPos: cl.worldPos,
      overlapArea: +cl.overlapArea.toFixed(4),
      pairs: cl.pairs,
      hiddenPairs: cl.hiddenPairs,
    }))
    .filter((cl) => includeBuried || cl.pairs > 0)
    .sort((p, q) => q.overlapArea - p.overlapArea);
};
