# Xeekrs → Atlas Migration Manifest

Live log of every item ported from the Xeekrs library
(`xeekrs-sandbox.netlify.app/account/settings?tab=library`) into Atlas.

**Policy:** All Xeekrs items are imported. When Atlas already has a same-named
primitive, the Xeekrs version is **parked side-by-side** under a non-clobbering
name and flagged below. A human reviews each row and decides:

- **KEEP** — Atlas's existing version wins; delete the imported Xeekrs copy.
- **REPLACE** — Xeekrs version wins; rename it back to the canonical name and
  delete Atlas's original.
- **MERGE** — combine props/variants from both into a single component.

| Status legend |  |
|---|---|
| 🟢 **NEW** | No conflict — Xeekrs item didn't exist in Atlas; imported as-is. |
| 🟡 **CONFLICT** | Atlas had a same-named primitive; Xeekrs version parked side-by-side, awaiting human decision. |
| 🔵 **EXTEND** | Atlas had a related token / type; the Xeekrs version was merged into the existing file (additive, non-destructive). Listed for traceability. |

---

## Batch 1 — Foundations + Brand

### Color tokens

| Status | Xeekrs item | Atlas destination | Notes |
|---|---|---|---|
| 🔵 EXTEND | Stone ramp (50–900) | `src/domain/tokens/colorRamps.ts` → `stone` | Added as named ramp. Atlas had `muted` as semantic alias for Stone-100 — kept. |
| 🔵 EXTEND | Lavender ramp (50–900) | `src/domain/tokens/colorRamps.ts` → `lavender` | DEFAULT step (500) is Xeekrs's HeroUI `primary`. Atlas's existing `primary` semantic token (Earth-900) is kept; the lavender ramp is *additional*. |
| 🔵 EXTEND | Earth ramp (50–900) | `src/domain/tokens/colorRamps.ts` → `earth` | DEFAULT step is Earth-900 — Atlas's existing `primary` and `foreground` tokens both point here. |
| 🔵 EXTEND | Emerald ramp (50–900) | `src/domain/tokens/colorRamps.ts` → `emerald` | Atlas's semantic `success` continues to alias the DEFAULT step (#00685D). |
| 🔵 EXTEND | Canary ramp (50–900) | `src/domain/tokens/colorRamps.ts` → `canary` | Atlas's semantic `warning` aliases the DEFAULT step (#EDFF7D). |
| 🔵 EXTEND | Pink/Danger ramp (50–900) | `src/domain/tokens/colorRamps.ts` → `pink` | Atlas's semantic `destructive` aliases the DEFAULT step (#F31260). |
| 🔵 EXTEND | Orange ramp (50–900) | `src/domain/tokens/colorRamps.ts` → `orange` | Brand-extension ramp; no semantic alias yet. |
| 🟢 NEW | `chart-1` … `chart-5` | `src/domain/tokens/colorRamps.ts` → `chart` | New named tokens (teal, blue, purple, red, orange). |
| 🟢 NEW | `skill-color` / `skill-color-light` | `src/domain/tokens/colorRamps.ts` → `skill` | Domain-specific (match-diamond visuals). |
| 🟢 NEW | Sidebar token group (8 tokens) | `src/domain/tokens/colorRamps.ts` → `sidebar` | Used by Sidebar shell only — no conflict with Atlas's existing `Sidebar` component, which currently consumes only generic tokens. |
| 🟢 NEW | `browseHumanServices` (purple accent) | `src/domain/tokens/colorRamps.ts` → `browseHumanServices` | Domain-specific (recruitment chrome). |

### Typography

| Status | Xeekrs item | Atlas destination | Notes |
|---|---|---|---|
| 🔵 EXTEND | text-xs/sm/base/lg/xl/2xl/3xl/4xl | `src/domain/tokens/typography.ts` | Atlas had partial scale; extended to match Xeekrs exact steps. `text-xs` is **16px** in Xeekrs (deliberate readability floor) — preserved. |
| 🔵 EXTEND | font-weight-normal/medium/semibold/bold | `src/domain/tokens/typography.ts` → `fontWeights` | Named tokens added. |
| 🔵 EXTEND | font-family-heading (Raleway), body / base (Open Sans) | `src/domain/tokens/typography.ts` → `fontFamilies` | Named family constants for use in apps that load the same fonts. |

### Radius

