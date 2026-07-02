/**
 * layout.mjs — Stage 2 layout engine (shared by the app and the audit).
 *
 * The hospital is a 1960s "finger plan":
 *   - A ground-level hospital street runs along +x (z ∈ [7, 11], y = 0),
 *     with the reception atrium at its west end.
 *   - Each wing occupies an exclusive x-interval along the street; its root
 *     lobby opens directly off the street (lobby z ∈ [0, 7], corridor z < 0).
 *   - Subtypes are real storeys BELOW (storey height 4 m): a class at
 *     inheritance depth d sits at y = −4d.
 *   - A parent's lobby has a switchback stairwell (in the floor pit,
 *     x ∈ [cx−3.5, cx−0.7], z ∈ [1.2, 5.5]) descending one storey to a
 *     landing (z ∈ [7, 10]) shared by its home children, whose lobbies open
 *     off that landing — "landings that branch".
 *   - Horizontal collision safety: sibling subtrees get disjoint x-strips
 *     (computed bottom-up); different depths are different storeys, so only
 *     same-level overlap matters. A 3.6 m stair slot is reserved in each
 *     children row directly under the parent's pit.
 *
 * Everything here is pure data — no three.js. All geometry constants live
 * in G so the corridor builder and this file cannot disagree.
 */

export const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const G = {
  CORRIDOR_W: 3,
  ROOM_H: 3,
  STOREY: 4,
  DOOR_W: 1.2,
  DOOR_H: 2.1,
  DOOR_SPACING: 2.0, // compressed — corridors were too long a walk
  ENTRY: 2.2,
  END_ZONE: 2.6,
  NOTICE_SPACING: 1.25,
  LOBBY_W: 7,
  LOBBY_D: 7,
  LANDING_Z0: 7,
  LANDING_Z1: 10,
  STREET_Z0: 7,
  STREET_Z1: 11,
  STREET_H: 4,
  STRIP: 8.2, // x-slot per leaf area (7 m lobby + margin)
  STAIR_SLOT: 3.6, // x reserved at the strip west edge for the parent's stairwell
  WING_GAP: 12,
  // pit (stairwell shaft) in lobby-local x/z
  PIT_X0: -3.5,
  PIT_X1: -0.7,
  PIT_Z0: 1.2,
  PIT_Z1: 5.5,
};

/**
 * Corridor length: entry + door run + notice run + concept end zone.
 * Notes hang on the left wall and examples on the right, past the doors,
 * so the corridor stretches for whichever side has more notices.
 */
export const corridorLen = (nOut, nIn, nNotes = 0, nExamples = 0) => {
  const noticeRun = Math.max(nNotes, nExamples) * G.NOTICE_SPACING;
  return G.ENTRY + Math.max(nOut, nIn, 1) * G.DOOR_SPACING + (noticeRun ? noticeRun + 0.4 : 0) + G.END_ZONE;
};

/**
 * @param world parsed world.json
 * @returns {{
 *   areas: Record<string, {x:number, level:number, y:number, corridorLen:number}>,
 *   landings: Record<string, {parentId:string, level:number, y:number, x0:number, x1:number,
 *                             stairX:number, homeChildIds:string[], portalChildIds:string[]}>,
 *   homeChildren: Record<string, string[]>,
 *   nonPrimaryUp: {childId:string, parentId:string}[],
 *   wings: {key:string, x0:number, x1:number, rootIds:string[]}[],
 *   street: {x0:number, x1:number},
 * }}
 */
