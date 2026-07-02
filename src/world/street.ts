import * as THREE from 'three';
import type { World } from './../types';
import { makeSignTexture, SignManager, type ArtEntry } from './signage';
import { wingColor } from './colors';
import { AreaKit, MAT, hangPicture, type BuiltArea } from './corridor';
import { G, type Layout } from '../../tools/lib/layout.mjs';

export const STREET_ID = '__street';

/**
 * The hospital street: a ground-level spine corridor (z ∈ [7,11], y=0)
 * running east from the atrium, with every wing's root lobby opening
 * directly off its south side. Classic 1960s finger-plan circulation.
 */
export function buildStreet(world: World, layout: Layout, signs: SignManager, art: ArtEntry[]): BuiltArea {
  const group = new THREE.Group();
  group.name = 'area:street';
  const kit = new AreaKit(group, new THREE.Vector3(0, 0, 0), signs);

  const x0 = layout.street.x0;
  const x1 = layout.street.x1;
  const len = x1 - x0;
  const cx = (x0 + x1) / 2;
  const z0 = G.STREET_Z0;
  const z1 = G.STREET_Z1;
  const zc = (z0 + z1) / 2;
  const H = G.STREET_H;

  const byId = new Map(world.classes.map((c) => [c.id, c]));
  const wingByKey = new Map(world.wings.map((w) => [w.key, w]));

  // floor + ceiling + luminaires (twin rows, every 4 m)
  kit.box(len, 0.1, z1 - z0, MAT.floor, cx, -0.05, zc, { walkable: true, vinyl: true });
  kit.box(len, 0.1, z1 - z0, MAT.ceiling, cx, H + 0.05, zc, { worldUV: true });
  for (let x = x0 + 2; x < x1 - 1; x += 4) {
    kit.led(x, z0 + 1.3, H - 0.02, 0.35, 1.3);
    kit.led(x, z1 - 1.3, H - 0.02, 0.35, 1.3);
  }
  // north wall: continuous courtyard glazing — sill, daylight band, header,
  // with steel mullions every 2 m (the fog outside reads as a hazy Yorkshire sky)
  kit.box(len, 1.0, 0.15, MAT.wall, cx, 0.5, z1 + 0.075, { solid: true, trim: ['z-'] });
  kit.box(len, 1.7, 0.08, MAT.daylight, cx, 1.85, z1 + 0.075, { solid: true });
  kit.box(len, H - 2.7, 0.15, MAT.wall, cx, (H + 2.7) / 2, z1 + 0.075, {});
  for (let mx = x0 + 2; mx < x1 - 0.5; mx += 2) {
    kit.steelSpec({ w: 0.07, h: 1.7, d: 0.18, x: mx, y: 1.85, z: z1 + 0.075 });
  }
  // east cap
  kit.box(0.15, H, z1 - z0 + 0.3, MAT.wall, x1 + 0.075, H / 2, zc, { solid: true, trim: ['x-'] });

  // south wall: fill the complement of the root-lobby bands
  const rootXs: { x: number; id: string; wingKey: string }[] = [];
  for (const w of layout.wings) {
    for (const rid of w.rootIds) rootXs.push({ x: layout.areas[rid].x, id: rid, wingKey: w.key });
  }
  rootXs.sort((a, b) => a.x - b.x);
  let cursor = x0;
  const dressGap = (g0: number, g1: number) => {
    const gap = g1 - g0;
    const mid = (g0 + g1) / 2;
    if (gap >= 12) {
      // a pair of utility chairs against the south wall
      kit.chair(mid - 0.35, 0, z0 + 0.46, 1);
      kit.chair(mid + 0.35, 0, z0 + 0.46, 1);
    }
    if (gap >= 9) {
      // framed Yorkshire views with placards flanking the chairs
      for (const ax of [mid - 3.2, mid + 3.2]) {
        const seed = (Math.round(ax * 7) >>> 0) % 997;
        const entry = art.length ? art[seed % art.length] : null;
        hangPicture(kit, entry, seed, ax, 1.78, z0 + 0.075, 0, `street:${Math.round(ax)}`);
      }
    }
  };
  for (const r of rootXs) {
    const b0 = r.x - G.LOBBY_W / 2;
    const b1 = r.x + G.LOBBY_W / 2;
    if (b0 > cursor) {
      kit.box(b0 - cursor, H, 0.15, MAT.wall, (cursor + b0) / 2, H / 2, z0 - 0.075, { solid: true, trim: ['z+'] });
      dressGap(cursor, b0);
    }
    // header above the root's own 3 m opening (root wall is 3 m high; street is 4)
    kit.box(G.LOBBY_W, H - G.ROOM_H, 0.15, MAT.wall, r.x, (H + G.ROOM_H) / 2, z0 - 0.075, {});
    cursor = b1;
  }
  if (x1 > cursor) {
    kit.box(x1 - cursor, H, 0.15, MAT.wall, (cursor + x1) / 2, H / 2, z0 - 0.075, { solid: true, trim: ['z+'] });
    dressGap(cursor, x1);
  }

  // signs over each root opening + coloured wayfinding lines along the street
  rootXs.forEach((r) => {
    const root = byId.get(r.id);
    const wing = wingByKey.get(r.wingKey);
    kit.sign(
      3.2, 0.7, r.x, G.ROOM_H + 0.45, z0 + 0.02, 0,
      () =>
        makeSignTexture({
          widthPx: 1280,
          heightPx: 280,
          title: wing?.annex ? (root?.label ?? '?') : `${wing?.label ?? '?'} wing`,
          subtitle: wing?.annex
            ? `${wing.label} · ${root?.roomNumber ? `Room ${root.roomNumber}` : ''}`
            : `${wing?.classCount ?? '?'} concepts · enter for ${root?.label ?? '?'}`,
          titleSize: 86,
        }),
      `street:${root?.label}`
    );
  });
  layout.wings.forEach((w, i) => {
    const lineMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(wingColor(w.key)) });
    const doorX = layout.areas[w.rootIds[0]].x;
    const lz = z0 + 0.4 + i * 0.24;
    kit.box(doorX - x0, 0.012, 0.16, lineMat, (x0 + doorX) / 2, 0.012, lz, {});
    kit.box(0.16, 0.012, lz - z0, lineMat, doorX, 0.012, (z0 + lz) / 2, {}); // stub into the door
  });

  // street name sign at the west end, facing arrivals from reception
  kit.sign(
    3.4, 0.8, x0 + 0.4, 2.7, zc, -Math.PI / 2,
    () =>
      makeSignTexture({
        widthPx: 1280,
        heightPx: 300,
        title: 'Hospital Street',
        subtitle: 'wings this way →',
        titleSize: 96,
      }),
    'street-name'
  );

  kit.finalize();

  return {
    id: STREET_ID,
    wc: null,
    label: 'Hospital Street',
    group,
    colliders: kit.colliders,
    walkables: kit.walkables,
    interactables: [],
    spawnPos: new THREE.Vector3(x0 + 3, 0, zc),
    spawnYaw: -Math.PI / 2, // face east, down the street
    boxes: [
      new THREE.Box3(
        new THREE.Vector3(x0 - 0.3, -0.5, z0 - 0.2),
        new THREE.Vector3(x1 + 0.3, 2.5, z1 + 0.3)
      ),
    ],
  };
}
