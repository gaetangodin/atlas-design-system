# Contributing to Atlas

## Where does my code go?

Read [ARCHITECTURE.md](./ARCHITECTURE.md) first — it has the decision
tree. The short version:

| You're adding...                                                  | It goes in            |
| ----------------------------------------------------------------- | --------------------- |
| A token value (color hex, font size, radius)                      | `src/domain/tokens`   |
| A variant identifier (a new button shape)                         | `src/domain/primitives` |
| Pure logic that maps inputs to a class string                     | `src/application/use-cases` |
| A React component                                                 | `src/api/components`  |
| A HeroUI theme tweak, Tailwind plugin, runtime adapter            | `src/infrastructure`  |
| A new public TypeScript type                                      | `src/contracts`       |

## Before opening a PR

1. `pnpm typecheck` — must pass.
2. `pnpm test` — must pass; new use cases must include unit tests.
3. `pnpm lint` — fix or justify any layer-import violations.
4. Update `CHANGELOG.md` under `[Unreleased]`.

## Adding a new component

1. Add the variant/size enums to `src/domain/primitives/<name>.ts`.
2. Add the public prop type to `src/contracts/component-props.ts`.
3. If there's variant-resolution logic, write it as a pure use case in
   `src/application/use-cases/resolve-<name>-class-names.ts` with tests.
4. Wrap the relevant HeroUI component in
   `src/api/components/<Name>/<Name>.tsx`.
5. Re-export from `src/api/index.ts`.
6. Document in `docs/components/<Name>.md` and tick it off in
   `docs/components/INDEX.md`.

## Naming

Per the architecture rules — names describe intent, not mechanism.

Allowed: `resolveButtonVariant`, `IconRegistryPort`, `LucideIconRegistry`,
`PrelineThemeMapper`.

Avoid: `ButtonHelper`, `ThemeUtils`, `CommonService`, `Manager`,
`Processor`.
