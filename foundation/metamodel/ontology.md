# Ontology

Conceptual structure of the Genshi metamodel: what exists, what does not, and how entity types relate at the ontology level.

**Upstream:** [Glossary](../glossary/README.md) (authoritative terminology)  
**Binding:** [ADR-0004](../../evolution/decisions/ADR-0004-metamodel-ontology.md)  
**Related:** [dependencies.md](dependencies.md), [relationships.md](relationships.md), [governance.md](governance.md)

The glossary defines language. This document defines **entity types** that instantiate that language. Attribute specifications live in [entities/](entities/).

---

## Entity evaluation

| Candidate | Verdict | Rationale |
|-----------|---------|-----------|
| **Principle** | First-class entity | Glossary: normative belief with testable implications |
| **Decision** | First-class entity | Glossary: binding choice; root of decision-centric stack (ADR-0003) |
| **Capability** | First-class entity | Glossary: organizational ability distinct from artifacts |
| **Artifact** | First-class abstract entity | Glossary: managed output supertype |
| **Knowledge Asset** | Abstract specialization of Artifact | Glossary: every knowledge-asset is an artifact; inheritance, not peer type |
| **Token** | First-class concrete entity | Glossary: primary knowledge-asset specialization |
| **Component** | First-class concrete entity | Glossary: composable UI contract |
| **Pattern** | First-class concrete entity | Glossary: composition of components |
| **Enhancement** | First-class entity | Framework evolution proposal before Decision commitment |
| **Release** | First-class entity | Versioned publication of canon |
| **Content rule** | First-class concrete entity | Knowledge-primary constraint artifact |
| **Accessibility rule** | First-class concrete entity | Knowledge-primary; binds Component conformance |
| **Assessment** | First-class entity | Operationalizes principles; measures capability and semantic health |
| **Practice** | First-class entity | Repeatable operational method |
| **Governance Rule** | Rejected | Glossary defines governance as capability, not rule artifact. Use Content rule and Accessibility rule |
| **Lifecycle** | Rejected as entity | Glossary: governed states/transitions are a concern on entities |
| **Schema** | Rejected as entity | Implies implementation; machine-readable expression is a property of artifacts |
| **Meaning** | Rejected as entity | Glossary: primary objective, not metamodel entity |
| **Interpretive debt** | Rejected as entity | Glossary: failure mode measured by Assessment |

**Manifesto** is constitutional text above the ontology—not a governed entity.

---

## Entity tiers

```text
Tier 0 — Constitutional (not an entity)
  Manifesto

Tier 1 — Normative
  Principle, Decision, Enhancement, Release

Tier 2 — Artifact (abstract → concrete)
  Artifact
    KnowledgeAsset (abstract)
      Token, ContentRule, AccessibilityRule
    Component, Pattern

Tier 3 — Operational
  Capability, Assessment, Practice
```

---

## Cross-cutting concerns

These glossary terms apply to entities but are **not** catalogued as entity types:

| Concern | Glossary | Role in metamodel |
|---------|----------|-------------------|
| Governance | [governance](../glossary/governance.md) | Authority, canon, exceptions, change discipline on all governed entities |
| Lifecycle | [lifecycle](../glossary/lifecycle.md) | State transitions per entity type; see [lifecycle.md](lifecycle.md) |
| Meaning | [meaning](../glossary/meaning.md) | Preservation objective artifacts carry |
| Interpretive debt | [interpretive-debt](../glossary/interpretive-debt.md) | Divergence measured by Assessment |

---

## Entity definitions

### Principle

**Purpose**  
Encode a normative belief with testable implications that bounds how the framework and design systems are interpreted.

**Responsibilities**  
- State falsifiable commitments derived from the Manifesto  
- Supply decision tests for governance and assessment  
- Remain independently versionable with lifecycle state

**Relationships**  
- `derived_from` Manifesto  
- `constrains` Decision  
- `operationalized_by` Governance (concern)  
- `measured_by` Assessment

**Dependencies**  
- Manifesto section citation before stable promotion

**Governance implications**  
Stable principles cannot contradict accepted Decisions. Changes require governed enhancement, not silent edits.

---

### Decision

**Purpose**  
Record a binding organizational choice with rationale, scope, trade-offs, and conditions for change.

**Responsibilities**  
- Anchor meaning against re-litigation and tool migration  
- Justify stable artifacts (decision-centric stack)  
- Remain immutable once accepted; supersede only via new Decision

