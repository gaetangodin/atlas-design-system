# SOP — Building a Feature for Production Handoff

**Standard Operating Procedure**
Owner: Frontend / Design Engineering
Applies to: Next.js feature prototypes built to be handed to a developer for production integration
Companion document: `cursorrules` (the rule reference this SOP operationalizes)
Worked example: `playground/features/playground/` in this repo

---

## 1. Purpose

The `cursorrules` document is a *reference* — a flat list of rules. This SOP is the *procedure* — the order you do things in, the checkpoints, and the definition of done. Follow the SOP; consult the rules when you need the detail behind a step.

The goal of every feature you build under this SOP: a developer can copy your feature folder into a production repo, read your hook's return shape as a spec, rewrite only the hook internals with real API calls, and never open a component file.

If a developer has to open a component file to understand the feature, the SOP was not followed.

---

## 2. When this SOP applies

Use it when you are building a **live frontend prototype** of a feature in Next.js that will be handed to a developer.

Do **not** use it for:

- The design-system library itself (`src/` in this repo) — that is a published package, not a feature.
- Throwaway spikes that will never be integrated.
- A pure component gallery or Storybook-style viewer (different artifact — though note the playground in this repo *is* structured as a feature so it can double as a worked example).

---

## 3. Roles

| Role | Responsibility |
|---|---|
| Feature author (you) | Build the feature folder following this SOP. Owns components, hook shape, mocks, types. |
| Integrating developer | Copies the feature folder to production, rewrites hook internals with real API calls, never touches components. |

The contract between the two roles is the **hook return shape**. Everything in this SOP exists to keep that contract clean.

---

## 4. Before you start

Confirm all of the following, then proceed:

1. You have a feature name in kebab-case — e.g. `employer`, `job-postings`, `playground`. This is `[feature-name]` throughout.
2. You know the feature's primary entity (the "thing" it lists or shows) and its fields.
3. You know which approved libraries you will need (see §11). If a library is not on that list, stop and raise it — the production repo may not have it.
4. The app is Next.js App Router with `strict` TypeScript on.

---

## 5. The procedure

Work the phases **in order**. Each phase has an exit check — do not start the next phase until the current one passes.

### Phase 1 — Scaffold the feature folder

Create exactly this structure. No more folders, no fewer. No files at the feature root — everything goes in a subfolder.

```
/features/[feature-name]
  /components
  /hooks
  /types
  /mocks
  /utils
  /constants
  /subfeatures        ← only if needed (see Phase 9 of cursorrules)

/app/[feature-name]
  page.tsx            ← Next.js route entry
```

**Worked example:** `playground/features/playground/` has every folder; `playground/app/playground/page.tsx` is the route.

> Exit check: the folder tree exists and matches the diagram exactly.

### Phase 2 — Define domain types

Write `/types/[feature-name].types.ts`. Put **only domain shapes** here: entity interfaces, unions, filter shapes, form-data shapes.

Do **not** put component prop interfaces here — those live at the top of each component file.

When extending an existing type, add the new field as **optional** (`?:`). The developer promotes it to required in their mapper once the API supports it.

**Worked example:** `playground/features/playground/types/playground.types.ts` — defines `Person`, `RevenueChartDatum`, `IntentColor`, etc. Notice it imports nothing from components or hooks.

> Exit check: types file compiles; no prop interfaces in it; no imports from components/hooks.

### Phase 3 — Write mocks

Write `/mocks/[feature-name].mocks.ts`. **All** sample data lives here — never inline in a component, page, or hook body.

Mock data quality is mandatory:

- Realistic names. No "Test", "Demo", "Lorem Ipsum", "Item 1".
- Cover every status variation across the list.
- Include one entry with a very long value to test layout overflow.
- Include one entry with only the minimum fields (all optionals missing).
- Named exports only.

If you need variations, add `/mocks/[feature-name].generators.ts` with `make[Entity](overrides)` factories.

**Worked example:** `playground/features/playground/mocks/playground.mocks.ts` — `mockPeople` includes a deliberately long name (`Aleksandra Mikhailovna Volkonskaya-Romanenko`) and realistic campaign names. Note mocks store icon *keys* (plain strings), not JSX — keeping the data pure.

> Exit check: no data array exists anywhere outside `/mocks`; names are realistic; edge cases present.

