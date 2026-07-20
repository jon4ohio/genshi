# Responsibility Map

**Contract:** Project Entry (supporting artifact)  
**Problem coordinated:** Which existing artifact owns which kind of truth?

Mapped during Anchor adoption (Branch B — existing project). Files were not migrated; ownership was clarified.

---

## Framework canon

| Artifact | Responsibility | Anchor contract | Action |
|----------|----------------|-----------------|--------|
| [README.md](../README.md) | Visitor-facing product page | — | Keep; do not duplicate Entry |
| [foundation/thesis/manifesto.md](../foundation/thesis/manifesto.md) | Constitutional intent | Entry (referenced) | No change |
| [foundation/principles/](../foundation/principles/) | Normative beliefs | — | No change |
| [foundation/glossary/](../foundation/glossary/) | Canonical terminology | — | No change |
| [foundation/metamodel/](../foundation/metamodel/) | Entity ontology | — | No change |
| [foundation/canon-precedence.md](../foundation/canon-precedence.md) | Layer authority order | — | No change |
| [operations/assessment/framework.md](../operations/assessment/framework.md) | Assessment instrument | Review-like (Genshi-owned) | No change |
| [operations/maturity/framework.md](../operations/maturity/framework.md) | Maturity interpretation | — | No change |
| [evolution/decisions/](../evolution/decisions/) | Binding decisions | ADR | No change — already conforms |
| [evolution/enhancements/](../evolution/enhancements/) | Proposed changes | Spec-like (Genshi-owned) | No change |
| [docs/](../docs/) | Reader portal | — | Non-normative by design |

## Reference implementation

| Artifact | Responsibility | Anchor contract | Action |
|----------|----------------|-----------------|--------|
| [design-system/](../design-system/) | v0.1 consumer implementation | Spec-like scope | Keep separate from framework canon |
| [design-system/FOUNDATION-GAPS.md](../design-system/FOUNDATION-GAPS.md) | Usage-discovered gaps | Evidence | Link from assessments |

## Coordination layer (added)

| Artifact | Responsibility | Anchor contract | Action |
|----------|----------------|-----------------|--------|
| [anchor/project.md](project.md) | Project identity + index | Entry | Created |
| [anchor/handoff.md](handoff.md) | Session continuity | Handoff | Created |
| [anchor/validation.md](validation.md) | Anchor validation participation | Entry (referenced) | Created |
| [anchor/evidence/](evidence/) | Observation records | Evidence | Created |
| [AGENTS.md](../AGENTS.md) | AI dispatch | — | Created (dispatch only) |

## Gaps identified (not yet filled)

| Gap | Suggested owner | Priority |
|-----|-----------------|----------|
| Artifact registry for stable tokens/components | `design-system/` or future `system/` | Medium — needed for Governed conformance |
| Exception register | `operations/` or adopter instance | Low until production adoption |
| Adoption metrics | `operations/adoption/` (stub) | Deferred — operations stub |
| Spec for design-system v1 scope | `design-system/` or `anchor/specs/` | Low — README partially covers |

## AI context files

| File | Status |
|------|--------|
| `.cursor/rules/bmad/` | BMAD module references — capability companion, not project truth |
| `AGENTS.md` | Dispatch only — trimmed to pointers |
