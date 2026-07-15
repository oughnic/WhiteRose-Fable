# World build report

Source: `ContSys-FDIS-Feb-2026-MASTER.json` — ContSys FDIS Feb 2026 v1.0.0, exported 2026-02-06T14:39:32.3317288Z
Generated: 2026-07-15T15:46:14.496Z (pipeline 0.1.0)

## Totals
| | |
|---|---|
| Raw dataClasses | 180 |
| Kept (areas) | **161** |
| Dropped | 19 |
| Doors kept (associations incl. self) | **237** |
| Doors lost with dropped classes | 10 |
| Self-references | 9 |
| Wings | 6 + 1 annex |
| Multi-parent classes (after contraction) | 12 |
| Max inheritance depth (after contraction) | 7 |

## Wings
| Label | Key | Kind | Classes | Roots |
|---|---|---|---|---|
| event | `event` | wing | 35 | event |
| mental object | `mental-object` | wing | 47 | mental object |
| physical object | `physical-object` | wing | 3 | physical object |
| Resources annex | `resources` | annex | 9 | care funds, care resource |
| role | `role` | wing | 14 | role |
| stative | `stative` | wing | 38 | stative |
| time interval | `time-interval` | wing | 15 | time interval |

## Dropped classes (19)
| Class | Clause | Reason |
|---|---|---|
| appointment | 3.1.8 | definitional (clause 3.1.8) |
| care | 3.1.19 | definitional (clause 3.1.19) |
| commitment | 3.1.11 | definitional (clause 3.1.11) |
| continuity of care | 3.1.6 | definitional (clause 3.1.6) |
| data | 3.1.16 | definitional (clause 3.1.16) |
| data repository | 3.1.17 | definitional (clause 3.1.17) |
| health | 3.1.2 | definitional (clause 3.1.2) |
| information | 3.1.3 | definitional (clause 3.1.3) |
| information model | 3.1.18 | definitional (clause 3.1.18) |
| mandate | 3.1.9 | definitional (clause 3.1.9) |
| organization | 3.1.12 | definitional (clause 3.1.12) |
| party | 3.1.4 | definitional (clause 3.1.4) |
| person | 3.1.10 | definitional (clause 3.1.10) |
| process model | 3.1.5 | definitional (clause 3.1.5) |
| resource | 3.1.13 | definitional (clause 3.1.13) |
| risk | 3.1.15 | definitional (clause 3.1.15) |
| social determinant of health | 3.1.14 | definitional (clause 3.1.14) |
| tangible and visible entity | 9.9.9 | structural scaffold |
| thing | — | structural scaffold |

## Doors lost (10)
- social determinant of health —[relates to]→ social need  (source dropped (social determinant of health))
- health record extract —[imported into]→ data repository  (target dropped (data repository))
- organization —[is]→ care actor  (source dropped (organization))
- health state —[concerns]→ person  (target dropped (person))
- care activity —[care]→ care  (target dropped (care))
- subject of care —[seeks to receive, is receiving, or has received]→ care  (target dropped (care))
- information —[shared during]→ continuity of care  (source dropped (information))
- health record —[data repository]→ data repository  (target dropped (data repository))
- person —[plays]→ subject of care  (source dropped (person))
- person —[part of]→ social environment  (source dropped (person))

## Inheritance contractions (21)
- mental object: thing ⇒ (none — becomes a root)
- health record extract: information ⇒ knowledge
- care information: information ⇒ knowledge
- care supporting organization: organization ⇒ mental object
- care funds: resource ⇒ (none — becomes a root)
- health record component: information ⇒ knowledge
- event: thing ⇒ (none — becomes a root)
- authorization by law: mandate ⇒ mental object
- care data: data ⇒ knowledge
- sharable data repository: data repository ⇒ mental object
- care employment: mandate ⇒ mental object
- record template: information model ⇒ knowledge
- time interval: thing ⇒ (none — becomes a root)
- physical object: thing ⇒ (none — becomes a root)
- stative: thing ⇒ (none — becomes a root)
- health record: data repository ⇒ mental object
- care mandate: mandate ⇒ mental object
- care commitment: commitment ⇒ mental object
- care resource: resource ⇒ (none — becomes a root)
- care appointment: appointment ⇒ event
- role: thing ⇒ (none — becomes a root)

