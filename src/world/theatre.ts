import * as THREE from 'three';
import { makeSignTexture, SignManager, type ArtEntry } from './signage';
import { AreaKit, MAT, hangPicture, type BuiltArea, type PeopleTier } from './corridor';

export const THEATRE_ID = '__theatre';

export interface TheatreArea extends BuiltArea {
  /** The projection screen — the SlideDeck swaps its material map. */
  screen: THREE.Mesh;
  /** House lights: false dims the hall for filming (L key). */
  setHouseLights: (on: boolean) => void;
  /** `?start=theatre` spawns here, beside the lectern, facing the audience. */
  lecternPos: THREE.Vector3;
  lecternYaw: number;
}

/**
 * The Postgraduate Medical Centre: a 1960s pavilion in the (future) courtyard
 * north of Reception, holding a raked lecture theatre — purpose-built as a
 * backdrop for video presentations. Reached by a glazed link corridor off
 * Reception's north wall. Surface-level only, so it can never collide with
 * any wing's underground storeys; sited inside the Stage 7 racetrack
 * courtyard so it never has to move.
 *
 * Geometry (world coords): link x ∈ [−16.5, −13.5], z ∈ [15, 20];
 * hall x ∈ [−24, −4], z ∈ [20, 33.5]. Entry at the rear-top (y = 0); five
 * 0.35 m tiers rake down to a front pit at −1.75 and a 0.4 m stage dais.
 * Ground-following handles the steps (CLIMB is 0.5).
 */
