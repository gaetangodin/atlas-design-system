# Atlas ↔ Xeekrs interop

This document describes how Atlas (the design system) and the
Xeekrs main app (`Xeekrsmainapp`) fit together — and the
compatibility issues we know about.

> Atlas is a **library**, Xeekrs is an **app**. They use different
> architectural philosophies for good reasons. Atlas is layered
> (horizontal: tokens → components). Xeekrs (after the recap refactor)
> will be feature-based (vertical: each feature owns its UI, helpers,
> data). They're complementary, not competing.

## Source-of-truth direction (important)

```
Xeekrsmainapp/src/styles/globals.css     (CSS variables — brand tokens)
                  ▲
                  │  Atlas reads these via var(--name) at runtime
                  │
Xeekrsmainapp/src/components/heroui-branded/*.tsx
                  ▲
                  │  Atlas mirrors these visual chains directly —
                  │  same className strings, same prop defaults
                  │
@atlas/design-system  (consumed by feature folders in the app)
```

**Atlas does not own brand values.** The consumer's `globals.css` is
the single runtime source of truth for color, font, radius, spacing.
Atlas exports the *names* of those vars (with reference fallbacks)
plus components whose Tailwind classes consume them.

## Does Atlas meet the "feature-based" meeting recap?

**No, and intentionally so** — that recap is for the **app**, not for
the design system. A design system has no features (`Button` belongs
to every feature equally). Atlas uses **layered** architecture for
that reason. Xeekrs gets feature-based; Atlas gets layered. They
plug together at the `contracts/` boundary.

## Compatibility issues — STATUS UPDATE

| # | Issue                                           | Severity | Resolution                                                                                  |
|---|-------------------------------------------------|----------|---------------------------------------------------------------------------------------------|
| 1 | Token palette wrong for Xeekrs                 | 🔴 → ✅  | Atlas now reads from Xeekrs CSS vars. Hex fallbacks are reference-only.                     |
| 2 | Two HeroUI plugins fight                       | 🔴 → ✅  | Added `atlasPresetTokensOnly` for Xeekrs. `atlasPreset` (with HeroUI) reserved for fresh apps.|
| 3 | Token format mismatch                          | 🔴 → ✅  | `atlasPresetTokensOnly` emits `rgb(var(--X-rgb) / <alpha-value>)` matching Xeekrs's contract. |
| 4 | Typography defaults disagree                   | 🟡 → ✅  | Atlas tokens now reference `--font-family-heading` / `--font-family-body` / `--font-family-base`. |
| 5 | Radius philosophy disagrees                    | 🟡 → ✅  | Atlas Buttons default to `radius="full"` (pill). Inputs default to pill. Cards default to `lg` (12px). |
| 6 | Radix vs HeroUI overlap                        | 🟡       | Decision matrix in `docs/RADIX_TO_HEROUI.md`. Migration phased A→E.                         |
| 7 | `@xeekrs/ui` package overlap                   | 🟡       | Recommendation: shim it to re-export from Atlas, deprecate, remove after migration.         |
| 8 | Dark mode strategies coexist                   | 🟢       | Both use `darkMode: "class"`. Verified compatible.                                           |
| 9 | Spacing scale agrees                           | 🟢       | Atlas now uses `var(--spacing-*)` with hardcoded fallbacks.                                  |

## How Atlas should be wired into Xeekrs

### Step 1 — Add the workspace dependency

In `Xeekrsmainapp/package.json`:

```json
{
  "dependencies": {
    "@atlas/design-system": "workspace:*"
  }
}
```

(Or publish Atlas to a private registry if cross-repo adoption is preferred.)

### Step 2 — Use the **tokens-only** preset

In `Xeekrsmainapp/tailwind.config.ts`:

```ts
import { atlasPresetTokensOnly } from "@atlas/design-system/tailwind";

export default {
  presets: [atlasPresetTokensOnly],   // ← inherits Atlas's color/radius/spacing maps
  darkMode: ["class"],
  content: [...],
  plugins: [
    animate,
    heroui({ /* keep Xeekrs's existing HeroUI config — Atlas does NOT register a second one */ }),
  ],
};
```

### Step 3 — Wrap with `<AtlasProvider>` only if you don't already have HeroUIProvider

Xeekrs already wraps the tree with HeroUIProvider (in `app/AppShell.tsx`).
Don't double-wrap. `<AtlasProvider>` is for fresh apps that don't yet
have one.

### Step 4 — Import components

In any feature folder (e.g. `features/referrals/ui/ReferralCard.tsx`):

```tsx
import { Card, CardBody, Button, Badge } from "@atlas/design-system";
```

The styling will resolve through Xeekrs's `globals.css` automatically
because Atlas's components use the same CSS-var-based Tailwind classes
(`bg-primary`, `text-muted-foreground`, etc.) that Xeekrs already defines.

