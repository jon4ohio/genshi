# Canon Layer Precedence

Authority order and conflict resolution when foundational layers disagree.

**Purpose:** Prevent drift from paraphrased terms, duplicate definitions, and silent contradiction across thesis, principles, glossary, metamodel, system, operations, and evolution.

---

## Layer stack (highest authority first)

| Order | Layer | Location | Role |
|-------|-------|----------|------|
| 1 | **Thesis** | `foundation/thesis/` | Constitutional intent; why Genshi exists |
| 2 | **Principles** | `foundation/principles/` | Normative beliefs with testable implications |
| 3 | **Glossary** | `foundation/glossary/` | Canonical term definitions |
| 4 | **Metamodel** | `foundation/metamodel/` | Entity types, relationships, dependencies, lifecycle |
| 5 | **Decisions (ADR)** | `evolution/decisions/` | Binding choices; must not contradict accepted principles |
| 6 | **System** | `system/` | Domain canon for tokens, components, patterns, rules |
| 7 | **Operations** | `operations/` | Assessment, maturity, adoption, program lifecycle |
| 8 | **Evolution** | `evolution/enhancements/`, `evolution/releases/` | Proposals and versioned aggregation |

**Docs** (`docs/`) is a reader portal—never normative. Canon lives in layers 1–8.

---

## Rules

1. **Cite glossary; do not paraphrase** — Use [glossary](glossary/README.md) links or `glossary:*` IDs for defined terms.
2. **Glossary precedes new entities** — New metamodel entity types require a glossary term or extension ADR.
3. **Metamodel instantiates glossary** — Entity definitions must not redefine glossary terms.
4. **System and operations specialize** — Token architecture, assessment framework, etc. apply metamodel rules; they do not replace glossary definitions. Link upstream instead of restating.
5. **ADRs bind within scope** — Accepted ADRs constrain canon authors; supersede via new ADR only.
6. **Manifesto does not duplicate glossary** — Constitutional narrative in thesis; precise terms in glossary.

---

## Conflict resolution

When two layers appear to conflict:

| Situation | Resolution |
|-----------|--------------|
| Glossary vs metamodel attribute name | Glossary meaning wins; metamodel aligns via enhancement + ADR |
| Principle vs accepted ADR | ADR must not contradict stable principles; if contradiction found, ADR is invalid or principle needs governed revision |
| System canon vs glossary (e.g. token definition) | Remove duplicate definition from system; link to glossary |
| Operations vs metamodel lifecycle | Entity lifecycle: metamodel; program lifecycle: operations (when published) |
| Informal doc vs glossary | Glossary wins; fix doc or add glossary term |

Escalation: [governance charter](governance/charter.md) conflict resolution path.

---

## Reading order

For canon authors and architects:

1. [Manifesto](thesis/manifesto.md)  
2. [Principles](principles/README.md)  
3. [Glossary](glossary/README.md)  
4. [Metamodel](metamodel/README.md)  
5. ADR index ([evolution/decisions/index.md](../evolution/decisions/index.md))  
6. [Assessment framework](../operations/assessment/framework.md) when evaluating programs  
7. Domain canon (`system/`) as needed  

---

## Repository boundaries

| Path | Boundary |
|------|----------|
| `foundation/` | Language, structure, framework governance |
| `system/` | Design knowledge artifacts (instances of metamodel types) |
| `operations/` | How programs run, assess, mature |
| `evolution/` | How framework changes (enhancements, ADRs, releases) |

See [operations/README.md](../operations/README.md) for foundation vs operations distinction.
