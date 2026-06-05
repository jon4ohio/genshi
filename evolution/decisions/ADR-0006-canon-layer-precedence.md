# ADR-0006: Canon Layer Precedence

## Status

**Status:** Accepted  
**Date:** 2026-06-05  
**Decision Maker(s):** Genshi maintainers (founding)  
**Supersedes:** None  
**Framework Version:** 0.1.0

## Context

After ADR-0004 (metamodel ontology) and ADR-0005 (glossary entity terms), foundation canon spans thesis, principles, glossary, metamodel, system, operations, and evolution layers. Without an explicit authority order, authors paraphrase glossary terms, duplicate definitions in system canon, and create silent contradictions across layers.

Foundation architecture audit and ENH-0001 resolution identified canon precedence as a blocking gap for contributors and assessors.

**In scope:** Layer stack, conflict resolution rules, reading order, repository boundary summary.

**Out of scope:** Schemas, lint automation, per-file metadata tags, enterprise adoption mapping.

## Decision Drivers

- Glossary rule 3 and ADR-0004 require glossary to precede metamodel without redefinition.
- Assessment dimensions (operations/assessment/framework.md) depend on stable upstream definitions.
- Contributors need a single conflict-resolution path (see CONTRIBUTING.md).
- `docs/` portal must not become normative by accident.

## Options Considered

### Option A: Implicit wiki model (no precedence doc)

- **Description:** Each layer self-describes authority; conflicts resolved ad hoc in PR review.
- **Pros:** Minimal documentation; familiar from early open-source repos.
- **Cons:** Paraphrase drift; glossary contradictions in system/; assessors cannot resolve disputes consistently.
- **Effort:** Low.
- **Notes:** Rejected.

### Option B: Explicit eight-layer stack with conflict matrix (chosen)

- **Description:** `foundation/canon-precedence.md` defines authority order (thesis → principles → glossary → metamodel → ADR → system → operations → evolution), six binding rules, and a conflict-resolution table. `docs/` declared non-normative.
- **Pros:** Single escalation path; aligns glossary-first rule with metamodel and operations; supports assessment and contributor onboarding.
- **Cons:** Authors must consult precedence before cross-layer edits; maintenance when layers are added.
- **Effort:** Medium.
- **Notes:** **Chosen.**

### Option C: Machine-enforced precedence via schema or lint

- **Description:** Encode layer order in validation tooling that blocks conflicting edits.
- **Pros:** Strongest enforcement.
- **Cons:** Requires Phase 3+ tooling; premature before canon stabilizes.
- **Effort:** High.
- **Notes:** Deferred; Option B is prerequisite.

## Decision

**We will use Option B.**

Canon authority follows an eight-layer stack documented in [foundation/canon-precedence.md](../../foundation/canon-precedence.md):

1. Thesis  
2. Principles  
3. Glossary  
4. Metamodel  
5. Decisions (ADR)  
6. System  
7. Operations  
8. Evolution (enhancements, releases)

**Binding rules:** Cite glossary; do not paraphrase. Glossary precedes new entities. Metamodel instantiates glossary. System and operations specialize without redefining terms. ADRs bind within scope. Manifesto does not duplicate glossary.

**Conflict resolution:** Glossary wins over metamodel attribute naming; system canon links upstream instead of restating definitions; operations lifecycle defers to metamodel entity lifecycle.

Contributors must follow [canon precedence](../../foundation/canon-precedence.md) and [governance charter](../../foundation/governance/charter.md) per CONTRIBUTING.md.

## Consequences

### Positive

- Single source for "which layer wins" disputes
- Assessment framework dimensions can reference stable upstream terms
- CONTRIBUTING onboarding lists glossary and precedence explicitly

### Negative / Trade-offs

- Additional document for authors to read before cross-layer edits
- Layer additions (e.g. reference-models maturity) require precedence doc update

### Operational Impact

- Link canon-precedence from foundation README, CONTRIBUTING, and governance charter
- Framework steward resolves escalations per conflict matrix
- **Migration / rollback:** Supersede via ADR if stack order changes

### Risks

| Risk | Likelihood | Impact | Mitigation | Owner/Role | Review Trigger |
|------|-----------|--------|------------|------------|----------------|
| Precedence doc drifts from actual repo layout | Med | Med | Update precedence when new top-level canon paths ship | Framework steward | New foundation/ or operations/ subtree |
| Authors skip precedence and paraphrase anyway | Med | High | CONTRIBUTING requires glossary citation; PR review checks | Maintainer | Repeated glossary conflicts in PRs |

## Related ADRs

- [ADR-0004](ADR-0004-metamodel-ontology.md) — metamodel instantiates glossary
- [ADR-0005](ADR-0005-glossary-entity-term-extension.md) — glossary terms for entity types

## References

- [foundation/canon-precedence.md](../../foundation/canon-precedence.md)
- [foundation/governance/charter.md](../../foundation/governance/charter.md)
- [operations/assessment/framework.md](../../operations/assessment/framework.md)
- [CONTRIBUTING.md](../../CONTRIBUTING.md)
- [ENH-0001](../enhancements/ENH-0001-glossary-metamodel-alignment.md)
