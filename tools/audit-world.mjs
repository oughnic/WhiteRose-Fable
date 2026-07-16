#!/usr/bin/env node
/**
 * audit-world.mjs — Stage 1 exit-criteria audit.
 *
 * 1. Rebuilds the world from data/*.json and compares with public/world.json
 *    (is the published world stale or hand-edited?).
 * 2. Checks graph invariants of world.json:
 *    - ids unique; every referenced id exists
 *    - out/in doors mirror each other exactly (same association element ids)
 *    - supers/subs mirror each other
 *    - floor 0 ⇔ no supertypes; floors descend correctly along primary chain
 *    - every area reachable from the atrium via doors + stairs + lifts
 *      (atrium → wing/annex roots; lift also reaches Reception)
 * 3. Prints door/stair/lift counts — the numbers the 3D build must match
 *    (the runtime __hospital.audit() checks the built geometry against these).
 *
 * Exit code 1 on any failure.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { buildWorld } from './lib/core.mjs';
import { computeLayout, corridorLen, G } from './lib/layout.mjs';

const SOURCE = process.argv[2] ?? 'data/A-system-of-concepts-for-the-continuity-of-care.json';
const WORLD = 'public/world.json';

let failures = 0;
const fail = (msg) => {
  failures++;
  console.error(`FAIL  ${msg}`);
};
const pass = (msg) => console.log(`ok    ${msg}`);

const world = JSON.parse(readFileSync(WORLD, 'utf8'));

// ---- 1. freshness ----------------------------------------------------------
const rebuilt = buildWorld(JSON.parse(readFileSync(SOURCE, 'utf8')), SOURCE).world;
const strip = (w) => JSON.stringify({ ...w, meta: { ...w.meta, generatedAt: null } });
if (strip(rebuilt) === strip(world)) pass(`world.json is up to date with ${SOURCE}`);
else fail(`world.json is stale — run \`npm run world\``);

// ---- 2. invariants ----------------------------------------------------------
const classes = world.classes;
const byId = new Map(classes.map((c) => [c.id, c]));

if (byId.size === classes.length) pass(`ids unique (${classes.length} classes)`);
else fail('duplicate class ids');

let refsOk = true;
for (const c of classes) {
  for (const id of [...c.supers, ...c.subs, ...c.out.map((d) => d.targetId), ...c.in.map((d) => d.sourceId)]) {
    if (!byId.has(id)) {
      refsOk = false;
      fail(`dangling reference ${id} on "${c.label}"`);
    }
  }
}
if (refsOk) pass('all supers/subs/door references resolve');

// out/in mirroring by association element id
const outEdges = new Map(); // elementId -> {from, to}
const inEdges = new Map();
for (const c of classes) {
  for (const d of c.out) outEdges.set(d.elementId, { from: c.id, to: d.targetId });
  for (const d of c.in) inEdges.set(d.elementId, { from: d.sourceId, to: c.id });
}
let mirrorOk = outEdges.size === inEdges.size;
for (const [el, e] of outEdges) {
  const m = inEdges.get(el);
  if (!m || m.from !== e.from || m.to !== e.to) {
    mirrorOk = false;
    fail(`association ${el} not mirrored (out ${byId.get(e.from)?.label} → ${byId.get(e.to)?.label})`);
  }
}
if (mirrorOk) pass(`out/in doors mirror exactly (${outEdges.size} associations)`);

// supers/subs mirroring
let hierOk = true;
for (const c of classes) {
  for (const p of c.supers) if (!byId.get(p).subs.includes(c.id)) { hierOk = false; fail(`subs of "${byId.get(p).label}" missing "${c.label}"`); }
  for (const s of c.subs) if (!byId.get(s).supers.includes(c.id)) { hierOk = false; fail(`supers of "${byId.get(s).label}" missing "${c.label}"`); }
}
if (hierOk) pass('supers/subs mirror exactly');

// floors
let floorOk = true;
for (const c of classes) {
  if ((c.floor === 0) !== (c.supers.length === 0)) {
    floorOk = false;
    fail(`floor/root mismatch on "${c.label}" (floor ${c.floor}, ${c.supers.length} supers)`);
  }
  if (c.supers.length && byId.get(c.supers[0]).floor + 1 !== c.floor) {
    floorOk = false;
    fail(`floor of "${c.label}" not primary-parent+1`);
  }
}
if (floorOk) pass('floors consistent with primary parent chain');

// ---- 3. reachability from the atrium ----------------------------------------
const ATRIUM = '__atrium';
const adj = new Map([[ATRIUM, new Set()]]);
const link = (a, b) => {
  if (!adj.has(a)) adj.set(a, new Set());
  adj.get(a).add(b);
};
for (const w of world.wings) for (const r of w.rootIds) link(ATRIUM, r);
for (const c of classes) {
  for (const d of c.out) link(c.id, d.targetId);
  for (const d of c.in) link(c.id, d.sourceId);
  for (const p of c.supers) link(c.id, p); // stairs / lift up
  for (const s of c.subs) link(c.id, s); // stairs / lift down
  link(c.id, ATRIUM); // lift "Reception" button (or reception door)
}
const seen = new Set([ATRIUM]);
const stack = [ATRIUM];
while (stack.length) for (const n of adj.get(stack.pop()) ?? []) if (!seen.has(n)) { seen.add(n); stack.push(n); }
const unreachable = classes.filter((c) => !seen.has(c.id));
if (!unreachable.length) pass(`every area reachable from the atrium (${classes.length} areas)`);
else fail(`unreachable areas: ${unreachable.map((c) => c.label).join(', ')}`);

// ---- 4. Stage 2 layout: same-storey collision check ---------------------------
const layout = computeLayout(world);

const rectsByLevel = new Map(); // level -> [{x0,x1,z0,z1,label}]
const addRect = (level, x0, x1, z0, z1, label) => {
  if (!rectsByLevel.has(level)) rectsByLevel.set(level, []);
  rectsByLevel.get(level).push({ x0, x1, z0, z1, label });
};
for (const c of classes) {
  const a = layout.areas[c.id];
  const len = corridorLen(c.out.length, c.in.length, c.notes.length, c.examples.length);
  // general placement: flipped areas rotate 180° about their origin (oz), so
  // the lobby lies at [oz−7, oz] and the corridor beyond; this covers all
  // four origins (0, 17, K, K−17) — the cross-street courtyard clearance is
  // exactly what this same-storey check now proves
  const zl = a.flip ? [a.oz - G.LOBBY_D, a.oz] : [a.oz, a.oz + G.LOBBY_D];
  const zc = a.flip ? [a.oz, a.oz + len + 0.3] : [a.oz - len - 0.3, a.oz];
  addRect(a.level, a.x - G.LOBBY_W / 2, a.x + G.LOBBY_W / 2, zl[0], zl[1], `${c.label} lobby`);
  addRect(a.level, a.x - G.CORRIDOR_W / 2 - 0.2, a.x + G.CORRIDOR_W / 2 + 0.2, zc[0], zc[1], `${c.label} corridor`);
}
for (const l of Object.values(layout.landings)) {
  const p = byId.get(l.parentId);
  // end-cap walls extend 0.075 beyond the span — pad by exactly that; the
  // z band is exact since lobbies now adjoin on BOTH sides (double-loaded)
  const K = layout.loop.K;
  const lz = l.mirror ? [K - G.LANDING_Z1, K - G.LANDING_Z0] : [G.LANDING_Z0, G.LANDING_Z1];
  addRect(l.level, l.x0 - 0.08, l.x1 + 0.08, lz[0], lz[1], `${p.label} landing`);
  // the stair shaft + passage occupy the child storey inside the reserved
  // slot — flipped (mirrored-wing) parents reflect the pit in x and z
  const a = layout.areas[l.parentId];
  const px = a.flip
    ? [a.x - G.PIT_X1 - 0.15, a.x - G.PIT_X0 + 0.15]
    : [a.x + G.PIT_X0 - 0.15, a.x + G.PIT_X1 + 0.15];
  const pz = a.flip ? [a.oz - G.LOBBY_D, a.oz - G.PIT_Z0 + 0.15] : [a.oz + G.PIT_Z0 - 0.15, a.oz + G.LOBBY_D];
  addRect(l.level, px[0], px[1], pz[0], pz[1], `${p.label} stair shaft`);
}
let overlapFails = 0;
for (const [level, rects] of rectsByLevel) {
  for (let i = 0; i < rects.length; i++) {
    for (let j = i + 1; j < rects.length; j++) {
      const a = rects[i];
      const b = rects[j];
      const eps = 0.01;
      if (a.x0 < b.x1 - eps && b.x0 < a.x1 - eps && a.z0 < b.z1 - eps && b.z0 < a.z1 - eps) {
        overlapFails++;
        fail(`level ${level} overlap: ${a.label} × ${b.label}`);
      }
    }
  }
}
if (!overlapFails) pass(`no same-storey overlaps across ${rectsByLevel.size} levels`);

// wing street intervals disjoint — per street side (the racetrack's two
// streets may overlap in x by design; only same-street overlap is a fault)
let wingsOk = true;
for (const side of ['south', 'north']) {
  const sorted = layout.wings.filter((w) => w.street === side).sort((a, b) => a.x0 - b.x0);
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i].x0 < sorted[i - 1].x1) {
      wingsOk = false;
      fail(`${side} street intervals overlap: ${sorted[i - 1].key} × ${sorted[i].key}`);
    }
  }
}
if (wingsOk)
  pass(
    `wing street intervals disjoint per side (loop ${Math.round(layout.street.x1)} m × 2, courtyard ${layout.loop.C} m)`
  );

// ---- 5. portal fallback report (Stage 2 exit criterion) -----------------------
const label = (id) => byId.get(id)?.label ?? id;
const upFallbacks = layout.nonPrimaryUp.map(
  (e) => `- ${label(e.childId)} —↑→ ${label(e.parentId)}  (non-primary parent)`
);
const downFallbacks = Object.values(layout.landings).flatMap((l) =>
  l.portalChildIds.map((cid) => `- ${label(l.parentId)} —↓→ ${label(cid)}  (subtype homed elsewhere)`)
);
const lobbyOnlyDown = classes
  .filter((c) => c.subs.length && !layout.landings[c.id])
  .flatMap((c) => c.subs.map((s) => `- ${c.label} —↓→ ${label(s)}  (no home children — lobby portal door)`));

const layoutReport = `# Layout report (Stages 2 + 7)

Racetrack loop: two streets of ${Math.round(layout.street.x1)} m joined by two glazed
cloisters across a ${layout.loop.C} m courtyard (computed from the real underground
envelopes so no same-storey clash is possible; verified above).

| Street | Wings (west→east) |
|---|---|
| south | ${layout.wings.filter((w) => w.street === 'south').map((w) => `${w.key} (${Math.round(w.x1 - w.x0)} m)`).join(', ')} |
| north | ${layout.wings.filter((w) => w.street === 'north').map((w) => `${w.key} (${Math.round(w.x1 - w.x0)} m)`).join(', ')} |

Real stairwells + landings: ${Object.keys(layout.landings).length}
Deepest storey: level −${Math.max(...classes.map((c) => c.floor))}

## Edges on portal fallbacks (by design: association doors are portals; listed
## here are the *inheritance* edges that could not be physical)

### Non-primary parents (${upFallbacks.length})
${upFallbacks.join('\n') || '- none'}

### Subtypes homed under another parent (${downFallbacks.length + lobbyOnlyDown.length})
${[...downFallbacks, ...lobbyOnlyDown].join('\n') || '- none'}
`;
mkdirSync('reports', { recursive: true });
writeFileSync('reports/layout-report.md', layoutReport);
pass(`layout report → reports/layout-report.md (${upFallbacks.length + downFallbacks.length + lobbyOnlyDown.length} inheritance portal fallbacks)`);

// ---- counts the 3D world must exhibit ----------------------------------------
const counts = {
  areas: classes.length,
  outDoors: classes.reduce((n, c) => n + c.out.length, 0),
  inDoors: classes.reduce((n, c) => n + c.in.length, 0),
  selfDoors: classes.reduce((n, c) => n + c.self.length, 0),
  realStairwells: Object.keys(layout.landings).length,
  stairUpPortals: classes.reduce((n, c) => n + Math.max(0, c.supers.length - 1), 0),
  stairDownPortals: classes.reduce((n, c) => n + (c.subs.length - (layout.homeChildren[c.id]?.length ?? 0)), 0),
  liftAreas: classes.filter((c) => c.supers.length || c.subs.length).length,
};
console.log('counts', JSON.stringify(counts));

console.log(failures ? `\n${failures} failure(s)` : '\nAUDIT PASS');
process.exitCode = failures ? 1 : 0;
