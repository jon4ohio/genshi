# Genshi

Genshi is a framework for designing, governing, and evolving design systems as organizational infrastructure.

The project explores how design systems can move beyond UI libraries and become structured systems of knowledge, decisions, governance, and reusable capabilities.

[Manifesto](foundation/thesis/manifesto.md) · [Decisions](evolution/decisions/index.md) · [Contributing](CONTRIBUTING.md) · [License](LICENSE)

## Status

Genshi is currently in its **foundational architecture phase** (framework v0.1.0).

Core concepts, terminology, repository structure, governance models, and implementation approaches are actively evolving.

**The framework should not yet be considered stable.**

Early contributors should expect significant changes as foundational decisions are refined.

## What Genshi Is

Genshi is:

- A **design system framework** — principles, glossary, metamodel, and decision discipline for organizations building design systems
- A **design system operating model** — lifecycle, adoption, assessment, and maturity patterns adopters instantiate

Genshi is not itself an adopter's design system. It defines how organizations conceive, govern, and evolve one. See [glossary: framework vs design-system](foundation/glossary/framework.md).

Genshi addresses:

- Design system governance
- Design system knowledge management
- Token architecture
- Component and pattern management
- Decision management
- Lifecycle management
- Cross-tool interoperability (directional; Phase 3+)

## What Genshi Is Not

Genshi is not:

- A UI component library
- A design tool
- A Figma plugin
- A token package
- A documentation website generator
- A replacement for existing design tools

User interfaces and tooling may eventually exist as **consumers** of the framework — not as the framework itself.

## Guiding Principles

Principles shaping the project:

- Design systems are infrastructure.
- Governance is a first-class capability.
- Structure precedes interface.
- Tokens are knowledge assets.
- Decisions are first-class entities.
- Meaning must survive scale.
- Machine-readable systems take precedence over presentation (Phase 3+ direction).
- Correct usage should be easier than incorrect usage.

Full set: [foundation/principles/](foundation/principles/README.md)

## Architecture

Normative stack ([ADR-0003](evolution/decisions/ADR-0003-decision-centric-architecture.md)):

```text
Decision → Token → Component → Pattern
```

## Repository Structure

```text
genshi/
├── foundation/     thesis, principles, glossary, metamodel, governance
├── system/         tokens, components, patterns, accessibility, content
├── operations/     lifecycle, adoption, assessment, maturity
├── evolution/      enhancements, decisions, releases
└── docs/           reader portal over canon
```

This structure may evolve. Binding decisions are recorded in [`evolution/decisions/`](evolution/decisions/).

No application implementation code at v0.1.0.

## Start Reading

1. [Manifesto](foundation/thesis/manifesto.md)
2. [Principles](foundation/principles/README.md)
3. [Glossary](foundation/glossary/README.md)
4. [Metamodel](foundation/metamodel/README.md)
5. [Assessment framework](operations/assessment/framework.md)
6. [Token architecture](system/tokens/architecture.md)
7. [ADR index](evolution/decisions/index.md)

## Contributing

Contributions are welcome.

Before contributing:

1. Review the project's principles
2. Review existing decisions
3. Read [CONTRIBUTING.md](CONTRIBUTING.md)
4. Discuss significant proposals before implementation

The project values thoughtful evolution over rapid expansion.

## Community

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Security](SECURITY.md)

## Roadmap

Directional — not fixed commitments:

### Phase 1 — Foundations (current)

- Core principles
- Governance model
- Repository structure
- Metamodel definition
- Decision framework

### Phase 2 — System Architecture

- Operations canon (lifecycle, adoption, assessment, maturity)
- Component and pattern taxonomy
- Metadata standards

### Phase 3 — Machine-Readable Infrastructure

- Schemas
- Validation
- Interoperability models
- Tool integrations (`schemas/`, `tooling/` — not in repo yet)

### Phase 4 — Reference Implementations

- Example systems
- Tooling experiments
- Automation workflows

See [CHANGELOG](evolution/releases/CHANGELOG.md).

## License

Licensed under the [Apache License, Version 2.0](LICENSE).
