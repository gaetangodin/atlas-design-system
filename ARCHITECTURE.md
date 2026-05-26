# Architecture

Atlas borrows the layered architecture used by our backend services and
applies it to a UI library. Same dependency rules, same decision tree.

## The layers

```
api ──▶ application ──▶ domain
            ▲
            │
       infrastructure (implements ports defined in application/domain)
```

| Layer            | Responsibility                                                                  |
| ---------------- | ------------------------------------------------------------------------------- |
| `domain/`        | Pure tokens, variant enums, invariants, domain errors. No framework deps.       |
| `application/`   | Variant resolution. Pure functions and ports — mockable for tests.              |
| `infrastructure/`| HeroUI theme + provider, Tailwind preset, CSS-var generator, icon adapter.     |
| `api/`           | React components — public surface. Wraps HeroUI primitives.                     |
| `contracts/`     | Public types: component props, event payloads, token shapes.                    |
| `shared/`        | Truly generic helpers — `cx`, `id`, base errors.                                |

## Why HeroUI lives in `infrastructure/`, not `api/`

HeroUI is a **technical adapter**, not our public surface. Consumers of
Atlas import `Button` from `@atlas/design-system`, not `@heroui/react`.
Our `api/components/Button.tsx` wraps HeroUI's `Button`, applies our
variants and a11y conventions, and re-exports it under our name.

If we ever swap HeroUI for Radix, Ariakit, or a hand-rolled set, the
change is contained in `infrastructure/` plus the wrapper files in
`api/`. Token values, variant enums, and consumer contracts don't move.

## Dependency rules

Allowed:

```
api -> application -> domain
api -> infrastructure (only via re-exports, not deep imports)
infrastructure -> application (through ports)
infrastructure -> domain (read tokens only)
```

Forbidden:

```
domain -> application | infrastructure | api
application -> api | infrastructure (depends only via ports)
contracts -> infrastructure
```

When in doubt, dependencies point toward the **most stable** code.
Tokens are more stable than variants; variants are more stable than
components; components are more stable than pages. Atlas tokens never
import Atlas components.

## Decision tree — where does this code go?

```
Is it a token value (color hex, font size, radius)?
└── yes -> domain/tokens

Is it a variant identifier (primary, ghost, sm, md)?
└── yes -> domain/primitives

Is it pure logic mapping inputs to a class string or style object?
└── yes -> application/use-cases

Is it React JSX rendering a component?
└── yes -> api/components

Is it a HeroUI theme, Tailwind preset, CSS-var file, or browser/runtime adapter?
└── yes -> infrastructure

Is it a public TypeScript type re-exported across the package boundary?
└── yes -> contracts

Is it a `cx` / id / base error class?
└── yes -> shared

Otherwise -> reconsider domain ownership.
```

## Cross-domain access (Rule 5 from the agent rules)

Each layer exposes a single `index.ts`. Inter-layer imports go through
that entry. Reaching into a deep file path like
`api/components/Button/internals/_resolveSize` is forbidden.

Tooling enforcement is partial today (tsconfig paths +
`no-restricted-imports` patterns). Strict enforcement via
`eslint-plugin-boundaries` is on the follow-up list.

## Versioning contracts (Rule 8)

Anything in `contracts/` is part of our public API. Breaking changes:

- renaming a prop or variant
- removing a variant
- changing a default
- changing the shape of an exported token

require a major bump and a migration note in `CHANGELOG.md`.

Additive changes (new optional prop, new variant, new token):
minor bump.

## Testing strategy (Rule 13)

| Layer            | Test style                                                          |
| ---------------- | ------------------------------------------------------------------- |
| `domain/`        | Pure unit tests. No mocks. Token shape, invariants.                 |
| `application/`   | Pure unit tests with mocked ports.                                  |
| `infrastructure/`| Snapshot tests for the generated Tailwind config / CSS variables.   |
| `api/`           | Render tests + a11y assertions (testing-library, axe).              |

## Naming (Rule 14)

Names describe intent, not mechanism:

- `resolveButtonVariant` (not `ButtonHelper`)
- `PrelineThemeMapper` (not `ThemeUtils`)
- `IconRegistryPort` + `LucideIconRegistry` (port / adapter pair)

Banned generic suffixes: `Helper`, `Manager`, `Processor`, `Service`
(unless the file is genuinely generic).

## Open architectural questions

- Should `Datepicker` (no HeroUI primitive) live alongside HeroUI-backed
  components in `api/`, or in a sibling `api-extensions/` folder?
  Today: same `api/`, with a comment marking it as React-Aria-direct.
- When we add a vanilla-JS surface, does it sit next to `api/` (e.g.
  `api-vanilla/`) or in `infrastructure/`? Open.
- Theming: do we expose a single `<AtlasProvider theme="preline">`
  prop, or named providers (`<PrelineProvider>`)? Today: single
  provider, theme is the only option. Easy to extend later.
