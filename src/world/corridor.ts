import * as THREE from 'three';
import type { World, WorldClass } from '../types';
import {
  makeBoardTexture,
  boardCellRects,
  makeSignTexture,
  makeLazySign,
  makeNoticeTexture,
  makeOldTermsTexture,
  makePrintTexture,
  makePlacardTexture,
  loadImageTexture,
  NHS_BLUE,
  NHS_GREEN,
  SignManager,
  type ArtEntry,
  type BoardRow,
} from './signage';
import { wingColor } from './colors';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { MATS as MAT, mergeBoxMesh, scaleBoxUV, TRIM, type BoxSpec } from './materials';
import { MAT_PEOPLE, seatedPersonGeometry, standingPersonGeometry, personRng } from './people';
import { LiftDoors } from './lifts';
import { G, slug, type Layout } from '../../tools/lib/layout.mjs';

export { MAT };

/** The reception atrium's area id (lives here so the lift boards can target it). */
export const ATRIUM_ID = '__atrium';

export type InteractKind = 'door-out' | 'door-in' | 'door-self' | 'stair-up' | 'stair-down' | 'lift';

export interface Interactable {
  kind: InteractKind;
  /** Area (class id or '__atrium') this trigger lives in. */
  areaId: string;
  /** Association element id for door pairing. */
  elementId?: string;
  label: string;
  /** Candidate destination area ids (walk-through portals have exactly 1). */
  targetIds: string[];
  triggerPos: THREE.Vector3;
  radius: number;
  /** Box trigger (doors): half-extents so only a deliberate step in fires it. */
  halfX?: number;
  halfZ?: number;
  auto: boolean;
  prompt?: string;
  /** Arrival point when this is the *destination* aperture of a paired door. */
  exitPos?: THREE.Vector3;
  exitYaw?: number;
}

export interface BuiltArea {
  id: string;
  wc: WorldClass | null; // null for the atrium and the street
  label: string;
  group: THREE.Group;
  colliders: THREE.Box3[];
  walkables: THREE.Box3[];
  interactables: Interactable[];
  spawnPos: THREE.Vector3;
  spawnYaw: number;
  /** Arrival point inside the lift cab, when the area has one. */
  liftPos?: THREE.Vector3;
  liftYaw?: number;
  /** Animated cab doors + where they are (world), for proximity opening. */
  lift?: { doors: LiftDoors; doorwayPos: THREE.Vector3 };
  /** In-world boards you can click/tap: UV cells resolve to destinations. */
  boards?: {
    kind: 'lift' | 'directory';
    mesh: THREE.Mesh;
    cells: { rect: [number, number, number, number]; id: string; label: string }[];
  }[];
  /** How many note/example notices were hung (content audit). */
  notices?: number;
  /** Tight boxes for "which area am I in" — tested against the FEET position. */
  boxes: THREE.Box3[];
}

const mult = (min: number | null, max: number | null) =>
  min === null && max === null ? '' : `${min ?? 0}..${max === -1 ? '*' : (max ?? '*')}`;

/** Activity tier: how many people populate the hospital. */
export type PeopleTier = 'off' | 'low' | 'full';

export interface BuildCtx {
  world: World;
  byId: Map<string, WorldClass>;
  signs: SignManager;
  layout: Layout;
  /** Curated Wikimedia artwork; empty → procedural placeholder prints. */
  art: ArtEntry[];
  /** Slugs with a generated poster illustration in public/art/illustrations/. */
  illustrations: Set<string> | null;
  /** How busily to populate the hospital with people. */
  people: PeopleTier;
}

type TrimFace = 'x+' | 'x-' | 'z+' | 'z-';

/** Helper bundle so the lobby/landing/street/atrium builders share plumbing. */
export class AreaKit {
  colliders: THREE.Box3[] = [];
  walkables: THREE.Box3[] = [];
  private trims: BoxSpec[] = [];
  private plates: BoxSpec[] = [];
  private glass: BoxSpec[] = [];
  private leds: BoxSpec[] = [];
  private seats: BoxSpec[] = [];

  /** −1 for north-row (180°-rotated) areas, else +1. */
  private f: number;

  constructor(
    public group: THREE.Group,
    public origin: THREE.Vector3,
    public signs: SignManager,
    flip = false
  ) {
    this.f = flip ? -1 : 1;
    group.rotation.y = flip ? Math.PI : 0;
  }

  local(x: number, y: number, z: number) {
    return new THREE.Vector3(this.origin.x + this.f * x, this.origin.y + y, this.origin.z + this.f * z);
  }

  /** Boxes are batched per material and merged in finalize() — one draw call each. */
  private batches = new Map<THREE.Material, (BoxSpec & { worldUV?: boolean })[]>();

  box(
    w: number,
    h: number,
    d: number,
    mat: THREE.Material,
    x: number,
    y: number,
    z: number,
    opts: { solid?: boolean; walkable?: boolean; vinyl?: boolean; worldUV?: boolean; trim?: TrimFace[] } = {
      solid: true,
    }
  ) {
    const item = { w, h, d, x, y, z, worldUV: opts.vinyl || opts.worldUV };
    const list = this.batches.get(mat);
    if (list) list.push(item);
    else this.batches.set(mat, [item]);
    // world-space AABB: a 180° yaw moves the centre but keeps the extents
    const cx = this.origin.x + this.f * x;
    const cz = this.origin.z + this.f * z;
    const b = new THREE.Box3(
      new THREE.Vector3(cx - w / 2, this.origin.y + y - h / 2, cz - d / 2),
      new THREE.Vector3(cx + w / 2, this.origin.y + y + h / 2, cz + d / 2)
    );
    if (opts.solid) this.colliders.push(b);
    if (opts.walkable) this.walkables.push(b);
    if (opts.trim) for (const f of opts.trim) this.trimFace(f, w, h, d, x, y, z);
  }

  /** 6″ oak skirting + trolley rail along one face of a wall box. */
  private trimFace(face: TrimFace, w: number, h: number, d: number, x: number, y: number, z: number) {
    const bottom = y - h / 2;
    const t = 0.05;
    const along = face.startsWith('x') ? { w: t, d: Math.max(0.3, d - 0.1) } : { w: Math.max(0.3, w - 0.1), d: t };
    const off = t / 2 + 0.005;
    const tx = face === 'x+' ? x + w / 2 + off : face === 'x-' ? x - w / 2 - off : x;
    const tz = face === 'z+' ? z + d / 2 + off : face === 'z-' ? z - d / 2 - off : z;
    this.trims.push(
      { ...along, h: TRIM.skirtH, x: tx, y: bottom + TRIM.skirtH / 2, z: tz },
      { ...along, h: TRIM.railH, x: tx, y: bottom + TRIM.railCentre, z: tz }
    );
  }

  /** Recessed LED panel just below a ceiling. */
  led(x: number, z: number, y: number, w = 0.6, d = 0.6) {
    this.leds.push({ w, h: 0.035, d, x, y, z });
  }

  /** Extra oak/steel details merged with the trim batches. */
  oakSpec(s: BoxSpec) {
    this.trims.push(s);
  }
  steelSpec(s: BoxSpec) {
    this.plates.push(s);
  }

