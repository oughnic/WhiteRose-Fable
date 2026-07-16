# World build report

Source: `A-system-of-concepts-for-the-continuity-of-care.json` — A system of concepts for the continuity of care v1.0.0, exported 2026-07-16T15:56:55.6135036Z
Generated: 2026-07-16T17:20:58.633Z (pipeline 0.1.0)

## Totals
| | |
|---|---|
| Raw dataClasses | 172 |
| Kept (areas) | **172** |
| Dropped | 0 |
| Doors kept (associations incl. self) | **247** |
| Doors lost with dropped classes | 0 |
| Self-references | 9 |
| Wings | 6 + 2 annex |
| Multi-parent classes (after contraction) | 7 |
| Max inheritance depth (after contraction) | 5 |

## Wings
| Label | Key | Kind | Classes | Roots |
|---|---|---|---|---|
| event | `event` | wing | 35 | event |
| mental object | `mental-object` | wing | 45 | knowledge, care plan, authorization by law, shareable data repository, care employment, care mandate, care commitment |
| process | `process` | wing | 2 | care process |
| Reference collection | `reference` | annex | 17 | social determinant of health, appointment, organization, risk, continuity of care, care, resource, process model, data, party, mandate, health, person, information model |
| Resources annex | `resources` | annex | 11 | care funds, care resource |
| role | `role` | wing | 15 | role |
| state | `state` | wing | 33 | health state, social environment, health matter |
| time interval | `time-interval` | wing | 14 | health related period |

## Dropped classes (0)
| Class | Clause | Reason |
|---|---|---|


## Doors lost (0)
- none

## Inheritance contractions (15)
- health record extract: information ⇒ knowledge
- care information: information ⇒ knowledge
- care supporting organization: organization ⇒ (none — becomes a root)
- care funds: resource ⇒ (none — becomes a root)
- health record component: information ⇒ knowledge
- authorization by law: mandate ⇒ (none — becomes a root)
- care data: data ⇒ knowledge
- shareable data repository: data repository ⇒ (none — becomes a root)
- care employment: mandate ⇒ (none — becomes a root)
- record template: information model ⇒ knowledge
- health record: data repository ⇒ (none — becomes a root)
- care mandate: mandate ⇒ (none — becomes a root)
- care commitment: commitment ⇒ (none — becomes a root)
- care resource: resource ⇒ (none — becomes a root)
- care appointment: appointment ⇒ event

## Example-key quirks (0)
- none

## Warnings (0)
- none

## Errors (0)
- none
