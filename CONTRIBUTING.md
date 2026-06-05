# Contributing to Genshi

Thank you for your interest in contributing.

## Project Status

**Framework v0.2.1** — Phase 1 foundations complete; Phase 2 system architecture in progress.

Phase 2 areas (adoption, lifecycle stubs; component and pattern taxonomy) may evolve significantly as the framework matures.

Contributors should expect change and should avoid assuming that current structures represent permanent decisions.

The framework should not yet be considered stable for production adoption.

## What We Are Building

Genshi is a framework for design system infrastructure.

The project focuses on:

- Governance
- System knowledge
- Tokens
- Components
- Patterns
- Decisions
- Metadata
- Lifecycle management

The goal is not simply to document design systems but to create a framework for managing them as organizational infrastructure.

## Before Contributing

Please review:

- [Manifesto](foundation/thesis/manifesto.md)
- [Principles](foundation/principles/README.md)
- [Glossary](foundation/glossary/README.md)
- [Canon precedence](foundation/canon-precedence.md)
- [Metamodel](foundation/metamodel/README.md)
- [ADR index](evolution/decisions/index.md)
- Open issues and discussions

Many ideas may already be under consideration.

## How Ideas Enter the Framework

Not all ideas begin as code.

Ideas typically enter through:

1. Discussion
2. Issue
3. Proposal (enhancement)
4. Decision (ADR)
5. Canon update / implementation

```text
Issue → Enhancement (evolution/enhancements/) → ADR (evolution/decisions/) → Canon → Release note
```

We encourage contributors to discuss significant ideas before investing substantial effort.

## Understanding Repository Artifacts

### Issues

Issues represent:

- Bugs
- Questions
- Clarifications
- Discussion topics

Issues do not automatically imply implementation work.

### Enhancements

Enhancements propose improvements to existing capabilities. Location: [`evolution/enhancements/`](evolution/enhancements/).

Examples:

- New governance capabilities
- Metamodel or metadata improvements
- Repository structure improvements
- Documentation enhancements

### Decisions

Decisions define project direction. Location: [`evolution/decisions/`](evolution/decisions/) (ADRs).

A decision records:

- Context
- Alternatives considered
- Rationale
- Consequences

Decisions are first-class artifacts. Implementation should follow decisions rather than replace them.

Do not edit **Accepted** ADR substance in place — supersede with a new ADR.

## Pull Request Expectations

Pull requests should:

- Have a clear purpose
- Reference related issues when applicable
- Explain reasoning, not just changes
- Include documentation updates when needed
- Remain focused and reasonably scoped
- Update [CHANGELOG](evolution/releases/CHANGELOG.md) for user-visible canon changes

Large architectural changes should be discussed before implementation.

## Documentation Standards

Documentation should prioritize:

- Clarity
- Precision
- Consistency
- Long-term maintainability

Avoid:

- Marketing language
- Trend-driven terminology
- Ambiguous definitions

When introducing concepts:

- Cite [glossary](foundation/glossary/README.md) terms; do not paraphrase definitions
- Explain relationships (see [metamodel relationships](foundation/metamodel/relationships.md))
- Document constraints
- Describe lifecycle implications

**Canon** lives in `foundation/`, `system/`, `operations/`, `evolution/` — not duplicated in `docs/`.

## Governance First

Genshi treats governance as a first-class capability.

Contributions should consider:

- Meaning preservation
- Scalability
- Machine readability (Phase 3+)
- Lifecycle management
- Interoperability

See [metamodel governance](foundation/metamodel/governance.md) for role expectations.

## What we are not seeking yet

- UI component implementations or Storybook
- Figma libraries or plugins
- Token package implementations (npm, Swift, etc.)
- Large refactors without prior discussion

## Contributor Agreement

By contributing to Genshi, you agree that your contributions will be licensed under the [Apache License, Version 2.0](LICENSE).

## Code of Conduct

Participation is governed by [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

Thank you for helping shape the framework.