  /** Chair positions, recorded so a share of them can be occupied. */
  chairSpots: { x: number; y: number; z: number; face: 1 | -1 }[] = [];
  private peopleGeos: THREE.BufferGeometry[] = [];

  /** Seat a figure at (x, z) facing `face` (subject to the activity tier). */
  sit(x: number, y: number, z: number, face: 1 | -1, seed: number) {
    const g = seatedPersonGeometry(seed);
    if (face === -1) g.rotateY(Math.PI);
    g.translate(x, y, z);
    this.peopleGeos.push(g);
  }

  /** A standing figure at (x, z) facing `yaw` (receptionists and the like). */
  stand(x: number, y: number, z: number, yaw: number, seed: number) {
    const g = standingPersonGeometry(seed);
    g.rotateY(yaw);
    g.translate(x, y, z);
    this.peopleGeos.push(g);
  }

  /**
   * A 1960s utility chair: tubular steel frame, vinyl seat and back.
   * face = +1 looks towards +z, −1 towards −z.
   */
  chair(x: number, yBase: number, z: number, face: 1 | -1 = 1) {
    this.chairSpots.push({ x, y: yBase, z, face });
    const seatY = yBase + 0.45;
    this.seats.push({ w: 0.44, h: 0.06, d: 0.4, x, y: seatY, z });
    this.seats.push({ w: 0.44, h: 0.48, d: 0.05, x, y: seatY + 0.36, z: z - face * 0.19 });
    for (const [lx, lz] of [
      [-0.18, -0.16],
      [0.18, -0.16],
      [-0.18, 0.16],
      [0.18, 0.16],
    ]) {
      this.plates.push({ w: 0.035, h: 0.44, d: 0.035, x: x + lx, y: yBase + 0.22, z: z + lz });
    }
    this.colliders.push(
      new THREE.Box3().setFromPoints([
        this.local(x - 0.26, yBase, z - 0.26),
        this.local(x + 0.26, yBase + 0.95, z + 0.26),
      ])
    );
  }

  /** Vision panel + kick and push plates on a door slab face. */
  doorFurniture(face: TrimFace, x: number, yBottom: number, z: number) {
    const t = 0.02;
    const alongX = face.startsWith('x');
    const glass = alongX ? { w: t, d: 0.28 } : { w: 0.28, d: t };
    const kick = alongX ? { w: t, d: G.DOOR_W - 0.25 } : { w: G.DOOR_W - 0.25, d: t };
    const push = alongX ? { w: t, d: 0.1 } : { w: 0.1, d: t };
    const off = 0.06;
    const fx = face === 'x+' ? x + off : face === 'x-' ? x - off : x;
    const fz = face === 'z+' ? z + off : face === 'z-' ? z - off : z;
    const edge = 0.42; // push plate towards the leading edge
    this.glass.push({ ...glass, h: 0.42, x: fx, y: yBottom + 1.5, z: fz });
    this.plates.push({ ...kick, h: 0.25, x: fx, y: yBottom + 0.13, z: fz });
    this.plates.push({
      ...push,
      h: 0.3,
      x: alongX ? fx : x + edge,
      y: yBottom + 1.05,
      z: alongX ? z + edge : fz,
    });
  }

  /** Occupy a share of the recorded chairs, then merge all figures into one mesh. */
  populate(tier: PeopleTier, seedBase: number) {
    if (tier !== 'off') {
      const density = tier === 'full' ? 0.4 : 0.2;
      const rnd = personRng(seedBase);
      for (const s of this.chairSpots) {
        if (rnd() < density) this.sit(s.x, s.y + 0.03, s.z, s.face, Math.floor(rnd() * 99991));
      }
    }
    if (this.peopleGeos.length) {
      const merged = mergeGeometries(this.peopleGeos);
      this.peopleGeos.forEach((g) => g.dispose());
      const mesh = new THREE.Mesh(merged, MAT_PEOPLE);
      mesh.matrixAutoUpdate = false;
      this.group.add(mesh);
      this.peopleGeos = [];
    }
  }

  /** Merge every batch — walls, floors, doors, trims, plates, glass, LEDs, seats. */
  finalize() {
    for (const [mat, items] of this.batches) {
      const geos = items.map((s) => {
        const g = new THREE.BoxGeometry(s.w, s.h, s.d);
        if (s.worldUV) scaleBoxUV(g, s.w, s.h, s.d);
        g.translate(s.x, s.y, s.z);
        return g;
      });
      const merged = mergeGeometries(geos);
      geos.forEach((g) => g.dispose());
      const mesh = new THREE.Mesh(merged, mat);
      mesh.matrixAutoUpdate = false;
      this.group.add(mesh);
    }
    this.batches.clear();
    for (const m of [
      mergeBoxMesh(this.trims, MAT.oak),
      mergeBoxMesh(this.plates, MAT.steel),
      mergeBoxMesh(this.glass, MAT.glass),
      mergeBoxMesh(this.leds, MAT.led),
      mergeBoxMesh(this.seats, MAT.chair),
    ]) {
      if (m) this.group.add(m);
    }
  }

  sign(
    wM: number,
    hM: number,
    x: number,
    y: number,
    z: number,
    rotY: number,
    make: () => THREE.Texture,
    name: string
  ) {
    const mesh = makeLazySign(this.signs, wM, hM, this.local(x, y, z), make, name);
    mesh.position.set(x, y, z);
    mesh.rotation.y = rotY;
    mesh.matrixAutoUpdate = false;
    mesh.updateMatrix();
    this.group.add(mesh);
    return mesh;
  }
}

/**
 * Build one area at `origin` = (lobby centre x, storey y, 0).
 *
 * Local frame: corridor z ∈ [−len, 0]; lobby z ∈ [0, 7] with a 3 m opening
 * in the back wall (z=7) onto the hospital street (roots) or the parent's
 * landing. Out doors right (+X), in doors left (−X), self-references on the
 * end wall. If the class has home children, a switchback stairwell descends
 * from the lobby pit to their landing (z ∈ [7,10], one storey down), built
 * here too.
 */
