# Layout report (Stages 2 + 7)

Racetrack loop: two streets of 395 m joined by two glazed
cloisters across a 37 m courtyard (computed from the real underground
envelopes so no same-storey clash is possible; verified above).

| Street | Wings (west→east) |
|---|---|
| south | authorization-by-law (8 m), care-commitment (8 m), care-employment (8 m), care-mandate (36 m), care-plan (20 m), care-process (12 m), event (125 m), health-matter (82 m) |
| north | health-related-period (59 m), health-state (12 m), knowledge (87 m), resources (44 m), role (59 m), shareable-data-repository (12 m), social-environment (8 m) |

Real stairwells + landings: 48
Deepest storey: level −5

## Edges on portal fallbacks (by design: association doors are portals; listed
## here are the *inheritance* edges that could not be physical)

### Non-primary parents (8)
- care personnel —↑→ care actor  (non-primary parent)
- care personnel —↑→ care resource  (non-primary parent)
- clinical issue —↑→ health issue  (non-primary parent)
- health condition delay —↑→ care activity delay  (non-primary parent)
- informed consent —↑→ care mandate  (non-primary parent)
- professionally assessed condition —↑→ observed condition  (non-primary parent)
- social issue —↑→ social matter  (non-primary parent)
- subject of care —↑→ role  (non-primary parent)

### Subtypes homed under another parent (8)
- care mandate —↓→ informed consent  (subtype homed elsewhere)
- health issue —↓→ clinical issue  (subtype homed elsewhere)
- care activity delay —↓→ health condition delay  (subtype homed elsewhere)
- care resource —↓→ care personnel  (subtype homed elsewhere)
- care actor —↓→ care personnel  (subtype homed elsewhere)
- role —↓→ subject of care  (subtype homed elsewhere)
- observed condition —↓→ professionally assessed condition  (no home children — lobby portal door)
- social matter —↓→ social issue  (no home children — lobby portal door)
