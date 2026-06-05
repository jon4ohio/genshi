# Changelog

All notable framework canon changes are documented here. Versioning follows [semantic versioning](https://semver.org/) for the **framework** (not npm packages).

## [0.2.1] — 2026-06-05

### Summary

Framework v0.2.1 introduces the Genshi Maturity Framework—the first complete operational interpretation layer built on assessment. Maturity interprets assessment evidence as program stage and progression using three levels isomorphic to conformance (Aligned, Governed, Operational), without ontology expansion.

### Added

**Operations**

- [Maturity framework](../../operations/maturity/framework.md) — Level definitions, trust types, below Aligned, progression and regression rules, canon-scope note
- [Validation scenarios](../../operations/maturity/validation-scenarios.md) — Maintainer validation artifact (not canon); eight inter-rater classification scenarios

**Evolution**

- [ENH-0002](../enhancements/ENH-0002-maturity-framework.md) — Operations Canon; resolved with validation pass and release decision

### Changed

- [operations/assessment/framework.md](../../operations/assessment/framework.md) — Cross-links to maturity framework; `maturity_levels` defined
- [operations/maturity/README.md](../../operations/maturity/README.md) — Canon portal and validation artifact index
- [operations/README.md](../../operations/README.md) — Maturity status: Canon
- [foundation/metamodel/governance.md](../../foundation/metamodel/governance.md) — Maturity framework link
- [foundation/glossary/assessment.md](../../foundation/glossary/assessment.md) — Maturity interpretation reference
- [foundation/governance/charter.md](../../foundation/governance/charter.md) — Maturity framework in relationship table
- [README.md](../../README.md) — v0.2.1; reading path includes maturity
- [CONTRIBUTING.md](../../CONTRIBUTING.md) — Maturity removed from evolving-stub list
- [docs/README.md](../../docs/README.md) — Reading order includes maturity framework

### Phase status

- **Phase 1 — Foundations:** Complete
- **Phase 2 — System Architecture:** In progress (assessment and maturity canon shipped; adoption and lifecycle stubs remain)

### Notes

No new ADR. Maturity levels are isomorphic to existing conformance levels. Below Aligned is an assessment outcome, not a fourth maturity level. Validation scenarios are maintainer infrastructure—not binding canon.

---

## [0.2.0] — 2026-06-05

### Summary

Framework v0.2.0 marks completion of Phase 1 foundations and the start of Phase 2 system architecture. The conceptual architecture materially expanded: full glossary–metamodel alignment, governance charter, canon precedence, and the first operations canon (assessment framework).

### Added

**Decisions**

- [ADR-0004](../decisions/ADR-0004-metamodel-ontology.md) — Metamodel ontology (12 entity types, abstract supertypes, rejected candidates)
- [ADR-0005](../decisions/ADR-0005-glossary-entity-term-extension.md) — Glossary terms for metamodel entities
- [ADR-0006](../decisions/ADR-0006-canon-layer-precedence.md) — Eight-layer canon authority stack and conflict resolution

**Foundation**

- [Glossary](../../foundation/glossary/README.md) — Canonical vocabulary layer with entity-term extensions (assessment, enhancement, release, content-rule, accessibility-rule, practice, exception)
- [Canon precedence](../../foundation/canon-precedence.md) — Layer authority order and conflict resolution
- [Governance charter](../../foundation/governance/charter.md) — Framework change discipline, roles, exception rules
- [Metamodel ontology](../../foundation/metamodel/ontology.md) — Explicit entity set, relationships, dependencies, rejected candidates
- Tiered entity specs: [normative](../../foundation/metamodel/entities/normative.md), [artifacts](../../foundation/metamodel/entities/artifacts.md), [operational](../../foundation/metamodel/entities/operational.md)

**Operations**

- [Assessment framework](../../operations/assessment/framework.md) — Evaluation dimensions (maturity, semantic health, interpretive debt, decision coverage, lifecycle compliance, invalid state absence)

**Evolution**

- [ENH-0001](../enhancements/ENH-0001-glossary-metamodel-alignment.md) — Resolved (glossary–metamodel alignment)

### Changed

- [README.md](../../README.md) — Framework vs operating model framing; reading path includes assessment and glossary
- [CONTRIBUTING.md](../../CONTRIBUTING.md) — Requires glossary citation and canon precedence
- [docs/README.md](../../docs/README.md) — Reader portal aligned to canon layers
- [operations/README.md](../../operations/README.md) — Foundation vs operations boundary documented
- [system/tokens/architecture.md](../../system/tokens/architecture.md) — Links upstream to glossary (no duplicate definitions)

### Phase status

- **Phase 1 — Foundations:** Complete (principles, governance, metamodel, decision framework)
- **Phase 2 — System Architecture:** In progress (assessment canon shipped; maturity, adoption, lifecycle stubs remain)

### Notes

Accepted ADRs 0001–0006 record `Framework Version: 0.1.0` as the version at acceptance; they remain binding at 0.2.0. Supersession requires a new ADR.

---

## [0.1.1] — 2026-06-05

### Added

- [Apache 2.0 license](../../LICENSE)
- [CODE_OF_CONDUCT.md](../../CODE_OF_CONDUCT.md)
- [CONTRIBUTING.md](../../CONTRIBUTING.md)
- [SECURITY.md](../../SECURITY.md)
- Public-facing [README.md](../../README.md) for repository visitors

### Notes

Open-source governance infrastructure for public repository preparation.

---

## [0.1.0] — 2026-06-05

### Added

- [Manifesto](../../foundation/thesis/manifesto.md) — constitutional center
- [ADR-0001](../decisions/ADR-0001-why-genshi-exists.md) — Why Genshi exists
- [ADR-0002](../decisions/ADR-0002-design-systems-as-organizational-systems.md) — Organizational systems framing
- [ADR-0003](../decisions/ADR-0003-decision-centric-architecture.md) — Decision-centric stack
- [Principles](../../foundation/principles/) — Six stable principles
- [Metamodel](../../foundation/metamodel/) — Entities, relationships, lifecycle, governance (skeleton)
- [Token architecture](../../system/tokens/architecture.md)

### Framework version

First public canon release.
