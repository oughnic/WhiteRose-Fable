import * as THREE from 'three';
import { MATS } from './materials';

/**
 * Sliding lift doors: two stainless leaves that part behind the jambs.
 * Purely visual (no colliders) — they open on approach, so nobody walks
 * through a closed pair in normal play.
 */
export class LiftDoors {
  private leafA: THREE.Mesh;
  private leafB: THREE.Mesh;
  private openT = 0;
  /** 0 = closed, 1 = open. */
  target = 0;

  constructor(
    parent: THREE.Group,
    x: number,
    private zc: number
  ) {
    const geo = new THREE.BoxGeometry(0.05, 2.06, 0.5);
    const mat = MATS.liftDoor;
    this.leafA = new THREE.Mesh(geo, mat);
    this.leafB = new THREE.Mesh(geo.clone(), mat);
    this.leafA.position.set(x, 1.03, zc - 0.25);
    this.leafB.position.set(x, 1.03, zc + 0.25);
    parent.add(this.leafA, this.leafB);
  }

  /** Smoothly chase the target; leaves slide 0.48 m apart when open. */
  update(dt: number) {
    this.openT += (this.target - this.openT) * Math.min(1, dt * 5);
    const o = this.openT * 0.48;
    this.leafA.position.z = this.zc - 0.25 - o;
    this.leafB.position.z = this.zc + 0.25 + o;
  }

  get openness() {
    return this.openT;
  }
}
