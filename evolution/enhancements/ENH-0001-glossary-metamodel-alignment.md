# ENH-0001: Glossary–Metamodel Alignment

## Status

**Status:** accepted  
**Tier:** 2 (major)  
**Author:** Genshi maintainers (founding)  
**Target release:** 0.1.0  
**Resolved by:** [ADR-0004](../decisions/ADR-0004-metamodel-ontology.md), [ADR-0005](../decisions/ADR-0005-glossary-entity-term-extension.md)

## Context

The foundational language layer in `foundation/glossary/` introduces terms that are not yet first-class metamodel entities or assessment dimensions. This enhancement records follow-up work after glossary acceptance.

**Upstream:** [Glossary](../../foundation/glossary/README.md)  
**Related:** [Metamodel ontology](../../foundation/metamodel/ontology.md), [ENH index](README.md)

## Resolution

### Completed

| Item | Status |
|------|--------|
| **knowledge-asset** explicit metamodel supertype | Done — ADR-0004 |
| Entity evaluation and rejected candidates | Done — `ontology.md` |
| Meaning and interpretive-debt as assessment dimensions | Done — [operations/assessment/framework.md](../../operations/assessment/framework.md) |
| Glossary terms for metamodel entities | Done — ADR-0005 |
| **exception** governance record term | Done — [glossary/exception.md](../../foundation/glossary/exception.md) |

### Deferred

| Item | Status | Notes |
|------|--------|-------|
| **glossary-term** registry entity | Deferred | Requires follow-up enhancement or ADR |
| **semantic-alias** relationship type | Deferred | In `relationships.md` catalog; formalization TBD |

## Acceptance criteria

- [x] Enhancement reviewed by framework steward
- [x] ADR produced for metamodel entity set (ADR-0004)
- [x] Assessment pack updated with dimensions (operations/assessment/framework.md)
- [x] Glossary cross-links verified in metamodel README

## Out of scope

- Schemas, validation, or automation (Phase 3+)