**Relationships**  
- `constrained_by` Principle  
- `justifies` Token, Component, Pattern, ContentRule, AccessibilityRule  
- `anchors` Meaning (concern)  
- `produced_by` Enhancement (optional path)  
- `governed_by` Governance (concern)

**Dependencies**  
- Accepted Principles (no contradiction)  
- Governance authority to accept

**Governance implications**  
No stable artifact without `decision_refs`. Missing decisions increase interpretive debt.

---

### Enhancement

**Purpose**  
Propose framework or canon change before commitment to a Decision or Release.

**Responsibilities**  
- Surface tiered change (minor, major, charter)  
- Link forward to ADR(s) when accepted  
- Lapse when no canon update within agreed window

**Relationships**  
- `may_produce` Decision  
- `precedes` Release (when accepted)  
- `governed_by` Governance (concern)

**Dependencies**  
- Author and sponsoring steward  
- Tier-appropriate governance consultation

**Governance implications**  
Prevents silent drift. Accepted enhancements must yield linked Decisions or release notes.

---

### Release

**Purpose**  
Publish a versioned aggregation of canon changes across entity types.

**Responsibilities**  
- Package entity promotions, deprecations, and ADR summaries  
- Declare framework compatibility expectations  
- Mark maintained vs end-of-life periods

**Relationships**  
- `aggregates` changes to Principle, Decision, Artifact entities  
- `follows` Enhancement and Decision acceptance

**Dependencies**  
- Maintainer authority  
- Documented change set

**Governance implications**  
Provides adopters a stable consumption boundary. Ties intentional evolution to visible publication.

---

### Artifact (abstract)

**Purpose**  
Represent any managed output of a design system that is owned, versioned, and subject to lifecycle.

**Responsibilities**  
- Evidence that a design system exists  
- Carry meaning through governed contracts  
- Declare lifecycle state explicitly

**Relationships**  
- `specialized_by` KnowledgeAsset, Component, Pattern  
- `justified_by` Decision (when stable)  
- `evidences` Capability  
- `carries` Meaning (concern)  
- `governed_by` Governance and Lifecycle (concerns)

**Dependencies**  
- Owner assignment  
- Lifecycle state declaration

**Governance implications**  
Distinguishes managed contracts from tool exports.

---

### KnowledgeAsset (abstract)

**Purpose**  
Represent an artifact whose primary value is committed organizational knowledge—meaning, rationale, and constraints.

**Responsibilities**  
- Encode meaning in durable, machine-consumable form  
- Link to Decisions that justify semantics  
- Distinguish knowledge from presentation and platform exports

**Relationships**  
- `specializes` Artifact  
- `specialized_by` Token, ContentRule, AccessibilityRule  
- `encodes` Meaning (concern)  
- `justified_by` Decision

**Dependencies**  
- Parent Artifact obligations  
- `decision_refs` before stable promotion

**Governance implications**  
Tokens are knowledge assets (Principle 04). Platform aliases are subordinate exports, not knowledge-assets.

---

### Token

**Purpose**  
Name a unit of committed design knowledge: semantic agreement with documented meaning, owner, lifecycle, and decision references.

**Responsibilities**  
- Serve as narrow waist for multi-platform semantics  
- Document meaning for a specific design dimension (`semantics` field)  
- Expose optional platform aliases subordinate to semantic commitment

**Relationships**  
- `specializes` KnowledgeAsset  
- `justified_by` Decision  
- `consumed_by` Component  
- `documents` Meaning (concern, per-dimension)

**Dependencies**  
- Decision before stable promotion  
- Owner and documented semantics

**Governance implications**  
Decision → Token is first link in decision-centric stack.

---

### ContentRule

**Purpose**  
Encode voice, terminology, and editorial constraints as governed knowledge.

**Responsibilities**  
- Bind content consistency requirements  
- Link to Decisions justifying terminology choices  
- Carry meaning for language and editorial dimensions

**Relationships**  
- `specializes` KnowledgeAsset  
- `justified_by` Decision  
- `constrains` Pattern and product content surfaces (advisory)

**Dependencies**  
- Decision references  
- Owner

**Governance implications**  
Separates editorial knowledge from presentation docs.

---

### AccessibilityRule

**Purpose**  
Encode inclusive requirements and verification criteria as governed knowledge.

**Responsibilities**  
- Define accessibility constraints the system treats as done  
- Bind Component stable promotion via `accessibility_refs`  
- Link to Decisions for trade-off rationale

