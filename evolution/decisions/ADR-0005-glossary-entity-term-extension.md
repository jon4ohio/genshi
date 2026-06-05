# ADR-0005: Glossary Entity Term Extension

## Status

**Status:** Accepted  
**Date:** 2026-06-05  
**Decision Maker(s):** Genshi maintainers (founding)  
**Supersedes:** None  
**Framework Version:** 0.1.0

## Context

[ADR-0004](ADR-0004-metamodel-ontology.md) established metamodel entity types including Enhancement, Release, ContentRule, AccessibilityRule, Assessment, and Practice. [Glossary rule 3](../../foundation/glossary/README.md) requires a glossary term or extension ADR for new metamodel entity types. Six entity types lacked glossary entries, creating language conflict and unstable references for machine consumers.

Foundation architecture audit identified assessment canon and glossary alignment as blocking gaps.

**In scope:** Glossary terms for metamodel-only entities; exception as governance record term.

**Out of scope:** Glossary-term registry entity; schemas; automation.

## Decision

**We will add glossary entries** for: assessment, enhancement, release, content-rule, accessibility-rule, practice, and exception (governance record, not metamodel entity).

Definitions follow standard glossary structure. Metamodel entity names remain PascalCase in ontology; glossary uses kebab-case file names and `glossary:*` IDs.

## Consequences

### Positive

- Glossary rule 3 satisfied for current entity catalog
- Stable `glossary:assessment` etc. for cross-document linking
- Exception term grounds governance hierarchy without new entity type

### Negative / Trade-offs

- Glossary index grows; maintenance burden per term
- Exception is record type, not artifact—authors must not conflate

### Operational Impact

- Update glossary README index and layers
- Link operational and system canon to glossary terms
- **Migration / rollback:** Supersede via ADR if terms retracted

## Related ADRs

- [ADR-0004](ADR-0004-metamodel-ontology.md)
- [ENH-0001](../enhancements/ENH-0001-glossary-metamodel-alignment.md)

## References

- [foundation/glossary/README.md](../../foundation/glossary/README.md)
- [operations/assessment/framework.md](../../operations/assessment/framework.md)
