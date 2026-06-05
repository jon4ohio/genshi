# Artifact

## Definition

A managed output of a design system—such as a token definition, component contract, pattern description, or rule set—that is owned, versioned, and subject to lifecycle.

## Why It Matters

Artifacts are evidence that a system exists. Conflating artifacts with the system itself causes asset-first failure: libraries grow while alignment does not.

## Relationships

- **design-system** — artifacts are governed outputs, not the system's definition
- **knowledge-asset** — specialization where committed knowledge is primary value
- **token**, **component**, **pattern** — concrete artifact types in the decision-centric stack
- **decision** — stable artifacts must reference decisions that justify them
- **lifecycle** — all artifacts pass through governed states

## Common Misinterpretations

- Identifying artifacts with their implementation files (CSS, Figma, npm) rather than the managed contract
- Treating undocumented copies in product repos as canonical artifacts
- Assuming all artifacts are equally knowledge-primary

## Genshi Interpretation

**Artifact** is the abstract supertype in the metamodel. Implementation in tools is export. A Figma component or npm package is evidence of an artifact, not the artifact's definition.
