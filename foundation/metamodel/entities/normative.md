# Normative Entities

Principle, Decision, Enhancement, and Release. See [ontology.md](../ontology.md) for purpose and governance implications.

Each entity has a stable ID prefix (`principle:01`, `adr:0003`, `enh:0001`, `release:0.1.0`).

## Catalog

| Entity | Glossary | Instance location |
|--------|----------|-------------------|
| **Principle** | [principle](../../glossary/principle.md) | `foundation/principles/` |
| **Decision** | [decision](../../glossary/decision.md) | `evolution/decisions/` |
| **Enhancement** | [enhancement](../../glossary/enhancement.md) | `evolution/enhancements/` |
| **Release** | [release](../../glossary/release.md) | `evolution/releases/` |

## Required attributes

### Principle

| Attribute | Required | Description |
|-----------|----------|-------------|
| `id` | Yes | Two-digit number, e.g. `01` |
| `name` | Yes | Short title |
| `status` | Yes | `draft` \| `experimental` \| `stable` \| `deprecated` |
| `statement` | Yes | One falsifiable sentence |
| `derived_from` | Yes | Link to manifesto section |

### Decision (ADR)

| Attribute | Required | Description |
|-----------|----------|-------------|
| `id` | Yes | `ADR-NNNN` |
| `status` | Yes | Per ADR process |
| `date` | Yes | ISO date |
| `decision_makers` | Yes | Roles or names |
| `supersedes` | Yes | ADR id or `none` |
| `in_scope` / `out_of_scope` | Yes | Boundaries |

### Enhancement

| Attribute | Required | Description |
|-----------|----------|-------------|
| `id` | Yes | `ENH-NNNN` or `RFC-NNNN` |
| `status` | Yes | `draft` \| `active` \| `accepted` \| `rejected` \| `lapsed` |
| `tier` | Yes | 1 minor, 2 major, 3 charter |
| `author` | Yes | Person or role |
| `target_release` | No | Framework version |

### Release

| Attribute | Required | Description |
|-----------|----------|-------------|
| `version` | Yes | Semver framework version |
| `status` | Yes | `planned` \| `published` \| `maintained` \| `end_of_life` |
| `date` | Yes | Publication date |
| `changelog_refs` | Yes | Links to entity changes and ADRs |

## Ownership defaults

| Entity | Default owner |
|--------|----------------|
| Principle | Foundation steward |
| Decision | Architecture council |
| Enhancement | Author + sponsoring steward |
| Release | Maintainer |
