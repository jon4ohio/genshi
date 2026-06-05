# Operational Entities

Capability, Assessment, and Practice. See [ontology.md](../ontology.md) for purpose and governance implications.

## Catalog

| Entity | Glossary | Instance location |
|--------|----------|-------------------|
| **Capability** | [capability](../../glossary/capability.md) | `reference-models/` (future), `operations/` |
| **Assessment** | [assessment](../../glossary/assessment.md) | `operations/assessment/` |
| **Practice** | [practice](../../glossary/practice.md) | `operations/`, `foundation/governance/` |

Capability is organizational, not technical. Publication of artifacts does not prove capability exists—adoption and governance do.

## Required attributes

### Capability

| Attribute | Required | Description |
|-----------|----------|-------------|
| `id` | Yes | Capability identifier |
| `name` | Yes | Organizational ability name |
| `description` | Yes | Outcome the design system enables |
| `artifact_evidence` | No | Artifact types that evidence this capability |

### Assessment

| Attribute | Required | Description |
|-----------|----------|-------------|
| `id` | Yes | Assessment identifier |
| `version` | Yes | Semver |
| `maturity_levels` | Yes | Levels assessed |
| `evidence_required` | Yes | What adopters must supply |
| `dimensions` | Yes | Includes semantic health and interpretive debt where applicable |

### Practice

| Attribute | Required | Description |
|-----------|----------|-------------|
| `id` | Yes | Practice identifier |
| `name` | Yes | Method name (workshop, audit, cadence) |
| `applies_to` | Yes | Entity types affected |
| `owner` | Yes | Steward role |

## Ownership defaults

| Entity | Default owner |
|--------|----------------|
| Capability | Framework steward (catalog); adopter owns instances |
| Assessment | Operations steward |
| Practice | Domain steward |

## Relationship to governance folder

`foundation/governance/` documents framework roles and decision rights—not a Governance Rule entity. Practices may be documented there; they remain distinct from Principles and Decisions.
