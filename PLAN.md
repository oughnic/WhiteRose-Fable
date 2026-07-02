# ContSys Hospital — Delivery Plan

A first-person, browser-hosted 3D exploration of the ContSys FDIS Feb 2026 concept model
(`ContSys-FDIS-Feb-2026 MASTER.json`, Mauro Data Mapper export, schema 3.2.0), styled as a
1960s NHS hospital.

## Decisions locked (2 July 2026)
- **Wings = the DOLCE layer**: *thing* is stripped out; its direct subtypes — **mental
  object, event, time interval, physical object, stative, role** — become the hospital
  wings. (Revision of the original 6-root plan.)
- **Clause 3.1 classes are dropped** — they are definitions rather than true concepts —
  **except *event* and *role*** (structurally the DOLCE layer, retained as wing roots)
  **and *knowledge*** (retained by owner decision as a true concept hub — it anchors 10
  subtypes including *care pathway*, *care guideline* and *core care plan*). Inheritance
  edges through dropped classes are **contracted** (children re-parent to the nearest
  kept ancestor) so the forest stays connected. *tangible and visible entity* (placeholder
  clause 9.9.9, no doors, no children, no real definition) is dropped as scaffold with a
  pipeline warning.
- **Topology**: hybrid — each wing is laid out as real, physically contiguous architecture
  (inheritance depth = real floors, stairs and lifts genuinely connect them); portals are
  used for cross-wing association doors, the extra parents of multi-parent classes, and
  any edge the layout engine cannot place honestly.
- **Engine**: Three.js + Vite, static build.
- **Hosting**: public web (static host, e.g. GitHub Pages). The standard has been approved
  by ISO and publication is imminent, so public hosting of the content is cleared by the
  model owner.
- **Artwork**: AI-synthesized concept illustrations (batch-generated at build time) +
  CC-licensed Yorkshire photography from Wikimedia with attribution placards.

---

## 1. What the model gives us (analysis of the MASTER file)

Raw export:

| Fact | Value | Consequence for the build |
|---|---|---|
| dataClasses | 180 | Filtered to 161 areas (below) |
| Classes with **multiple** supertypes | 13 (e.g. *care personnel* has 3 parents) | Up-stair signs and lift panels must list several destinations; a single "up" flight needs a landing that branches |
| Classes with subtypes | 66; max 15 subtypes (*care activity*) | Down-stair signs can be long lists; needs a "subtype lobby" pattern |
| dataElements (associations) | 247 — **all** ReferenceType | Every element is a door; no attribute panels needed |
| Self-references ("pig's ears") | 9 (all on kept classes) | Doors at the very end of the corridor |
| Max outbound associations on one class | 17 (*care actor*) | Right-hand wall must accommodate many doors → corridor length scales with door count |
| Max inbound associations | 10 (*care activity*) | Left-hand wall likewise |
| Descriptions | avg 79 chars, max 930; a handful missing | Poster layout must handle both; missing descriptions get a placeholder ("Definition pending") and a build warning |
| Association multiplicities | On the element + `oppositeMin/MaxMultiplicity` in xmi metadata | Door signs can optionally show cardinality both ways |

### 1a. After the definitional filter (the world we actually build)

Drop rule: remove *thing*, *tangible and visible entity*, and every class whose
`termClause` starts `3.1` **except** *event*, *role* and *knowledge*; contract
inheritance edges through dropped classes to the nearest kept ancestor.

| Fact | Value |
|---|---|
| Areas (kept classes) | **161** (19 dropped) |
| Doors (kept associations) | **237** (10 lost — listed below, accepted) |
| Wings (home-wing counts; each class counted once) | mental object (47, includes the *knowledge* hub), stative (38), event (35), time interval (15), role (14), physical object (3) — the 12 multi-parent classes are also reachable in other wings via their non-primary stairs |
| Annex | **Resources annex** off the atrium: *care resource*, *care funds* and descendants (9 home classes) — their only parent was the dropped root *resource*; the annex lobby is architectural signage only, not a concept area |
| Undefined DOLCE-layer classes | *physical object*, *process*, *state*, *time interval* have no description or clause in the export — posters show "Definition pending" until wording is supplied |
| Multi-parent classes after contraction | 12 (overlapping wings; home wing = primary parent chain) |
| Max inheritance depth after contraction | 7 → wings up to 8 storeys |
| Room numbers | `termClause` 3.2–3.9; the kept 3.1 classes (*event* 3.1.7, *role* 3.1.20, *knowledge* 3.1.1) keep their real clause numbers; the 9.9.9 scaffold lobbies (*mental object*, *stative*) show the wing name instead |