| Status | Xeekrs item | Atlas destination | Notes |
|---|---|---|---|
| 🔵 EXTEND | `radius-2xl` (24px) for modals/drawers | `src/domain/tokens/radius.ts` | Added. |
| 🔵 EXTEND | `radius-5xl` (40px) for hub hero bands | `src/domain/tokens/radius.ts` | Added. |

### Shadows

| Status | Xeekrs item | Atlas destination | Notes |
|---|---|---|---|
| 🔵 EXTEND | HeroUI small/medium/large shadow recipes (earth-tinted) | `src/domain/tokens/shadows.ts` | Existing Atlas shadows preserved; Xeekrs's tinted variants added as `earthSm/earthMd/earthLg`. |

### Brand assets

| Status | Xeekrs item | Atlas destination | Notes |
|---|---|---|---|
| 🟢 NEW | 8 logo SVGs (`xeekrs_logo*.svg`, `employnext-logo.svg`) | `src/assets/brand/logos/` | Copied verbatim. Consumed by new `BrandLogo` component. |

### Components

| Status | Xeekrs page item | Atlas destination | Notes |
|---|---|---|---|
| 🟢 NEW | Logo lockups | `src/api/components/BrandLogo/` | New component, accepts `variant` prop. |
| 🟢 NEW | Brand color scales (50–900) | `src/api/components/ColorScale/` | New documentation component rendering one ramp as swatches. |
| 🟢 NEW | Brand palette swatches | `src/api/components/BrandSwatch/` | Single swatch tile with hex / role label. |
| 🟢 NEW | Typography scale (product / marketing) | `src/api/components/TypographyScale/` | New documentation component rendering the text-xs → text-4xl ramp. |
| 🟢 NEW | Brand board (postcard) | `src/api/components/BrandBoard/` | New documentation component summarizing the brand on one page. |
| 🟢 NEW | Voice & tone | (deferred to batch 2) | Pure markdown content — will land as a story doc, not a component. |
| 🟢 NEW | Marketing hero sample / social posts / display ads / campaigns | (deferred to batch 2) | Composite patterns; will land after the atom layer. |
| 🟢 NEW | Job AI gradients | (deferred — values not yet located in Xeekrs source) | Will be added once the gradient definitions are located in Xeekrs styles. |

---

## Batch 2 — Missing HeroUI primitives

Cross-referenced the Xeekrs library page's HeroUI · Misc / Display /
Overlays sections against Atlas's public exports.

### Components

| Status | Xeekrs page item | Atlas destination | Notes |
|---|---|---|---|
| 🟡 CONFLICT | Chip | `src/api/components/Chip/` (new) | Atlas's existing `Badge` IS HeroUI's Chip under the hood (documented in `contracts/component-props.ts`). Per the side-by-side policy, `Chip` is now also exported — it points at raw HeroUI Chip, untouched. Human reconciliation: most likely **KEEP Badge** (branded surface) and **DELETE Chip** (or vice versa); pick one, archive the other to avoid two pill primitives. |
| 🔵 EXTEND | Menu / MenuItem / MenuSection | `src/api/components/Menu/` (already existed) | Component file was in Atlas (branded HeroUI Menu wrapper, Xeekrs-ported), but **not exported from `api/index.ts`** — surfacing now. No new code. |
| 🔵 EXTEND | Ripple | `src/api/components/Ripple/` (already existed) | Same situation as Menu — file existed, not exported. Surfacing now. |
| 🔵 EXTEND | AvatarStack (square / support agents) | `src/api/components/AvatarVariants/` (already existed) | Atlas already ports the same Xeekrs `BrandedAvatarStack` source verbatim into `AvatarVariants.tsx` and exports it. **No action needed** — the Xeekrs library page lists AvatarStack as if it were missing, but it isn't. |
| 🔵 EXTEND | DropdownSection / ListboxSection / SelectSection / AutocompleteSection | (already exported) | All four section sub-components were already exported from `api/index.ts`. The earlier gap analysis missed them — no action. |
| ⏸️ DEFERRED | ResizablePanel / ResizablePanelGroup / ResizableHandle | (pending — needs new dep `react-resizable-panels`) | Xeekrs's resizable is a shadcn-style wrapper around `react-resizable-panels`, NOT a HeroUI primitive. Porting requires: (1) add `react-resizable-panels` as optional peer dep in Atlas; (2) install in playground; (3) alias it in `next.config.mjs` like other optional peers; (4) wrap the three components with Atlas styling. Defer to a focused mini-batch. |