### Phase 4 — Build the hook (the contract)

Write `/hooks/use[Feature]List.ts` (or `use[Feature]Detail`, `use[Name]Wizard` — see the table in §11).

This is the most important phase. The hook's **return shape is the spec** the developer reads. Field names must be stable and explicit.

Every data hook returns, at minimum:

```ts
return {
  // data
  items: mockList,

  // states — always all four, even if hardcoded
  isLoading: false,
  isEmpty: false,
  hasNextPage: false,
  error: null,

  // callbacks — named after the event, never the implementation
  onItemSelect,
  onFilterChange,
}
```

Rules for this phase:

- No `useEffect`, no `fetch`, no `async` in the UX version — return mock data directly.
- Callbacks are named after **what happened**: `onItemSelect`, `onFormSubmit`, `onProgressIncrement` — never `navigateToItem`, `saveToServer`.
- A wizard gets **two** hooks: `use[Name]Steps` (navigation — dev never rewrites) and `use[Name]Wizard` (form data + `onWizardComplete` — dev rewrites only the submit).

**Worked example:** `playground/features/playground/hooks/usePlaygroundShowcase.ts` — owns every piece of state (progress, disclosures, tags), exposes the four standard states, and exposes ~17 `on*` callbacks named after events.

> Exit check: hook returns `isLoading`/`isEmpty`/`hasNextPage`/`error`; every callback is `on` + past-event noun; no `useEffect`/`fetch`.

### Phase 5 — Build components top-down

Start with the page component, then its children.

**5a. The page component** — `/components/[Feature]Page.tsx`. This is the **only** component in the feature that calls a hook. It owns all data and distributes it down as props.

```tsx
export function [Feature]Page() {
  const { items, isLoading, isEmpty, error, onItemSelect } = use[Feature]List()

  if (isLoading) return <[Feature]PageSkeleton />
  if (error) return <ErrorState />
  if (isEmpty) return <[Feature]EmptyState />

  return <[Feature]List items={items} onSelect={onItemSelect} />
}
```

**5b. Child components** — pure JSX. A child receives data through props and fires callbacks. It never decides where data comes from.

Allowed inside a component: JSX, `useState` for UI-only state (open/closed, active tab, hover), calling utils with explicit params, importing from `/constants` and the design system.

Never inside a component: `useEffect`, `fetch`, `useRouter`, business logic, imports from `/mocks`, inline hardcoded data.

Component rules:

- Props interface at the **top of the component file** — never in `/types`, never a separate `.types.ts`.
- Max ~80 lines. If it grows past that, split it into smaller component files.
- Filename `PascalCase.tsx`; export name matches the filename exactly.

**Worked example:** `playground/features/playground/components/PlaygroundPage.tsx` calls the hook and distributes props; the per-section files in `components/sections/` are pure prop-driven JSX. `OverlaysSection.tsx` was split into `OverlayPopovers.tsx` + `OverlayModals.tsx` to respect the line limit.

> Exit check: only the page component calls a hook; every child is props-only; no component exceeds ~80 lines; no inline data.

### Phase 6 — Wire the Next.js route

Write `/app/[feature-name]/page.tsx`. It is a thin shell that does exactly one thing: render the feature's page component.

```tsx
'use client'
import { [Feature]Page } from '@/features/[feature-name]/components/[Feature]Page'

export default function Page() {
  return <[Feature]Page />
}
```

If the page file exceeds 8 lines, something is wrong. No hooks, no state, no logic, no JSX beyond the single page component.

**Worked example:** `playground/app/playground/page.tsx` — 7 lines, `'use client'`, renders `<PlaygroundPage />`.

> Exit check: route file is ≤8 lines and contains only the import + render.

### Phase 7 — Design the three states

Every page-level component that calls a hook **must** have two companion files, plus a handled error path:

```
[Feature]Page.tsx
[Feature]PageSkeleton.tsx   ← required — shown while isLoading
[Feature]EmptyState.tsx     ← required — shown while isEmpty
```

The skeleton must **mirror the real layout** — same grid, same spacing, same approximate heights — using grey placeholder boxes only.

Design and verify all three states before the feature is "done." Flip the hook's return values to simulate each:

