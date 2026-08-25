# Live model text in the lecture theatre

A design for showing the published concept texts on the Postgraduate Medical Centre's
screen — readable, clickable and searchable — alongside the slide deck that is already there.

## The constraint that decides the design

Slides today are drawn into a 1920 × 1080 canvas and uploaded as a texture
(`src/world/slides.ts`). Doing the same with concept text would mean:

- text that cannot be selected, copied, or found with the browser's own search;
- nothing for a screen reader to reach;
- a second rendering of the model's prose, which will drift from the publication;
- softness the moment anyone leans in.

That is the "generate static images" route, and it is ruled out. Everything below rests on
putting **real DOM in the room**.

## Architecture

Three.js can composite real HTML into a 3D scene with `CSS3DRenderer`: DOM elements are
transformed by the same camera matrix as the WebGL scene and drawn in a layer stacked with the
canvas. The text stays text — selectable, focusable, searchable, scalable, accessible.

- A second renderer, sharing the existing camera, rendered in the same frame loop.
- Its container sits above the canvas with `pointer-events: none`; only the panel itself takes
  `pointer-events: auto`, so dragging anywhere else still looks around the room.
- One `CSS3DObject` placed at the screen mesh's transform. The screen is a 6 × 3.375 m plane —
  exactly 16:9 — so a 1920 × 1080 panel scales by `6 / 1920 = 0.003125` and lands pixel-exact
  on the surface the slides already use.
- The existing `screen` mesh stays. It backs **deck mode** unchanged; in **live mode** it goes
  black and the DOM panel takes over. One surface, two modes.

### Occlusion, the usual objection

DOM elements cannot be depth-tested against WebGL geometry, so a CSS3D panel normally draws
over anything standing in front of it. In a raked lecture theatre the audience faces the screen
with nothing between, so it does not arise — and we make that structural rather than lucky:
mount the panel only while the camera is inside the theatre volume and facing the screen
(a dot product against the screen normal), unmount it otherwise. That also keeps the DOM out of
the rest of the hospital for free.

## What goes on the panel

### Recommended: iframe the published page

`/concept/care_plan?embed=1` in an iframe inside the `CSS3DObject`.

The text on the screen then **is** the publication — not a copy of it. No drift is possible.
Browser search, selection, links, headings and screen-reader semantics all come free, because
it is the same HTML a reader gets at their desk.

Two things it needs:

1. **Same origin.** The publication at `/` and the hospital at `/hospital/` on one Azure Static
   Web App — already the plan. Same origin lets the room script into the frame: scroll to a
   section, highlight a term, read back the current heading, follow a link without the room
   losing its place. Cross-origin the iframe still displays, but the room goes blind to it.
2. **An embed presentation** in `contsys-template`: `?embed=1` hides the top menu, side TOC,
   breadcrumb and footer, and raises the base type size — this is read from eight metres, not
   fifty centimetres. A small CSS change plus a line of JS to set a class. It also gives
   contsys.org a clean embed mode for anyone else who wants one.

### The alternative, and why not

Fetching `concept-fragments/{slug}.jsonld` and rendering the panel in the hospital's own markup
gives full typographic control. It also reimplements the publication's rendering, guarantees
drift, and does not have the prose sections or the SVG diagrams — those live in the DITA
output, not the fragments. Use the fragment data for the **related-concepts rail beside** the
frame, not for the concept text itself.

## Search

The room needs to find a concept without leaving it.

`input-model/concepts-manifest-merged.json` already gives 172 concepts and 279 aliases in one
small file — enough for instant type-ahead by name. What it lacks is the definitions, so you
cannot search by meaning ("the thing that records what we agreed to do").

**Proposed, and a new mauro-edit request:** a single-file `concept-index.json` from the manifest
exporter — slug, label, aliases, short definition, clause, section. One fetch, roughly 80 KB,
and it serves three places at once: type-ahead in the lecture theatre, the hospital's directory
boards and porter, and a better concept lookup for contsys.org itself than the WebHelp index.
Fetching 516 per-concept fragments to build the same thing client-side is not an option.

## How it sits with the deck

The deck stays as it is. Add a slide *kind*, which the loader's existing tolerance for
`{ "slides": [...] }` makes backward compatible:

```json
{ "slides": ["01.png", { "concept": "care_plan" }, "02.png",
             { "concept": "continuity_of_care_process", "section": "relationships" }] }
```

Live concepts are then just slides. A deck can walk from a diagram to the definition behind it
and back without the presenter touching anything but the clicker.

Controls, following what the theatre already does:

| Input | Behaviour |
|---|---|
| `←` `→`, PageUp / PageDown | move through the deck whatever the kind — clickers keep working |
| Click the screen, deck mode | left half back, right half forward (unchanged) |
| Click the screen, live mode | the click goes to the page — that is the point. Paging moves to the keys and the screen surround |
| `/` | search overlay; choosing a concept puts it on the screen |
| Backspace / `B` | back through the lookup stack, then back to the slide you left |
| `H`, `?present=1` | hide the room's chrome. The panel stays: it is the content being filmed |

## What this rules out

- **WebXR.** CSS3D does not render in an immersive session. If a headset is ever a goal this
  route dead-ends, and the answer would instead be text rendered into WebGL
  (`troika-three-text`) — crisp and VR-safe, but not real HTML, so not clickable, not
  searchable, not accessible. Worth settling before building.
- **Post-processing over the panel** — no bloom or depth-of-field across the screen. None is
  used today.
- **Panels everywhere.** One iframe in one room. Concept text on every corridor wall would cost
  a DOM subtree per wall for no gain.

## Phasing

1. `CSS3DRenderer` layer and the live/deck switch on the existing screen, one concept hardcoded.
   Settles legibility, pointer routing and mount/unmount in an afternoon.
2. `?embed=1` presentation in `contsys-template`.
3. `{ "concept": slug }` slide kind, plus the back stack.
4. `concept-index.json` from mauro-edit, and the `/` search overlay.
5. Related-concepts rail beside the frame, from the fragment JSON-LD.

Step 1 is the one that can fail. If the panel reads badly from the back row, or pointer routing
fights the look controls, that is known before anything else is built on it.

## Decisions needed

- Iframe the publication, or render from fragments? (Recommended: iframe.)
- Fund `concept-index.json` in mauro-edit, or ship name-only search from the existing manifest?
- Is VR ever in scope? A yes changes the whole approach.