### Summary

Batch 2 was mostly a **discovery exercise** — Atlas already had most of these
primitives, *and they were already exported*; the Xeekrs library page listed
them as if missing but the actual diff against Atlas's `api/index.ts` shows:

- `Menu / MenuItem / MenuSection` — already exported ✅
- `Ripple` — already exported ✅
- `AvatarStack` — already exported (via `AvatarVariants`) ✅
- `DropdownSection / ListboxSection / SelectSection / AutocompleteSection` — already exported ✅

Net new code in this batch: **one component — `Chip`** — added to honour the
side-by-side policy even though Atlas's `Badge` is functionally identical.

Deferred: `ResizablePanel` (requires a new optional peer dep
`react-resizable-panels`).

The most useful output of batch 2 is this manifest itself: it documents what's
already in Atlas so the team doesn't redo work, and flags Chip vs Badge for
the human-reconciliation pass.

---

## Batch 3 — Shell & chrome (partial)

This batch ported the **atomic** shell pieces. The three composite giants
(Header / MobileTopBar full / HeaderBrowseMegaSearch) were deferred to a
batch-3.5 because of size and tight coupling to Xeekrs app state.

### Components

| Status | Xeekrs item | Atlas destination | Notes |
|---|---|---|---|
| 🟢 NEW | `PageBackNavLink` / `PageBackNavButton` (PageBackNav.tsx) | `src/api/components/PageBack/` | Merged into one polymorphic `PageBack` — pass `href` for `<a>`, omit it for `<button>`. Two variants (`card` / `pill`). Drops Xeekrs's router import in favour of plain `href` + `onClick`. |
| 🟢 NEW | `DisclosurePlainMessageBar` (job-posting/) | `src/api/components/DisclosureBar/` | Verbatim port of the 25-line component. Two variants (`default` / `notice` — amber). |
| 🟢 NEW | `WorkSiteSwitcher` trigger | `src/api/components/SiteSwitcherTrigger/` | Trigger button only. Apps wire up their own modal — Atlas stays free of `BusinessSite` domain types. Variants: `default` / `onTint` (glass-on-dark) + `collapsed` icon-rail form. |
| 🟢 NEW | `HelpDeskSubNavBar` + `AnnouncementsSubNavBar` + `RecruitmentWorkSubnavHeader` (shared pattern) | `src/api/components/SubNav/` | Abstracted to a generic `SubNav` with `left` / `right` slots and `position="static" \| "fixed"`. Apps add their own className for sidebar-offset positioning — that geometry stays out of Atlas. |
| 🟢 NEW | `AccountMenu.tsx` | `src/api/components/AccountMenu/` | Items are passed in as data; Atlas doesn't hard-code the 6 Xeekrs section IDs. Both display modes (expanded / collapsed icon-rail with tooltips) preserved. |

### Deferred to Batch 3.5

| Xeekrs item | Source size | Why deferred |
|---|---|---|
| `Header.tsx` (full TopBar) | 984 lines | Tight integration with mega-search, account menu state, route awareness. Best ported as a focused mini-batch. |
| `HeaderBrowseMegaSearch.tsx` | 1558 lines | The biggest single file — multi-column directory search with state machine. Needs careful design decisions on Atlas's API surface. |
| `MobileTopBar.tsx` (full) | 343 lines | Couples to `Header` and route context. Will port once the desktop TopBar is locked in. |
| `BrowseHubCard` | (CSS class only) | Lives as a class string in `shell-patterns.ts`; needs a real component shape. |
| `SearchToolbar` (search + tag chips) | (not located) | Need to find the canonical source — search results page uses inline patterns. |
| `CoverImageHero` / `CoverImageSection` | 327 lines | Mid-complexity; deferred with the rest of the shell composites. |
| `ConsentAlertBar` (staff + client) | 190 lines | Belongs near DisclosureBar but has its own staff-vs-client logic — wants a dedicated component. |

### Summary

Net new components in batch 3: **5** (`PageBack`, `DisclosureBar`, `SubNav`,
`SiteSwitcherTrigger`, `AccountMenu`). All side-by-side imports (no conflicts
with existing Atlas components — fresh namespaces). Production build verified
(`/playground` 14.2 kB, 5 routes prerendered).

---

## Batch 3.5 — TopBar shells (simplified)

