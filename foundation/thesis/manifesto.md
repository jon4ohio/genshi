# The Genshi Manifesto

**Status:** Foundational canon  
**Audience:** Design system leaders, design and engineering leadership, enterprise architects, and anyone accountable for design consistency at organizational scale.

This document is the constitutional center of Genshi. Principles, decisions, models, and practices derive from it. When Genshi conflicts with habit or tooling fashion, this text states which side Genshi takes.

---

## 1. Why Genshi exists

Organizations build design systems when inconsistency becomes expensive: rework, accessibility failures, brand drift, slow delivery, and teams reinventing the same interfaces. Most responses are libraries, token files, and documentation sites. Those are useful outputs. They are not the system.

Genshi exists because design systems fail as often in the boardroom and the operating model as in the component catalog. Failure appears as unclear ownership, unrecorded decisions, tokens nobody understands, components nobody maintains, and documentation nobody trusts. The problem is treated as a delivery problem when it is an organizational one.

Genshi is a framework for the **design system as organizational infrastructure**: how an organization decides, records, governs, ships, measures, and retires shared design capability. Genshi does not replace your component library. It explains what must exist around that library so it remains true over years.

---

## 2. What design systems actually are

A design system is not a Figma file, a npm package, or a Storybook deployment. Those are **artifacts**—evidence that a system exists.

A design system is a **managed capability** inside an organization:

- **Shared intent** — what “good” means for product experience, expressed so many teams can apply it.
- **Recorded decisions** — why choices were made, what they trade off, and when they change.
- **Governed artifacts** — tokens, components, patterns, content rules, and guidance with owners, lifecycles, and quality bars.
- **Operating mechanics** — how requests enter, how work is prioritized, how releases happen, how adoption is supported, how deprecation is enforced.
- **Feedback loops** — how the organization learns whether the system is used, correct, and still fit for purpose.

Without these, you have assets. With them, you have infrastructure—something the organization can depend on the way it depends on security policy or data definitions.

Genshi treats the design system as a **system in the ordinary sense**: parts, relationships, boundaries, inputs, outputs, and rules of change. Technology is one implementation channel. It is not the definition.

---

## 3. Why most design systems fail

Failure is rarely “we picked the wrong framework.” Common failure modes:

**Asset-first.** Investment goes to components and tokens before anyone agrees what problems the system solves, who owns outcomes, or how decisions get made. The library grows; alignment does not.

**Tool-first.** The system becomes whatever Figma, Storybook, or a vendor platform supports. When tools change, meaning is lost because it lived in files, not in records.

**Documentation without authority.** Guidelines proliferate. Exceptions proliferate faster. No mechanism distinguishes canonical guidance from team preference.

**No decision trail.** Teams debate the same questions repeatedly. New hires cannot learn why the primary action is blue or why density changed. Knowledge leaves with people.

**Governance as gatekeeping only.** Review exists to block mistakes, not to steer investment, retire debt, or balance central consistency with local product needs.

**Adoption confused with publication.** Shipping v1.0 is treated as success. Consumption, migration, and measurable reduction of inconsistency are not tracked.

**Scale without semantics.** Token count and component count rise. Meaning dilutes: duplicate components, ambiguous tokens, patterns that contradict components. The system becomes harder to use at the exact moment it was meant to simplify work.

**No retirement.** Deprecated patterns stay in production because nothing mandates migration. The system’s past crowds out its present.

These are organizational failures expressed through design artifacts. Genshi addresses the organization first so artifacts can remain coherent.

---

## 4. Assumptions Genshi rejects

Genshi explicitly rejects the following assumptions:

| Assumption | Genshi’s position |
|------------|-------------------|
| A design system is a UI kit | Kits are outputs; capability and governance are the system |
| More components means more maturity | Maturity is measured by decision quality, adoption, and maintainability |
| Tokens are CSS variables | Tokens encode committed design knowledge; syntax is secondary |
| Documentation equals enablement | Enablement requires ownership, training, migration paths, and enforcement where needed |
| Central teams should “serve requests” forever | Central teams steward standards; the organization shares responsibility for adoption |
| Primitives-first stacks define architecture | Decisions justify semantics; semantics justify components; components justify patterns |
| Open source means “free to ignore governance” | Open methodology requires explicit conformance and change discipline |
| Design and engineering alignment is a workshop problem | Alignment is sustained through shared artifacts, recorded decisions, and operating cadence |
| Accessibility is a phase | Accessibility is a property of the system’s definition of “done” |
| Frameworks must ship code to matter | Genshi is a framework of concepts, practices, and models; code is optional implementation |

If your initiative cannot state what it rejects, it will accept everything and become a style guide with dependencies.

---

## 5. What future Genshi is working toward

Genshi works toward organizations where:

- **Decisions are durable.** Rationale survives tool migrations and reorgs.
- **Meaning survives scale.** Growth in artifacts does not dilute semantics; duplication is visible and retired.
- **Governance enables speed.** Clear rules reduce thrash; exceptions are recorded, not hidden.
- **Technology is interchangeable.** The framework can be applied with any stack; implementations are adapters, not the canon.
- **Maturity is assessable.** Teams can locate themselves, see gaps, and plan improvement without shame or theater.
- **Evolution is intentional.** Changes follow enhancement and decision discipline, not silent drift in a main branch.

Genshi does not promise a perfect design system. It promises a **durable way to build and run one** inside real enterprises: competing priorities, legacy products, acquisitions, regulators, and turnover.

---

## 6. Responsibilities of design systems inside organizations

A design system that accepts infrastructure status accepts responsibilities:

**To product teams** — Reduce unnecessary variation; make the right thing easier than the wrong thing; document exceptions without normalizing them.

**To users** — Protect accessibility, clarity, and trust; do not trade user outcomes for internal convenience.

**To the organization** — Make design intent legible to leadership; connect system investment to risk reduction and delivery outcomes.

**To future maintainers** — Leave a trail: decisions, owners, deprecation paths, and tests of validity—not only pixels and props.

**To honesty** — Publish what is stable, what is experimental, and what is retired. Concealing maturity wastes adoption effort.

**To change** — When the organization learns something new, the system updates through governed evolution—not forked team copies that diverge in silence.

Organizations that refuse these responsibilities should not expect infrastructure outcomes from asset projects.

---

## Closing

Genshi is for people who build and run design systems under real constraints. It favors recorded decisions over heroic memory, governance over hope, and organizational capability over catalog size.

Everything else in this repository should be traceable to this document. If it is not, it does not belong in the canon yet.