Doors lost with dropped classes (pipeline reports these on every build):
*social determinant of health → social need; organization → care actor; person → subject
of care; person → social environment; health state → person; care activity → care;
subject of care → care; information → continuity of care; health record → data
repository; health record extract → data repository.*

### Metadata quirks to normalise in the pipeline
- Notes are keyed `note 1`…`note 8` **and** `noteToEntry` (4 occurrences).
- Examples are keyed **both** `example 1`…`example 3` (with space) and `example1`…`example9` (without). The pipeline must merge and order these.
- Element labels carry Mauro dedupe suffixes (`extracted from (1)`) — strip ` (n)` for display.
- Rich extras worth displaying: `plural`, `admittedTerms`, `synonym` (poster "also known as"), `deprecatedTerms` (old sign, struck through — very hospital), `source` (poster small print), `termClause` (room number on signage), `className`, `figureTitle`.

---

## 2. Concept → hospital mapping

| Model concept | In the hospital |
|---|---|
| Kept dataClass | An **area**: a corridor ending in a concept space. Room number = `termClause` |
| `description` | Poster on the end wall (plus synthesized illustration) |
| `note n` / `noteToEntry` metadata | Framed notices on one side wall, between doors |
| `example n` metadata | Framed notices on the other side wall (styled as patient-information boards) |
| Supertypes (after contraction) | Staircase **up**, sign listing every supertype label |
| Subtypes (after contraction) | Staircase **down**, sign listing every subtype label |
| Either/both | **Lift** with destination board: superclasses at top, subclasses below |
| Outbound association (ReferenceType element) | Door on the **right** wall; sign = association label + destination class + (optional) multiplicity |
| Inbound association | Door on the **left** wall; sign = source class + association label |
| Self-reference (9 of them) | Door at the very end of the corridor |
| DOLCE wing roots (*event*, *role*, *mental object*, *stative*, …) | Wing lobbies at ground level — full areas with their definitions, styled as lobby/entrance spaces |
| Spare wall space | Windows (courtyard / Yorkshire dale backdrop) or framed artwork with gallery placard |

### Look & feel (fixed requirements)
- 1960s NHS hospital: calm-coloured walls, white ceilings (suspended tile), very washable floors (sheet vinyl with welded seams, subtle sheen).
- Wooden protection: 6-inch trolley rail at trolley height and 6-inch skirting, both in oak tone.
- Signage: white Arial on NHS blue Pantone 300 `#005EB8`, rendered to canvas textures.
- Lighting: LED panel luminaires (emissive panels + soft shadows / baked ambient).

### Wayfinding additions (proposed — 161 areas need navigation aids)
- Spawn in a **reception/atrium** with a hospital directory board (6 DOLCE wings + Resources annex, A–Z index of all 161 concepts).
- **Coloured floor line** per wing (classic NHS wayfinding) so users always know which part of the ontology they're in.
- Search overlay ("porter service"): type a concept, teleport to it.
- Corridor entrance sign: current concept + room number, so arrivals orient instantly.

---

## 3. Architecture

```
MASTER.json ──(build-time pipeline)──▶ world.json ──(runtime generator)──▶ 3D hospital
```

1. **Data pipeline** (TypeScript, runs at build time)
   - Parse Mauro export → apply the **definitional filter** (drop list above, configurable) → contract inheritance edges through dropped classes → `world.json`: per class {label, plural, alsoKnownAs, deprecated, description, notes[], examples[], termClause, source, supers[], subs[], out[], in[], self[], wing, floor}.
   - Normalise metadata keys; strip dedupe suffixes; derive inbound edges from outbound; compute home wing (primary parent chain to a DOLCE root or the annex).
   - Validation report: dangling references, extends cycles, missing descriptions, dropped classes, lost doors, contraction map (which edges were bypassed), unusually long content.

