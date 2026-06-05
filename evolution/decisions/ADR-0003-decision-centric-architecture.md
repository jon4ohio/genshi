# ADR-0003: Decision-Centric Architecture

## Status

**Status:** Accepted  
**Date:** 2026-06-05  
**Decision Maker(s):** Genshi maintainers (founding)  
**Supersedes:** None  
**Framework Version:** 0.1.0

## Context

Most design system stacks order architecture as **primitive values → semantic tokens → components → patterns**. Values exist before meaning is agreed; semantics inherit undocumented choices. The [Manifesto](../../foundation/thesis/manifesto.md) states decisions matter more than assets and tokens represent knowledge. [Principle 03](../../foundation/principles/03-decisions-over-assets.md) and [Principle 04](../../foundation/principles/04-tokens-as-knowledge.md) require rationale and semantic commitment.

The [metamodel relationships](../../foundation/metamodel/relationships.md) must lock a default stack for Genshi canon and adopter conformance.

**In scope:** Normative ordering of meaning and artifacts in Genshi; definition of primitives as aliases.

**Out of scope:** Specific token syntax (W3C, Style Dictionary, etc.); component framework APIs.

## Decision Drivers

- Prevent token sprawl and unowned hex values.
- Make migration and deprecation traceable to decisions.
- Give enterprise architects a clear chain of custody for design intent.
- Differentiate Genshi from library-first methodologies.

## Options Considered

### Option A: Primitive-first stack (industry default)

```text
Primitive → Semantic token → Component → Pattern
```

- **Pros:** Familiar; easy code generation from design tools.
- **Cons:** Primitives encode decisions without records; semantic layer becomes rename pass.
- **Effort:** Low.
- **Notes:** Rejected as **primary** model.

### Option B: Decision-centric stack (Genshi default)

```text
Decision → Token (semantic) → Component → Pattern
```

Platform primitives exist only as **aliases** under committed tokens.

- **Pros:** Aligns manifesto; supports governance; clear invalid states in metamodel.
- **Cons:** Requires discipline before coding; slower initial token setup.
- **Effort:** Medium.
- **Notes:** **Chosen.**

### Option C: Component-first (patterns drive components)

- **Description:** Patterns define components; tokens derived afterward.
- **Pros:** UX-led innovation.
- **Cons:** Inconsistent semantics across products; weak accessibility governance at token layer.
- **Effort:** Medium.
- **Notes:** Rejected as default; allowed as experimental team workflow if decisions backfill before stable promotion.

## Decision

**We will use Option B.** Genshi’s normative architecture order is:

```text
Decision → Token → Component → Pattern
```

**Decision** means recorded organizational commitment (ADR, design decision log, or equivalent with owner and scope).

**Token** means semantic design knowledge, not raw values.

**Primitive** (hex, px, ms) may exist only as platform **aliases** bound to a semantic token with `decision_refs`.

Patterns must compose **components**; they must not become an alternate path to introduce raw values without decisions.

## Consequences

### Positive

- Token proposals require explicit rationale—natural fit for enterprise governance.
- Deprecation chains: retiring a decision triggers token/component review.
- Unique Genshi differentiator vs catalog-first systems.

### Negative / Trade-offs

- Tooling that assumes primitive-first pipelines needs adapter documentation.
- Designers may perceive overhead before value is visible.

### Operational Impact

- `system/tokens/architecture.md` must reflect this ADR.
- Metamodel invalid states enforce decision_refs before stable tokens.
- Component and pattern canon must cite tokens and decisions, not ad hoc values.
- **Migration / rollback:** Superseding ADR only if evidence shows decision-centric model blocks adoption at scale; would require major version bump.

### Risks

| Risk | Likelihood | Impact | Mitigation | Owner/Role | Review Trigger |
|------|------------|--------|------------|------------|----------------|
| Decision log becomes bureaucracy | Med | Med | Tier enhancements; template lightweight decisions for small teams | Architecture council | Adopter NPS |
| Aliases drift from semantics | Med | High | Automated contrast checks on aliases; periodic semantic audit | System steward | Token audit cadence |

## Review Schedule

- **Next review:** 2027-06-05
- **Review owner:** System steward (tokens)

## Related ADRs

- [ADR-0001](ADR-0001-why-genshi-exists.md)
- [ADR-0002](ADR-0002-design-systems-as-organizational-systems.md)

## References

- [Manifesto §4, §5](../../foundation/thesis/manifesto.md)
- [Metamodel relationships](../../foundation/metamodel/relationships.md)
- [Principle 03](../../foundation/principles/03-decisions-over-assets.md)
- [Principle 04](../../foundation/principles/04-tokens-as-knowledge.md)
