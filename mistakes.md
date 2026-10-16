# Mistakes log

Mistakes in my own reasoning or approach, so they aren't repeated. Check before starting work.

## 2026-10-12

- Bash heredocs holding long Python edit scripts with mixed quotes and backticks failed to
  parse ("unexpected EOF while looking for matching `'`"). Write multi-line edit scripts to
  a temp file with the Write tool and run that file instead.
- A string replacement that swapped a doc comment for a new constant left the original
  constant (`MAT_SIGN_EDGE`) without its comment. When inserting near an existing
  declaration, anchor on the line after the comment, not on the comment itself.
- First lift-ride measurement reported a 0.97 black fade — it came from the `goto()` I used
  to get into position (porter travel still flashes), not from the ride. When measuring a
  transition, let earlier transitions settle before sampling.
- The z-fight detector's first runs listed many coplanar pairs that are buried inside other
  solids (never visible). Probe in front of a reported face for an opaque box before
  treating it as a real fight.

## 2026-10-13

- Installed `tweakpane` without `@tweakpane/core`: Tweakpane 4's `.d.ts` files import their
  types from it, and with `skipLibCheck` the missing package just made `Pane` silently
  untyped. When adding a library, check that its type imports resolve in `node_modules`.
- Shipped the standard/toon material override without checking the lighting: the scene is
  ~80% hemisphere + ambient fill on flat boxes, where toon (bands only direct light) and
  rough PBR look identical to Lambert — the swap worked but showed nothing. Before a
  visual feature, check the conditions it needs to be visible (lights, geometry, env map).
- Made the floor roughness 0 while the scene environment was three's RoomEnvironment, which
  has bright emissive panels and a point light baked in: the mirror floor showed them as a
  sun-like reflection. When a surface goes glossy, check what the env map actually contains.
- First draft of the toon corner "Rebuild" button used `location.reload()`, which drops
  you back at the spawn — the look select already saved and restored the pose. When adding
  a second reload path, reuse the first one's pose handling (`reloadWithLook`).
- Put the look-pose restore early in boot() and called `areaAt()` there: it is a hoisted
  function, but it uses the `volume` const declared further down, so it threw "Cannot
  access 'volume' before initialization". Before calling a hoisted function early in
  boot(), check every const/let it closes over is already declared at that point.
- The edge shader read the (unfiltered, nearest) depth texture at fractional offsets
  (1.5 px). Nearest sampling snaps those unevenly left/right, so a 1/z second difference
  that is exactly zero on a plane wasn't — floors and ceilings, where depth changes fastest
  per pixel, grew screen-space stripes. Sample depth with texelFetch at whole-pixel,
  symmetric offsets whenever a filter relies on differences cancelling.

## 2026-10-14

- `Material.clone()` does not carry `onBeforeCompile`: a shader patch put on a shared
  material (MATS.wall) silently misses its clones (the theatre's dimmable `wallMat`). When
  patching a shared material, grep for `.clone()` of it and patch each clone too.
- A normal-detail feature is invisible under the flat `ColorEnvironment` surround (same
  light from every side ignores the normal); only the ceiling RectAreaLights and the
  directional light probe show it. Check which lights respond to the normal before tuning.
