# Assessment: Genshi Framework + Reference Implementation

**Date:** 2026-07-02  
**Instrument:** [operations/assessment/framework.md](../../operations/assessment/framework.md) v0.2.0  
**Assessor:** Anchor adoption session (AI-assisted, human review pending)  
**Scope:** Framework canon + `design-system/` reference implementation

---

## Executive summary

| Surface | Estimated maturity | Conformance |
|---------|-------------------|-------------|
| **Framework canon** (`foundation/`, `operations/`, `evolution/`) | Early **Governed** | Strong decision_coverage; lifecycle model defined; operational evidence incomplete |
| **Reference implementation** (`design-system/`) | Pre-**Aligned** | Working v0.1 screen; explicit governance exclusion; no decision_refs on artifacts |

The framework repo practices what it preaches at the canon layer. The new `design-system/` folder is intentionally decoupled—which is correct for a reference impl, but creates invalid-state risk if components are promoted to stable without decision backing.

---

## Dimension findings

### 1. decision_coverage

**Framework canon — Strong**

- Six accepted ADRs ([index](../../evolution/decisions/index.md)) covering thesis, architecture, metamodel, glossary extension, canon precedence
- Assessment and maturity frameworks link upstream to principles and glossary
- Canon precedence explicitly binds layer authority

**Reference implementation — Weak**

- [design-system/README.md](../../design-system/README.md) states: "No Genshi metadata, ADRs, or governance layer"
- Five primitives (Text, Box, Stack, Input, Button) have no `decision_refs`
- Token paths consumed without documented semantic ownership linkage to framework `system/tokens/`

**Evidence:** [evolution/decisions/index.md](../../evolution/decisions/index.md), [design-system/README.md](../../design-system/README.md)

---

### 2. lifecycle_compliance

**Framework canon — Moderate**

- Metamodel lifecycle defined ([foundation/metamodel/lifecycle.md](../../foundation/metamodel/lifecycle.md))
- Enhancement process exists ([evolution/enhancements/](../../evolution/enhancements/))
- `operations/lifecycle/` remains a stub

**Reference implementation — Absent**

- No experimental/stable/deprecated labels on components or tokens
- [FOUNDATION-GAPS.md](../../design-system/FOUNDATION-GAPS.md) documents usage findings but not lifecycle states

**Evidence:** [operations/README.md](../../operations/README.md) (adoption/lifecycle stubs)

---

### 3. semantic_health

**Framework canon — Strong**

- 14-term glossary with cross-links
- Metamodel ontology rejects duplicate entity definitions
- Principles 04 (tokens as knowledge) and 06 (meaning survives scale) operationalized in assessment dimensions

**Reference implementation — Moderate with known gaps**

- Primitives map to token CSS variables via [tokens.ts](../../design-system/packages/react/src/tokens.ts)
- Documented workarounds for composite line-height unit issues (Input/Button use explicit `lineHeight: 1.2`)
- Source typo `sfe.color.fill.backround` noted but not fixed
- Patterns emerged (page header, toolbar, list row, empty state) but not registered as pattern artifacts

**Evidence:** [design-system/FOUNDATION-GAPS.md](../../design-system/FOUNDATION-GAPS.md)

---

### 4. interpretive_debt

**Framework canon — Low–Moderate**

- Reading order documented in [docs/README.md](../../docs/README.md) and [canon-precedence.md](../../foundation/canon-precedence.md)
- Phase 2 stubs (adoption, lifecycle) may confuse contributors expecting complete operations canon
- README states "no application implementation code at v0.2.1" while `design-system/` now exists (interpretive drift)

**Reference implementation — Low (explicit scope)**

- FOUNDATION-GAPS records observations with priority—good debt visibility
- "Patch only when a second screen needs it" is clear deferral discipline

**Action:** Update root README to acknowledge `design-system/` as Phase 4 preview or reference impl, reducing drift.

---

### 5. maturity

**Framework canon**

Per [maturity framework](../../operations/maturity/framework.md):

| Level | Status | Rationale |
|-------|--------|-----------|
| Aligned | **Met** | Token/decision discipline in canon; ADR-0003 decision-centric stack |
| Governed | **Partially met** | Lifecycle model exists; artifact registry absent; invalid-state review not evidenced |
| Operational | **Not met** | No adoption_metrics, exception_register, semantic_audit, or review_cadence evidence |

**Reference implementation**

| Level | Status | Rationale |
|-------|--------|-----------|
| Aligned | **Not met** | No decision_refs on stable artifacts |
| Governed | **Not met** | No lifecycle states, owners, or registry |
| Operational | **Not met** | Single example screen; no adoption measurement |

---

### 6. invalid_state_absence

**Framework canon — No violations found**

- ADRs do not contradict principles (per index and canon-precedence rules)
- Metamodel invalid states documented in assessment framework; no evidence of stable-without-refs in canon markdown

**Reference implementation — Latent risk**

If v0.1 primitives are treated as "stable" without decision_refs, this triggers metamodel invalid state #2 (Stable Token without Decision refs) and #1 (Stable Component without Token refs) at the semantic level—components reference tokens but neither carries formal refs.

**Mitigation:** Keep reference impl explicitly **experimental** until a second screen forces registry + decision discipline, or add lightweight `design-system/artifact-registry.md` with experimental status and gap links.

---

## Evidence inventory

| Evidence type | Present | Location |
|---------------|---------|----------|
| decision_log | Yes | [evolution/decisions/](../../evolution/decisions/) |
| artifact_registry | No | — |
| semantic_audit | Partial | [FOUNDATION-GAPS.md](../../design-system/FOUNDATION-GAPS.md) |
| exception_register | No | — |
| adoption_metrics | No | — |
| review_cadence | No | — |

---

## Recommended actions (prioritized)

1. **Clarify README** — Acknowledge `design-system/` as reference implementation; resolve "no implementation code" drift
2. **Label reference impl experimental** — Explicit lifecycle state in `design-system/README.md`
3. **Artifact registry (minimal)** — Token + component list with status, owner, decision_refs (even if refs point to "pending ADR-0007")
4. **Second screen gate** — Per FOUNDATION-GAPS discipline; promote patterns only when second consumer exists
5. **Operations stubs** — Phase 2 adoption/lifecycle remain deferred unless production adoption begins

---

## Anchor adoption observation

Anchor Entry + responsibility map successfully indexed existing canon without file migration. BMAD rules remain a companion capability (`.cursor/rules/bmad/`) with no ownership conflict when `AGENTS.md` stays dispatch-only.

**Implication for Anchor validation:** Mature canon repos (like Genshi) benefit from Branch B mapping more than new contract creation. Gap: no Spec contract for `design-system/` bounded scope—README partially serves this role.

---

## Related

- [responsibility-map.md](../responsibility-map.md)
- [validation.md](../validation.md)
- [handoff.md](../handoff.md)