```ts
// loading
return { items: [], isLoading: true,  isEmpty: false, error: null, hasNextPage: false }
// empty
return { items: [], isLoading: false, isEmpty: true,  error: null, hasNextPage: false }
// error
return { items: [], isLoading: false, isEmpty: false, error: 'Something went wrong', hasNextPage: false }
```

**Worked example:** `playground/features/playground/components/PlaygroundPageSkeleton.tsx` mirrors the sidebar + section layout; `PlaygroundEmptyState.tsx` covers the empty path; `PlaygroundPage.tsx` branches on all four states.

> Exit check: skeleton + empty-state files exist; you have viewed all three states in the browser.

### Phase 8 — Self-review

Run the commit checklist in §10. Fix every miss before opening a PR.

---

## 6. Utilities and constants (as needed)

Not a numbered phase — do these whenever a Phase 5 component needs them.

**Constants** — `/constants/[feature-name].constants.ts`: label maps, color maps, static option arrays, numeric config used across more than one file. Values used in only one file stay in that file.

**Utils** — `/utils/[feature-name].utils.ts`: pure functions only. Explicit params, explicit return, no state, no hooks, no side effects, no imports from components. A helper used by only one hook stays private at the top of that hook file; a trivial one-off stays inline.

**Worked example:** `playground/features/playground/constants/playground.constants.ts` holds `PLAYGROUND_NAV` and `INTENT_COLORS`; `utils/playground.utils.tsx` holds `clampProgress` and the icon resolvers (`.tsx` because they return JSX).

---

## 7. Global UI components

Shared visual primitives — `Button`, `Card`, `Input`, `Modal`, etc. — belong in `/components/ui` and must know nothing about any feature.

In this repo that layer is the **`@atlas/design-system` package itself**. Import primitives from `@atlas/design-system`; do not re-implement them inside a feature. If you find yourself importing a feature type into a would-be `/components/ui` file, it is not a UI primitive — move it into the feature's `/components`.

---

## 8. Subfeatures

Create a subfeature only when a section has its own distinct data shape (its own type), more than one component, and its own hook. A multi-step wizard, a complex filter sidebar, or a nested list-detail section are typical cases.

A subfeature uses the **identical** folder structure and rules, nested under `/features/[feature-name]/subfeatures/[subfeature-name]/`. The parent never reaches into a subfeature's internals; subfeatures never reach into each other.

A single badge, a one-off small component, or anything with only one component stays flat — it does not become a subfeature.

---

## 9. Handoff — what happens after you

When you hand the feature folder to the integrating developer, they will:

1. Copy `/features/[feature-name]` and `/app/[feature-name]` into the production repo.
2. Read each hook's return shape as the spec.
3. Rewrite **only** the hook internals — replace mock returns with real API calls, replace `console.log` submit handlers with real mutations.
4. Never open a component file.

Your job is done well if step 4 holds. Before handoff, write a one-line note per hook describing what its `on*Complete`-style callbacks should ultimately do (e.g. "`onWorkspaceDeleteConfirm` → real DELETE call").

---

## 10. Definition of done — commit checklist

Do not commit until every box is true:

- [ ] No `useEffect` inside any component
- [ ] No `fetch` inside any component
- [ ] No `useRouter` inside any component
- [ ] No hardcoded data inside any component
- [ ] All mock data lives in `/mocks` only
- [ ] Props interface defined at the top of each component file
- [ ] Every data hook returns `isLoading`, `isEmpty`, `error`, `hasNextPage`
- [ ] All callbacks named after events, not implementations
- [ ] Every new prop and every new type field is optional
- [ ] A `[Feature]PageSkeleton` exists for every page component
- [ ] A `[Feature]EmptyState` exists for every list
- [ ] Loading, empty, and error states all viewed in the browser
- [ ] No `any` types; strict mode clean
- [ ] Named exports only — no `export default` from components, hooks, or utils
- [ ] Realistic mock data — no "Test" / "Lorem Ipsum"
- [ ] Route file (`app/[feature-name]/page.tsx`) is a shell only, ≤8 lines
- [ ] No component exceeds ~80 lines

---

## 11. Quick reference

### Hook selection

| Pattern | Hook name | Responsibility |
|---|---|---|
| List with filters | `use[Feature]List` | list data, filters, pagination, list callbacks |
| Single record | `use[Feature]Detail` | single record, detail callbacks |
| Wizard navigation | `use[Name]Steps` | step navigation only — dev never rewrites |
| Wizard data | `use[Name]Wizard` | form accumulation + `onWizardComplete` |
| Filters only | `use[Feature]Filters` | filter state, derived filtered lists |

