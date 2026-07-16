# World build report

Source: `A-system-of-concepts-for-the-continuity-of-care.json` — A system of concepts for the continuity of care v1.0.0, exported 2026-07-16T15:56:55.6135036Z
Generated: 2026-07-16T16:33:43.827Z (pipeline 0.1.0)

## Totals
| | |
|---|---|
| Raw dataClasses | 172 |
| Kept (areas) | **155** |
| Dropped | 17 |
| Doors kept (associations incl. self) | **237** |
| Doors lost with dropped classes | 10 |
| Self-references | 9 |
| Wings | 14 + 1 annex |
| Multi-parent classes (after contraction) | 7 |
| Max inheritance depth (after contraction) | 5 |

## Wings
| Label | Key | Kind | Classes | Roots |
|---|---|---|---|---|
| authorization by law | `authorization-by-law` | wing | 1 | authorization by law |
| care commitment | `care-commitment` | wing | 1 | care commitment |
| care employment | `care-employment` | wing | 1 | care employment |
| care mandate | `care-mandate` | wing | 10 | care mandate |
| care plan | `care-plan` | wing | 4 | care plan |
| care process | `care-process` | wing | 2 | care process |
| event | `event` | wing | 35 | event |
| health matter | `health-matter` | wing | 29 | health matter |
| health related period | `health-related-period` | wing | 14 | health related period |
| health state | `health-state` | wing | 3 | health state |
| knowledge | `knowledge` | wing | 26 | knowledge |
| Resources annex | `resources` | annex | 11 | care funds, care resource |
| role | `role` | wing | 15 | role |
| shareable data repository | `shareable-data-repository` | wing | 2 | shareable data repository |
| social environment | `social-environment` | wing | 1 | social environment |

## Dropped classes (17)
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

## Warnings (14)
- unexpected wing root "knowledge" (original parents: (none))
- unexpected wing root "care plan" (original parents: (none))
- unexpected wing root "event" (original parents: (none))
- unexpected wing root "authorization by law" (original parents: mandate)
- unexpected wing root "shareable data repository" (original parents: data repository)
- unexpected wing root "care employment" (original parents: mandate)
- unexpected wing root "health state" (original parents: (none))
- unexpected wing root "care process" (original parents: (none))
- unexpected wing root "social environment" (original parents: (none))
- unexpected wing root "care mandate" (original parents: mandate)
- unexpected wing root "care commitment" (original parents: commitment)
- unexpected wing root "health related period" (original parents: (none))
- unexpected wing root "health matter" (original parents: (none))
- unexpected wing root "role" (original parents: (none))

## Errors (0)
- none
