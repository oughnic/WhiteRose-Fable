import * as THREE from 'three';
import type { World } from './../types';
import { makeSignTexture, SignManager, type ArtEntry } from './signage';
import { wingColor } from './colors';
import { AreaKit, MAT, hangPicture, type BuiltArea, type PeopleTier } from './corridor';
import { G, type Layout } from '../../tools/lib/layout.mjs';

export const STREET_ID = '__street';

/**
 * The hospital street — since Stage 7 a racetrack LOOP: two parallel
 * ground-level streets (south = the original, north = its mirror) joined by
 * two glazed cloister links crossing the courtyard, which holds the lawn and
 * the Postgraduate Medical Centre pavilion. Wings hang off the OUTSIDE of
 * each street; the inner walls are clear glazing onto the courtyard, so you
 * finally see what the windows always implied. One area, one group — the HUD
 * reads "Hospital Street" anywhere on the loop.
 */
export function buildStreet(
  world: World,
  layout: Layout,
  signs: SignManager,
  art: ArtEntry[],
  people: PeopleTier
): BuiltArea {
  const group = new THREE.Group();
  group.name = 'area:street';
  const kit = new AreaKit(group, new THREE.Vector3(0, 0, 0), signs);

  const loop = layout.loop;
  const x0 = 0;
  const x1 = loop.xEnd;
  const len = x1 - x0;
  const cx = (x0 + x1) / 2;
  const H = G.STREET_H;
  const czS = loop.south.z1; // courtyard south edge (11)
  const czN = loop.north.z0; // courtyard north edge (11 + C)
  const connectors: [number, number][] = [loop.connectors.west, loop.connectors.east];

  const byId = new Map(world.classes.map((c) => [c.id, c]));
  const wingByKey = new Map(world.wings.map((w) => [w.key, w]));
  // courtyard-facing glazing is genuinely transparent (the outward-facing
  // daylight bands elsewhere stay the opaque glow)
  const glass = new THREE.MeshLambertMaterial({ color: 0xcfe0e8, transparent: true, opacity: 0.3 });
  const grass = new THREE.MeshLambertMaterial({ color: 0x66794f });

  /** One street run: outer wall carries the wing openings, inner is glazed. */
  const buildRun = (side: 'south' | 'north') => {
    const band = side === 'south' ? loop.south : loop.north;
    const z0 = band.z0;
    const z1 = band.z1;
    const zc = (z0 + z1) / 2;
    const zOutWall = side === 'south' ? z0 - 0.075 : z1 + 0.075;
    const zInWall = side === 'south' ? z1 + 0.075 : z0 - 0.075;
    const outTrim = side === 'south' ? 'z+' : 'z-';
    const inTrim = side === 'south' ? 'z-' : 'z+';
    const rotOut = side === 'south' ? 0 : Math.PI; // things on the outer wall face the street

    // floor + ceiling + luminaires (twin rows, every 4 m)
    kit.box(len, 0.1, z1 - z0, MAT.floor, cx, -0.05, zc, { walkable: true, vinyl: true });
    kit.box(len, 0.1, z1 - z0, MAT.ceiling, cx, H + 0.05, zc, { worldUV: true });
    for (let x = x0 + 2; x < x1 - 1; x += 4) {
      kit.led(x, z0 + 1.3, H - 0.02, 0.35, 1.3);
      kit.led(x, z1 - 1.3, H - 0.02, 0.35, 1.3);
    }

    // inner wall: sill + clear glazing + header, with cloister openings
    const segs: [number, number][] = [];
    let cur = x0;
    for (const [g0, g1] of connectors) {
      if (g0 > cur) segs.push([cur, g0]);
      cur = Math.max(cur, g1);
    }
    if (x1 > cur) segs.push([cur, x1]);
    for (const [s0, s1] of segs) {
      const sc = (s0 + s1) / 2;
      const sl = s1 - s0;
      kit.box(sl, 1.0, 0.15, MAT.wall, sc, 0.5, zInWall, { solid: true, trim: [inTrim] });
      kit.box(sl, 1.7, 0.08, glass, sc, 1.85, zInWall, { solid: true });
      kit.box(sl, H - 2.7, 0.15, MAT.wall, sc, (H + 2.7) / 2, zInWall, {});
      for (let mx = s0 + 2; mx < s1 - 0.5; mx += 2) {
        kit.steelSpec({ w: 0.07, h: 1.7, d: 0.18, x: mx, y: 1.85, z: zInWall });
      }
    }
    // cloister openings: 3 m high, header above, sign facing the street
    for (const [g0, g1] of connectors) {
      const gc = (g0 + g1) / 2;
      kit.box(g1 - g0, H - 3, 0.15, MAT.wall, gc, (H + 3) / 2, zInWall, {});
      kit.sign(
        2.7, 0.6, gc, 2.62, zInWall + (side === 'south' ? -0.08 : 0.08), side === 'south' ? Math.PI : 0,
        () =>
          makeSignTexture({
            widthPx: 1152,
            heightPx: 252,
            title: `Cloister → ${side === 'south' ? 'north' : 'south'} side`,
            subtitle: 'across the courtyard · shorter way round',
            titleSize: 68,
          }),
        `cloister:${side}:${Math.round(gc)}`
      );
    }

    // outer wall: fill the complement of the root-lobby bands
    const rootXs: { x: number; id: string; wingKey: string }[] = [];
    for (const w of layout.wings) {
      if (w.street !== side) continue;
      for (const rid of w.rootIds) rootXs.push({ x: layout.areas[rid].x, id: rid, wingKey: w.key });
    }
    rootXs.sort((a, b) => a.x - b.x);
    const chairZ = side === 'south' ? z0 + 0.46 : z1 - 0.46;
    const chairFace = side === 'south' ? 1 : -1;
    const picZ = side === 'south' ? z0 + 0.075 : z1 - 0.075;
    const dressGap = (g0: number, g1: number) => {
      const gap = g1 - g0;
      const mid = (g0 + g1) / 2;
      if (gap >= 12) {
        kit.chair(mid - 0.35, 0, chairZ, chairFace as 1 | -1);
        kit.chair(mid + 0.35, 0, chairZ, chairFace as 1 | -1);
      }
      if (gap >= 9) {
        for (const ax of [mid - 3.2, mid + 3.2]) {
          const seed = (Math.round(ax * 7) >>> 0) % 997;
          const entry = art.length ? art[seed % art.length] : null;
          hangPicture(kit, entry, seed, ax, 1.78, picZ, rotOut, `street:${side}:${Math.round(ax)}`);
        }
      }
    };
    let cursor = x0;
    for (const r of rootXs) {
      const b0 = r.x - G.LOBBY_W / 2;
      const b1 = r.x + G.LOBBY_W / 2;
      if (b0 > cursor) {
        kit.box(b0 - cursor, H, 0.15, MAT.wall, (cursor + b0) / 2, H / 2, zOutWall, { solid: true, trim: [outTrim] });
        dressGap(cursor, b0);
      }
      // header above the root's own 3 m opening (root wall is 3 m high; street is 4)
      kit.box(G.LOBBY_W, H - G.ROOM_H, 0.15, MAT.wall, r.x, (H + G.ROOM_H) / 2, zOutWall, {});
      cursor = b1;
    }
    if (x1 > cursor) {
      kit.box(x1 - cursor, H, 0.15, MAT.wall, (cursor + x1) / 2, H / 2, zOutWall, { solid: true, trim: [outTrim] });
      dressGap(cursor, x1);
    }

    // signs over each root opening + coloured wayfinding lines
    const signZ = side === 'south' ? z0 + 0.02 : z1 - 0.02;
    rootXs.forEach((r) => {
      const root = byId.get(r.id);
      const wing = wingByKey.get(r.wingKey);
      kit.sign(
        3.2, 0.7, r.x, G.ROOM_H + 0.45, signZ, rotOut,
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
    // caps: east both runs; west only the north run (the atrium opens the south)
    kit.box(0.15, H, z1 - z0 + 0.3, MAT.wall, x1 + 0.075, H / 2, zc, { solid: true, trim: ['x-'] });
    if (side === 'north') {
      kit.box(0.15, H, z1 - z0 + 0.3, MAT.wall, x0 - 0.075, H / 2, zc, { solid: true, trim: ['x+'] });
    }

    // street name sign at the west end, facing arrivals
    kit.sign(
      3.4, 0.8, x0 + 0.4, 2.7, zc, -Math.PI / 2,
      () =>
        makeSignTexture({
          widthPx: 1280,
          heightPx: 300,
          title: 'Hospital Street',
          subtitle: `${side} side · wings this way →`,
          titleSize: 96,
        }),
      `street-name:${side}`
    );
  };

  buildRun('south');
  buildRun('north');

  // ---- coloured wayfinding lines: every wing traces back to the Reception
  // end of the south street — north wings turn up the west cloister in their
  // own lane, cross the courtyard, then run east to their door
  const [wc0] = loop.connectors.west;
  const nSouth = layout.wings.filter((w) => w.street === 'south').length;
  let kS = 0;
  let kN = 0;
  for (const w of layout.wings) {
    if (w.street === 'gallery') continue; // the annexes are reached via the PMC
    const lineMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(wingColor(w.key)) });
    const doorX = layout.areas[w.rootIds[0]].x;
    if (w.street === 'south') {
      const lz = loop.south.z0 + 0.4 + kS * 0.24;
      kS++;
      kit.box(doorX - x0, 0.012, 0.16, lineMat, (x0 + doorX) / 2, 0.012, lz, {});
      kit.box(0.16, 0.012, lz - loop.south.z0, lineMat, doorX, 0.012, (loop.south.z0 + lz) / 2, {}); // stub into the door
    } else {
      const laneX = wc0 + 0.55 + kN * 0.62; // its own lane up the cloister
      const lzS = loop.south.z0 + 0.4 + (nSouth + kN) * 0.24;
      const lzN = loop.north.z1 - 0.4 - kN * 0.24;
      kN++;
      kit.box(laneX - x0, 0.012, 0.16, lineMat, (x0 + laneX) / 2, 0.012, lzS, {}); // from the Reception end
      kit.box(0.16, 0.012, lzN - lzS, lineMat, laneX, 0.012, (lzS + lzN) / 2, {}); // up the cloister
      kit.box(doorX - laneX, 0.012, 0.16, lineMat, (laneX + doorX) / 2, 0.012, lzN, {}); // along the north street
      kit.box(0.16, 0.012, loop.north.z1 - lzN, lineMat, doorX, 0.012, (lzN + loop.north.z1) / 2, {}); // stub into the door
    }
  }

  // ---- the cloisters: glazed links crossing the courtyard -------------------
  for (const [c0, c1] of connectors) {
    const ccx = (c0 + c1) / 2;
    const clen = czN - czS;
    const czc = (czS + czN) / 2;
    kit.box(c1 - c0, 0.1, clen, MAT.floor, ccx, -0.05, czc, { walkable: true, vinyl: true });
    kit.box(c1 - c0, 0.1, clen, MAT.ceiling, ccx, H + 0.05, czc, { worldUV: true });
    for (const wx of [c0 - 0.075, c1 + 0.075]) {
      kit.box(0.15, 1.0, clen, MAT.wall, wx, 0.5, czc, { solid: true, trim: [wx < ccx ? 'x+' : 'x-'] });
      kit.box(0.08, 1.7, clen, glass, wx, 1.85, czc, { solid: true });
      kit.box(0.15, H - 2.7, clen, MAT.wall, wx, (H + 2.7) / 2, czc, {});
      for (let mz = czS + 2; mz < czN - 0.5; mz += 2) {
        kit.steelSpec({ w: 0.18, h: 1.7, d: 0.07, x: wx, y: 1.85, z: mz });
      }
    }
    for (let lz = czS + 2; lz < czN - 1; lz += 4) kit.led(ccx, lz, H - 0.02, 0.35, 1.3);
  }

  // ---- the courtyard lawn (the pavilion keeps its own ring west of x=2) -----
  kit.box(x1 - 2, 0.06, czN - czS - 0.4, grass, (2 + x1) / 2, -0.09, (czS + czN) / 2, {});
  if (czN - 0.2 > 38) {
    kit.box(32, 0.06, czN - 0.2 - 38, grass, -14, -0.09, (38 + czN - 0.2) / 2, {});
  }

  kit.populate(people, 4211);
  kit.finalize();

  return {
    id: STREET_ID,
    wc: null,
    label: 'Hospital Street',
    group,
    colliders: kit.colliders,
    walkables: kit.walkables,
    interactables: [],
    spawnPos: new THREE.Vector3(x0 + 3, 0, (loop.south.z0 + loop.south.z1) / 2),
    spawnYaw: -Math.PI / 2, // face east, down the south side
    boxes: [
      new THREE.Box3(
        new THREE.Vector3(x0 - 0.3, -0.5, loop.south.z0 - 0.2),
        new THREE.Vector3(x1 + 0.3, 2.5, loop.south.z1 + 0.3)
      ),
      new THREE.Box3(
        new THREE.Vector3(x0 - 0.3, -0.5, loop.north.z0 - 0.3),
        new THREE.Vector3(x1 + 0.3, 2.5, loop.north.z1 + 0.2)
      ),
      ...connectors.map(
        ([c0, c1]) =>
          new THREE.Box3(new THREE.Vector3(c0 - 0.2, -0.5, czS), new THREE.Vector3(c1 + 0.2, 2.5, czN))
      ),
    ],
  };
}