export function buildArea(wc: WorldClass, ctx: BuildCtx, origin: THREE.Vector3): BuiltArea {
  const { byId, layout } = ctx;
  const group = new THREE.Group();
  group.name = `area:${wc.label}`;
  group.position.copy(origin);
  const flip = layout.areas[wc.id].flip;
  const flipYaw = flip ? Math.PI : 0;
  const kit = new AreaKit(group, origin, ctx.signs, flip);
  const interactables: Interactable[] = [];
  const color = wingColor(wc.wing);

  const length = layout.areas[wc.id].corridorLen;
  const W = G.CORRIDOR_W;
  const H = G.ROOM_H;
  const LW = G.LOBBY_W;
  const LD = G.LOBBY_D;
  const landing = layout.landings[wc.id];
  const isRoot = wc.supers.length === 0;

  // ---- corridor shell ------------------------------------------------------
  const midZ = -length / 2;
  kit.box(W, 0.1, length, MAT.floor, 0, -0.05, midZ, { walkable: true, vinyl: true });
  kit.box(W, 0.1, length, MAT.ceiling, 0, H + 0.05, midZ, { worldUV: true });
  kit.box(0.15, H, length, MAT.wall, W / 2 + 0.075, H / 2, midZ, { solid: true, trim: ['x-'] });
  kit.box(0.15, H, length, MAT.wall, -W / 2 - 0.075, H / 2, midZ, { solid: true, trim: ['x+'] });
  kit.box(W + 0.3, H, 0.15, MAT.endWall, 0, H / 2, -length - 0.075, { solid: true, trim: ['z+'] });
  for (let i = 0; i < Math.floor(length / 3); i++) kit.led(0, -(i + 0.6) * 3, H - 0.02, 0.35, 1.3);

  // ---- lobby shell ---------------------------------------------------------
  // floor (with the stairwell pit cut out when there are home children)
  if (landing) {
    kit.box(LW / 2 - G.PIT_X1, 0.1, LD, MAT.floor, (G.PIT_X1 + LW / 2) / 2, -0.05, LD / 2, { walkable: true, vinyl: true }); // east of pit
    kit.box(G.PIT_X1 - G.PIT_X0, 0.1, G.PIT_Z0, MAT.floor, (G.PIT_X0 + G.PIT_X1) / 2, -0.05, G.PIT_Z0 / 2, { walkable: true, vinyl: true }); // south strip
    kit.box(G.PIT_X1 - G.PIT_X0, 0.1, LD - G.PIT_Z1, MAT.floor, (G.PIT_X0 + G.PIT_X1) / 2, -0.05, (G.PIT_Z1 + LD) / 2, { walkable: true, vinyl: true }); // north strip (passage ceiling)
  } else {
    kit.box(LW, 0.1, LD, MAT.floor, 0, -0.05, LD / 2, { walkable: true, vinyl: true });
  }
  kit.box(LW, 0.1, LD, MAT.ceiling, 0, H + 0.05, LD / 2, { worldUV: true });
  kit.box(0.15, H, LD, MAT.wall, LW / 2 + 0.075, H / 2, LD / 2, { solid: true, trim: ['x-'] }); // lobby right
  kit.box(0.15, H, LD, MAT.wall, -LW / 2 - 0.075, H / 2, LD / 2, { solid: true, trim: ['x+'] }); // lobby left
  const jw = (LW - W) / 2;
  kit.box(jw, H, 0.15, MAT.wall, W / 2 + jw / 2, H / 2, -0.075, { solid: true, trim: ['z+', 'z-'] }); // junction right
  kit.box(jw, H, 0.15, MAT.wall, -(W / 2 + jw / 2), H / 2, -0.075, { solid: true, trim: ['z+', 'z-'] }); // junction left
  // back wall (z=7) with a 3 m opening onto street / parent landing
  kit.box(2, H, 0.15, MAT.wall, -2.5, H / 2, LD + 0.075, { solid: true, trim: ['z-', 'z+'] }); // jamb left
  kit.box(2, H, 0.15, MAT.wall, 2.5, H / 2, LD + 0.075, { solid: true, trim: ['z-', 'z+'] }); // jamb right
  kit.box(3, H - G.DOOR_H - 0.3, 0.15, MAT.wall, 0, (H + G.DOOR_H + 0.3) / 2, LD + 0.075, {}); // header
  for (const lx of [-1.8, 1.8]) for (const lz of [2, 5]) kit.led(lx, lz, H - 0.02);

  // ceiling-hung concept sign out on the street/landing, perpendicular to the
  // walk direction — the concept is readable from a distance
  const hangH = isRoot ? G.STREET_H : G.ROOM_H;
  const plateY = isRoot ? 2.7 : 2.4;
  for (const s of [1, -1] as const) {
    kit.sign(
      1.6, 0.44, s * 0.015, plateY, LD + 1.35, (s * Math.PI) / 2,
      () =>
        makeSignTexture({
          widthPx: 800,
          heightPx: 220,
          title: wc.label,
          subtitle: wc.roomNumber ? `Room ${wc.roomNumber}` : `${wc.wing} wing`,
          titleSize: 62,
        }),
      `hang:${wc.label}:${s}`
    );
  }
  for (const rx of [-0.6, 0.6]) {
    kit.steelSpec({ w: 0.03, h: hangH - plateY - 0.22, d: 0.03, x: rx, y: (hangH + plateY + 0.22) / 2, z: LD + 1.35 });
  }

  // wing wayfinding line, corridor end to the back opening
  const lineMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(color) });
  kit.box(0.18, 0.012, LD + length, lineMat, 0, 0.012, (LD - length) / 2, {});

  // ---- area name over the corridor opening (faces the lobby) ---------------
  kit.sign(
    2.6, 0.7, 0, H - 0.5, 0.08, 0,
    () =>
      makeSignTexture({
        widthPx: 1024,
        heightPx: 276,
        title: wc.label,
        subtitle: [wc.roomNumber ? `Room ${wc.roomNumber}` : null, `${wc.wing} wing · ${wc.floor ? `level −${wc.floor}` : 'ground'}`]
          .filter(Boolean)
          .join(' · '),
        titleSize: 96,
      }),
    `name:${wc.label}`
  );

  // ---- sign over the back opening (faces the lobby) -------------------------
  const supersLabels = wc.supers.map((id) => byId.get(id)?.label ?? '?');
  kit.sign(
    2.9, 0.62, 0, G.DOOR_H + 0.55, LD - 0.09, Math.PI,
    () =>
      makeSignTexture({
        widthPx: 1152,
        heightPx: 246,
        title: isRoot ? '⌂ Hospital Street' : `Stairs ↑ ${supersLabels[0]}`,
        subtitle: isRoot
          ? 'reception · all wings'
          : `landing · stairs at the west end${supersLabels.length > 1 ? ` · also: ${supersLabels.slice(1).join(', ')}` : ''}`,
        titleSize: 74,
      }),
    `back:${wc.label}`
  );

  // ---- definition poster in the LOBBY (right junction wall) ------------------
  // Readable the moment you arrive — no corridor walk needed. Text auto-fits
  // so even the longest definition is fully legible; R reads it as HTML too.
  kit.sign(
    1.9, 1.5, 2.5, 1.62, 0.01, 0,
    () =>
      makeSignTexture({
        widthPx: 1024,
        heightPx: 810,
        title: wc.label,
        subtitle: [
          wc.plural ? `plural: ${wc.plural}` : null,
          wc.alsoKnownAs.length ? `also: ${wc.alsoKnownAs.join('; ')}` : null,
          wc.roomNumber ? `Room ${wc.roomNumber}` : null,
        ]
          .filter(Boolean)
          .join(' · '),
        body: wc.description ?? 'Definition pending.',
        footer: wc.source ? `Source: ${wc.source}` : undefined,
        fitBody: true,
        titleSize: 88,
        align: 'left',
      }),
    `poster:${wc.label}`
  );
  // illustration (when generated) on the matching left junction wall
  if (ctx.illustrations?.has(slug(wc.label))) {
    kit.oakSpec({ w: 1.3, h: 1.38, d: 0.05, x: -2.5, y: 1.62, z: -0.02 });
    kit.sign(
      1.2, 1.28, -2.5, 1.62, 0.01, 0,
      () => loadImageTexture(`art/illustrations/${slug(wc.label)}.jpg`, 1.2 / 1.28),
      `illu:${wc.label}`
    );
  }
  const selfCount = wc.self.length;

  // ---- old signage: deprecated terms, struck through --------------------------
  if (wc.deprecated.length) {
    kit.sign(
      0.9, 0.42, -(W / 2 - 0.06), 1.9, -1.4, Math.PI / 2,
      () => makeOldTermsTexture(wc.deprecated),
      `old:${wc.label}`
    );
  }

  // ---- notes (left wall) and examples (right wall), past the doors ------------
  const doorRun = Math.max(wc.out.length, wc.in.length, 1) * G.DOOR_SPACING;
  const zoneStart = -(G.ENTRY + doorRun + 0.2);
  const pretty = (key: string, word: string) => {
    const m = key.match(/(\d+)/);
    return m ? `${word} ${m[1]}` : word;
  };
  let notices = 0;
  const placeNotice = (side: 'left' | 'right', i: number, header: string, color: string, body: string) => {
    const sx = side === 'right' ? 1 : -1;
    const z = zoneStart - (i + 0.5) * G.NOTICE_SPACING;
    kit.oakSpec({ w: 0.05, h: 1.34, d: 1.06, x: sx * (W / 2 - 0.035), y: 1.55, z });
    kit.sign(
      0.94, 1.22, sx * (W / 2 - 0.075), 1.55, z, sx > 0 ? -Math.PI / 2 : Math.PI / 2,
      () => makeNoticeTexture(header, color, body),
      `notice:${wc.label}:${header}`
    );
    notices++;
  };
  wc.notes.forEach((n, i) => placeNotice('left', i, pretty(n.key, 'Note'), NHS_BLUE, n.text));
  wc.examples.forEach((e, i) => placeNotice('right', i, pretty(e.key, 'Example'), NHS_GREEN, e.text));

  // the lighter side's leftover wall takes framed Yorkshire artwork + placard
  const diff = wc.notes.length - wc.examples.length;
  const artCount = Math.min(Math.abs(diff), 2);
  for (let a = 0; a < artCount; a++) {
    const side = diff > 0 ? 1 : -1;
    const slot = (diff > 0 ? wc.examples.length : wc.notes.length) + a;
    const z = zoneStart - (slot + 0.5) * G.NOTICE_SPACING;
    const seed = ((wc.id.charCodeAt(0) + wc.id.charCodeAt(3) * 31 + a * 7) >>> 0) % 997;
    const art = ctx.art.length ? ctx.art[seed % ctx.art.length] : null;
    kit.oakSpec({ w: 0.05, h: 1.02, d: 1.36, x: side * (W / 2 - 0.035), y: 1.68, z });
    kit.sign(
      1.28, 0.94, side * (W / 2 - 0.075), 1.68, z, side > 0 ? -Math.PI / 2 : Math.PI / 2,
      () => (art ? loadImageTexture(`art/${art.file}`) : makePrintTexture(seed)),
      `print:${wc.label}:${a}`
    );
    kit.sign(
      0.44, 0.13, side * (W / 2 - 0.075), 1.05, z, side > 0 ? -Math.PI / 2 : Math.PI / 2,
      () =>
        art
          ? makePlacardTexture(art.title, `${art.artist} · ${art.licence} · Wikimedia Commons`)
          : makePlacardTexture('Untitled study', 'Procedural print — placeholder'),
      `placard:${wc.label}:${a}`
    );
  }

  // ---- waiting chairs against the junction walls -------------------------------
  kit.chair(2.35, 0, 0.42, 1);
  kit.chair(2.95, 0, 0.42, 1);
  kit.chair(-2.35, 0, 0.42, 1);
  kit.chair(-2.95, 0, 0.42, 1);

  // ---- association doors ----------------------------------------------------
  const doorZ = (i: number) => -(G.ENTRY + (i + 0.5) * G.DOOR_SPACING);

  const addDoor = (
    side: 'right' | 'left',
    i: number,
    kind: 'door-out' | 'door-in',
    elementId: string,
    label: string,
    otherId: string,
    signTitle: string,
    signSubtitle: string
  ) => {
    const sx = side === 'right' ? 1 : -1;
    const wallX = sx * (W / 2);
    const z = doorZ(i);
    kit.box(0.08, G.DOOR_H, G.DOOR_W, MAT.door, wallX - sx * 0.05, G.DOOR_H / 2, z, {});
    kit.doorFurniture(sx > 0 ? 'x-' : 'x+', wallX - sx * 0.05, 0, z);
    kit.sign(
      1.5, 0.45, wallX - sx * 0.09, G.DOOR_H + 0.45, z,
      sx > 0 ? -Math.PI / 2 : Math.PI / 2,
      () =>
        makeSignTexture({ widthPx: 768, heightPx: 230, title: signTitle, subtitle: signSubtitle, titleSize: 58 }),
      `doorsign:${label}`
    );
    interactables.push({
      kind,
      areaId: wc.id,
      elementId,
      label,
      targetIds: [otherId],
      triggerPos: kit.local(wallX - sx * 0.45, 0, z),
      radius: 0.75,
      halfX: 0.4, // hugs the wall: no accidental firing walking past off-centre
      halfZ: 0.55,
      auto: true,
      // land clear of the return door's trigger zone (0.9 m from its centre)
      exitPos: kit.local(wallX - sx * 1.35, 0, z),
      exitYaw: (sx > 0 ? Math.PI / 2 : -Math.PI / 2) + flipYaw,
    });
  };

  wc.out.forEach((d, i) => {
    const dest = byId.get(d.targetId)?.label ?? '?';
    addDoor('right', i, 'door-out', d.elementId, d.label, d.targetId, `${d.label} ${mult(d.min, d.max)}`, `→ ${dest}`);
  });
  wc.in.forEach((d, i) => {
    const src = byId.get(d.sourceId)?.label ?? '?';
    addDoor('left', i, 'door-in', d.elementId, d.label, d.sourceId, src, `${d.label} →`);
  });

  // ---- pictures on the bare walls ---------------------------------------------
  // the lighter door wall's empty slots (every other one) + one in the entry
  const pickArt = (seed: number) => (ctx.art.length ? ctx.art[seed % ctx.art.length] : null);
  const artSeed = (n: number) => ((wc.id.charCodeAt(1) * 17 + wc.id.charCodeAt(5) * 5 + n * 31) >>> 0) % 997;
  const maxSlots = Math.max(wc.out.length, wc.in.length, 1);
  const fillWall = (side: 'right' | 'left', from: number) => {
    const sx = side === 'right' ? 1 : -1;
    for (let i = from; i < maxSlots; i += 2) {
      const s = artSeed(i * 2 + (sx > 0 ? 1 : 0));
      hangPicture(kit, pickArt(s), s, sx * (W / 2 - 0.075), 1.68, doorZ(i), sx > 0 ? -Math.PI / 2 : Math.PI / 2, `${wc.label}:${side}:${i}`);
    }
  };
  if (wc.out.length < maxSlots) fillWall('right', wc.out.length);
  if (wc.in.length < maxSlots) fillWall('left', wc.in.length);
  {
    const s = artSeed(99);
    hangPicture(kit, pickArt(s), s, W / 2 - 0.075, 1.68, -1.15, -Math.PI / 2, `${wc.label}:entry`);
  }

  // ---- self-references: doors at the very end (pig's ears) -------------------
  wc.self.forEach((d, i) => {
    const x = W / 2 - 0.8 - i * (G.DOOR_W + 0.2);
    kit.box(G.DOOR_W, G.DOOR_H, 0.08, MAT.door, x, G.DOOR_H / 2, -length + 0.06, {});
    kit.doorFurniture('z+', x, 0, -length + 0.06);
    kit.sign(
      1.3, 0.4, x, G.DOOR_H + 0.4, -length + 0.07, 0,
      () =>
        makeSignTexture({
          widthPx: 768,
          heightPx: 236,
          title: `${d.label} ${mult(d.min, d.max)}`,
          subtitle: `→ ${wc.label}`,
          titleSize: 56,
        }),
      `selfsign:${d.label}`
    );
    interactables.push({
      kind: 'door-self',
      areaId: wc.id,
      elementId: d.elementId,
      label: d.label,
      targetIds: [wc.id],
      triggerPos: kit.local(x, 0, -length + 0.5),
      radius: 0.7,
      halfX: 0.55,
      halfZ: 0.45,
      auto: true,
    });
  });
  if (!selfCount) {
    // dead end: a fire exit (period NHS green) rather than a blank wall
    kit.box(0.08, G.DOOR_H, G.DOOR_W, MAT.door, 0, G.DOOR_H / 2, -length + 0.06, {});
    kit.doorFurniture('z+', 0, 0, -length + 0.06);
    kit.sign(
      1.1, 0.34, 0, G.DOOR_H + 0.35, -length + 0.07, 0,
      () =>
        makeSignTexture({
          widthPx: 640,
          heightPx: 198,
          title: 'FIRE EXIT',
          subtitle: 'emergency use only',
          background: NHS_GREEN,
          titleSize: 78,
          align: 'center',
        }),
      `fire:${wc.label}`
    );
  }

  // ---- walk-in lift cab in the back-right corner of the lobby ----------------
  const hasLift = wc.supers.length > 0 || wc.subs.length > 0;
  let liftPos: THREE.Vector3 | undefined;
  let liftYaw: number | undefined;
  let lift: BuiltArea['lift'];

  // destination board data — computed once, shared by the lobby board, the
  // in-cab board, and their tappable cells
  const boardRows: BoardRow[] = [];
  const boardDests: (string | null)[] = [];
  {
    const anc = ancestorLevels(wc, byId);
    const maxLevel = anc.length ? Math.max(...anc.map((a) => a.level)) : 0;
    for (let lv = maxLevel; lv >= 1; lv--) {
      for (const a of anc.filter((x) => x.level === lv)) {
        const c = byId.get(a.id);
        boardRows.push({ text: `▲${lv} ${c?.label ?? '?'}`, chip: wingColor(c?.wing ?? '') });
        boardDests.push(a.id);
      }
    }
    boardRows.push({ text: `● ${wc.label}`, strong: true, chip: color });
    boardDests.push(null); // you are here
    for (const id of wc.subs) {
      const c = byId.get(id);
      boardRows.push({ text: `▼1 ${c?.label ?? '?'}`, chip: wingColor(c?.wing ?? '') });
      boardDests.push(id);
    }
    boardRows.push({ text: '⌂ Reception' });
    boardDests.push(ATRIUM_ID);
  }
  const boardSpec = {
    widthPx: 850,
    heightPx: 750,
    title: hasLift ? 'Lift' : 'Exit',
    subtitle: wc.label,
    rows: boardRows,
    rowSize: boardRows.length > 10 ? 30 : 38,
    columns: boardRows.length > 10 ? 2 : 1,
  };
  const boardCells = (() => {
    const rects = boardCellRects(boardSpec, boardRows.length);
    return boardRows.flatMap((r, i) =>
      rects[i] && boardDests[i]
        ? [{ rect: rects[i]!, id: boardDests[i]!, label: r.text.replace(/^[▲▼●⌂]\S* ?/u, '') }]
        : []
    );
  })();
  let cabBoardMesh: THREE.Mesh | undefined;

  if (hasLift) {
    const cx0 = 2.0;
    const cx1 = 3.42;
    const cz0 = 4.85;
    const cz1 = 6.45;
    const ccx = (cx0 + cx1) / 2;
    const ccz = (cz0 + cz1) / 2;
    const cabH = 2.4;
    // west face with the doorway (opening z ∈ [5.15, 6.15])
    kit.box(0.08, cabH, 5.15 - cz0, MAT.liftDoor, cx0 + 0.04, cabH / 2, (cz0 + 5.15) / 2);
    kit.box(0.08, cabH, cz1 - 6.15, MAT.liftDoor, cx0 + 0.04, cabH / 2, (6.15 + cz1) / 2);
    kit.box(0.08, cabH - G.DOOR_H, 1.0, MAT.liftDoor, cx0 + 0.04, (cabH + G.DOOR_H) / 2, 5.65, {});
    kit.box(cx1 - cx0, cabH, 0.08, MAT.liftDoor, ccx, cabH / 2, cz0 + 0.04); // south
    kit.box(cx1 - cx0, cabH, 0.08, MAT.liftDoor, ccx, cabH / 2, cz1 - 0.04); // north
    kit.box(cx1 - cx0, 0.06, cz1 - cz0, MAT.liftDoor, ccx, cabH + 0.03, ccz, {}); // cab ceiling
    kit.led(ccx, ccz, cabH - 0.02, 0.5, 0.5);

    // ---- lift realism: sliding doors + furniture ----------------------------
    lift = { doors: new LiftDoors(group, cx0 + 0.1, 5.65), doorwayPos: kit.local(cx0 + 0.05, 0, 5.65) };
    // stainless architrave: jambs, header strip, threshold plate
    kit.steelSpec({ w: 0.06, h: 2.12, d: 0.09, x: cx0 - 0.01, y: 1.06, z: 5.12 });
    kit.steelSpec({ w: 0.06, h: 2.12, d: 0.09, x: cx0 - 0.01, y: 1.06, z: 6.18 });
    kit.steelSpec({ w: 0.06, h: 0.09, d: 1.15, x: cx0 - 0.01, y: 2.14, z: 5.65 });
    kit.steelSpec({ w: 0.16, h: 0.02, d: 1.05, x: cx0 + 0.02, y: 0.012, z: 5.65 });
    // call plate on the lobby side, south of the doorway
    kit.steelSpec({ w: 0.03, h: 0.26, d: 0.16, x: cx0 - 0.015, y: 1.12, z: 4.99 });
    kit.sign(
      0.1, 0.2, cx0 - 0.035, 1.12, 4.99, -Math.PI / 2,
      () => makeSignTexture({ widthPx: 64, heightPx: 128, title: '▲', subtitle: '▼', titleSize: 40, align: 'center' }),
      `liftcall:${wc.label}`
    );
    // "LIFT" indicator on the header, showing this floor
    kit.sign(
      0.72, 0.24, cx0 - 0.015, 2.27, 5.65, -Math.PI / 2,
      () =>
        makeSignTexture({
          widthPx: 384,
          heightPx: 128,
          title: 'LIFT',
          subtitle: wc.floor ? `level −${wc.floor}` : 'ground',
          titleSize: 56,
          align: 'center',
        }),
      `liftind:${wc.label}`
    );
    // interior: handrail on three sides, load plate, period no-smoking sign
    kit.steelSpec({ w: 1.24, h: 0.05, d: 0.04, x: ccx + 0.04, y: 0.92, z: cz0 + 0.13 });
    kit.steelSpec({ w: 1.24, h: 0.05, d: 0.04, x: ccx + 0.04, y: 0.92, z: cz1 - 0.13 });
    kit.steelSpec({ w: 0.04, h: 0.05, d: 1.44, x: cx1 - 0.13, y: 0.92, z: ccz });
    kit.sign(
      0.42, 0.15, ccx + 0.35, 2.02, cz0 + 0.09, 0,
      () =>
        makeSignTexture({
          widthPx: 336,
          heightPx: 120,
          title: 'MAX 8 PERSONS · 610 kg',
          titleSize: 30,
          align: 'center',
          background: '#e8e9e4',
          color: '#3a4046',
        }),
      `liftload:${wc.label}`
    );
    kit.sign(
      0.4, 0.14, ccx - 0.2, 1.78, cz1 - 0.09, Math.PI,
      () =>
        makeSignTexture({
          widthPx: 320,
          heightPx: 112,
          title: 'NO SMOKING',
          titleSize: 40,
          align: 'center',
          background: '#f4f4f1',
          color: '#b3261e',
        }),
      `liftsmoke:${wc.label}`
    );
    // in-cab destination board: tap a row to ride (same cells as the lobby's)
    cabBoardMesh = kit.sign(0.95, 1.05, ccx - 0.08, 1.3, cz0 + 0.09, 0, () => makeBoardTexture(boardSpec), `liftcab:${wc.label}`);
    liftPos = kit.local(ccx, 0, ccz);
    liftYaw = Math.PI / 2 + flipYaw; // arriving passengers face the doorway
    interactables.push({
      kind: 'lift',
      areaId: wc.id,
      label: 'Lift',
      targetIds: [],
      triggerPos: liftPos.clone(),
      radius: 0.75,
      auto: false,
      prompt: 'E — Lift: select destination',
    });
  }
  // lobby lift/exit destination board — same shared spec + cells as the cab's
  const boardMesh = kit.sign(
    1.7, 1.5, LW / 2 - 0.09, 1.7, 3.1, -Math.PI / 2,
    () => makeBoardTexture(boardSpec),
    `liftboard:${wc.label}`
  );
  let boards: BuiltArea['boards'];
  if (hasLift) {
    boards = [{ kind: 'lift', mesh: boardMesh, cells: boardCells }];
    if (cabBoardMesh) boards.push({ kind: 'lift', mesh: cabBoardMesh, cells: boardCells });
  }

  // ---- non-primary parents: portal stair doors on the left lobby wall --------
  wc.supers.slice(1).forEach((pid, i) => {
    const p = byId.get(pid);
    const z = 6.35 - i * 1.15;
    kit.box(0.1, G.DOOR_H, 1.0, MAT.door, -(LW / 2) + 0.06, G.DOOR_H / 2, z, {});
    kit.doorFurniture('x+', -(LW / 2) + 0.06, 0, z);
    kit.sign(
      1.35, 0.42, -(LW / 2) + 0.1, G.DOOR_H + 0.4, z, Math.PI / 2,
      () =>
        makeSignTexture({
          widthPx: 768,
          heightPx: 240,
          title: `Stairs ↑ ${p?.label ?? '?'}`,
          subtitle: `${p?.wing ?? '?'} wing`,
          titleSize: 56,
        }),
      `upportal:${p?.label}`
    );
    interactables.push({
      kind: 'stair-up',
      areaId: wc.id,
      label: `Stairs ↑ ${p?.label ?? '?'}`,
      targetIds: [pid],
      triggerPos: kit.local(-(LW / 2) + 0.5, 0, z),
      radius: 0.7,
      halfX: 0.45,
      halfZ: 0.55,
      auto: true,
    });
  });

  // ---- real stairwell + landing below (home children) ------------------------
  if (landing) {
    buildStairwellAndLanding(wc, kit, interactables, ctx);
  } else if (wc.subs.length) {
    // all subtypes are homed under other parents: portal doors on the left wall
    wc.subs.forEach((cid, i) => {
      const c = byId.get(cid);
      const z = 4.6 - i * 1.15;
      kit.box(0.1, G.DOOR_H, 1.0, MAT.door, -(LW / 2) + 0.06, G.DOOR_H / 2, z, {});
      kit.doorFurniture('x+', -(LW / 2) + 0.06, 0, z);
      kit.sign(
        1.35, 0.42, -(LW / 2) + 0.1, G.DOOR_H + 0.4, z, Math.PI / 2,
        () =>
          makeSignTexture({
            widthPx: 768,
            heightPx: 240,
            title: `↓ ${c?.label ?? '?'}`,
            subtitle: `homed in ${c?.wing ?? '?'} wing`,
            titleSize: 56,
          }),
        `downportal:${c?.label}`
      );
      interactables.push({
        kind: 'stair-down',
        areaId: wc.id,
        label: `Stairs ↓ ${c?.label ?? '?'}`,
        targetIds: [cid],
        triggerPos: kit.local(-(LW / 2) + 0.5, 0, z),
        radius: 0.7,
        halfX: 0.45,
        halfZ: 0.55,
        auto: true,
      });
    });
  }

  // pit-side board listing all subtypes (kept from Stage 1, on the left wall)
  if (wc.subs.length) {
    const subsLabels = wc.subs.map((id) => byId.get(id)?.label ?? '?');
    kit.sign(
      1.9, 0.85, -(LW / 2) + 0.09, 2.45, 3.3, Math.PI / 2,
      () =>
        makeBoardTexture({
          widthPx: 900,
          heightPx: 400,
          title: 'Stairs ↓',
          rows: subsLabels.map((l) => ({ text: l })),
          rowSize: subsLabels.length > 6 ? 34 : 44,
          columns: subsLabels.length > 8 ? 2 : 1,
        }),
      `stairsdown:${wc.label}`
    );
  }

  // tight membership boxes (tested against the feet); lobby and corridor are
  // separate so the small lobby box always beats a parent's wide landing box.
  // setFromPoints because flipped areas swap the corner order.
  const boxes = [
    new THREE.Box3().setFromPoints([kit.local(-LW / 2 - 0.3, -0.5, -0.2), kit.local(LW / 2 + 0.3, 2.5, LD + 0.2)]),
    new THREE.Box3().setFromPoints([kit.local(-W / 2 - 0.4, -0.5, -length - 0.5), kit.local(W / 2 + 0.4, 2.5, 0)]),
  ];
  if (landing) {
    // the stair shaft (spans both storeys) and the landing one storey down
    boxes.push(
      new THREE.Box3(
        kit.local(G.PIT_X0 - 0.2, -G.STOREY - 0.5, G.PIT_Z0 - 0.2),
        kit.local(G.PIT_X1 + 0.2, 2.5, LD + 0.2)
      ),
      new THREE.Box3(
        new THREE.Vector3(landing.x0 - 0.3, origin.y - G.STOREY - 0.5, origin.z + 5.4),
        new THREE.Vector3(landing.x1 + 0.3, origin.y - G.STOREY + 2.5, origin.z + G.LANDING_Z1 + 0.3)
      )
    );
  }

  kit.populate(ctx.people, (wc.id.charCodeAt(0) * 131 + wc.id.charCodeAt(4) * 17 + wc.id.charCodeAt(8)) >>> 0);
  kit.finalize();

  return {
    id: wc.id,
    wc,
    label: wc.label,
    group,
    colliders: kit.colliders,
    walkables: kit.walkables,
    interactables,
    spawnPos: kit.local(0, 0, 4.6),
    spawnYaw: flipYaw,
    liftPos,
    liftYaw,
    lift,
    boards,
    notices,
    boxes,
  };
}

