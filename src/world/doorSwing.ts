import * as THREE from 'three';
import type { Doorway, Interactable } from './corridor';
import type { Player } from '../engine/player';
import { MATS as MAT } from './materials';
import { createBoxGeometry } from '../look/roundedBoxes';
import { G } from '../../tools/lib/layout.mjs';

const APPROACH_MS = 320; // step back square to the door
const SWING_MS = 650;
const SWING_RAD = THREE.MathUtils.degToRad(100);
/** Where you stand while it opens: as far out as the arrival points, so the leaf clears you. */
const STAND_OFF_M = 1.35;
/** The fixed slab and its plates reach 0.07 m off the slab centre: the dark doorway covers them. */
const VOID_OFF_M = 0.075;
const LEAF_OFF_M = 0.08;
const LEAF_T = 0.045;
/** You must be looking within ~60° of straight at a door to be offered it. */
const FACING_DOT = 0.5;

/** What the door passage needs from main.ts. */
export interface DoorPassageHooks {
  player: Player;
  scene: THREE.Scene;
  /** Busy: feet frozen, no prompts, picks or other travel (shared with lift rides). */
  setTransit: (busy: boolean) => void;
  /** Go through: the teleport, HUD and arrival bookkeeping. */
  passThrough: (it: Interactable) => void;
}

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

/** Run `step` with an eased 0→1 over `ms`, one call per animation frame. */
const animateFor = (ms: number, step: (t: number) => void) =>
  new Promise<void>((resolve) => {
    const t0 = performance.now();
    const frame = () => {
      const t = Math.min(1, (performance.now() - t0) / ms);
      step(easeInOut(t));
      if (t < 1) requestAnimationFrame(frame);
      else resolve();
    };
    requestAnimationFrame(frame);
  });

const viewDir = new THREE.Vector3();
/** Doors are only offered to someone facing them: walking backwards into one does nothing. */
export const isFacingDoor = (player: Player, doorway: Doorway) => {
  player.camera.getWorldDirection(viewDir);
  viewDir.y = 0;
  return viewDir.normalize().dot(doorway.normal) < -FACING_DOT;
};

const VOID_MAT = new THREE.MeshBasicMaterial({ color: 0x14181c }); // the unlit room beyond

/**
 * A temporary swinging leaf in front of the fixed (merged) slab, with a dark doorway behind
 * it hiding the slab. Local frame: +x along the wall towards the handle, +z out of the wall.
 */
const buildDoorLeaf = (d: Doorway) => {
  const root = new THREE.Group();
  root.position.copy(d.center);
  const yaw = Math.atan2(-d.handleDir.z, d.handleDir.x);
  root.rotation.y = yaw;
  // the yaw fixes +x; whether local +z points out of the wall depends on the wall's side
  const out = Math.sign(Math.sin(yaw) * d.normal.x + Math.cos(yaw) * d.normal.z) || 1;
  const add = (parent: THREE.Object3D, w: number, h: number, t: number, mat: THREE.Material, x: number, y: number, z: number) => {
    const mesh = new THREE.Mesh(createBoxGeometry(w, h, t), mat);
    mesh.position.set(x, y, z);
    parent.add(mesh);
  };
  add(root, d.width + 0.04, G.DOOR_H + 0.02, 0.004, VOID_MAT, 0, G.DOOR_H / 2, out * VOID_OFF_M);
  // hinged on the edge away from the push plate
  const hinge = new THREE.Group();
  hinge.position.set(-d.width / 2, 0, out * LEAF_OFF_M);
  root.add(hinge);
  const face = out * (LEAF_T + 0.01);
  add(hinge, d.width, G.DOOR_H, LEAF_T, MAT.door, d.width / 2, G.DOOR_H / 2, (out * LEAF_T) / 2);
  add(hinge, 0.28, 0.42, 0.02, MAT.glass, d.width / 2, 1.5, face); // vision panel
  add(hinge, d.width - 0.25, 0.25, 0.02, MAT.steel, d.width / 2, 0.13, face); // kick plate
  add(hinge, 0.1, 0.3, 0.02, MAT.steel, d.width / 2 + 0.42, 1.05, face); // push plate
  // rotating by −out·θ turns the leaf's free edge out of the wall, towards you
  const swingTo = (t: number) => (hinge.rotation.y = -out * SWING_RAD * t);
  const dispose = () => {
    root.removeFromParent();
    root.traverse((o) => (o as THREE.Mesh).geometry?.dispose());
  };
  return { root, swingTo, dispose };
};

/** Doors open on request: step square to the door, it swings open towards you, through you go. */
export const createDoorPassage = (hooks: DoorPassageHooks) => {
  const { player } = hooks;
  let busy = false;

  const openDoor = async (it: Interactable) => {
    const d = it.doorway;
    if (!d || busy) return;
    busy = true;
    hooks.setTransit(true);

    // 1. step back square to the door, eyes level, so the leaf has room to swing
    const from = player.floorPosition;
    const to = d.center.clone().addScaledVector(d.normal, STAND_OFF_M);
    const yawFrom = player.camera.rotation.y;
    const yawTurn = THREE.MathUtils.euclideanModulo(Math.atan2(d.normal.x, d.normal.z) - yawFrom + Math.PI, Math.PI * 2) - Math.PI;
    const pitchFrom = player.camera.rotation.x;
    const at = new THREE.Vector3();
    await animateFor(APPROACH_MS, (t) => player.teleport(at.lerpVectors(from, to, t), yawFrom + yawTurn * t, pitchFrom * (1 - t)));

    // 2. the door swings open
    const leaf = buildDoorLeaf(d);
    hooks.scene.add(leaf.root);
    await animateFor(SWING_MS, leaf.swingTo);

    // 3. through it
    hooks.passThrough(it);
    leaf.dispose();
    hooks.setTransit(false);
    busy = false;
  };

  return { openDoor };
};
