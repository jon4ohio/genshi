# Project Entry

**Contract:** Project Entry  
**Problem coordinated:** Where am I? What is this project?

---

## Promise

Orient a contributor in under five minutes: what Genshi is, how framework canon differs from reference implementation, and where durable truths live.

---

## Owns

- Project identity and charter (this file)
- Contract index for this repository
- Pointer to Anchor adoption and validation status
- Responsibility map for existing artifacts

## Must never contain

- Decision rationale (see [evolution/decisions/](../evolution/decisions/))
- Genshi framework definitions (see [foundation/](../foundation/))
- Assessment dimension definitions (see [operations/assessment/framework.md](../operations/assessment/framework.md))
- Session state (see [handoff.md](handoff.md))

---

## What Genshi is

Genshi is a framework for designing, governing, and evolving design systems as **organizational infrastructure**—not a UI library.

**Framework v0.2.1** — Phase 1 foundations complete; Phase 2 system architecture in progress. Not yet stable for production adoption.

See [README.md](../README.md) for visitor-facing overview.

## Production implementation

Public packages, releases, and Storybook live in **[genshi-design-system](https://github.com/jon4ohio/genshi-design-system)** — the production OSS implementation built on the layered token architecture (Core → Intent → Component).

This repository remains the **Research & Validation** lineage: framework canon, SeamKit adaptation experiments in `design-system/`, and evidence in `anchor/evidence/`. It is not deprecated.

## What Genshi is not

- A component library (though `design-system/` ships a v0.1 reference implementation)
- A design tool, Figma plugin, or token package
- A replacement for organizational governance bodies

## Repository layers

```text
foundation/     thesis, principles, glossary, metamodel, governance
system/         tokens, components, patterns (conceptual canon)
operations/     assessment, maturity, adoption, lifecycle
evolution/      enhancements, decisions (ADRs), releases
design-system/  reference implementation (consumption-only, v0.1)
anchor/         Anchor coordination layer (this folder)
docs/           reader portal (non-normative)
```

**Canon precedence:** [foundation/canon-precedence.md](../foundation/canon-precedence.md)

## Anchor adoption

This repository adopts [Anchor](https://github.com/jon4ohio/anchor) v0.2 for **shared project understanding** between humans and AI. Anchor coordinates orientation and session continuity; it does not replace Genshi governance.

- **Responsibility map:** [responsibility-map.md](responsibility-map.md)
- **Validation status:** [validation.md](validation.md)
- **Evidence:** [evidence/](evidence/)

## Contract index

| Contract | Location | Notes |
|----------|----------|-------|
| Project Entry | [project.md](project.md) (this file) | Composite index only |
| ADR | [evolution/decisions/](../evolution/decisions/) | Pre-existing; not migrated |
| Assessment (Genshi) | [operations/assessment/framework.md](../operations/assessment/framework.md) | Framework instrument |
| Handoff | [handoff.md](handoff.md) | Session continuity |
| Evidence | [evidence/](evidence/) | Anchor validation observations |
| Reference impl gaps | [design-system/FOUNDATION-GAPS.md](../design-system/FOUNDATION-GAPS.md) | v0.1 usage findings |
| Production ADRs | [genshi-design-system docs/adr](https://github.com/jon4ohio/genshi-design-system/blob/main/docs/adr/index.md) | Accepted architecture |

## Start reading

1. [Manifesto](../foundation/thesis/manifesto.md)
2. [Glossary](../foundation/glossary/README.md)
3. [ADR index](../evolution/decisions/index.md)
4. [Assessment framework](../operations/assessment/framework.md)
5. [Maturity framework](../operations/maturity/framework.md)
