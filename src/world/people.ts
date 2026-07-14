import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/**
 * Low-poly 1960s NHS people: nurses, doctors, porters, sisters and patients.
 * Seated figures merge into one static mesh per area (one draw call);
 * walkers are small articulated groups (~7 meshes) sharing one material.
 */

/** One material for every person — vertex colours carry the outfits. */
export const MAT_PEOPLE = new THREE.MeshLambertMaterial({ vertexColors: true });

const SKIN = ['#c98d64', '#8d5a3c', '#e3b498', '#6b4a30', '#d9a37e'];
const HAIR = ['#2e2620', '#5b4632', '#8c8c8c', '#d9d3c5', '#141414'];

interface Outfit {
  top: string;
  legs: string;
  /** White for the nurse/sister cap; otherwise a hair colour is chosen. */
  cap?: string;
}

/** Role mix: mostly patients and nurses, the odd doctor, porter and sister. */
function outfitFor(rnd: () => number): Outfit {
  const r = rnd();
  if (r < 0.25) return { top: '#f2f3ef', legs: '#f2f3ef', cap: '#ffffff' }; // nurse
  if (r < 0.31) return { top: '#20375c', legs: '#20375c', cap: '#ffffff' }; // sister
  if (r < 0.43) return { top: '#eeefe9', legs: '#565b62' }; // doctor, white coat
  if (r < 0.55) return { top: '#68727d', legs: '#4c5257' }; // porter
  const tops = ['#7a8f6a', '#c0a052', '#7c5866', '#5f7484', '#96694f'];
  const legs = ['#55504a', '#3f464d', '#6a5d4f', '#44403a'];
  return { top: tops[Math.floor(rnd() * tops.length)], legs: legs[Math.floor(rnd() * legs.length)] };
}

