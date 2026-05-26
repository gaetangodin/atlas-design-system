# Atlas Design System

A React component library combining **[HeroUI](https://heroui.com)**
(React + a11y primitives, built on React Aria) with the **Xeekrs**
visual design language (earth-ink + cream + lavender, flat, pill CTAs).
Organized in a layered architecture.

> The Xeekrs `heroui-branded/` set is the source of truth for visual
> chains; Atlas mirrors it byte-for-byte and exposes it as a stable
> public package consumable from anywhere.

## Live Storybook

**▶ [Browse every component, variant, and token →](https://super-croquembouche-6f0509.netlify.app)**

[![Storybook live](https://img.shields.io/badge/storybook-live-10b981?style=flat-square&logo=storybook&logoColor=white)](https://super-croquembouche-6f0509.netlify.app) &nbsp; [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gaetangodin/atlas-design-system)

The Storybook is deployed to Netlify via the config in
[`netlify.toml`](./netlify.toml) — `pnpm build-storybook` publishes
`storybook-static/`.

Update the deployed site:

```bash
pnpm install
pnpm build-storybook
# Drag storybook-static/ onto https://app.netlify.com/drop  (no auth)
# Or, if linked via netlify-cli:
pnpm deploy:storybook
```

## What's in the box

| Need                          | Source                                          |
| ----------------------------- | ----------------------------------------------- |
| Tokens (color, type, spacing) | Extracted from the Preline UI Figma file        |
| React components + a11y       | HeroUI (themed with our Preline-derived tokens) |
| Tailwind config               | Preset that consumes our domain tokens          |
| Component composition rules   | Preline's variants and layout patterns          |

The Figma source of truth: [Preline UI Figma (Community)](https://www.figma.com/design/1cq9AYr5lGy0uBqbDexTa2/Preline-UI-Figma--Community-).

## Quickstart

```bash
pnpm install
pnpm typecheck
pnpm test
pnpm build
```

Consume in an app:

```tsx
import { AtlasProvider, Button, Input, Card } from "@atlas/design-system";
import "@atlas/design-system/styles.css";

export default function App() {
  return (
    <AtlasProvider>
      <Card>
        <Input label="Email" placeholder="you@example.com" />
        <Button variant="primary" size="md">Sign in</Button>
      </Card>
    </AtlasProvider>
  );
}
```

Or just the tokens:

```ts
import { colors, spacing, radius } from "@atlas/design-system/tokens";
```

Tailwind users — pick the preset that matches your situation:

```ts
// Fresh app (Atlas owns the HeroUI plugin):
import { atlasPreset } from "@atlas/design-system/tailwind";
export default { presets: [atlasPreset], content: ["./src/**/*.{ts,tsx}"] };
```

```ts
// App that already registers HeroUI itself (e.g. Xeekrsmainapp):
import { atlasPresetTokensOnly } from "@atlas/design-system/tailwind";
export default {
  presets: [atlasPresetTokensOnly],
  plugins: [animate, heroui({ /* your existing config */ })],
  content: [...],
};
```

If your app maintains its own `globals.css` with `--primary`,
`--foreground`, etc. CSS variables (Xeekrs convention), Atlas
components automatically resolve to your colors. No second source
of truth.

## Layer layout

```
src/
├── domain/          Pure tokens, variant enums, invariants. No framework deps.
├── application/     Variant resolution use cases, ports.
├── infrastructure/  HeroUI theme + provider, Tailwind preset, CSS-var generator.
├── api/             React components — public surface (wraps HeroUI).
├── contracts/       Public types: props, events, token shapes.
└── shared/          Generic helpers (cx, id, errors).
```

Dependency direction: `api → application → domain`, with `infrastructure`
implementing ports defined in `application`/`domain`. See
[ARCHITECTURE.md](./ARCHITECTURE.md) for the full ruleset.

## Status — v0.2

**118 components shipped across 20 categories. Full Xeekrs UI library
migrated except for app-level page assemblies.** v0.2 added 31
components from the Xeekrs library: foundations & brand layer (color
ramps, typography, brand assets), shell & chrome (TopBar, SubNav,
AccountMenu, SiteSwitcherTrigger, MegaSearch, …), recruitment
primitives (MatchDiamond, ReadinessBadge, QuickActionButton,
InterviewPipelineStepper, …), posting flow (PostingStepper,
EntryPathCards, TemplateCard, AiGeneratedBadge, …), and brand polish
(GradientToken, VoiceAndTone).

Migration log + conflict reconciliation:
[docs/MIGRATION-CONFLICTS.md](./docs/MIGRATION-CONFLICTS.md).

| Category                          | Coverage |
| --------------------------------- | -------- |
| Foundations (tokens)              | 100%     |
| Core (Button, Input, Card, …)     | 100%     |
| Forms                             | 100%     |
| Overlays (Modal, Drawer, Popover) | 100%     |
| Feedback (Alert, Toast, …)        | 100%     |
| Navigation (Tabs, Nav, Stepper)   | 89%      |
| Data (Table, SortableTable, Grid) | 71%      |
| Charts (6 Recharts wrappers)      | 100%     |
| Display (Avatar, Timeline, …)     | 80%      |
| Layout (Stack, Container)         | 71%      |
| Marketing (Hero, FAQ, Footer, …)  | 100%     |
| App shells (Auth/Dashboard/Settings) | 100%  |

Full tracker: [docs/components/INDEX.md](./docs/components/INDEX.md).
Ratios: [docs/PRELINE_INVENTORY.md](./docs/PRELINE_INVENTORY.md).

## Adopting in another app

If you're integrating Atlas into an existing app (e.g.
`Xeekrsmainapp`), read [docs/INTEROP.md](./docs/INTEROP.md) first —
it lists the known compatibility issues, the recommended adoption
phases, and a side-by-side comparison of architectural philosophies.

## License

MIT
