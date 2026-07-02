import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

const EYE_HEIGHT = 1.7;
const RADIUS = 0.3;
const WALK_SPEED = 4.2;
const RUN_SPEED = 8.5;
const CLIMB = 0.5; // max step-up (covers 0.17 m stair risers)
const FALL_SPEED = 7;

/**
 * First-person player: pointer-lock look, WASD move, AABB wall collision,
 * and ground-following over "walkable" boxes (floors, stair treads,
 * landings) so real staircases work without a physics engine.
 */
export class Player {
  readonly camera: THREE.PerspectiveCamera;
  readonly controls: PointerLockControls;
  private keys = new Set<string>();
  private colliders: THREE.Box3[] = [];
  private walkables: THREE.Box3[] = [];
  private touch = { f: 0, s: 0 }; // analog move, −1..1

  constructor(domElement: HTMLElement) {
    this.camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.05, 160);
    this.camera.position.set(0, EYE_HEIGHT, 0);
    this.camera.rotation.order = 'YXZ';
    this.controls = new PointerLockControls(this.camera, domElement);

    addEventListener('keydown', (e) => this.keys.add(e.code));
    addEventListener('keyup', (e) => this.keys.delete(e.code));
    addEventListener('blur', () => this.keys.clear());
  }

  /** Analog movement from the on-screen joystick (touch mode). */
  setTouchMove(forward: number, strafe: number) {
    this.touch.f = forward;
    this.touch.s = strafe;
  }

  /**
   * Drag-to-look on the canvas. Coexists with pointer lock (touch-screen
   * PCs get both): while the mouse is locked these handlers stand down.
   */
  enableDragLook(domElement: HTMLElement) {
    let looking = false;
    let lastX = 0;
    let lastY = 0;
    domElement.addEventListener('pointerdown', (e) => {
      if (this.controls.isLocked) return;
      looking = true;
      lastX = e.clientX;
      lastY = e.clientY;
      domElement.setPointerCapture(e.pointerId);
    });
    domElement.addEventListener('pointermove', (e) => {
      if (!looking || this.controls.isLocked) return;
      const r = this.camera.rotation;
      r.y -= (e.clientX - lastX) * 0.0042;
      r.x = Math.max(-1.45, Math.min(1.45, r.x - (e.clientY - lastY) * 0.0042));
      lastX = e.clientX;
      lastY = e.clientY;
    });
    for (const ev of ['pointerup', 'pointercancel'] as const) {
      domElement.addEventListener(ev, () => (looking = false));
    }
  }

  /**
   * Jump ahead: hop up to `maxMetres` along the facing direction in small
   * collision-checked steps, following the ground (stairs included).
   */
  dash(maxMetres = 12): number {
    const yaw = this.camera.rotation.y;
    const dx = -Math.sin(yaw);
    const dz = -Math.cos(yaw);
    const p = this.camera.position;
    let moved = 0;
    for (let i = 0; i < Math.ceil(maxMetres / 0.4); i++) {
      const feet = this.feetY;
      const nx = p.x + dx * 0.4;
      const nz = p.z + dz * 0.4;
      if (this.collides(nx, nz, feet)) break;
      const g = this.groundAt(nx, nz, feet);
      if (g === -Infinity) break; // never dash out over a void
      p.x = nx;
      p.z = nz;
      p.y = g + EYE_HEIGHT;
      moved += 0.4;
    }
    return moved;
  }

  setColliders(colliders: THREE.Box3[]) {
    this.colliders = colliders;
  }
  setWalkables(walkables: THREE.Box3[]) {
    this.walkables = walkables;
  }

  get position(): THREE.Vector3 {
    return this.camera.position;
  }
  get feetY(): number {
    return this.camera.position.y - EYE_HEIGHT;
  }
  /** Horizontal position at foot level. */
  get floorPosition(): THREE.Vector3 {
    return new THREE.Vector3(this.camera.position.x, this.feetY, this.camera.position.z);
  }

  teleport(pos: { x: number; y?: number; z: number }, yaw: number) {
    this.camera.position.set(pos.x, (pos.y ?? 0) + EYE_HEIGHT, pos.z);
    this.camera.rotation.set(0, yaw, 0);
  }

  /** Highest walkable surface under (x,z) that is at most CLIMB above the feet. */
  private groundAt(x: number, z: number, feet: number): number {
    let best = -Infinity;
    for (const b of this.walkables) {
      if (x < b.min.x - 0.05 || x > b.max.x + 0.05 || z < b.min.z - 0.05 || z > b.max.z + 0.05) continue;
      const top = b.max.y;
      if (top <= feet + CLIMB && top > best) best = top;
    }
    return best;
  }

  private collides(x: number, z: number, feet: number): boolean {
    const me = new THREE.Box3(
      new THREE.Vector3(x - RADIUS, feet + 0.25, z - RADIUS),
      new THREE.Vector3(x + RADIUS, feet + 1.75, z + RADIUS)
    );
    return this.colliders.some((b) => b.intersectsBox(me));
  }

  /** Snap feet to the ground under the current position (used after debug moves). */
  snapGround() {
    const p = this.camera.position;
    const g = this.groundAt(p.x, p.z, this.feetY + 0.01);
    if (g > -Infinity) p.y = g + EYE_HEIGHT;
  }

  update(dt: number) {
    const p = this.camera.position;
    const feet = this.feetY;

    const forward = Number(this.keys.has('KeyW')) - Number(this.keys.has('KeyS')) + this.touch.f;
    const strafe = Number(this.keys.has('KeyD')) - Number(this.keys.has('KeyA')) + this.touch.s;
    if (forward || strafe) {
      const mag = Math.min(1, Math.hypot(forward, strafe));
      const run = this.keys.has('ShiftLeft') || this.keys.has('ShiftRight') || mag > 0.92;
      const speed = (run ? RUN_SPEED : WALK_SPEED) * mag;
      const yaw = this.camera.rotation.y;
      const dirX = -Math.sin(yaw) * forward + Math.cos(yaw) * strafe;
      const dirZ = -Math.cos(yaw) * forward - Math.sin(yaw) * strafe;
      const len = Math.hypot(dirX, dirZ) || 1;
      const dx = (dirX / len) * speed * dt;
      const dz = (dirZ / len) * speed * dt;
      // resolve per axis so the player slides along walls
      if (!this.collides(p.x + dx, p.z, feet)) p.x += dx;
      if (!this.collides(p.x, p.z + dz, feet)) p.z += dz;
    }

    // ground follow: step up instantly, fall smoothly
    const g = this.groundAt(p.x, p.z, feet);
    if (g > -Infinity) {
      if (g >= feet) p.y = g + EYE_HEIGHT;
      else p.y = Math.max(g, feet - FALL_SPEED * dt) + EYE_HEIGHT;
    }
  }
}
