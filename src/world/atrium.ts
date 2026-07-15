import * as THREE from 'three';
import type { World } from '../types';
import { makeBoardTexture, boardCellRects, makeSignTexture, SignManager, type ArtEntry } from './signage';
import { wingColor } from './colors';
import { AreaKit, MAT, hangPicture, ATRIUM_ID, type BuiltArea, type PeopleTier } from './corridor';
import { THEATRE_ID } from './theatre';
import { G } from '../../tools/lib/layout.mjs';

export { ATRIUM_ID };

/**
 * The reception atrium at the west end of the hospital street.
 * Hall spans x ∈ [−26, 0], z ∈ [3, 15]; the east wall opens onto the
 * street band (z ∈ [7, 11]) — a real doorway, not a portal.
 */
export function buildAtrium(world: World, signs: SignManager, art: ArtEntry[], people: PeopleTier): BuiltArea {
  const group = new THREE.Group();
  group.name = 'area:atrium';
  const kit = new AreaKit(group, new THREE.Vector3(0, 0, 0), signs);

  const X0 = -26;
  const X1 = 0;
  const Z0 = 3;
  const Z1 = 15;
  const H = G.STREET_H; // flush with the street
  const cx = (X0 + X1) / 2;
  const cz = (Z0 + Z1) / 2;

  // shell
  kit.box(X1 - X0, 0.1, Z1 - Z0, MAT.floor, cx, -0.05, cz, { walkable: true, vinyl: true });
  kit.box(X1 - X0, 0.1, Z1 - Z0, MAT.ceiling, cx, H + 0.05, cz, { worldUV: true });
  // south wall: courtyard glazing above a sill (waiting-room daylight)
  kit.box(X1 - X0 + 0.3, 1.0, 0.15, MAT.wall, cx, 0.5, Z0 - 0.075, { solid: true, trim: ['z+'] });
  kit.box(X1 - X0 + 0.3, 1.7, 0.08, MAT.daylight, cx, 1.85, Z0 - 0.075, { solid: true });
  kit.box(X1 - X0 + 0.3, H - 2.7, 0.15, MAT.wall, cx, (H + 2.7) / 2, Z0 - 0.075, {});
  for (let mx = X0 + 2; mx < X1 - 0.5; mx += 2) {
    kit.steelSpec({ w: 0.07, h: 1.7, d: 0.18, x: mx, y: 1.85, z: Z0 - 0.075 });
  }
  // north wall, with a 2 m opening at x = −15 to the Postgraduate Medical
  // Centre link (segments sized to keep both directory boards fully backed)
  kit.box(-16 - X0 + 0.3, H, 0.15, MAT.wall, (X0 - 0.15 + -16) / 2, H / 2, Z1 + 0.075, { solid: true, trim: ['z-'] });
  kit.box(X1 - -14 + 0.3, H, 0.15, MAT.wall, (-14 + X1 + 0.15) / 2, H / 2, Z1 + 0.075, { solid: true, trim: ['z-'] });
  kit.box(2, H - 2.3, 0.15, MAT.wall, -15, (H + 2.3) / 2, Z1 + 0.075, {}); // header over the link door
  kit.box(0.15, H, Z1 - Z0, MAT.wall, X0 - 0.075, H / 2, cz, { solid: true, trim: ['x+'] }); // west
  // east wall with the street opening (z ∈ [7, 11])
  kit.box(0.15, H, G.STREET_Z0 - Z0, MAT.wall, X1 + 0.075, H / 2, (Z0 + G.STREET_Z0) / 2, { solid: true, trim: ['x-'] });
  kit.box(0.15, H, Z1 - G.STREET_Z1, MAT.wall, X1 + 0.075, H / 2, (G.STREET_Z1 + Z1) / 2, { solid: true, trim: ['x-'] });

  // luminaires
  for (let lx = X0 + 3; lx < X1 - 1; lx += 4.5) {
    for (const lz of [5.2, 9, 12.8]) kit.led(lx, lz, H - 0.02);
  }

  // reception desk (oak counter), waiting benches, and a row of utility chairs
  kit.box(1.1, 1.1, 5.2, MAT.oak, X0 + 4.5, 0.55, cz);
  // one bench on the south side only — the north wall stays clear so the
  // directory boards are visible (and tappable) from across the hall
  kit.box(4.2, 0.46, 0.55, MAT.oak, -10, 0.23, 4.4);
  kit.box(4.2, 0.5, 0.09, MAT.oak, -10, 0.7, 4.4 - 0.24);
  for (let i = 0; i < 5; i++) kit.chair(-5.8 + i * 0.62, 0, 14.35, -1);
  // west row sits under the wings directory, clear of the theatre doorway
  for (let i = 0; i < 3; i++) kit.chair(-17.9 + i * 0.62, 0, 14.35, -1);

  // Yorkshire views flanking the title and beside the directory
  const pick = (s: number) => (art.length ? art[s % art.length] : null);
  hangPicture(kit, pick(3), 3, X0 + 0.09, 1.8, 4.6, Math.PI / 2, 'atrium:w1');
  hangPicture(kit, pick(9), 9, X0 + 0.09, 1.8, 13.4, Math.PI / 2, 'atrium:w2');
  hangPicture(kit, pick(6), 6, -3.4, 1.8, Z1 - 0.09, Math.PI, 'atrium:n1');

  // title over the desk on the west wall
  kit.sign(
    7, 1.5, X0 + 0.09, 2.6, cz, Math.PI / 2,
    () =>
      makeSignTexture({
        widthPx: 1792,
        heightPx: 384,
        title: 'ContSys Hospital',
        subtitle: `${world.meta.label} · ${world.classes.length} concepts · welcome — walk the model`,
        titleSize: 150,
        align: 'center',
      }),
    'title'
  );

  // street sign over the east opening
  kit.sign(
    3.2, 0.7, X1 - 0.09, G.ROOM_H + 0.55, (G.STREET_Z0 + G.STREET_Z1) / 2, -Math.PI / 2,
    () =>
      makeSignTexture({
        widthPx: 1280,
        heightPx: 280,
        title: 'Hospital Street →',
        subtitle: 'all wings · concepts A–Z on the directory',
        titleSize: 88,
      }),
    'to-street'
  );

  // sign over the north door to the lecture theatre
  kit.sign(
    2.6, 0.6, -15, 2.62, Z1 - 0.09, Math.PI,
    () =>
      makeSignTexture({
        widthPx: 1152,
        heightPx: 252,
        title: 'Postgraduate Medical Centre →',
        subtitle: 'lecture theatre · seminars & presentations',
        titleSize: 70,
      }),
    'to-theatre'
  );

  // directory boards on the north wall: wing summary + full A–Z, both tappable
  const wingRows = [
    ...world.wings.map((w) => ({
      text: w.annex ? w.label : `${w.label} wing`,
      sub: `${w.classCount} concepts`,
      chip: wingColor(w.key),
    })),
    { text: 'Postgraduate Medical Centre', sub: 'lecture theatre', chip: '#005eb8' },
  ];
  const wingSpec = {
    widthPx: 1024,
    heightPx: 724,
    title: 'Hospital directory',
    subtitle: 'wings west to east — tap one to visit its entrance',
    rows: wingRows,
    rowSize: 40, // 8 rows fit (7 wings + the theatre); 44 held only 7
  };
  const wingMesh = kit.sign(3.4, 2.4, -20, 1.9, Z1 - 0.09, Math.PI, () => makeBoardTexture(wingSpec), 'directory-wings');
  const wingRects = boardCellRects(wingSpec, wingRows.length);
  const azSpec = {
    widthPx: 2048,
    heightPx: 1152,
    title: 'Concepts A–Z',
    subtitle: 'tap a concept to go there · or press M anywhere for the porter',
    rows: world.classes.map((c) => ({
      text: c.label,
      sub: c.roomNumber ?? undefined,
      chip: wingColor(c.wing),
    })),
    rowSize: 14, // 5 columns × 35 rows — all 161 concepts fit (and are tappable)
    columns: 5,
  };
  const azMesh = kit.sign(6.4, 3.6, -9, 1.9, Z1 - 0.09, Math.PI, () => makeBoardTexture(azSpec), 'directory-az');
  const azRects = boardCellRects(azSpec, world.classes.length);
  const boards: BuiltArea['boards'] = [
    {
      kind: 'directory',
      mesh: wingMesh,
      cells: [
        ...world.wings.flatMap((w, i) =>
          wingRects[i] ? [{ rect: wingRects[i]!, id: w.rootIds[0], label: w.annex ? w.label : `${w.label} wing` }] : []
        ),
        ...(wingRects[world.wings.length]
          ? [{ rect: wingRects[world.wings.length]!, id: THEATRE_ID, label: 'Postgraduate Medical Centre' }]
          : []),
      ],
    },
    {
      kind: 'directory',
      mesh: azMesh,
      cells: world.classes.flatMap((c, i) => (azRects[i] ? [{ rect: azRects[i]!, id: c.id, label: c.label }] : [])),
    },
  ];

  // the receptionist is on duty whenever there are people about
  if (people !== 'off') {
    kit.stand(X0 + 3.7, 0, cz, Math.PI / 2, 137); // behind the desk, facing the hall
    kit.sit(-9.4, 0.02, 4.55, 1, 553); // waiting on the bench
    kit.sit(-10.6, 0.02, 4.55, 1, 887);
  }
  kit.populate(people, 9001);
  kit.finalize();

  return {
    id: ATRIUM_ID,
    wc: null,
    label: 'Reception',
    group,
    colliders: kit.colliders,
    walkables: kit.walkables,
    interactables: [],
    boards,
    spawnPos: new THREE.Vector3(-14, 0, cz),
    spawnYaw: -Math.PI / 2, // face east toward the street
    boxes: [
      new THREE.Box3(
        new THREE.Vector3(X0 - 0.3, -0.5, Z0 - 0.3),
        new THREE.Vector3(X1 + 0.1, 2.5, Z1 + 0.3)
      ),
    ],
  };
}
