# Layout report (Stages 2 + 7)

Racetrack loop: two streets of 337 m joined by two glazed
cloisters across a 56 m courtyard (computed from the real underground
envelopes so no same-storey clash is possible; verified above).

| Street | Wings (west→east) |
|---|---|
| south | event (125 m), mental-object (159 m) |
| north | physical-object (12 m), resources (35 m), role (51 m), stative (116 m), time-interval (63 m) |

Real stairwells + landings: 54
Deepest storey: level −7

## Edges on portal fallbacks (by design: association doors are portals; listed
## here are the *inheritance* edges that could not be physical)

### Non-primary parents (13)
- care personnel —↑→ care actor  (non-primary parent)
- care personnel —↑→ care resource  (non-primary parent)
- care supporting organization —↑→ care third party  (non-primary parent)
- clinical issue —↑→ health issue  (non-primary parent)
- facility —↑→ care resource  (non-primary parent)
- health condition delay —↑→ care activity delay  (non-primary parent)
- health record —↑→ mental object  (non-primary parent)
- informed consent —↑→ care mandate  (non-primary parent)
- medical device —↑→ physical object  (non-primary parent)
- medicinal product —↑→ care resource  (non-primary parent)
- professionally assessed condition —↑→ observed condition  (non-primary parent)
- social issue —↑→ social matter  (non-primary parent)
- subject of care —↑→ role  (non-primary parent)

### Subtypes homed under another parent (13)
- care mandate —↓→ informed consent  (subtype homed elsewhere)
- mental object —↓→ health record  (subtype homed elsewhere)
- physical object —↓→ medical device  (subtype homed elsewhere)
- care resource —↓→ care personnel  (subtype homed elsewhere)
- care resource —↓→ facility  (subtype homed elsewhere)
- care resource —↓→ medicinal product  (subtype homed elsewhere)
- care third party —↓→ care supporting organization  (subtype homed elsewhere)
- care actor —↓→ care personnel  (subtype homed elsewhere)
- role —↓→ subject of care  (subtype homed elsewhere)
- health issue —↓→ clinical issue  (subtype homed elsewhere)
- care activity delay —↓→ health condition delay  (subtype homed elsewhere)
- observed condition —↓→ professionally assessed condition  (no home children — lobby portal door)
- social matter —↓→ social issue  (no home children — lobby portal door)