export function buildTheatre(signs: SignManager, art: ArtEntry[], people: PeopleTier): TheatreArea {
  const group = new THREE.Group();
  group.name = 'area:theatre';
  const kit = new AreaKit(group, new THREE.Vector3(0, 0, 0), signs);

  // hall extents
  const X0 = -24;
  const X1 = -4;
  const Z0 = 20;
  const Z1 = 33.5;
  const CX = (X0 + X1) / 2;
  const CZ = (Z0 + Z1) / 2;
  const ROOF = 4.5; // interior ceiling height (at entry level y=0)
  const TIERS = 5;
  const TIER_D = 1.7;
  const DROP = 0.35;
  const PIT_Y = -TIERS * DROP; // −1.75
  const STAGE_Y = PIT_Y + 0.4; // dais top

  // ---- local materials (the house can dim these without touching the rest
  // of the hospital — every other builder shares the global MAT set) --------
  const wallMat = (MAT.wall as THREE.MeshLambertMaterial).clone();
  const ceilMat = (MAT.ceiling as THREE.MeshLambertMaterial).clone();
  const floorMat = (MAT.floor as THREE.MeshPhongMaterial).clone();
  const ledMat = (MAT.led as THREE.MeshBasicMaterial).clone();
  const darkMat = new THREE.MeshLambertMaterial({ color: 0x2b3138 }); // screen surround, risers
  const brickMat = new THREE.MeshLambertMaterial({ color: 0x8d5f4a }); // 1960s buff-red brick
  const grassMat = new THREE.MeshLambertMaterial({ color: 0x66794f });
  const clearGlass = new THREE.MeshLambertMaterial({ color: 0xcfe0e8, transparent: true, opacity: 0.3 });

  const dimmables: { m: THREE.MeshLambertMaterial | THREE.MeshPhongMaterial; base: THREE.Color }[] = [
    wallMat,
    ceilMat,
    floorMat,
    darkMat,
  ].map((m) => ({ m, base: m.color.clone() }));
  const setHouseLights = (on: boolean) => {
    for (const d of dimmables) d.m.color.copy(d.base).multiplyScalar(on ? 1 : 0.3);
    ledMat.color.set(on ? 0xf7f9ff : 0x40454f);
  };

  // ---- link corridor from Reception (glazed both sides — the pavilion and
  // its lawn are actually visible on the walk over) --------------------------
  const LX = -15; // link centreline
  kit.box(3, 0.1, 5, MAT.floor, LX, -0.05, 17.5, { walkable: true, vinyl: true });
  kit.box(3, 0.1, 5, MAT.ceiling, LX, 3.05, 17.5, { worldUV: true });
  for (const [sx, face] of [
    [LX - 1.575, 'x+'],
    [LX + 1.575, 'x-'],
  ] as const) {
    kit.box(0.15, 1.0, 5, MAT.wall, sx, 0.5, 17.5, { solid: true, trim: [face] });
    kit.box(0.08, 1.7, 5, clearGlass, sx, 1.85, 17.5, { solid: true });
    kit.box(0.15, 0.3, 5, MAT.wall, sx, 2.85, 17.5, {});
    for (const mz of [16.2, 17.5, 18.8]) kit.steelSpec({ w: 0.18, h: 1.7, d: 0.07, x: sx, y: 1.85, z: mz });
  }
  for (const lz of [16.4, 18.6]) kit.led(LX, lz, 2.98);
  // sign over the hall door, facing arrivals from Reception
  kit.sign(
    2.6, 0.62, LX, 2.55, Z0 - 0.09, Math.PI,
    () =>
      makeSignTexture({
        widthPx: 1152,
        heightPx: 260,
        title: 'Postgraduate Medical Centre',
        subtitle: 'lecture theatre · seminars & presentations',
        titleSize: 74,
      }),
    'theatre-door'
  );

  // ---- hall shell -----------------------------------------------------------
  const wallH = ROOF + 2.4; // reaches from below the sunken pit to the ceiling
  const wallY = ROOF - wallH / 2;
  // west wall, with the rear-aisle doorway to the Reference Gallery (z 19.4–21)
  const GZ0 = 19.4;
  const GZ1 = 21.0;
  kit.box(0.15, wallH, GZ0 - Z0, wallMat, X0 - 0.075, wallY, (Z0 + GZ0) / 2, { solid: true });
  kit.box(0.15, wallH, Z1 - GZ1, wallMat, X0 - 0.075, wallY, (GZ1 + Z1) / 2, { solid: true });
  kit.box(0.15, ROOF - 2.3, GZ1 - GZ0, wallMat, X0 - 0.075, (ROOF + 2.3) / 2, (GZ0 + GZ1) / 2, {}); // header
  kit.box(0.15, 2.4, GZ1 - GZ0, wallMat, X0 - 0.075, -1.2, (GZ0 + GZ1) / 2, { solid: true }); // below aisle level
  kit.sign(
    1.9, 0.5, X0 + 0.09, 2.55, (GZ0 + GZ1) / 2, Math.PI / 2,
    () =>
      makeSignTexture({
        widthPx: 960,
        heightPx: 250,
        title: '← Reference Gallery',
        subtitle: 'clause 3.1 definitions · resources annex',
        titleSize: 64,
      }),
    'to-gallery'
  );
  kit.box(0.15, wallH, Z1 - Z0, wallMat, X1 + 0.075, wallY, CZ, { solid: true }); // east
  kit.box(X1 - X0 + 0.3, wallH, 0.15, wallMat, CX, wallY, Z1 + 0.075, { solid: true }); // north (screen wall)
  // south wall with the 2 m entry aperture at the link
  kit.box(-16 - X0, ROOF + 0.2, 0.15, wallMat, (X0 + -16) / 2, ROOF / 2 - 0.1, Z0 - 0.075, { solid: true });
  kit.box(X1 - -14, ROOF + 0.2, 0.15, wallMat, (-14 + X1) / 2, ROOF / 2 - 0.1, Z0 - 0.075, { solid: true });
  kit.box(2, ROOF - 2.3, 0.15, wallMat, LX, (ROOF + 2.3) / 2, Z0 - 0.075, {}); // header
  kit.box(X1 - X0, 0.1, Z1 - Z0, ceilMat, CX, ROOF + 0.05, CZ, { worldUV: true });
  // clerestory daylight strips high on the side walls
  for (const sx of [X0 + 0.11, X1 - 0.11]) {
    kit.box(0.06, 0.8, Z1 - Z0 - 3, MAT.daylight, sx, 3.7, CZ, {});
  }

  // ---- raked floor: rear cross-aisle, five tiers, front pit, stage ---------
  kit.box(X1 - X0, 0.1, 2, floorMat, CX, -0.05, Z0 + 1, { walkable: true, vinyl: true }); // rear aisle
  for (let i = 0; i < TIERS; i++) {
    const y = -DROP * (i + 1);
    const z = Z0 + 2 + TIER_D * i;
    kit.box(X1 - X0, 0.1, TIER_D, floorMat, CX, y - 0.05, z + TIER_D / 2, { walkable: true, vinyl: true });
    kit.box(X1 - X0, DROP, 0.06, darkMat, CX, y + DROP / 2, z + 0.03, {}); // riser face
  }
  const pitZ0 = Z0 + 2 + TIER_D * TIERS; // 30.5
  kit.box(X1 - X0, 0.1, 1, floorMat, CX, PIT_Y - 0.05, pitZ0 + 0.5, { walkable: true, vinyl: true }); // front pit
  kit.box(17, 0.5, 1.85, MAT.oak, CX, STAGE_Y - 0.25, pitZ0 + 1 + 0.925, { walkable: true }); // stage dais

  // ---- seating: rows on every tier, centre aisle kept clear ----------------
  for (let i = 0; i < TIERS; i++) {
    const y = -DROP * (i + 1);
    const z = Z0 + 2 + TIER_D * i + 0.9;
    for (let x = -22.8; x <= -16.45; x += 0.62) kit.chair(x, y, z, 1);
    for (let x = -13.55; x <= -5.2; x += 0.62) kit.chair(x, y, z, 1);
  }

  // ---- stage furniture: screen, surround, proscenium sign, lectern ---------
  const inFace = Z1 - 0.075; // interior face of the north wall
  kit.box(6.7, 4.1, 0.06, darkMat, CX, 0.85, inFace - 0.035, {}); // dark surround
  const screenMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(6, 3.375), screenMat);
  screen.position.set(CX, 0.84, inFace - 0.075);
  screen.rotation.y = Math.PI;
  screen.matrixAutoUpdate = false;
  screen.updateMatrix();
  group.add(screen);
  kit.sign(
    5, 0.7, CX, 3.35, inFace - 0.08, Math.PI,
    () =>
      makeSignTexture({
        widthPx: 1600,
        heightPx: 224,
        title: 'Postgraduate Medical Centre',
        subtitle: 'slides: ← → · PageUp/PageDown (clickers work) · or tap the screen',
        titleSize: 76,
      }),
    'proscenium'
  );
  // lectern (stage left of centre), with a reading light
  kit.box(0.42, 1.05, 0.42, MAT.oak, -17.5, STAGE_Y + 0.525, pitZ0 + 1.7, { solid: true });
  kit.oakSpec({ w: 0.62, h: 0.05, d: 0.5, x: -17.5, y: STAGE_Y + 1.08, z: pitZ0 + 1.7 });
  kit.steelSpec({ w: 0.05, h: 0.3, d: 0.05, x: -17.28, y: STAGE_Y + 1.25, z: pitZ0 + 1.62 });
  // exit sign over the entry, facing the audience
  kit.sign(
    1.7, 0.5, LX, 2.65, Z0 + 0.085, 0,
    () =>
      makeSignTexture({
        widthPx: 900,
        heightPx: 240,
        title: '→ Reception',
        subtitle: 'B returns to your last stop',
        titleSize: 66,
      }),
    'theatre-exit'
  );
  // a pair of Yorkshire views on the rear wall, flanking the entry
  const pick = (s: number) => (art.length ? art[s % art.length] : null);
  hangPicture(kit, pick(5), 5, -19.5, 1.7, Z0 + 0.085, 0, 'theatre:r1');
  hangPicture(kit, pick(11), 11, -10.5, 1.7, Z0 + 0.085, 0, 'theatre:r2');

  // ---- house lights: rows of recessed panels (local material → dimmable) ---
  for (const lx of [-20, CX, -8]) {
    for (const lz of [21.5, 24.5, 27.5, 30.5]) {
      kit.box(0.6, 0.035, 1.3, ledMat, lx, ROOF - 0.02, lz, {});
    }
  }

  // ---- exterior: brick skin, flat roof, lawn (seen from the glazed link) ---
  kit.box(0.12, 7, GZ0 - (Z0 - 0.15), brickMat, X0 - 0.21, 1.0, (Z0 - 0.15 + GZ0) / 2, {});
  kit.box(0.12, 7, Z1 + 0.15 - GZ1, brickMat, X0 - 0.21, 1.0, (GZ1 + Z1 + 0.15) / 2, {});
  kit.box(0.12, 2.2, GZ1 - GZ0, brickMat, X0 - 0.21, 3.4, (GZ0 + GZ1) / 2, {}); // over the gallery link
  kit.box(0.12, 2.5, GZ1 - GZ0, brickMat, X0 - 0.21, -1.25, (GZ0 + GZ1) / 2, {}); // below it
  kit.box(0.12, 7, Z1 - Z0 + 0.3, brickMat, X1 + 0.21, 1.0, CZ, {});
  kit.box(X1 - X0 + 0.7, 7, 0.12, brickMat, CX, 1.0, Z1 + 0.21, {});
  kit.box(-16.6 - (X0 - 0.35), 7, 0.12, brickMat, (X0 - 0.35 + -16.6) / 2, 1.0, Z0 - 0.21, {});
  kit.box(X1 + 0.35 - -13.4, 7, 0.12, brickMat, (-13.4 + X1 + 0.35) / 2, 1.0, Z0 - 0.21, {});
  kit.box(3.2, 1.3, 0.12, brickMat, LX, 3.85, Z0 - 0.21, {}); // band over the link roof
  kit.box(X1 - X0 + 0.9, 0.18, Z1 - Z0 + 0.9, brickMat, CX, ROOF + 0.24, CZ, {}); // roof slab
  // lawn: a ring of grass around the pavilion and link (never under floors)
  const lawn = (x0: number, x1: number, z0: number, z1: number) =>
    kit.box(x1 - x0, 0.06, z1 - z0, grassMat, (x0 + x1) / 2, -0.09, (z0 + z1) / 2, {});
  lawn(-30, X0 - 0.35, 15.2, 38); // west
  lawn(X1 + 0.35, 2, 15.2, 38); // east
  lawn(X0 - 0.35, -16.7, 15.2, Z0 - 0.3); // south-west of the link
  lawn(-13.3, X1 + 0.35, 15.2, Z0 - 0.3); // south-east of the link
  lawn(X0 - 0.35, X1 + 0.35, Z1 + 0.35, 38); // north

  // ---- people: an audience share of the seats, a presenter at the lectern --
  if (people !== 'off') {
    kit.stand(-17.5, STAGE_Y, pitZ0 + 2.15, Math.PI, 4271); // behind the lectern, facing the hall
  }
  kit.populate(people, 6101);
  kit.finalize();
  setHouseLights(true);

  return {
    id: THEATRE_ID,
    wc: null,
    label: 'Postgraduate Medical Centre',
    group,
    colliders: kit.colliders,
    walkables: kit.walkables,
    interactables: [],
    boards: [
      {
        kind: 'screen',
        mesh: screen,
        cells: [
          { rect: [0, 0, 0.35, 1], id: 'prev', label: 'previous slide' },
          { rect: [0.35, 0, 1, 1], id: 'next', label: 'next slide' },
        ],
      },
    ],
    spawnPos: new THREE.Vector3(LX, 0, Z0 + 1.2),
    spawnYaw: Math.PI, // face the stage
    boxes: [
      new THREE.Box3(new THREE.Vector3(X0 - 0.3, -2.5, Z0 - 0.3), new THREE.Vector3(X1 + 0.3, ROOF + 0.3, Z1 + 0.3)),
      new THREE.Box3(new THREE.Vector3(LX - 1.7, -0.5, 15), new THREE.Vector3(LX + 1.7, 3.2, Z0)),
    ],
    screen,
    setHouseLights,
    lecternPos: new THREE.Vector3(-16.6, STAGE_Y, pitZ0 + 1.9),
    lecternYaw: 0, // face the audience
  };
}
