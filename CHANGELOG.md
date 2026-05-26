# Changelog

All notable changes to Atlas Design System are tracked here. Format
follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and
SemVer.

Anything in `contracts/` is a public surface — renaming a prop or
removing a variant is a breaking change.

## [Unreleased]

### Component library — 108 components across 18 categories

Built out the full surface in waves:

- **Tier 1 leaf** — Switch, Checkbox(+Group), Radio(+Group), Slider,
  Tooltip, Avatar(+Group), Tabs, Divider, Spinner, Skeleton, Progress,
  Alert, Link.
- **Tier 2 composites** — Modal, Drawer, Popover, Dropdown, Select,
  Autocomplete, Listbox, Accordion, Pagination, Breadcrumbs, Navbar,
  Calendar family (Calendar/RangeCalendar/DatePicker/DateRangePicker/
  DateInput/TimeInput), Table.
- **Wave 3** — Stepper, FileUpload, TagsInput, BottomSheet (Vaul),
  Toaster (Sonner), BottomNav, Sidebar, StatCard, EmptyState, and
  chart wrappers (BarChart/LineChart/AreaChart/DonutChart).
- **Wave 4** — Stack/HStack/VStack, Container, NotificationBadge,
  AlertModal, Banner, Toggle, Timeline, DescriptionList, StatusAvatar,
  Sparkline, BubbleChart, Carousel (Embla).
- **Wave 5** — ColorPicker, TreeView, SortableTable, DataGrid,
  VerticalTabs.
- **Wave 6 / 7** — pattern composites: ProfileCard, PricingCard,
  BlogPostCard, ErrorState, Hero, FeatureGrid, PricingTable, FAQ,
  Testimonials, Footer, NewsletterCTA, TeamGrid, AuthLayout,
  DashboardShell, SettingsLayout.
- **Wave 8** — branded primitives ported from
  `Xeekrsmainapp/src/components/heroui-branded/`: avatar variants
  (`AvatarToned`, `AvatarRing`, `AvatarSquare`, `AvatarHex`,
  `GroupAvatar`, `IdentityPill`, `AvatarStack`), `Menu`
  (+ `MenuItem`, `MenuSection`), and `Ripple`. `CardBody` synced to the
  May-5 branded change (`text-large` + `leading-relaxed` for WCAG body
  copy). The feature-specific posting-flow components
  (PostingStepper, EntryPathCard, TemplateCard, SkillTagInput,
  InlineAiAssist, QualityScorePanel, InternalNotesField,
  AiGeneratedBadge) were triaged out — per Atlas's "Never belongs"
  rules they stay in the job-postings feature.

### Infrastructure
- `vaul`, `sonner`, `recharts`, `embla-carousel-react` added as
  **optional** peer deps.
- `scripts/build-styles.mjs` — emits `dist/styles.css` (token-default
  `:root` block) so fresh apps can `import "@atlas/design-system/styles.css"`.
- `package.json` `./theme` export now points at `xeekrs-theme`.

### Reskinned to Xeekrs aesthetic

Atlas is now a faithful port of `Xeekrsmainapp/src/components/heroui-branded/`
patterns. Visual chains, prop names, and defaults match Xeekrs.

### Added
- `cnHero` shared utility — port of Xeekrs's `cn.ts` that teaches
  `tailwind-merge` about HeroUI's custom token names so wrapper
  overrides win.
- `atlasPresetTokensOnly` Tailwind preset — for apps like Xeekrs that
  already register `heroui({...})`. Avoids double-registration.
- `Textarea` component (paired with Input).
- `Card variant="hover-lift"` — Xeekrs's dashboard-tile pattern.
- `Badge` (renamed from Chip) with all HeroUI variants.
- `xeekrsPlugin` — HeroUI plugin pre-configured with Xeekrs brand.
  (Legacy alias `prelinePlugin` retained.)
- `docs/RADIX_TO_HEROUI.md` — full migration map for the Radix sweep
  Xeekrs is doing.
- `docs/INTEROP.md` — adoption guide and compat status.

### Changed
- **Tokens are now CSS-variable references**, not raw hex strings.
  Atlas reads from the consumer's `globals.css` at runtime; hex values
  are reference fallbacks for tooling only.
- **Brand defaults flipped from Preline to Xeekrs**:
  - Buttons default to `radius="full"` (pill).
  - Inputs default to `radius="full"` (pill).
  - `disableAnimation: true` is the default — flat design, no
    decorative motion.
  - Color palette references `--primary` (earth ink), `--accent`
    (lavender), `--destructive` (brand pink), etc.
- **Component prop surfaces realigned with HeroUI** — `variant` enums
  use HeroUI's terms (`solid | bordered | light | flat | faded |
  shadow | ghost`) instead of Preline-style (`primary | secondary |
  ghost | outline | danger | link`).
- Typography references CSS vars (`var(--font-family-heading)` etc.) —
  no hardcoded Inter fallback.
- Radius scale gained `2xl` (24px modals/drawers) and `5xl` (40px hero
  bands) per Xeekrs.
- Shadows tinted with earth-ink instead of pure black.
- `package.json` adds `clsx` and `tailwind-merge` dependencies.

### Removed
- Preline-flavored variant classes (`bg-blue-600 text-white …`) — now
  CSS-var-based (`bg-primary text-primary-foreground …`).
- Inter font default in HeroUI theme.

### Notes
- `Modal`, `Select`, `Datepicker`, `Stepper`, `FileUpload`, `Charts`,
  and other Preline patterns are still TODO. See
  `docs/components/INDEX.md` and `docs/RADIX_TO_HEROUI.md` for
  trackers.