2. **World topology — hybrid: real wings + portals** (decided)
   - Each class's **home wing** = the DOLCE root its primary (first-listed, post-contraction) parent chain reaches; *care resource*/*care funds* form the Resources annex. Within a wing, the inheritance tree is real architecture: **floor number = inheritance depth within the wing** (wing lobby at ground level, up to 8 storeys), staircases and lift shafts genuinely connect a class's corridor to its supertype's floor above and its subtypes' floor below. Corridors on one floor branch tree-fashion from the wing's spine.
   - A **layout engine** places corridors per floor (tree layout with corridor lengths driven by door counts, collision-free within the wing). Where a physical connection cannot be placed honestly, the edge falls back to a portal — the audit report lists every fallback so we can tune the layout.
   - **Portals** (seamless relocation through real door/stair/lift geometry) are used for: cross-wing association doors, the extra parents of the 12 multi-parent classes (their non-primary stairs), and layout-engine fallbacks. Association doors between classes in the same wing on compatible floors may still connect physically when adjacency allows; the engine treats physical adjacency as an optimisation it attempts, portal as the guarantee.
   - Consistency either way: my right-hand outbound door *is* the destination's left-hand inbound door — one edge, two apertures.

3. **Engine — Three.js (decided)** + PointerLockControls, simple AABB collision plus step-height handling for real staircases (walkable ramps under stair treads — the standard trick). Vite build, static output. Alternatives considered: Babylon.js (built-in collisions, heavier), Unity/Godot WebGL export (large payloads, harder data-driven regeneration).

4. **Procedural corridor kit** — parametric, instanced: wall segments, door units, window units, notice frames, stair flight, lift lobby, ceiling tiles, LED panels, trolley rail/skirting extrusions. Corridor length driven by max(doors-left, doors-right) + notices. All materials shared; signage/posters are canvas-generated textures (Arial, `#005EB8`).

5. **Content rendering**
   - End-wall poster: term (large), plural / admitted terms, definition, source, clause number.
   - Accessibility twin: pressing E at any poster/sign opens the same content as an HTML overlay (screen-reader friendly, readable on small screens, copy-paste-able).

6. **Assets**
   - Windows: courtyard / Yorkshire Dales backdrop (skybox or backdrop plane per window).
   - Artwork (decided): CC-licensed Yorkshire photography from Wikimedia via a curated manifest (image URL, artist, title, licence) rendered with a gallery placard. **Licensing caution**: most works by post-1960 Yorkshire artists (e.g. Hockney) are still in copyright, so the pool is photography-leaning; every image carries licence metadata and an attribution placard.
   - AI illustrations (decided): pre-generated per concept (161 images, generated once at build time into the asset folder with a manifest), displayed alongside definitions on end-wall posters.

7. **Performance & hosting**
   - All 161 areas load at once (instanced low-poly geometry — well within budget); textures generated lazily and cached. Target 60 fps on an average laptop, WebGL2.
   - Pure static site → **public web hosting (decided)**, e.g. GitHub Pages. No backend. Model update = re-run pipeline (CI-able).
   - The standard is ISO-approved with publication imminent; public hosting is cleared by the model owner.

---

## 4. Stages of delivery

### Stage 0 — Pipeline + walkable grey-box (foundation)
- Data pipeline producing validated `world.json` (definitional filter + contraction applied) + validation report.
- One hard-coded grey-box corridor; FPS movement (WASD + mouse-look, pointer lock, collision).
- Two areas linked by a working portal door.
- **Exit criteria**: walk from one concept to an associated one and back; pipeline report (incl. dropped classes, lost doors, contraction map) reviewed.

### Stage 1 — The full graph, navigable (portal baseline)
- Generator builds all 161 areas from `world.json`: right/left/end doors, stairs up/down with full supertype/subtype sign lists, lift lobby with destination board (ancestors above, subtypes below), landings that branch for multi-parent classes and subtype lobbies for classes like *care activity* (15 subtypes).
- All transitions are portals at this stage — the guaranteed mechanism the hybrid design falls back to.
- Reception/atrium spawn, directory board (wings + annex), search/teleport, coloured wing lines.
- **Exit criteria**: every class reachable; automated audit — door/stair/lift counts in the world exactly match edge counts in the filtered model.