**Relationships**  
- `specializes` KnowledgeAsset  
- `must_satisfy` Component (stable)  
- `justified_by` Decision

**Dependencies**  
- Decision references  
- Owner (accessibility delegate)

**Governance implications**  
Accessibility is a property of done, not a phase.

---

### Component

**Purpose**  
Define a composable contract for a UI element: behavior, structure, accessibility expectations, and token consumption—independent of any single implementation framework.

**Responsibilities**  
- Consume semantic tokens; not invent parallel unnamed values  
- Reference accessibility rules at stable state  
- Remain implementation-optional (export is evidence, not definition)

**Relationships**  
- `specializes` Artifact (not knowledge-primary)  
- `consumes` Token  
- `justified_by` Decision  
- `must_satisfy` AccessibilityRule  
- `composed_by` Pattern

**Dependencies**  
- Decision refs  
- Token refs  
- Accessibility refs (for stable)

**Governance implications**  
Invalid: stable Component with zero Token refs.

---

### Pattern

**Purpose**  
Describe a recurring composition of components and associated behavior guidance for a recognizable user or layout problem.

**Responsibilities**  
- Compose components, not raw tokens (except ADR-documented exceptions)  
- Document behavior guidance without introducing new primitive artifacts  
- Reach stable only when referenced components are stable

**Relationships**  
- `specializes` Artifact  
- `composes` Component  
- `justified_by` Decision  
- `reaches_tokens_via` Component only

**Dependencies**  
- Stable Component refs  
- Decision refs

**Governance implications**  
Top of decision-centric stack. Invalid: Pattern bypassing Components without ADR exception.

---

### Capability

**Purpose**  
Represent an organizational ability a design system enables—distinct from artifacts that evidence it.

**Responsibilities**  
- Express outcomes (accessibility consistency, delivery speed, risk reduction)  
- Support executive and architect mapping of design system investment  
- Not be confused with software features or publication milestones

**Relationships**  
- `evidenced_by` Artifact (collective)  
- `protected_by` Governance (concern)  
- `measured_by` Assessment  
- Not directly `governed_by` Decision (Decisions justify artifacts; artifacts enable capability)

**Dependencies**  
- None for catalog existence; realization depends on governed artifact system

**Governance implications**  
Conformance levels describe organizational capability, not repository completeness.

---

### Assessment

**Purpose**  
Instrument maturity, semantic health, and interpretive debt against principles and capability outcomes.

**Responsibilities**  
- Operationalize Principles into measurable dimensions  
- Require evidence from adopters  
- Revise with semver when criteria change

**Relationships**  
- `measures` Capability, Meaning preservation, Interpretive debt  
- `derived_from` Principle  
- `informed_by` Artifact inventory and decision coverage

**Dependencies**  
- Published maturity levels and evidence requirements

**Governance implications**  
Makes interpretive debt visible. Ties meaning preservation to observable criteria.

---

### Practice

**Purpose**  
Represent a repeatable operational method (workshop, audit, cadence) that attaches to entities without replacing them.

**Responsibilities**  
- Operationalize governance and lifecycle concerns in organizational context  
- Reference entity types they affect  
- Remain distinct from normative Principles and binding Decisions

**Relationships**  
- `applies_to` Artifact, Capability, Assessment entities  
- `supports` Governance (concern)

**Dependencies**  
- Steward ownership for framework practices

**Governance implications**  
Separates how we run from what we commit to.

---

## Persistent knowledge objects

Entities and structures that should become durable, machine-addressable knowledge for AI and assessment consumers:

| Priority | Object | Why persistent |
|----------|--------|----------------|
| P0 | Glossary terms (`glossary:*`) | Authoritative vocabulary |
| P0 | Principle | Normative bounds |
| P0 | Decision (ADR) | Rationale anchor |
| P0 | Token | Semantic knowledge with `semantics`, `decision_refs`, lifecycle |
| P1 | AccessibilityRule, ContentRule | Knowledge-primary constraints |
| P1 | Component, Pattern | Contracts with refs |
| P1 | Assessment | Measurable dimensions including semantic health |
| P2 | Enhancement (active/accepted) | Change intent before commitment |
| P2 | Release | Version boundary for consumers |
| P2 | Capability instances | Organizational outcome catalog |
| P3 | Practice | Operational methods |

**Not persistent knowledge objects:** platform aliases, CSS/JSON exports, Figma files, npm packages, documentation site presentation, workflow state in external tools.

**Assessment dimensions (not entities):** meaning / semantic health, interpretive debt.
