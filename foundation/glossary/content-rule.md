# Content Rule

## Definition

A knowledge-primary artifact that encodes voice, terminology, and editorial constraints as governed organizational knowledge.

## Why It Matters

Content consistency is design system scope. Editorial knowledge must be owned and versioned—not buried in marketing copy or wikis.

## Relationships

- **knowledge-asset** — content rule specializes knowledge-asset
- **artifact** — content rule is a governed artifact
- **decision** — stable content rules require decision references
- **meaning** — carries meaning for language and editorial dimensions

## Common Misinterpretations

- Treating style guides or blog posts as content rules without ownership or lifecycle
- Confusing content rules with documentation site presentation
- Equating content rules with CMS configuration alone

## Genshi Interpretation

Content rules live in `system/content/`. Instance location for canon; metamodel entity type ContentRule. Platform exports are evidence, not the rule definition.