/** Switchback stairwell in the lobby pit + the children's landing one storey down. */
function buildStairwellAndLanding(
  wc: WorldClass,
  kit: AreaKit,
  interactables: Interactable[],
  ctx: BuildCtx
) {
  const { byId, layout } = ctx;
  const landing = layout.landings[wc.id]!;
  const origin = kit.origin;
  const S = G.STOREY; // 4
  const pitW = G.PIT_X1 - G.PIT_X0; // 2.8
  const laneW = pitW / 2 - 0.1; // 1.3
  const westX = (G.PIT_X0 + G.PIT_X0 + laneW) / 2 + 0.0; // west lane centre
  const westLaneC = G.PIT_X0 + laneW / 2;
  const eastLaneC = G.PIT_X1 - laneW / 2;
  const HALF = 0.8; // half-landing depth — roomy enough to turn (player r=0.3)
  const run = G.PIT_Z1 - G.PIT_Z0 - HALF; // 3.5 m flight run
  const nT = 12;
  const going = run / nT;
  void westX;

  // flight A (west lane): descends from the lobby (z=PIT_Z1) north→south
  for (let t = 0; t < nT; t++) {
    const topY = -((t + 1) * (S / 2)) / nT;
    kit.box(laneW, 0.09, going + 0.02, MAT.stair, westLaneC, topY - 0.045, G.PIT_Z1 - (t + 0.5) * going, { walkable: true });
  }
  // half landing at the south end
  kit.box(pitW, 0.1, HALF, MAT.stair, (G.PIT_X0 + G.PIT_X1) / 2, -S / 2 - 0.05, G.PIT_Z0 + HALF / 2, { walkable: true });
  // flight B (east lane): descends south→north to one storey down
  for (let t = 0; t < nT; t++) {
    const topY = -S / 2 - ((t + 1) * (S / 2)) / nT;
    kit.box(laneW, 0.09, going + 0.02, MAT.stair, eastLaneC, topY - 0.045, G.PIT_Z0 + HALF + (t + 0.5) * going, { walkable: true });
  }
  // passage from the stair foot under the lobby back strip to the landing
  kit.box(pitW, 0.1, G.LOBBY_D - G.PIT_Z1 + 0.1, MAT.floor, (G.PIT_X0 + G.PIT_X1) / 2, -S - 0.05, (G.PIT_Z1 + G.LOBBY_D) / 2, { walkable: true, vinyl: true });

  // shaft walls & rails
  const shaftH = S + G.ROOM_H; // full depth wall from pit bottom to lobby ceiling
  kit.box(0.1, shaftH, G.LOBBY_D - G.PIT_Z0, MAT.stairDark, G.PIT_X0 - 0.05, -S + shaftH / 2 - G.ROOM_H, (G.PIT_Z0 + G.LOBBY_D) / 2); // west side (under lobby wall)
  kit.box(0.1, S, G.PIT_Z1 - G.PIT_Z0, MAT.stairDark, G.PIT_X1 + 0.05, -S / 2, (G.PIT_Z0 + G.PIT_Z1) / 2); // east side below floor
  kit.box(0.1, S, G.LOBBY_D - G.PIT_Z1, MAT.stairDark, G.PIT_X1 + 0.05, -S / 2, (G.PIT_Z1 + G.LOBBY_D) / 2); // passage east wall
  kit.box(pitW + 0.2, S, 0.1, MAT.stairDark, (G.PIT_X0 + G.PIT_X1) / 2, -S / 2, G.PIT_Z0 - 0.05); // south end
  // divider between the two flights (from pit bottom up to a lobby-level rail)
  kit.box(0.09, S + 0.9, G.PIT_Z1 - G.PIT_Z0 - 0.8, MAT.rail, (G.PIT_X0 + G.PIT_X1) / 2, (0.9 - S) / 2, (G.PIT_Z0 + 0.8 + G.PIT_Z1) / 2);
  // lobby-level guard rails: east edge, south edge, and north edge east lane
  kit.box(0.08, 0.9, G.PIT_Z1 - G.PIT_Z0, MAT.rail, G.PIT_X1 + 0.04, 0.45, (G.PIT_Z0 + G.PIT_Z1) / 2);
  kit.box(pitW, 0.9, 0.08, MAT.rail, (G.PIT_X0 + G.PIT_X1) / 2, 0.45, G.PIT_Z0 - 0.04);
  kit.box(laneW + 0.2, 0.9, 0.08, MAT.rail, eastLaneC, 0.45, G.PIT_Z1 + 0.04); // entry stays open on the west lane

  // ---- the landing (one storey down, z ∈ [7,10], spanning the children) ------
  const y = -S;
  const lx0 = landing.x0 - origin.x;
  const lx1 = landing.x1 - origin.x;
  const lw = lx1 - lx0;
  const lcx = (lx0 + lx1) / 2;
  const zc = (G.LANDING_Z0 + G.LANDING_Z1) / 2;

  kit.box(lw, 0.1, 3, MAT.floor, lcx, y - 0.05, zc, { walkable: true, vinyl: true });
  kit.box(lw, 0.1, 3, MAT.ceiling, lcx, y + G.ROOM_H + 0.05, zc, { worldUV: true });
  kit.box(0.15, G.ROOM_H, 3.3, MAT.wall, lx0 - 0.075, y + G.ROOM_H / 2, zc, { solid: true, trim: ['x+'] }); // west cap
  kit.box(0.15, G.ROOM_H, 3.3, MAT.wall, lx1 + 0.075, y + G.ROOM_H / 2, zc, { solid: true, trim: ['x-'] }); // east cap
  for (let i = 0; i < Math.floor(lw / 3.5); i++) kit.led(lx0 + (i + 0.5) * 3.5, zc, y + G.ROOM_H - 0.02, 0.35, 1.3);

  // double-loaded walls: lobbies open off both sides (children build their own
  // jambs), so each wall is the complement of that row's openings
  const band = (cid: string): [number, number] => {
    const cx = layout.areas[cid].x - origin.x;
    return [cx - G.LOBBY_W / 2, cx + G.LOBBY_W / 2];
  };
  const wallFill = (z: number, trim: 'z+' | 'z-', gapsIn: [number, number][]): [number, number][] => {
    const segs: [number, number][] = [];
    const gaps = [...gapsIn].sort((a, b) => a[0] - b[0]);
    let cursor = lx0;
    for (const [g0, g1] of gaps) {
      if (g0 > cursor) {
        kit.box(g0 - cursor, G.ROOM_H, 0.15, MAT.wall, (cursor + g0) / 2, y + G.ROOM_H / 2, z, { solid: true, trim: [trim] });
        segs.push([cursor, g0]);
      }
      cursor = Math.max(cursor, g1);
    }
    if (lx1 > cursor) {
      kit.box(lx1 - cursor, G.ROOM_H, 0.15, MAT.wall, (cursor + lx1) / 2, y + G.ROOM_H / 2, z, { solid: true, trim: [trim] });
      segs.push([cursor, lx1]);
    }
    return segs;
  };
  const northBands = landing.northIds.map(band);
  const southSegs = wallFill(G.LANDING_Z0 - 0.075, 'z+', [[G.PIT_X0, G.PIT_X1], ...landing.southIds.map(band)]);
  wallFill(G.LANDING_Z1 + 0.075, 'z-', northBands);
  // pictures along the bare stretches of the south wall (the north wall keeps
  // its space for portal doors, the stair sign and the chairs)
  for (const [a, b] of southSegs) {
    if (b - a < 4.5) continue;
    for (let ax = a + 2.3; ax <= b - 2.3; ax += 6.5) {
      const s = ((Math.round(ax * 13) + wc.id.charCodeAt(2)) >>> 0) % 997;
      hangPicture(kit, ctx.art.length ? ctx.art[s % ctx.art.length] : null, s, ax, y + 1.7, G.LANDING_Z0 + 0.01, 0, `${wc.label}:land:${Math.round(ax)}`);
    }
  }

  // sign at the stair foot on the north wall: the way back up
  kit.sign(
    2.4, 0.6, (G.PIT_X0 + G.PIT_X1) / 2, y + G.DOOR_H + 0.5, G.LANDING_Z1 - 0.09, Math.PI,
    () =>
      makeSignTexture({
        widthPx: 1024,
        heightPx: 256,
        title: `Stairs ↑ ${wc.label}`,
        subtitle: `${wc.wing} wing · ${wc.floor ? `level −${wc.floor}` : 'ground'}`,
        titleSize: 72,
      }),
    `landingup:${wc.label}`
  );

  // portal doors on the north wall for subtypes homed in other wings —
  // sliding east past any north-row lobby openings
  let px = G.PIT_X1 + 1.6;
  const dodgeNorth = (x: number): number => {
    for (const [b0, b1] of northBands) if (x > b0 - 0.85 && x < b1 + 0.85) return b1 + 0.95;
    return x;
  };
  landing.portalChildIds.forEach((cid) => {
    const c = byId.get(cid);
    let x = dodgeNorth(px);
    while (x !== px) {
      px = x;
      x = dodgeNorth(px);
    }
    px = Math.min(px, lx1 - 1.0);
    x = px;
    px += 2.0;
    kit.box(0.08, G.DOOR_H, G.DOOR_W, MAT.door, x, y + G.DOOR_H / 2, G.LANDING_Z1 - 0.05, {});
    kit.doorFurniture('z-', x, y, G.LANDING_Z1 - 0.05);
    kit.sign(
      1.5, 0.45, x, y + G.DOOR_H + 0.45, G.LANDING_Z1 - 0.09, Math.PI,
      () =>
        makeSignTexture({
          widthPx: 768,
          heightPx: 230,
          title: `↓ ${c?.label ?? '?'}`,
          subtitle: `homed in ${c?.wing ?? '?'} wing`,
          titleSize: 58,
        }),
      `downportal:${c?.label}`
    );
    interactables.push({
      kind: 'stair-down',
      areaId: wc.id,
      label: `Stairs ↓ ${c?.label ?? '?'}`,
      targetIds: [cid],
      triggerPos: kit.local(x, -S, G.LANDING_Z1 - 0.5),
      radius: 0.7,
      halfX: 0.55,
      halfZ: 0.45,
      auto: true,
    });
  });

  // a few waiting chairs at the east end, clear of doors and openings
  for (let i = 0; i < 3; i++) {
    const chx = lx1 - 0.8 - i * 0.6;
    if (chx < px + 0.8) break;
    if (northBands.some(([b0, b1]) => chx > b0 - 0.45 && chx < b1 + 0.45)) continue;
    kit.chair(chx, y, G.LANDING_Z1 - 0.45, -1);
  }
}

