import * as THREE from 'three';
import type { World } from '../types';
import { makeBoardTexture, makeSignTexture, SignManager, type ArtEntry } from './signage';
import { wingColor } from './colors';
import { AreaKit, MAT, hangPicture, type BuiltArea, type PeopleTier } from './corridor';
import { G } from '../../tools/lib/layout.mjs';

export const ATRIUM_ID = '__atrium';

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
  kit.box(X1 - X0 + 0.3, H, 0.15, MAT.wall, cx, H / 2, Z1 + 0.075, { solid: true, trim: ['z-'] }); // north
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
  for (const bz of [4.4, 13.6]) {
    kit.box(4.2, 0.46, 0.55, MAT.oak, -10, 0.23, bz);
    kit.box(4.2, 0.5, 0.09, MAT.oak, -10, 0.7, bz + (bz < cz ? -0.24 : 0.24));
  }
  for (let i = 0; i < 5; i++) kit.chair(-5.8 + i * 0.62, 0, 14.35, -1);
  for (let i = 0; i < 3; i++) kit.chair(-16.2 + i * 0.62, 0, 14.35, -1);

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

  // directory boards on the north wall: wing summary + full A–Z
  kit.sign(
    3.4, 2.4, -20, 1.9, Z1 - 0.09, Math.PI,
    () =>
      makeBoardTexture({
        widthPx: 1024,
        heightPx: 724,
        title: 'Hospital directory',
        subtitle: 'wings along Hospital Street, west to east',
        rows: world.wings.map((w) => ({
          text: w.annex ? w.label : `${w.label} wing`,
          sub: `${w.classCount} concepts`,
          chip: wingColor(w.key),
        })),
        rowSize: 44,
      }),
    'directory-wings'
  );
  kit.sign(
    6.4, 3.0, -9, 1.85, Z1 - 0.09, Math.PI,
    () =>
      makeBoardTexture({
        widthPx: 2048,
        heightPx: 960,
        title: 'Concepts A–Z',
        subtitle: 'press M anywhere for the porter (search & teleport)',
        rows: world.classes.map((c) => ({
          text: c.label,
          sub: c.roomNumber ?? undefined,
          chip: wingColor(c.wing),
        })),
        rowSize: 17,
        columns: 4,
      }),
    'directory-az'
  );

  // the receptionist is on duty whenever there are people about
  if (people !== 'off') {
    kit.stand(X0 + 3.7, 0, cz, Math.PI / 2, 137); // behind the desk, facing the hall
    kit.sit(-9.4, 0.02, 4.55, 1, 553); // waiting on a bench
    kit.sit(-11.1, 0.02, 13.45, -1, 887);
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