## Example-key quirks (37)
- automated care: legacy "example N" superseded by "exampleN" (kept 1, dropped 1)
- automatic medical device: legacy "example N" superseded by "exampleN" (kept 2, dropped 1)
- care activity: legacy "example N" superseded by "exampleN" (kept 1, dropped 1)
- care guideline: legacy "example N" superseded by "exampleN" (kept 3, dropped 1)
- care organization: legacy "example N" superseded by "exampleN" (kept 5, dropped 1)
- care personnel: legacy "example N" superseded by "exampleN" (kept 1, dropped 1)
- care plan: legacy "example N" superseded by "exampleN" (kept 5, dropped 1)
- care professional: legacy "example N" superseded by "exampleN" (kept 1, dropped 1)
- care professional entitlement: legacy "example N" superseded by "exampleN" (kept 1, dropped 1)
- care resource: legacy "example N" superseded by "exampleN" (kept 9, dropped 1)
- care supporting organization: legacy "example N" superseded by "exampleN" (kept 2, dropped 1)
- care third party activity: legacy "example N" superseded by "exampleN" (kept 2, dropped 1)
- continuity facilitator mandate: legacy "example N" superseded by "exampleN" (kept 1, dropped 1)
- discharge report: legacy "example N" superseded by "exampleN" (kept 1, dropped 1)
- episode of care: legacy "example N" superseded by "exampleN" (kept 2, dropped 1)
- episodes of care bundle: legacy "example N" superseded by "exampleN" (kept 1, dropped 1)
- health certificate: legacy "example N" superseded by "exampleN" (kept 5, dropped 1)
- health condition delay: legacy "example N" superseded by "exampleN" (kept 3, dropped 2)
- health report: legacy "example N" superseded by "exampleN" (kept 2, dropped 1)
- health summary: legacy "example N" superseded by "exampleN" (kept 4, dropped 1)
- indirect care activity period: legacy "example N" superseded by "exampleN" (kept 3, dropped 3)
- mandate to export personal information: legacy "example N" superseded by "exampleN" (kept 2, dropped 2)
- mandated period of care: legacy "example N" superseded by "exampleN" (kept 2, dropped 1)
- observed condition: legacy "example N" superseded by "exampleN" (kept 1, dropped 1)
- other carer: legacy "example N" superseded by "exampleN" (kept 1, dropped 1)
- professional health record: legacy "example N" superseded by "exampleN" (kept 1, dropped 1)
- protocol: legacy "example N" superseded by "exampleN" (kept 1, dropped 1)
- referral: legacy "example N" superseded by "exampleN" (kept 1, dropped 1)
- request for service: legacy "example N" superseded by "exampleN" (kept 2, dropped 1)
- request mandate: legacy "example N" superseded by "exampleN" (kept 3, dropped 1)
- resource delay: legacy "example N" superseded by "exampleN" (kept 2, dropped 2)
- resultant condition: legacy "example N" superseded by "exampleN" (kept 1, dropped 1)
- self-care: legacy "example N" superseded by "exampleN" (kept 1, dropped 1)
- subject of care: legacy "example N" superseded by "exampleN" (kept 5, dropped 1)
- subject of care desire: legacy "example N" superseded by "exampleN" (kept 6, dropped 1)
- subject of care preference delay: legacy "example N" superseded by "exampleN" (kept 2, dropped 2)
- target condition: legacy "example N" superseded by "exampleN" (kept 2, dropped 2)

## Warnings (8)
- missing description: "physical object"
- missing termClause: "physical object"
- missing description: "process"
- missing termClause: "process"
- missing description: "state"
- missing termClause: "state"
- missing description: "time interval"
- missing termClause: "time interval"

## Errors (0)
- none
