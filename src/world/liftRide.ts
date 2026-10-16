import * as THREE from 'three';
import type { BuiltArea } from './corridor';
import type { Player } from '../engine/player';

const DOORS_CLOSE_MS = 750; // the doors' ease is ~2% open by then: snap shut
const RIDE_MS = 900; // shut in the moving car before the chime
const STAY_ABOARD_M = 1.7; // further than this from the doorway, you got out
const CAB_HALF_X = 0.3; // standing room either side of the cab centre (corridor.ts cab)
const CAB_HALF_Z = 0.4;

/** What the ride needs from main.ts. */
export interface LiftRideHooks {
  player: Player;
  areaById: (id: string) => BuiltArea | undefined;
  /** `transit` stops prompts, picks and travel; `riding` also freezes walking. */
  setLiftState: (transit: boolean, riding: boolean) => void;
  recordDeparture: () => void;
  /** Make `dest` the current area after a cut (HUD, triggers, visibility, travel clock). */
  arriveIn: (dest: BuiltArea) => void;
  ding: () => void;
  toast: (msg: string) => void;
}

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * The lift ritual, with no black frame anywhere: the doors close, the view cuts to the
 * destination cab (same spot in the cab, same view, doors still shut), a short ride,
 * then the chime — and the doors open by themselves because you're stood at them.
 */
export const createLiftRide = (hooks: LiftRideHooks) => {
  const { player } = hooks;
  const up = new THREE.Vector3(0, 1, 0);

  /** Where to stand in dest's cab: the same offset from the cab centre, turned with the cab. */
  const poseInCab = (src: BuiltArea | undefined, dest: BuiltArea, aboard: boolean) => {
    const destPos = dest.liftPos!;
    const destYaw = dest.liftYaw ?? 0;
    if (!aboard || !src?.liftPos) return { pos: destPos.clone(), yaw: destYaw, pitch: 0 };
    // mirrored wings turn their cab 180°: rotate the offset and the view by the difference
    const turn = destYaw - (src.liftYaw ?? 0);
    const feet = player.floorPosition;
    const offset = new THREE.Vector3(feet.x - src.liftPos.x, 0, feet.z - src.liftPos.z).applyAxisAngle(up, turn);
    // keep inside the 1.42 × 1.6 m car (less the body radius) — someone stood on the
    // threshold as the doors shut still arrives inside. Cabs only ever turn by 180°,
    // so the car's axes stay the world's.
    offset.x = THREE.MathUtils.clamp(offset.x, -CAB_HALF_X, CAB_HALF_X);
    offset.z = THREE.MathUtils.clamp(offset.z, -CAB_HALF_Z, CAB_HALF_Z);
    return {
      pos: new THREE.Vector3(destPos.x + offset.x, destPos.y, destPos.z + offset.z),
      yaw: player.camera.rotation.y + turn,
      pitch: player.camera.rotation.x,
    };
  };

  /**
   * Ride from `src` to `destId`. `aboard`: the passenger picked from inside the cab, so
   * the doors close on them first; a pick from the lobby board cuts straight into the
   * destination cab.
   */
  const rideLift = async (src: BuiltArea | undefined, destId: string, aboard: boolean) => {
    const dest = hooks.areaById(destId);
    if (!dest) return;
    hooks.setLiftState(true, false);

    // 1. the doors close (walking still allowed: you can step out in time)
    const srcLift = aboard ? src?.lift : undefined;
    if (srcLift) {
      srcLift.doors.target = 0;
      await wait(DOORS_CLOSE_MS);
      if (player.floorPosition.distanceTo(srcLift.doorwayPos) >= STAY_ABOARD_M) {
        hooks.setLiftState(false, false);
        hooks.toast('The lift left without you');
        return;
      }
      srcLift.doors.snapTo(0);
    }

    if (dest.liftPos && dest.lift) {
      // 2. cut to the destination cab, its doors already shut
      const pose = poseInCab(src, dest, !!srcLift);
      hooks.recordDeparture();
      player.teleport(pose.pos, pose.yaw, pose.pitch);
      dest.lift.doors.snapTo(0);
      hooks.arriveIn(dest);
      // 3. the ride: doors shut, feet still, eyes free
      hooks.setLiftState(true, true);
      await wait(RIDE_MS);
    } else {
      // no cab at the far end (Reception): ride shut in this car, then a straight cut
      if (srcLift) {
        hooks.setLiftState(true, true);
        await wait(RIDE_MS);
      }
      hooks.recordDeparture();
      player.teleport(dest.spawnPos, dest.spawnYaw);
      hooks.arriveIn(dest);
    }

    // 4. chime; clearing the transit lets the doors open on the waiting passenger
    hooks.ding();
    hooks.toast(`Lift → ${dest.label}`);
    hooks.setLiftState(false, false);
  };

  return { rideLift };
};
