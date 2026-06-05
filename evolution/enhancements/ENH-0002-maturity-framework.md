# ENH-0002: Maturity Framework

## Status

**Status:** accepted  
**Category:** Operations Canon  
**Tier:** 2 (operations canon)  
**Author:** Genshi maintainers  
**Target release:** pending — candidate 0.2.1  
**Resolved by:** [operations/maturity/framework.md](../../operations/maturity/framework.md)

## Context

The [assessment framework](../../operations/assessment/framework.md) defines what to evaluate and what evidence counts. Assessment instances declare `maturity_levels` aligned to `operations/maturity/`—which was stub-only at v0.2.0.

This enhancement publishes maturity canon: interpretation of assessment evidence as program stage and progression, without ontology expansion.

**Upstream:** [Assessment framework](../../operations/assessment/framework.md), [Conformance levels](../../foundation/metamodel/governance.md#conformance-levels-adopter-facing)  
**Related:** [ENH index](README.md)

## Resolution

### Completed

| Item | Status |
|------|--------|
| Maturity framework canon | Done — [operations/maturity/framework.md](../../operations/maturity/framework.md) |
| Three levels isomorphic to conformance (Aligned, Governed, Operational) | Done |
| Trust-type boundaries (decision / structural / meaning+capability) | Done |
| Below Aligned as assessment outcome, not a maturity level | Done |
| Canon-scope note (assessment evidence types only; no dependency on adoption/lifecycle stubs) | Done |
| Cross-links from assessment, governance, glossary, docs | Done |

### Explicit non-goals

- No **Emerging** (or other fourth) maturity level
- No adoption or program-lifecycle canon
- No new glossary terms, metamodel entities, or ADR
- No schemas, tooling, or scoring rubrics

## Acceptance criteria

- [x] Enhancement reviewed by framework steward
- [x] Maturity framework published at `operations/maturity/framework.md`
- [x] Assessment framework cross-links updated
- [x] Maturity levels 1:1 with conformance levels
- [x] Worked example demonstrates unambiguous level interpretation

## Out of scope

- `operations/adoption/` and program-level `operations/lifecycle/` (future depth)
- Component and pattern taxonomy (Phase 2 remainder)
- Schemas, validation, or automation (Phase 3+)