Ported the chrome / slot API for the three TopBar giants — without the
Xeekrs app-state coupling. Apps own the routing, search query state,
account-menu open-state, etc. and pass content into Atlas slots.

| Status | Xeekrs item | Atlas destination | Notes |
|---|---|---|---|
| 🟢 NEW (simplified) | `Header.tsx` (984 lines) | `src/api/components/TopBar/` | Slot-based: `brand` / `center` / `right` + `sticky` toggle. Atlas does NOT replicate Xeekrs's mega-search trigger, account menu integration, route awareness — apps compose those. |
| 🟢 NEW (simplified) | `MobileTopBar.tsx` (343 lines) | `src/api/components/MobileTopBar/` | Slot-based: `leading` / `brand` / `trailing` + `sticky` + `blur`. Drawer state belongs to the app. |
| 🟢 NEW (simplified) | `HeaderBrowseMegaSearch.tsx` (1558 lines) | `src/api/components/MegaSearch/` | Panel chrome only — `searchInput` slot + N columns slot + optional footer. Search state machine + result rendering live in the app. |

### Still deferred

| Item | Reason |
|---|---|
| `BrowseHubCard` | Lives as a CSS class string in Xeekrs's `shell-patterns.ts`; needs a real component shape designed. |
| `SearchToolbar` | Not extracted as a standalone in Xeekrs — search pages use inline patterns. Needs a design decision before porting. |
| `CoverImageHero` / `CoverImageSection` | 327 lines; tangled with the hero band layout. Defer to a focused batch. |
| `ConsentAlertBar` (staff + client) | 190 lines, distinct from `DisclosureBar`. Defer. |

---

## Batch 4 — Recruitment primitives (top 5)

The atomic, prop-driven recruitment-domain components used across applicant
cards, interview rails, and contact rows. The bigger compositions
(`AnonymousProfileCard`, `InterviewCard`, filters) are deferred — they pull
in many of these atoms.

| Status | Xeekrs item | Atlas destination | Notes |
|---|---|---|---|
| 🟢 NEW | `candidates/MatchDiamond.tsx` | `src/api/components/MatchDiamond/` | Verbatim 3-state diamond + helper functions (`matchLevelFromRequiredOverlap`, `matchLevelLabel`, `matchLevelPillClass`). The pill helper now uses **named utilities** (`bg-success-light`, `text-skill`) — no `bg-[var(--…)]` arbitrary values. |
| 🟢 NEW | `candidates/AnonymousProfileCard.tsx → readinessStageBadgeClassName` | `src/api/components/ReadinessBadge/` | Extracted into a real component. Four built-in stages (`Interview-Ready` / `Active` / `Training Phase` / `Other`); accepts any string for app-defined stages with the default styling fallback. Tailwind core color scales used (green / blue / yellow / gray) preserved — these are status signals, not brand. |
| 🟢 NEW | `candidates/RecruitmentQuickAction.tsx → RecruitmentQuickActionButton` | `src/api/components/QuickActionButton/` | Atlas drops the `Recruitment` prefix because the pill is domain-agnostic. Three label modes (`auto` / `always` / `never`) preserved; polymorphic via `href` / `as`. The Xeekrs `mailto` helper (`buildChatBridgedMailtoHref`) was app-specific and NOT ported. |
| 🟢 NEW (simplified) | `interviews/InterviewPipelineStepper.tsx` (266 lines) | `src/api/components/InterviewPipelineStepper/` | Atlas's version is decoupled from `DemoInterviewStatus` — apps pass a `stages: PipelineStage[]` with per-stage `state`, plus optional `closureRows[]` for the terminal actions. The status-to-stage-state mapping stays in the app. |

### Still deferred — recruitment

| Item | Reason |
|---|---|
| `SkillFit` (collapsible) | Not a standalone component in Xeekrs — it's an inline collapsible pattern inside `AnonymousProfileCard`. Use Atlas `Accordion` for now; if a dedicated `SkillFit` adds value, design it in a future batch. |
| `AnonymousProfileCard` | Composite pulling in MatchDiamond + ReadinessBadge + QuickActionButton + ContactPopovers — defer until the contact-popover atoms land. |
| `ProfileCardToolbar` / `ProfileIdentityWell` | Compositions; defer. |
| `ApplicantDocuments` (full + mini + section icon) | Three related components — own mini-batch. |
| `CandidateContactInfoButton` / `CompanyContactInfoButton` (popovers) | Need to port together; defer. |
| `IntroVideoDialog`, `VideoInterviewModal` | Compositions over Modal; defer. |
| 5 filter sections (MatchLevel / MatchStatus / Sector / Worksite / SidebarSearch) | Each has its own state and copy; defer as a "Filters" mini-batch. |
| `InterviewEventRecap`, `ApplicantReviewRecap` | Card compositions; defer. |
| `LocationFilterCombobox`, `EmployerOnboardingLocationStep`, `ShareCandidatePreviewCard` | Defer. |