export function computeLayout(world) {
  const byId = new Map(world.classes.map((c) => [c.id, c]));

  // home children: a child belongs to its primary (first) parent
  const homeChildren = {};
  for (const c of world.classes) homeChildren[c.id] = [];
  for (const c of world.classes) {
    if (c.supers.length) homeChildren[c.supers[0]]?.push(c.id);
  }
  // deterministic order: parent's subs order, filtered to home children
  for (const c of world.classes) {
    const home = new Set(homeChildren[c.id]);
    homeChildren[c.id] = c.subs.filter((s) => home.has(s));
  }

  // Double-loaded landings: children split between a south and a north row so
  // the landing corridor is roughly half as long. Parents (which need their
  // stairwell pit on the strip's west slot) always go south; leaves balance
  // the rows. The strip is as wide as the wider row.
  const rowsMemo = new Map();
  function splitRows(id) {
    if (rowsMemo.has(id)) return rowsMemo.get(id);
    const kids = homeChildren[id];
    const south = kids.filter((k) => homeChildren[k].length);
    const north = [];
    let southSum = south.reduce((n, k) => n + stripWidth(k), 0);
    let northSum = 0;
    for (const k of kids) {
      if (homeChildren[k].length) continue;
      if (northSum < southSum) {
        north.push(k);
        northSum += stripWidth(k);
      } else {
        south.push(k);
        southSum += stripWidth(k);
      }
    }
    const r = { south, north, southSum, northSum };
    rowsMemo.set(id, r);
    return r;
  }

  const widthMemo = new Map();
  function stripWidth(id) {
    if (widthMemo.has(id)) return widthMemo.get(id);
    const kids = homeChildren[id];
    let w = G.STRIP;
    if (kids.length) {
      const { southSum, northSum } = splitRows(id);
      w = Math.max(G.STRIP, G.STAIR_SLOT + Math.max(southSum, northSum));
    }
    widthMemo.set(id, w);
    return w;
  }

  const areas = {};
  const landings = {};

  function place(id, x0, level, flip = false) {
    const c = byId.get(id);
    const kids = homeChildren[id];
    // lobby centre: aligned so the pit sits inside the stair slot when there
    // are children; otherwise centred in the strip
    const cx = kids.length ? x0 + 0.2 - G.PIT_X0 : x0 + G.STRIP / 2;
    areas[id] = {
      x: cx,
      level,
      y: -G.STOREY * level,
      flip, // north-row areas mirror (180° yaw): lobby z ∈ [10,17], corridor beyond
      corridorLen: corridorLen(c.out.length, c.in.length, c.notes.length, c.examples.length),
    };
    if (kids.length) {
      const { south, north, southSum, northSum } = splitRows(id);
      let xs = x0 + G.STAIR_SLOT;
      for (const k of south) {
        place(k, xs, level + 1, false);
        xs += stripWidth(k);
      }
      let xn = x0 + G.STAIR_SLOT;
      for (const k of north) {
        place(k, xn, level + 1, true);
        xn += stripWidth(k);
      }
      const home = new Set(kids);
      landings[id] = {
        parentId: id,
        level: level + 1,
        y: -G.STOREY * (level + 1),
        x0: x0 + 0.2,
        x1: x0 + G.STAIR_SLOT + Math.max(southSum, northSum, 5),
        stairX: cx + (G.PIT_X0 + G.PIT_X1) / 2, // pit centre x (world)
        homeChildIds: kids,
        southIds: south,
        northIds: north,
        portalChildIds: c.subs.filter((s) => !home.has(s)),
      };
    }
  }

  const wings = [];
  let cursor = 6; // street starts at x=0 (atrium east wall); first wing after a margin
  for (const wing of world.wings) {
    const start = cursor;
    for (const rootId of wing.rootIds) {
      place(rootId, cursor, 0);
      cursor += stripWidth(rootId);
    }
    wings.push({ key: wing.key, x0: start, x1: cursor, rootIds: wing.rootIds });
    cursor += G.WING_GAP;
  }

  const nonPrimaryUp = [];
  for (const c of world.classes) {
    for (const p of c.supers.slice(1)) nonPrimaryUp.push({ childId: c.id, parentId: p });
  }

  return {
    areas,
    landings,
    homeChildren,
    nonPrimaryUp,
    wings,
    street: { x0: 0, x1: cursor - G.WING_GAP + 6 },
  };
}