export function personRng(seed: number) {
  let s = (seed % 2147483646) + 1;
  // warm up: small seeds otherwise bias the first draws low
  for (let i = 0; i < 3; i++) s = (s * 16807) % 2147483647;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

/** A box with a solid vertex colour, translated into place. */
function colorBox(w: number, h: number, d: number, x: number, y: number, z: number, color: string): THREE.BufferGeometry {
  const g = new THREE.BoxGeometry(w, h, d);
  g.translate(x, y, z);
  const c = new THREE.Color(color);
  const n = g.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    arr[i * 3] = c.r;
    arr[i * 3 + 1] = c.g;
    arr[i * 3 + 2] = c.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return g;
}

function headBoxes(rnd: () => number, o: Outfit, y: number, z: number): THREE.BufferGeometry[] {
  const skin = SKIN[Math.floor(rnd() * SKIN.length)];
  const hair = o.cap ?? HAIR[Math.floor(rnd() * HAIR.length)];
  const parts = [colorBox(0.2, 0.22, 0.2, 0, y, z, skin), colorBox(0.21, 0.08, 0.21, 0, y + 0.15, z - 0.01, hair)];
  if (o.cap) parts.push(colorBox(0.24, 0.03, 0.24, 0, y + 0.2, z - 0.01, o.cap)); // cap brim
  return parts;
}

/** A seated figure, facing +z, feet on y=0, bum at seat height ≈0.48. */
export function seatedPersonGeometry(seed: number): THREE.BufferGeometry {
  const rnd = personRng(seed);
  const o = outfitFor(rnd);
  const parts = [
    colorBox(0.09, 0.44, 0.11, -0.09, 0.22, 0.17, o.legs), // shins
    colorBox(0.09, 0.44, 0.11, 0.09, 0.22, 0.17, o.legs),
    colorBox(0.1, 0.13, 0.4, -0.09, 0.5, 0.03, o.legs), // thighs, forward
    colorBox(0.1, 0.13, 0.4, 0.09, 0.5, 0.03, o.legs),
    colorBox(0.32, 0.52, 0.2, 0, 0.82, -0.08, o.top), // torso
    colorBox(0.08, 0.4, 0.1, -0.21, 0.86, -0.05, o.top), // arms
    colorBox(0.08, 0.4, 0.1, 0.21, 0.86, -0.05, o.top),
    ...headBoxes(rnd, o, 1.2, -0.06),
  ];
  const merged = mergeGeometries(parts);
  parts.forEach((p) => p.dispose());
  return merged;
}

/** A standing figure, facing +z, feet on y=0 (receptionists etc.). */
export function standingPersonGeometry(seed: number): THREE.BufferGeometry {
  const rnd = personRng(seed);
  const o = outfitFor(rnd);
  const parts = [
    colorBox(0.1, 0.78, 0.12, -0.09, 0.39, 0, o.legs),
    colorBox(0.1, 0.78, 0.12, 0.09, 0.39, 0, o.legs),
    colorBox(0.32, 0.52, 0.2, 0, 1.04, 0, o.top),
    colorBox(0.08, 0.52, 0.1, -0.21, 1.0, 0, o.top),
    colorBox(0.08, 0.52, 0.1, 0.21, 1.0, 0, o.top),
    ...headBoxes(rnd, o, 1.42, 0),
  ];
  const merged = mergeGeometries(parts);
  parts.forEach((p) => p.dispose());
  return merged;
}

/**
 * A walking figure patrolling a straight segment, turning at the ends.
 * ~7 meshes sharing MAT_PEOPLE; call update(dt) only while visible.
 */
export class Walker {
  readonly group = new THREE.Group();
  private legL: THREE.Mesh;
  private legR: THREE.Mesh;
  private armL: THREE.Mesh;
  private armR: THREE.Mesh;
  private s: number;
  private dir = 1;
  private pause = 0;
  private phase = 0;
  private readonly len: number;
  private readonly speed: number;

  constructor(
    private a: THREE.Vector3,
    private b: THREE.Vector3,
    seed: number
  ) {
    const rnd = personRng(seed);
    const o = outfitFor(rnd);
    this.len = a.distanceTo(b);
    this.speed = 1.0 + rnd() * 0.5;
    this.s = rnd() * this.len;
    this.dir = rnd() < 0.5 ? 1 : -1;

    // limb geometries are authored hanging below their pivot (origin),
    // so rotating the mesh swings them from the hip/shoulder
    const limb = (geo: THREE.BufferGeometry, x: number, pivotY: number) => {
      const m = new THREE.Mesh(geo, MAT_PEOPLE);
      m.position.set(x, pivotY, 0);
      this.group.add(m);
      return m;
    };
    const legGeo = () => colorBox(0.1, 0.78, 0.12, 0, -0.39, 0, o.legs);
    const armGeo = () => colorBox(0.08, 0.52, 0.1, 0, -0.26, 0, o.top);
    this.legL = limb(legGeo(), -0.09, 0.78);
    this.legR = limb(legGeo(), 0.09, 0.78);
    this.armL = limb(armGeo(), -0.21, 1.28);
    this.armR = limb(armGeo(), 0.21, 1.28);
    const torsoParts = [colorBox(0.32, 0.52, 0.2, 0, 1.04, 0, o.top), ...headBoxes(rnd, o, 1.42, 0)];
    const torso = mergeGeometries(torsoParts);
    torsoParts.forEach((p) => p.dispose());
    this.group.add(new THREE.Mesh(torso, MAT_PEOPLE));
    this.place();
  }

  private place() {
    const t = this.s / this.len;
    this.group.position.lerpVectors(this.a, this.b, t);
    const vx = (this.b.x - this.a.x) * this.dir;
    const vz = (this.b.z - this.a.z) * this.dir;
    this.group.rotation.y = Math.atan2(vx, vz);
  }

  update(dt: number) {
    if (this.pause > 0) {
      this.pause -= dt;
      // settle the limbs while standing
      for (const m of [this.legL, this.legR, this.armL, this.armR]) m.rotation.x *= Math.max(0, 1 - dt * 6);
      return;
    }
    this.s += this.speed * dt * this.dir;
    if (this.s <= 0 || this.s >= this.len) {
      this.s = Math.max(0, Math.min(this.len, this.s));
      this.dir *= -1;
      this.pause = 1.2 + (this.phase % 1.3); // linger at the end, then head back
    }
    this.phase += this.speed * dt * 3.4;
    const swing = Math.sin(this.phase) * 0.5;
    this.legL.rotation.x = swing;
    this.legR.rotation.x = -swing;
    this.armL.rotation.x = -swing * 0.6;
    this.armR.rotation.x = swing * 0.6;
    this.place();
    this.group.position.y += Math.abs(Math.sin(this.phase)) * 0.025;
  }
}
