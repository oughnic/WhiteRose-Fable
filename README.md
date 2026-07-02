# ContSys Hospital (WhileRoseFable)

A first-person, browser-hosted 3D exploration of the **ContSys FDIS Feb 2026** concept
model (ISO continuity-of-care concept system), styled as a 1960s NHS hospital.
See [PLAN.md](PLAN.md) for the full design and delivery stages.

## How it fits together

```
data/ContSys-FDIS-Feb-2026-MASTER.json     Mauro Data Mapper export (the source of truth)
        │  npm run world
        ▼
public/world.json                          filtered, contracted, normalised world graph
reports/world-report.md                    what was dropped/contracted + warnings
        │  npm run dev / build
        ▼
Three.js hospital                          one corridor area per concept
```

## Commands

Node.js is required (a portable install lives at `C:\Users\Nicholas\tools\node-v24.18.0-win-x64`;
add it to `PATH` or call `npm.cmd` from there).

| Command | What it does |
|---|---|
| `npm install` | Install dependencies (three, vite, typescript) |
| `npm run world` | Rebuild `public/world.json` + `reports/world-report.md` from the model |
| `npm run audit` | Verify world.json freshness, graph invariants, atrium reachability |
| `npm run dev` | Dev server at http://localhost:5173 |
| `npm run build` | Pipeline + audit + production build to `dist/` |

To use a newer model export: replace the file in `data/` (or pass a path:
`node tools/build-world.mjs path\to\export.json`) and run `npm run world`.

## Controls

Desktop: WASD move (Shift runs) · mouse look · **E** interact (lifts) ·
**F** jump ahead 12 m · **R** read the current area as accessible HTML ·
**M** porter service (search & teleport) · Esc release cursor.

Touch (phones, tablets and touch-screen PCs — works alongside the mouse):
left thumb pad to walk (push to the edge to run) · **drag anywhere on the
view to look around** · tap the blue prompt to use a lift · **⏩** jumps
ahead · **ℹ** reads the area · **⌖** calls the porter. (Mouse users can
drag-look too, without pointer lock.)

Definitions are on the lobby poster the moment you arrive (auto-fitted, so
even the longest is fully readable); ceiling-hung signs name each concept
from a distance; corridors end in a fire exit (or the concept's
self-reference doors).

## Deploying

`npm run build` produces a fully static `dist/` (~7 MB) — host it anywhere.
A GitHub Pages workflow is included (`.github/workflows/deploy.yml`): push
the repo to GitHub, enable Pages ("GitHub Actions" source), and every push
to `main` rebuilds the world from `data/` and deploys. A new model export is
just a commit.

## Status: Stage 2 complete

- [x] Data pipeline with the definitional filter (drop `thing` + clause 3.1 except
      *event*, *role*, *knowledge*; contract inheritance through dropped classes)
- [x] All 161 areas walkable: outbound association doors on the right, inbound on
      the left, self-references ("pig's ears") at the corridor end
- [x] Lift destination boards (upper superclasses at the top, subtypes below,
      Reception at ground); porter search (M); full A–Z directory
- [x] **Real wing architecture (finger plan)**: a ground-level Hospital Street
      (644 m after the double-loading refit) runs east from Reception with every
      wing's root lobby opening off it; subtypes are real storeys below (storey =
      inheritance depth, down to −7); 54 genuinely walkable switchback stairwells
      descend to shared **double-loaded landings** — sibling lobbies open off
      both sides, halving the walk — no physics engine, just ground-following
- [x] Portals only where architecture honestly can't: association doors (by
      design), the 13 non-primary-parent stairs and their 13 mirror-side doors —
      all listed in `reports/layout-report.md`
- [x] Automated audits: `npm run audit` (graph + same-storey collision check +
      street intervals + fallback report) and `__hospital.audit()` (built world)
- [x] **1960s NHS look & feel**: flecked washable vinyl (procedural, metre-true
      UVs) with sheen, calm sage walls, white ceilings, recessed LED panel
      luminaires throughout, 6″ oak trolley rails + skirting on every wall
      (merged to one draw call per area), sage doors with vision panels, kick
      and push plates, depth haze on the long views
- [x] **Walk-in lift cab** per area: stainless interior, button panel, E to
      choose from the destination board; you arrive inside the destination cab
- [x] **Content dressing (Stage 4 core)**: every note (NHS-blue header, left
      wall) and example (NHS-green header, right wall) hangs as an oak-framed
      notice past the doors — corridors lengthen to fit; content audit proves
      310/310 placed. Deprecated terms appear as aged struck-through signs;
      definition sources print at the poster foot. Courtyard glazing runs the
      street's north wall and the atrium's south wall; utility chairs (teal
      vinyl on tubular steel) wait in lobbies, landings, street gaps and
      reception
- [x] **Wikimedia Yorkshire artwork**: 16 licence-verified works (CC BY-SA /
      public domain, incl. James Ward's *Gordale Scar*) curated via
      `npm run art` (Commons API, licence-checked, paced) into `public/art/`
      with full attribution placards in every frame — hung generously: bare
      door-wall slots, corridor entries, landing stretches, street gaps and
      the atrium (several hundred frames hospital-wide)
- [x] **Stage 5 — polish & ship**: per-material geometry batching (worst view
      5,163 → 533 draw calls, 5.4 ms — 60 fps everywhere); 600 mm suspended
      ceiling-tile grid; **R** reads any area as accessible, copy-paste-able
      HTML (definition, notes, examples, doors, stairs); **touch-first
      controls** (virtual joystick, drag-look, tappable prompts, ℹ/⌖ buttons,
      responsive HUD); one-command `npm run build` (pipeline + audits + bundle)
      and a GitHub Pages workflow
- [ ] Optional remainder: **AI concept illustrations** beside posters — prompts
      ready (`npm run prompts`); generate images, write
      `public/art/illustrations/manifest.json`, done. Cross-browser and real
      phone/tablet passes remain a manual step. Push to GitHub + enable Pages
      to go live (owner action)