### Stage 2 — Real wing architecture (the hybrid upgrade)
- Layout engine assigns every class a home wing and floor (post-contraction inheritance depth); lays out each floor's corridors tree-fashion off the wing spine, collision-free, corridor lengths driven by door counts.
- Staircases and lift shafts become real vertical connections within each wing; same-wing association doors connect physically where adjacency allows.
- Portals remain for cross-wing doors, non-primary parents of the 12 multi-parent classes, and listed fallbacks.
- **Exit criteria**: all 6 wings + Resources annex physically walkable ground-to-top; audit report lists every edge still on a portal fallback, reviewed and accepted case by case.

### Stage 3 — 1960s NHS look & feel
- Materials pass: calm two-tone walls, washable vinyl floor, white ceiling tiles, LED luminaires, 6″ oak trolley rail + skirting, period door furniture.
- Full NHS signage system (white Arial on `#005EB8`), room numbers from `termClause`.
- End-wall definition posters; lift cab interior with working button panel.
- **Exit criteria**: side-by-side review against NHS-hospital reference imagery; signage legible at walking distance.

### Stage 4 — Content dressing
- Notes and examples as framed side-wall notices; "also known as" and deprecated-term treatments; source small-print.
- Windows with courtyard/Dales views on empty walls; Wikimedia artwork manifest + attribution placards.
- Batch-generate AI concept illustrations for end-wall posters (once, into the asset folder).
- **Exit criteria**: content audit — every note/example on kept classes appears exactly once in the right area.

### Stage 5 — Polish & ship
- Performance pass (instancing audit, texture budget), onboarding hints, ESC menu, cross-browser test (Chrome/Edge/Firefox/Safari).
- Accessibility: HTML overlay twin for all signage/posters (screen-reader friendly, copy-paste-able) **and mobile / touch-first capability** — virtual joystick + drag-look, tap-to-interact on doors/lifts, touch-friendly menus and porter search, responsive HUD — owner request, 2 Jul 2026.
- Suspended ceiling-tile grid texture (600 mm grid, metre-true UVs) — owner request, 2 Jul 2026.
- CI: rebuild world from a new MASTER.json export in one command; deploy to public static host; README for future model updates.
- **Exit criteria**: fresh export → deployed hospital with no manual steps; 60 fps target met.

**Sequencing note**: Stages 0–2 prove the hard part (graph → space), and Stage 1 already yields a fully navigable model. Look & feel (3) and content (4) are then low-risk, highly visible increments. Each stage ends with something walkable you can show to ContSys colleagues.

---

## 5. Open design details (can be settled during Stages 1–3)
- Stair signs: direct parents/children only, or full transitive chains? (Recommend direct on stairs; lift board shows the full ancestor line, grouped by level, since the descendant "tree" isn't linear.)
- Show multiplicities on door signs (e.g. `relates to 0..*`)? (Recommend yes, in smaller type.)
- Ambient audio (LED hum, lift ding, distant trolley)? Cheap and atmospheric — Stage 4 optional.
- Mobile/touch support: committed for Stage 5 (touch-first controls + responsive UI), per owner, 2 Jul 2026.
- Whether the kept 3.1 classes (*event*, *role*, *knowledge*) should note their definitional status on their posters.

## 6. Risks
| Risk | Mitigation |
|---|---|
| Wing layout engine (Stage 2) is the hardest engineering — real tree layouts can collide or sprawl (mental object wing alone holds 51 classes) | Portal baseline from Stage 1 always works; layout engine upgrades edges incrementally with an audited fallback list |
| Definitional filter surprises — a dropped 3.1 class turns out to matter (10 doors lost) | Drop list is pipeline config, not code; every build reports dropped classes, lost doors and contractions for review |
| Post-1960 Yorkshire art largely still in copyright | CC-licensed landscape photography fallback; every image carries licence metadata |
| Areas with extreme door counts feel like airports, not corridors | Corridor length scales; door spacing rules; worst case *care actor* (17 out) reviewed in Stage 1 |
| Motion sickness / FPS unfamiliarity | Adjustable FOV & speed, no head-bob by default, teleport-via-directory always available |
| Model changes at publication | One-command pipeline rebuild; content is 100% data-driven |