### Naming

| Thing | Convention | Example |
|---|---|---|
| Component file | PascalCase | `ItemCard.tsx` |
| Component export | matches filename | `export function ItemCard` |
| Hook file | camelCase, `use` prefix | `useItemList.ts` |
| Types file | kebab + suffix | `items.types.ts` |
| Mocks file | kebab + suffix | `items.mocks.ts` |
| Utils file | kebab + suffix | `items.utils.ts` |
| Constants file | kebab + suffix | `items.constants.ts` |
| Callbacks | `on` + past-event noun | `onItemSelect`, `onFormSubmit` |
| Boolean props/returns | `is` / `has` prefix | `isSelected`, `hasNextPage` |

### Approved libraries

Use only these — the production repo may not have others.

| Purpose | Library |
|---|---|
| Forms | `react-hook-form` |
| Validation | `zod` |
| Icons | `lucide-react` |
| Dates | `date-fns` |
| HTTP | native `fetch` only |
| Animation | `framer-motion` |
| State | `useState`, `useReducer` |

Never use: `axios`, `moment`, `lodash`, `redux`, `zustand`, `react-query`.

---

## 12. Worked example index

The playground in this repo is itself structured as a feature, so it doubles as a reference implementation:

| SOP concept | File |
|---|---|
| Feature folder structure | `playground/features/playground/` |
| Next.js route shell | `playground/app/playground/page.tsx` |
| Domain types | `playground/features/playground/types/playground.types.ts` |
| Mocks (with edge cases) | `playground/features/playground/mocks/playground.mocks.ts` |
| Constants | `playground/features/playground/constants/playground.constants.ts` |
| Pure utils | `playground/features/playground/utils/playground.utils.tsx` |
| The hook / contract | `playground/features/playground/hooks/usePlaygroundShowcase.ts` |
| Page component (calls hook) | `playground/features/playground/components/PlaygroundPage.tsx` |
| Required skeleton companion | `playground/features/playground/components/PlaygroundPageSkeleton.tsx` |
| Required empty-state companion | `playground/features/playground/components/PlaygroundEmptyState.tsx` |
| Props-only child components | `playground/features/playground/components/sections/` |
| Splitting an oversized component | `OverlaysSection.tsx` → `OverlayPopovers.tsx` + `OverlayModals.tsx` |

> Caveat: the playground is a component gallery, not a data-driven feature, so its hook hardcodes `isLoading: false` / `isEmpty` / `error: null` rather than simulating an API. A real feature exercises all three states per Phase 7.

---

## 13. v0.2 component update

Atlas grew from 87 to 118 components in the Xeekrs migration (May 2026).
This SOP's structural advice is unchanged — pick the primitives you need
from `@atlas/design-system` and follow the phases above. The new
component categories worth knowing about:

| Category | New components |
|---|---|
| Foundations & brand | `BrandLogo`, `BrandSwatch`, `BrandBoard`, `ColorScale`, `TypographyScale`, `GradientToken`, `VoiceAndTone` |
| Shell & chrome | `TopBar`, `MobileTopBar`, `MegaSearch`, `SubNav`, `PageBack`, `AccountMenu`, `SiteSwitcherTrigger`, `DisclosureBar`, `ConsentAlertBar`, `BrowseHubCard`, `CoverImageHero`, `SearchToolbar`, `AlertBar` |
| Recruitment | `MatchDiamond`, `ReadinessBadge`, `QuickActionButton`, `InterviewPipelineStepper`, `ProfileCardToolbar`, `ProfileIdentityWell`, `AnonymousProfileCard`, `ApplicantDocumentMiniCard`, `ContactInfoButton`, `FilterSection` |
| Posting flow | `PostingStepper`, `EntryPathCards`, `TemplateCard`, `AiGeneratedBadge`, `InlineAiAssist`, `QualityScorePanel`, `InternalNotesField` |
| Other | `Chip`, `BulletinRow`, `PromotionCard`, `ColumnSelector`, `ResizablePanel` |

Compose these inside feature components like any other primitive — the
rules are unchanged. Full migration log + conflict policy at
`docs/MIGRATION-CONFLICTS.md` at the repo root.
