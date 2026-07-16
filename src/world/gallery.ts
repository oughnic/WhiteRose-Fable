import * as THREE from 'three';
import type { World } from '../types';
import { makeSignTexture, SignManager, type ArtEntry } from './signage';
import { AreaKit, MAT, hangPicture, type BuiltArea, type PeopleTier } from './corridor';
import { G, type Layout } from '../../tools/lib/layout.mjs';

export const GALLERY_ID = '__gallery';

/**
 * The Reference Gallery: a corridor west of the Postgraduate Medical Centre
 * carrying the two annexes — the clause 3.1 Reference collection and the
 * Resources annex — whose root lobbies open off its south side, exactly as
 * wings open off the hospital street. Reached from the PMC's rear aisle by
 * an L-shaped link (west, then north).
 */
export function buildGallery(
  world: World,
  layout: Layout,
  signs: SignManager,
  art: ArtEntry[],
  people: PeopleTier
): BuiltArea {
  const group = new THREE.Group();
  group.name = 'area:gallery';
  const kit = new AreaKit(group, new THREE.Vector3(0, 0, 0), signs);

  const g = layout.loop.gallery;
  const x0 = g.x0;
  const x1 = g.x1;
  const cx = (x0 + x1) / 2;
  const z0 = g.z0;
  const z1 = g.z1;
  const zc = (z0 + z1) / 2;
  const H = G.STREET_H;
  const [e0, e1] = g.entrance; // aperture in the south wall, east of the lobbies

  const byId = new Map(world.classes.map((c) => [c.id, c]));
  const wingByKey = new Map(world.wings.map((w) => [w.key, w]));

  // ---- the gallery corridor -------------------------------------------------
  kit.box(x1 - x0, 0.1, z1 - z0, MAT.floor, cx, -0.05, zc, { walkable: true, vinyl: true });
  kit.box(x1 - x0, 0.1, z1 - z0, MAT.ceiling, cx, H + 0.05, zc, { worldUV: true });
  for (let x = x0 + 2; x < x1 - 1; x += 4) {
    kit.led(x, z0 + 1.3, H - 0.02, 0.35, 1.3);
    kit.led(x, z1 - 1.3, H - 0.02, 0.35, 1.3);
  }
  // north wall: sill + daylight band + header, with mullions
  kit.box(x1 - x0, 1.0, 0.15, MAT.wall, cx, 0.5, z1 + 0.075, { solid: true, trim: ['z-'] });
  kit.box(x1 - x0, 1.7, 0.08, MAT.daylight, cx, 1.85, z1 + 0.075, { solid: true });
  kit.box(x1 - x0, H - 2.7, 0.15, MAT.wall, cx, (H + 2.7) / 2, z1 + 0.075, {});
  for (let mx = x0 + 2; mx < x1 - 0.5; mx += 2) {
    kit.steelSpec({ w: 0.07, h: 1.7, d: 0.18, x: mx, y: 1.85, z: z1 + 0.075 });
  }
  // caps
  kit.box(0.15, H, z1 - z0 + 0.3, MAT.wall, x0 - 0.075, H / 2, zc, { solid: true, trim: ['x+'] });
  kit.box(0.15, H, z1 - z0 + 0.3, MAT.wall, x1 + 0.075, H / 2, zc, { solid: true, trim: ['x-'] });

  // south wall: root-lobby openings + the entrance aperture, fills between
  const gaps: [number, number][] = [];
  const rootXs: { x: number; id: string; wingKey: string }[] = [];
  for (const w of layout.wings) {
    if (w.street !== 'gallery') continue;
    for (const rid of w.rootIds) {
      rootXs.push({ x: layout.areas[rid].x, id: rid, wingKey: w.key });
      gaps.push([layout.areas[rid].x - G.LOBBY_W / 2, layout.areas[rid].x + G.LOBBY_W / 2]);
    }
  }
  gaps.push([e0, e1]);
  gaps.sort((a, b) => a[0] - b[0]);
  let cursor = x0;
  for (const [b0, b1] of gaps) {
    if (b0 > cursor) {
      const seg = b0 - cursor;
      kit.box(seg, H, 0.15, MAT.wall, (cursor + b0) / 2, H / 2, z0 - 0.075, { solid: true, trim: ['z+'] });
      if (seg >= 9) {
        const mid = (cursor + b0) / 2;
        kit.chair(mid - 0.35, 0, z0 + 0.46, 1);
        kit.chair(mid + 0.35, 0, z0 + 0.46, 1);
        const seed = (Math.round(mid * 7) >>> 0) % 997;
        hangPicture(kit, art.length ? art[seed % art.length] : null, seed, mid - 3.2, 1.78, z0 + 0.075, 0, `gallery:${Math.round(mid)}`);
      }
    }
    cursor = Math.max(cursor, b1);
  }
  if (x1 > cursor) {
    kit.box(x1 - cursor, H, 0.15, MAT.wall, (cursor + x1) / 2, H / 2, z0 - 0.075, { solid: true, trim: ['z+'] });
  }
  // headers over the lobby openings (root walls are 3 m; the gallery is 4)
  for (const r of rootXs) {
    kit.box(G.LOBBY_W, H - G.ROOM_H, 0.15, MAT.wall, r.x, (H + G.ROOM_H) / 2, z0 - 0.075, {});
  }
  // header over the entrance (3 m opening)
  kit.box(e1 - e0, H - 3, 0.15, MAT.wall, (e0 + e1) / 2, (H + 3) / 2, z0 - 0.075, {});

  // wing signs over the openings + the gallery name at the east end
  rootXs.forEach((r) => {
    const root = byId.get(r.id);
    const wing = wingByKey.get(r.wingKey);
    kit.sign(
      3.2, 0.7, r.x, G.ROOM_H + 0.45, z0 + 0.02, 0,
      () =>
        makeSignTexture({
          widthPx: 1280,
          heightPx: 280,
          title: wing?.label ?? '?',
          subtitle: `${wing?.classCount ?? '?'} concepts · enter for ${root?.label ?? '?'}`,
          titleSize: 86,
        }),
      `gallery:${root?.label}`
    );
  });
  kit.sign(
    3.4, 0.8, x1 - 0.4, 2.7, zc, Math.PI / 2,
    () =>
      makeSignTexture({
        widthPx: 1280,
        heightPx: 300,
        title: 'Reference Gallery',
        subtitle: 'clause 3.1 definitions · resources annex',
        titleSize: 92,
      }),
    'gallery-name'
  );

  // ---- L-link back to the Postgraduate Medical Centre ----------------------
  // corridor B: north–south, from the gallery entrance down to the PMC level
  const bz0 = 21.2;
  kit.box(e1 - e0, 0.1, z0 - bz0, MAT.floor, (e0 + e1) / 2, -0.05, (bz0 + z0) / 2, { walkable: true, vinyl: true });
  kit.box(e1 - e0, 0.1, z0 - bz0, MAT.ceiling, (e0 + e1) / 2, 3.05, (bz0 + z0) / 2, { worldUV: true });
  for (const wx of [e0 - 0.075, e1 + 0.075]) {
    kit.box(0.15, 3, z0 - bz0, MAT.wall, wx, 1.5, (bz0 + z0) / 2, { solid: true, trim: [wx < (e0 + e1) / 2 ? 'x+' : 'x-'] });
  }
  for (let lz = bz0 + 2; lz < z0 - 1; lz += 4) kit.led((e0 + e1) / 2, lz, 2.98);
  // corridor A: east–west, from corridor B's foot to the PMC west wall (x=-24)
  const az0 = 19.2;
  const az1 = 21.2;
  kit.box(-24 - e0, 0.1, az1 - az0, MAT.floor, (e0 + -24) / 2, -0.05, (az0 + az1) / 2, { walkable: true, vinyl: true });
  kit.box(-24 - e0, 0.1, az1 - az0, MAT.ceiling, (e0 + -24) / 2, 3.05, (az0 + az1) / 2, { worldUV: true });
  kit.box(-24 - e0 + 0.15, 3, 0.15, MAT.wall, (e0 + -24) / 2 - 0.05, 1.5, az0 - 0.075, { solid: true, trim: ['z+'] }); // south
  kit.box(-24 - e1, 3, 0.15, MAT.wall, (e1 + -24) / 2, 1.5, az1 + 0.075, { solid: true, trim: ['z-'] }); // north, east of corridor B
  kit.box(0.15, 3, az1 - az0 + 0.3, MAT.wall, e0 - 0.075, 1.5, (az0 + az1) / 2, { solid: true, trim: ['x+'] }); // west cap
  kit.led((e0 - 24) / 2, (az0 + az1) / 2, 2.98);
  // sign at the corridor junction pointing on to the gallery
  kit.sign(
    1.9, 0.5, (e0 + e1) / 2, 2.55, bz0 + 0.09, 0,
    () =>
      makeSignTexture({
        widthPx: 960,
        heightPx: 250,
        title: '↑ Reference Gallery',
        subtitle: 'clause 3.1 definitions · resources annex',
        titleSize: 64,
      }),
    'gallery-way'
  );

  kit.populate(people, 7877);
  kit.finalize();

  return {
    id: GALLERY_ID,
    wc: null,
    label: 'Reference Gallery',
    group,
    colliders: kit.colliders,
    walkables: kit.walkables,
    interactables: [],
    spawnPos: new THREE.Vector3(x1 - 2, 0, zc),
    spawnYaw: Math.PI / 2, // face west, down the gallery
    boxes: [
      new THREE.Box3(new THREE.Vector3(x0 - 0.3, -0.5, z0 - 0.2), new THREE.Vector3(x1 + 0.3, 2.5, z1 + 0.3)),
      new THREE.Box3(new THREE.Vector3(e0 - 0.3, -0.5, bz0), new THREE.Vector3(e1 + 0.3, 2.5, z0)),
      new THREE.Box3(new THREE.Vector3(e0 - 0.3, -0.5, az0 - 0.2), new THREE.Vector3(-23.8, 2.5, az1 + 0.2)),
    ],
  };
}