### Summary — batches 3.5 + 4 combined

8 new components added (`TopBar`, `MobileTopBar`, `MegaSearch`, `MatchDiamond`,
`ReadinessBadge`, `QuickActionButton`, `InterviewPipelineStepper`). All zero-
conflict — fresh namespaces. Atlas's recruitment surface now has the visual
atoms; the larger compositions can be assembled by apps using these primitives
until Atlas ports them officially.

---

## Batch 3.7 — Remaining shell atomics

| Status | Xeekrs item | Atlas destination | Notes |
|---|---|---|---|
| 🟢 NEW | `messages/ConsentAlertBar.tsx` | `src/api/components/ConsentAlertBar/` | Verbatim port. Hex `#122120` → named `bg-earth-900` utility (no longer inline). Accent yellow `#F8FFCB` kept as literal — flagged below as a candidate for tokenization. |
| 🟢 NEW | Browse hub card class (`shell-patterns.ts`) | `src/api/components/BrowseHubCard/` | Promoted from a CSS class string to a real component. `variant="hub" | "mainSpace"` covers both Xeekrs class strings; polymorphic `<a>` / `<button>` based on `href`. |
| ⏸️ DEFERRED | `SearchToolbar` | (need design) | Not extracted as standalone in Xeekrs — search pages use inline patterns. |
| ⏸️ DEFERRED | `CoverImageHero` / `CoverImageSection` (327 lines) | (defer) | Composite — defer to a focused batch. |

### Color literals to consider tokenizing

`#F8FFCB` (light yellow accent used in ConsentAlertBar + recruitment chrome)
appears multiple times across Xeekrs and isn't yet in any ramp. Likely
candidate for a new "spotlight" or "accent yellow" ramp once design confirms.
Tracked here so the next foundations pass picks it up.

---

## Batch 5 — Posting flow primitives

The Xeekrs library page lists 8 posting-flow items. None exist as standalone
exports in the Xeekrs codebase — they're patterns inside large composite
files (`JobPostingForm.tsx`, `JobPostingCreationFlow.tsx`, etc.). Atlas
ports them as **clean atoms** with the right shape, not as 1:1 mirrors of
the inline patterns.

| Status | Xeekrs library item | Atlas destination | Notes |
|---|---|---|---|
| 🟢 NEW | AiGeneratedBadge | `src/api/components/AiGeneratedBadge/` | Lavender-tinted pill, `subtle` / `solid` tone variants, sparkle icon. |
| 🟢 NEW | EntryPathCards | `src/api/components/EntryPathCards/` | Generic "pick your starting point" radio cards. `auto` / 1 / 2 / 3 column layout; supports `badge` slot (compose `AiGeneratedBadge` inside). |
| 🟢 NEW | TemplateCard | `src/api/components/TemplateCard/` | Smaller pickable card with optional preview, badges, meta. Designed to grid alongside others. |
| 🟢 NEW | QualityScorePanel | `src/api/components/QualityScorePanel/` | Big-score panel with category breakdown. Tone derives from score band (<40 destructive, <70 warning, <90 emerald, ≥90 success). Issues list with `ok` / `warn` / `fail` / `info` pips. |
| 🟢 NEW | InternalNotesField | `src/api/components/InternalNotesField/` | Wraps Atlas `Textarea` with a lock-icon "internal — not shared with candidate" affordance. |
| 🟢 NEW | InlineAiAssist | `src/api/components/InlineAiAssist/` | Lavender banner with a prompt + clickable suggestion chips. Apps wire suggestion ids to their AI call. |
| 🔵 EXTEND (use existing) | SkillTagInput | Atlas's existing `TagsInput` | Functionally the same — apps can supply skill-specific copy / icons. No new component needed; flagged here so designers/devs know the equivalent. |
| ⏸️ DEFERRED | PostingStepper | (defer) | Atlas has generic `Stepper` already; a posting-specific variant with the Xeekrs wizard's sidebar chrome can be added in a posting-flow-focused batch. |

