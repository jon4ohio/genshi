# ENH-0001: Glossary–Metamodel Alignment

## Status

**Status:** accepted (partial)  
**Tier:** 2 (major)  
**Author:** Genshi maintainers (founding)  
**Target release:** 0.1.0  
**Resolved by:** [ADR-0004](../decisions/ADR-0004-metamodel-ontology.md)

## Context

The foundational language layer in `foundation/glossary/` introduces terms that are not yet first-class metamodel entities or assessment dimensions. This enhancement records follow-up work after glossary acceptance.

**Upstream:** [Glossary](../../foundation/glossary/README.md)  
**Related:** [Metamodel ontology](../../foundation/metamodel/ontology.md), [ENH index](README.md)

## Resolution

### Completed (ADR-0004)

| Item | Status |
|------|--------|
| **knowledge-asset** explicit metamodel supertype | Done — `entities/artifacts.md`, `ontology.md` |
| Entity evaluation and rejected candidates documented | Done — `ontology.md` |
| Meaning and interpretive-debt remain non-entities | Done — cross-cutting / assessment dimensions |
| Governance and lifecycle remain concerns, not entities | Done — `governance.md`, `relationships.md` |

### Deferred

| Item | Status | Notes |
|------|--------|-------|
| **meaning** as `semantic_health` assessment dimension | Deferred | Awaits `operations/assessment/` canon |
| **interpretive-debt** assessment dimension | Deferred | Awaits assessment pack |
| **glossary-term** registry entity | Deferred | Requires follow-up enhancement or ADR |
| **semantic-alias** relationship type | Deferred | Documented in `relationships.md`; formalization TBD |

## Acceptance criteria

- [x] Enhancement reviewed by framework steward
- [x] ADR produced for metamodel entity set ([ADR-0004](../decisions/ADR-0004-metamodel-ontology.md))
- [ ] Assessment pack updated if dimensions added
- [x] Glossary cross-links verified in metamodel README

## Out of scope

- Glossary term content (completed in `foundation/glossary/`)
- Schemas, validation, or automation (Phase 3+)