### Step 5 — Migrate `@xeekrs/ui` consumers gradually

`@xeekrs/ui` currently exports `Button`, `buttonVariants`, plus a few
specific components. Recommended path:

```ts
// packages/xeekrs-ui/src/index.ts (transitional)
export { Button } from "@atlas/design-system";  // shim
export { buttonVariants } from "./button-variants-legacy"; // until callers move to Atlas variants
```

Once feature-by-feature migration completes (timeline tracked in
`Xeekrsmainapp/docs/MIGRATION.md`), delete `@xeekrs/ui` entirely.

## Side-by-side: tech stack & folder philosophy

| Concern                  | Xeekrs (app)                                                            | Atlas (design system)                                  |
| ------------------------ | ----------------------------------------------------------------------- | ------------------------------------------------------ |
| **Type**                 | Application (Next.js)                                                   | Library (npm package)                                  |
| **Org philosophy**       | Feature-based *(target — recap)*                                        | Layered (`domain → application → infra → api`)         |
| **React**                | 18.3                                                                    | 18+ peer                                               |
| **Framework**            | Next.js 16 App Router                                                   | Framework-agnostic React lib                           |
| **Tailwind**             | 3.4 + animate plugin                                                    | 3.4 (peer)                                             |
| **UI primitives**        | HeroUI **+** Radix (~25 pkgs) **+** Vaul **+** cmdk **+** sonner       | HeroUI only (Atlas) — Radix migration phased per `RADIX_TO_HEROUI.md` |
| **Styling helpers**      | `clsx`, `tailwind-merge`, `class-variance-authority`                    | `clsx`, `tailwind-merge` (`cnHero`), `tailwind-variants` |
| **Forms**                | `react-hook-form` + `react-day-picker`                                  | Pass-through to consumer; HeroUI handles inputs/labels  |
| **Theming**              | `next-themes` + CSS-var triplets in `globals.css` (single source of truth) | Reads consumer CSS vars                              |
| **Icons**                | `lucide-react`                                                          | `lucide-react` via `IconRegistryPort`                  |
| **Charts**               | `recharts`                                                              | Out of scope                                           |
| **Editor**               | TipTap                                                                  | Out of scope                                           |
| **Internal packages**    | `@xeekrs/ui` (small, transitional)                                      | n/a                                                    |
| **Testing**              | Next.js lint + manual                                                   | Vitest                                                 |
| **Brand identity**       | Earth ink + cream + lavender                                            | Inherits from consumer (default fallback = Xeekrs)     |
| **Fonts**                | Raleway + Open Sans                                                     | `var(--font-family-*)` (Xeekrs values as fallback)     |
| **Radius defaults**      | 6/8/12/24, pill CTAs                                                    | 6/8/12/24, pill CTAs (matches Xeekrs)                  |
| **Dark mode**            | `class` strategy + CSS-var swap                                         | `class` strategy (compatible)                          |
| **Public surface rule**  | TBD per recap                                                           | Single root entry + `package.json#exports`             |
| **Folder structure**     | `app/` (routes), `src/components/` (~hundreds, flat), `packages/xeekrs-ui` | `src/{domain,application,infrastructure,api,contracts,shared}/` |

## Folder philosophy — when to use which

```
Application code              -> features/ (vertical slices)
Library / design system code  -> layered  (horizontal slabs)
Shared utilities              -> shared/ inside each
```

Why feature-based is right for an app: each feature has a **business
purpose** (Recruitment, Referrals). Code that ships and gets removed
together belongs together.

Why layered is right for a library: a library has no business purpose
of its own. Its only purpose is to give callers stable, isolated
building blocks. Layers make that isolation testable.

If Atlas tried to be feature-based, you'd end up with `features/buttons/`
— a re-statement of layered with extra steps. If Xeekrs tried to be
layered, every Recruitment file would be re-spread across `domain/`,
`application/`, `infrastructure/` again — exactly what the recap is
moving away from.

## TL;DR

- Atlas is **reskinned** to mirror Xeekrs's `heroui-branded/` patterns
  byte-for-byte. Same Tailwind classes, same `disableAnimation`
  default, same pill-radius brand rule.
- Atlas reads tokens from the consumer's CSS vars. Xeekrs's
  `globals.css` is canonical at runtime; Atlas's hex fallbacks are
  reference-only.
- Use `atlasPresetTokensOnly` in Xeekrs's tailwind config — never
  `atlasPreset`. (`atlasPreset` registers a second HeroUI plugin and
  would fight Xeekrs's existing one.)
- Radix → HeroUI migration is real but phased. See `RADIX_TO_HEROUI.md`.
- `@xeekrs/ui` becomes a re-export shim during the transition, then
  goes away.
