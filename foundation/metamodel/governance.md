# Governance Model (Metamodel)

How decision rights attach to entities. This document governs **the framework’s own canon**. Adopters implement parallel structures in their organizations using [foundation/governance/](../governance/) (future depth).

## Roles

| Role | Scope |
|------|-------|
| **Maintainer** | Repository integrity, releases, merge rights |
| **Framework steward** | Domain canon in `foundation/`, `operations/` |
| **System steward** | `system/` entity consistency (tokens, components, patterns) |
| **Architecture council** | Cross-domain ADRs, conflict resolution |
| **Contributor** | Proposals; no unilateral stable promotions |

## Decision rights matrix

| Action | Contributor | Steward | Council | Maintainer |
|--------|-------------|---------|---------|------------|
| Edit draft entity | R | C | — | A |
| Promote to experimental | R | A | — | C |
| Promote to stable | — | R | C | A |
| Deprecate stable | — | R | A | A |
| Accept ADR | — | C | R | A |
| Tier 3 enhancement | — | C | R | A (vote) |
| Framework release tag | — | C | C | R |

*R = responsible, A = accountable, C = consulted*

## Conformance levels (adopter-facing)

Genshi defines three conformance labels for **adopter** programs—not for judging the open-source repo:

| Level | Expectation |
|-------|-------------|
| **Aligned** | Principles adopted; decisions recorded for tokens |
| **Governed** | Aligned + lifecycle, owners, deprecation policy |
| **Operational** | Governed + assessments, adoption metrics, evolution cadence |

Details expand in `operations/maturity/` and `operations/assessment/`.

## Exception handling

1. Record exception with expiry, scope (team/product), and approver.
2. Link to nearest **Decision** or document why decision is pending.
3. Review exceptions on cadence; do not normalize permanent exceptions.

## Conflict resolution

1. Steward discussion (5 business days default).
2. Architecture council recommendation.
3. Maintainer decision for repo; documented in enhancement or ADR comment thread.

## Relation to organizational governance

Enterprise adopters map Genshi entities to:

- Architecture repository (TOGAF-style)
- Product governance forums
- Engineering standards bodies

Genshi does not replace those bodies—it supplies vocabulary and artifact types they should reference.
