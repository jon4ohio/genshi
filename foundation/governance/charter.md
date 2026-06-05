# Framework Governance Charter

Operating rules for the Genshi open-source framework canon. This document complements [metamodel governance](../metamodel/governance.md), which defines decision rights and conformance levels.

**Glossary:** [governance](../glossary/governance.md), [exception](../glossary/exception.md)  
**Not:** Adopter organizational governance (enterprises map Genshi to their own bodies)

---

## Scope

| In scope | Out of scope |
|----------|--------------|
| Roles and accountability for framework canon | Product team RACI inside adopters |
| How ideas become enhancements, ADRs, releases | HR or enterprise reorg models |
| Exception discipline for framework work | Vendor tool selection |
| Canon change discipline | Implementation packages (npm, Figma) |

---

## Roles

Same roles as [metamodel/governance.md § Roles](../metamodel/governance.md#roles):

| Role | Accountability |
|------|----------------|
| **Maintainer** | Repository integrity, releases, merge rights |
| **Framework steward** | `foundation/`, `operations/` canon consistency |
| **System steward** | `system/` entity consistency |
| **Architecture council** | Cross-domain ADRs, conflict resolution |
| **Contributor** | Proposals; no unilateral stable promotions |

Decision rights matrix: [metamodel/governance.md](../metamodel/governance.md#decision-rights-matrix).

---

## How canon changes

```text
Issue / discussion
  → Enhancement (evolution/enhancements/) when scope is non-trivial
  → Decision / ADR (evolution/decisions/) when binding
  → Canon update (foundation/, system/, operations/)
  → Release note (evolution/releases/) when user-visible
```

- Do not edit **Accepted** ADR substance in place—supersede.
- Do not silently edit **Stable** principles—enhancement + process per [principles/README](../principles/README.md).
- New metamodel entity types require glossary term or ADR per [glossary](../glossary/README.md).

---

## Exception discipline

Per [glossary: exception](../glossary/exception.md):

1. Record scope (team, product, surface), expiry date, approver.
2. Link to nearest **Decision** or document pending decision with target date.
3. Review on cadence; do not normalize permanent exceptions.
4. Include exceptions in assessment evidence ([exception_register](../../operations/assessment/framework.md#evidence-types)).

Exceptions are governance records—not a metamodel entity type.

---

## Conflict resolution

1. Steward discussion (5 business days default).
2. Architecture council recommendation.
3. Maintainer decision for repository; document in enhancement or ADR thread.

Layer conflicts (glossary vs metamodel vs principle): [canon-precedence.md](../canon-precedence.md).

---

## Practices

**Practice** entities ([glossary: practice](../glossary/practice.md)) may be documented here or in `operations/` when they describe repeatable framework maintenance methods. Practices do not override Principles or Decisions.

---

## Relationship to metamodel governance

| Document | Purpose |
|----------|---------|
| [metamodel/governance.md](../metamodel/governance.md) | Decision rights matrix, conformance levels, governance hierarchy |
| This charter | Framework operating rules, change path, exception discipline |
| [operations/assessment/framework.md](../../operations/assessment/framework.md) | How adopters demonstrate conformance |
| [operations/maturity/framework.md](../../operations/maturity/framework.md) | How assessment evidence maps to maturity levels and progression |

Adopters implement parallel structures; Genshi supplies vocabulary and artifact types.
