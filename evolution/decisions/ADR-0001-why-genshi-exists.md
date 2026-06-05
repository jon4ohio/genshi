# ADR-0001: Why Genshi Exists

## Status

**Status:** Accepted  
**Date:** 2026-06-05  
**Decision Maker(s):** Genshi maintainers (founding)  
**Supersedes:** None  
**Framework Version:** 0.1.0

## Context

Organizations invest heavily in design systems—libraries, tokens, documentation, and tooling—yet continue to suffer inconsistency, slow adoption, accessibility debt, and repeated debate over settled questions. The [Genshi Manifesto](../../foundation/thesis/manifesto.md) argues that these outcomes are primarily failures of organizational capability, not asset production.

The market offers component libraries, token formats, and design tools. It offers comparatively little formal structure for how a design system functions as **infrastructure**: decision records, governance, lifecycle, maturity, and evolution across years and tool changes.

**In scope:** The reason Genshi exists as a framework, what problems it addresses, and the boundary between Genshi (methodology) and implementer-owned artifacts (code, Figma, packages).

**Out of scope:** Implementation technology choices, specific component APIs, vendor selections, and open-source licensing strategy (separate decisions).

## Decision Drivers

- Design systems must remain coherent across tool and team churn.
- Organizations need a technology-agnostic vocabulary for DS capability.
- Recorded decisions must outrank undocumented assets as the source of truth.
- The framework must be adoptable at varying organizational maturity without pretending one size fits all.
- Open methodology requires explicit scope to avoid scope creep into “yet another UI kit.”

## Options Considered

### Option A: Genshi as a component and token library

- **Description:** Ship reference UI implementations and token packages as the primary product.
- **Pros:** Fast developer adoption; familiar open-source pattern; easy demos.
- **Cons:** Collapses Genshi into competition with existing libraries; encodes technology choices; does not address governance or organizational failure modes.
- **Effort:** High (ongoing code maintenance).
- **Notes:** Contradicts manifesto §4 (rejected assumptions).

### Option B: Genshi as a design system framework (organizational and conceptual)

- **Description:** Publish canon—manifesto, principles, metamodel, operations models, evolution discipline—without requiring reference code.
- **Pros:** Technology agnostic; durable across stacks; addresses root causes in the manifesto; distinct positioning.
- **Cons:** Slower initial “download and install” appeal; requires discipline to adopt.
- **Effort:** Medium (content and governance maintenance).
- **Notes:** Aligns with repository structure (`foundation/`, `operations/`, `evolution/`).

### Option C: Genshi as documentation-only style guide aggregator

- **Description:** Collect best-practice articles without metamodel or decision binding.
- **Pros:** Low friction to publish.
- **Cons:** Becomes documentation, not a system; no conformance or evolution mechanics; fails maintainer critique for framework evolution.
- **Effort:** Low.
- **Notes:** Rejected—does not satisfy Decision Drivers.

## Decision

**We will use Option B because** design system failure modes are organizational, and a framework that formalizes decisions, governance, lifecycle, and maturity can outlive any single implementation stack.

Genshi exists to help organizations **design, govern, scale, operate, and evolve** design systems—not merely to ship UI assets. Implementations may follow in separate phases or repositories; they are not the definition of Genshi.

## Consequences

### Positive

- Clear positioning: framework vs library.
- Canon can evolve without breaking consumer code that does not yet exist.
- Enterprise adopters can map Genshi to EA and governance practices.
- Principles and metamodel can bind future token and component guidance.

### Negative / Trade-offs

- Perceived abstraction for teams seeking npm install solutions.
- Requires adopters to invest in operating model, not only artifacts.
- Success depends on quality of principles, metamodel, and assessments—not star counts on a package.

### Operational Impact

- Repository prioritizes `foundation/`, `operations/`, and `evolution/` over `system/` implementation depth in early releases.
- Contributors propose changes via enhancements and ADRs before expanding canon.
- **Migration / rollback:** If this decision fails, a superseding ADR may narrow scope or authorize a reference implementation program—without rewriting Accepted ADR substance in place.

### Risks

| Risk | Likelihood | Impact | Mitigation | Owner/Role | Review Trigger |
|------|------------|--------|------------|------------|----------------|
| Genshi read as “docs only” | Med | High | Ship metamodel, principles, assessments; ADR-0002/0003 clarify differentiators | Framework steward | First external adopter feedback |
| Scope creep into code product | Med | Med | `reserved` discipline; enhancement tiering; reject PRs that add implementation without ADR | Maintainers | Any PR adding packages or Storybook |
| Manifesto and ADR drift | Low | Med | ADRs must cite manifesto; breaking changes require new ADR | Architecture council | Annual canon review |

## Review Schedule

- **Next review:** 2027-06-05 or first major external adoption pilot completion.
- **Review owner:** Framework steward (foundation)

## Related ADRs

- ADR-0002 — Design systems as organizational systems (depends on this scope)
- ADR-0003 — Decision-centric architecture (depends on this scope)

## References

- [Genshi Manifesto](../../foundation/thesis/manifesto.md) — primary source
- Repository structure: `foundation/`, `system/`, `operations/`, `evolution/`, `docs/`