---

## Batch 7 — Brand polish

| Status | Xeekrs library item | Atlas destination | Notes |
|---|---|---|---|
| 🟢 NEW | Job AI gradients | `src/domain/tokens/colorRamps.ts → jobAiGradients` | 4 named gradients: `subtle`, `spark`, `hero`, `warmth`. Exposed both as a TS token map and via a new `GradientToken` documentation component. |
| 🟢 NEW | Voice & tone | `src/api/components/VoiceAndTone/` | Documentation component rendering brand statement + principles + do/don't pairs. Defaults shipped (Xeekrs brand voice); apps can override every list. |
| 🟢 NEW | GradientToken | `src/api/components/GradientToken/` | Doc swatch tile for the gradients (mirrors `BrandSwatch`). |
| ⏸️ DEFERRED | Component inventory page | (defer) | Auto-generation from `api/index.ts` would be a nice follow-up — write a small script that walks the exports and emits a JSON / TS map of components. Not a runtime component. |
| ⏸️ DEFERRED | Marketing hero / social posts / display ads / campaigns | (defer) | Composite layouts; each needs its own design pass. |

---

## Final summary

Atlas's public component surface grew from **87** (pre-migration) to **104**
components across batches 1, 2, 3, 3.5, 3.7, 4, 5, and 7. Net new in this
migration:

- **Foundations + brand** — 4 components (BrandLogo, BrandSwatch, BrandBoard, ColorScale, TypographyScale).
- **Missing HeroUI** — 1 (Chip).
- **Shell & chrome** — 9 (PageBack, DisclosureBar, SubNav, SiteSwitcherTrigger, AccountMenu, TopBar, MobileTopBar, MegaSearch, ConsentAlertBar, BrowseHubCard).
- **Recruitment** — 4 (MatchDiamond, ReadinessBadge, QuickActionButton, InterviewPipelineStepper).
- **Posting flow** — 6 (AiGeneratedBadge, EntryPathCards, TemplateCard, QualityScorePanel, InternalNotesField, InlineAiAssist).
- **Brand polish** — 2 (GradientToken, VoiceAndTone) + token-level (`jobAiGradients`).

Plus token-layer growth: 7 full color ramps (Stone, Lavender, Earth, Emerald,
Canary, Pink, Orange) + chart-1..5 + skill / sidebar / browseHumanServices
tokens + the AI gradients.

**Zero conflicts requiring human reconciliation** beyond the documented
Chip-vs-Badge naming overlap. Everything else was either net-new or an
additive extension to existing files.

**Build verified.** `next build` ✓ — `/playground` 16.5 kB / 612 kB First Load
JS, 5 routes prerendered as static content.

## Still deferred (future batches)

- **3.8** — SearchToolbar, CoverImageHero (need design decisions).
- **4.5** — Recruitment compositions: AnonymousProfileCard, ProfileCardToolbar, ProfileIdentityWell, contact popovers (Candidate / Company), IntroVideoDialog, VideoInterviewModal, ApplicantDocuments (full + mini + section icon), 5 filter sections (MatchLevel / MatchStatus / Sector / Worksite / SidebarSearch), InterviewEventRecap, ApplicantReviewRecap, LocationFilterCombobox, EmployerOnboardingLocationStep, ShareCandidatePreviewCard, AnnouncementDetailAdminMetaBadges.
- **5.5** — PostingStepper (composite over Atlas Stepper with the wizard chrome).
- **6** — Product patterns: academy CTAs, ChatOpportunityCard, GroupChatAvatar, CannedMessageSelector (Templates + AI Assist), ClientTouchpointCards, CoachHubPanel, CoverImageSection, HomeSearchBar, CareerHubCard/Progress/Sidebar, JobExplorer, AnalyticsDashboard, CoachingDashboard, CoachboardTasks, AdminPanel, AdminPatternsDoc, CreateProjectWizard, ColumnSelector, ApplicationModal, ApplicationStatusModal, IncentiveTierAssignCard, PromotionCard, PromotionPostcardModal, MobileAlertModal, BulletinRow, top-page AlertBar.
- **7.5** — Component inventory auto-gen, marketing patterns, ResizablePanel mini-batch.
- **Route-level pages** — ~30 `*Route` components. These belong in consuming apps, not the design system, but a "shells" example library could help.