/** A framed picture (curated Wikimedia art or a procedural print) + placard. */
export function hangPicture(
  kit: AreaKit,
  art: ArtEntry | null,
  seed: number,
  x: number,
  y: number,
  z: number,
  rotY: number,
  name: string
) {
  const nx = Math.sin(rotY);
  const nz = Math.cos(rotY);
  const xFacing = Math.abs(nx) > 0.5;
  kit.oakSpec({
    w: xFacing ? 0.05 : 1.36,
    h: 1.02,
    d: xFacing ? 1.36 : 0.05,
    x: x - nx * 0.045,
    y,
    z: z - nz * 0.045,
  });
  kit.sign(
    1.28, 0.94, x, y, z, rotY,
    () => (art ? loadImageTexture(`art/${art.file}`) : makePrintTexture(seed)),
    `pic:${name}`
  );
  kit.sign(
    0.44, 0.13, x, y - 0.62, z, rotY,
    () =>
      art
        ? makePlacardTexture(art.title, `${art.artist} · ${art.licence} · Wikimedia Commons`)
        : makePlacardTexture('Untitled study', 'Procedural print — placeholder'),
    `picplacard:${name}`
  );
}

/** Transitive ancestors with BFS level (1 = direct parent). */
export function ancestorLevels(
  wc: WorldClass,
  byId: Map<string, WorldClass>
): { id: string; level: number }[] {
  const res = new Map<string, number>();
  let frontier = [wc.id];
  let level = 0;
  while (frontier.length) {
    level++;
    const next: string[] = [];
    for (const f of frontier) {
      for (const p of byId.get(f)?.supers ?? []) {
        if (!res.has(p)) {
          res.set(p, level);
          next.push(p);
        }
      }
    }
    frontier = next;
  }
  return [...res].map(([id, lv]) => ({ id, level: lv }));
}
