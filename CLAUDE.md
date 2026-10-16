# White Rose General Hospital (WhiteRose-Fable)

Read **INTEGRATION.md** first: it is the branding and integration contract with the sister
repositories (`oughnic/contsys.org`, the reference publication; `oughnic/mauro-edit`, the
model source and generators). WhiteRose-Fable is the codename; the public name is **White
Rose General Hospital**, master-branded ContSys.

Hard rules:

- Join and link concepts by **slug**, never by Mauro UUID (uuids are per-export only).
  Slugs are **underscore** form (`care_plan` — spaces become `_`, real hyphens in terms are
  kept), matching the live contsys.org URLs; hyphen forms are aliases only.
- "continuity of care" is the standard's exact term; "continuity across care" only in
  marketing copy.
- The Yorkshire rose (`public/rose.svg`) is CC BY-SA 3.0 — keep its attribution.
- The hospital is fictional: no real NHS organisation's name or identity.
- Do not rename the Postgraduate Medical Centre — it is a load-bearing part of the content
  plan (INTEGRATION.md §4).

Debug panel (Tweakpane, loaded only with `#debug` in the URL — `src/debug/debugPane.ts`):

- Unless the user says otherwise, every new feature exposes its parameters in the panel
  (register them with `addDebugControls`). Give each control a label that says what it
  does.
- If a request doesn't say which parameters to expose, or a parameter's meaning isn't
  obvious, remind the user: list what was exposed, what wasn't, and explain unclear ones.

Build: Node 24 (portable install at `C:\Users\Nicholas\tools\node-v24.18.0-win-x64` on the
owner's machine) — `npm install`, `npm run world` (model → world.json), `npm run audit`,
`npm run build`. README.md documents controls and URL parameters.
