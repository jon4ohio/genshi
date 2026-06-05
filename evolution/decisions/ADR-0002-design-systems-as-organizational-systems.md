# ADR-0002: Design Systems as Organizational Systems

## Status

**Status:** Accepted  
**Date:** 2026-06-05  
**Decision Maker(s):** Genshi maintainers (founding)  
**Supersedes:** None  
**Framework Version:** 0.1.0

## Context

Industry discourse centers components, Figma libraries, and npm downloads. Enterprise failure modes—ownership, funding, adoption, exception sprawl, reorgs—are organizational. [ADR-0001](ADR-0001-why-genshi-exists.md) establishes Genshi as a framework; the [Manifesto](../../foundation/thesis/manifesto.md) states design systems are managed capability, not files.

Genshi must commit to an explicit **organizational system** framing so `operations/` (lifecycle, adoption, assessment, maturity) is first-class equal to `system/` (tokens, components, patterns), not a supplement.

**In scope:** Conceptual definition of a design system within Genshi; repository emphasis; adopter vocabulary.

**Out of scope:** HR models, enterprise reorganization templates, specific tooling integrations.

## Decision Drivers

- Differentiate Genshi from component-library frameworks.
- Ensure operations content is mandatory for conformance, not optional reading.
- Align with Principle 01 (infrastructure) and Principle 02 (governance).
- Support enterprise architects mapping DS to capability models.

## Options Considered

### Option A: Design system = product UI catalog

- **Description:** Framework focuses on `system/` artifacts only.
- **Pros:** Familiar to designers and front-end engineers.
- **Cons:** Ignores manifesto failure modes; `operations/` becomes orphan content.
- **Effort:** Low.
- **Notes:** Rejected.

### Option B: Design system = organizational system with product artifacts

- **Description:** DS = capability + governance + operating model + artifacts; `operations/` co-equal with `system/`.
- **Pros:** Matches manifesto; supports maturity and assessment; enterprise-durable.
- **Cons:** Heavier adoption path; less appealing to “library only” teams.
- **Effort:** Medium.
- **Notes:** **Chosen.**

### Option C: Design system = pure process (no artifact layer)

- **Description:** Only governance and rituals; artifacts left entirely to adopters.
- **Pros:** Maximum agnosticism.
- **Cons:** Loses shared semantics for tokens/components; hard to teach.
- **Effort:** Low.
- **Notes:** Rejected—metamodel requires artifact entities.

## Decision

**We will use Option B.** Within Genshi, a design system is defined as an **organizational system** comprising shared intent, recorded decisions, governed artifacts, operating mechanics, and feedback loops (Manifesto §2). The repository structure reflects this: `operations/` is not secondary to `system/`.

Adopters claiming Genshi **Operational** conformance must demonstrate organizational mechanisms, not only artifact publication.

## Consequences

### Positive

- Clear sales of value to executives (capability, risk) not only developers (components).
- Assessment and maturity artifacts have defined place in canon.
- Case studies and research can evaluate org outcomes, not only Storybook coverage.

### Negative / Trade-offs

- Teams seeking quick library clones may disengage.
- Content burden in `operations/` before `system/` depth exists.

### Operational Impact

- Prioritize operations canon after foundation week-one set.
- `system/` entities must reference organizational owners and lifecycles from metamodel.
- **Migration / rollback:** Superseding ADR only if Genshi pivots to library-only scope (unlikely).

### Risks

| Risk | Likelihood | Impact | Mitigation | Owner/Role | Review Trigger |
|------|------------|--------|------------|------------|----------------|
| Operations docs remain abstract | Med | High | Ship assessment v0.1 and adoption playbook next | Operations steward | 90 days post 0.1.0 |
| Org language alienates IC designers | Med | Med | Pair operations docs with concrete examples in `system/` | Docs steward | Adopter interviews |

## Review Schedule

- **Next review:** 2027-06-05
- **Review owner:** Operations steward

## Related ADRs

- [ADR-0001](ADR-0001-why-genshi-exists.md) — depends on
- [ADR-0003](ADR-0003-decision-centric-architecture.md) — complementary (artifact ordering)

## References

- [Manifesto §2, §3, §6](../../foundation/thesis/manifesto.md)
- [Metamodel entities](../../foundation/metamodel/entities.md)
- [Principle 01](../../foundation/principles/01-design-systems-as-infrastructure.md)
