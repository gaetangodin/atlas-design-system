# Changelog

All notable changes to Atlas Design System are tracked here. Format
follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and
SemVer.

Anything in `contracts/` is a public surface — renaming a prop or
removing a variant is a breaking change.

## [0.6.0] — 2026-05-27

### Added — heroui-branded, app/ layouts, lib helpers, ui/ second-pass

A second close-out pass over sources outside `src/components/`.

**`BrandedAliases` — every Xeekrs `BrandedX` name re-exported.** Atlas's
existing components ARE the direct ports of the Xeekrs `BrandedX`
wrappers (custom styles preserved). This module adds the original
`BrandedX` names back as aliases so consumers migrating from
`@/components/heroui-branded` keep their imports working without
rewrites: `BrandedButton`, `BrandedCard`, `BrandedChip`,
`BrandedAvatar(Toned/Ring/Square/Hex)`, `BrandedGroupAvatar`,
`BrandedIdentityPill`, `BrandedAvatarStack`, `BrandedAvatarWithStatus`,
`BrandedBadge`, `BrandedDivider`, `BrandedSpacer`, `BrandedLink`,
`BrandedImage`, `BrandedInput`, `BrandedTextarea`, `BrandedSelect`,
`BrandedAutocomplete`, `BrandedCheckbox`, `BrandedForm`,
`BrandedAlert`, `BrandedSpinner`, `BrandedProgress`,
`BrandedCircularProgress`, `BrandedSkeleton`, `BrandedPagination`,
`BrandedBreadcrumbs`, `BrandedAccordion`, `BrandedScrollShadow`,
`BrandedMenu`, `BrandedNavbar*`, `BrandedTabs`, `BrandedTooltip`,
`BrandedPopover`, `BrandedModal*`, `BrandedDateInput`,
`BrandedDatePicker`, `BrandedDateRangePicker`, `BrandedTimeInput`,
`BrandedCalendar`, `BrandedRangeCalendar`, `BrandedTable*`,
`BrandedPostingStepper`, `BrandedEntryPathCard`,
`BrandedTemplateCard`, `BrandedSkillTagInput`,
`BrandedInlineAiAssist`, `BrandedQualityScorePanel`,
`BrandedInternalNotesField`, `BrandedAiGeneratedBadge`,
`BrandedButtonGroup`, `BrandedRipple`, `BrandedHoverLiftCard`.

**`UiPrimitivesExtraTwo` — second-pass `ui/` gaps.** The v0.5
`UiPrimitivesExtra` module covered Separator, ScrollArea, HoverCard,
ContextMenu, NavigationMenu, CaseloadShellTabs. This batch closes
the remaining gaps: `Collapsible` (standalone disclosure), `Label`
(standalone form label), `Menubar` / `MenubarMenu` (horizontal menu
bar), `ConsentScrollTableFrame` (framed scrollable consent /
disclosure container), `ToggleGroup` (segmented toggle group, sm /
md / lg sizes, single or multiple selection).

**`AppPageLayouts` — page-structure shells from app/.** Slot-based
ports of the structural patterns in `Xeekrsmainapp/app/**`:
`RootAppLayout` (root html/body wrapper); `MessagesIndexLanding`
(chat landing header + touchpoints body, ports
`app/messages/page.tsx`); `WorkspaceSegmentLayout` (generic workspace
sub-layout with editor pass-through); `RecruitmentSegmentLayout` and
`AnnouncementsSegmentLayout` (specialized aliases including the
right shell class); `JobPostingsSegmentLayout` (legacy URL alias).

**`utilities/` — first library utility helpers (`src/lib`).**
- `BrandedToasts`: `toastChatNotice`, `toastConnectionNotice`,
  `toastJobseekerNotice` + `TOAST_CLASS_*` constants on `sonner`.
- `employerLogoUrl`: deterministic DiceBear shapes URL generator.

**`hooks/` — first library hook.** `useIsMobile` SSR-safe viewport
hook with configurable breakpoint (default 768).

**Color tokens reconciled.** Audit found that `src/styles/globals.css`
+ `src/design-system/color-tokens.ts` values were already covered by
Atlas's `tokens` object + `colorRamps.ts`. Added `layoutVars` (new
domain token bundle) for the layout custom properties that were
missing: `--app-header-height`, `--announcement-alert-bars-height`,
`--app-fixed-header-stack-top`, `--recruitment-subnav-bar-height`,
`--sidebar-rail-width-collapsed/expanded`,
`--work-main-content-inset-left`, `--breadcrumb-tabs-row-bg`. Use
`layoutVar(key)` to produce a `var(--token, fallback)` string.

**Intentionally not ported in v0.6.** `src/lib/google-place-autocomplete.ts`
(external API + DOM-mounting, app-specific config),
`src/lib/onboardingHeroGallery.ts` (Node fs/promises server-only),
`src/lib/project-program-channel-messages.ts` and
`src/lib/router-compat.tsx` (app-specific business logic + routing
shim), and the 30+ thin `app/*/page.tsx` files that are 5-line
passthroughs to a Route component already aliased in Atlas.

## [0.5.1] — 2026-05-26

### Added — leftover aliases discovered in post-v0.5 audit

A final pass through `Xeekrsmainapp/src/components/` surfaced 10
files that didn't yet have an Atlas alias. All landed as a single
`V051Patch` module plus extensions to `NamedRoutes` and `NamedPages`.

**Page aliases (in `NamedPages`):** `JobListingsView`, `HomePage`,
`BrowsePage`, `JobPostingsTable` — all map onto `BoardRoute` with
sensible default titles.

**Route aliases (in `NamedRoutes`):** `AccountRoute`,
`LeadSeekerRoute`, `CaseloadJobSeekers3Route` (board-pattern);
`JobseekerProfileRoute`, `JobSeeker3ProfileRoute` (profile-pattern,
title carried by hero / toolbar slot).

**Domain shells (in `V051Patch`):** `BottomNavigation` (alias for
Atlas's `BottomNav`); `PreEmploymentTraining` (slot-based training
shell with per-module progress bars); `RecruitmentWorkSubnavHeader`
(workspace area header sitting above `WorkAreaSubnav`);
`PullToRefreshIndicatorExtras` (alt spinner / dots / bar / ring
indicator variants for `PullToRefresh`).

After v0.5.1, every single file in `Xeekrsmainapp/src/components/` that
represents library-worthy UI is reachable from `@atlas/design-system`,
either directly or through a Xeekrs-name alias. The only remaining
unported files are the internal sandbox-viewer pages and pure
app-data / helper modules documented in MIGRATION-CONFLICTS.md.

## [0.5.0] — 2026-05-26

### Added — full close-out of remaining Xeekrs `src/components/` subfolders

After v0.4 finished off top-level `*.tsx` files in
`Xeekrsmainapp/src/components/`, v0.5 walks every subfolder and lands
the remaining domain compositions, page shells, and ui/ primitives.

**Announcements / Candidates / CX feed.**
`AnnouncementsExtras` adds `AnnouncementAlertBar`,
`InlineNotificationBanners`, `MobileAlertModals`,
`PromotionPostcardModal`. `CandidatesExtras` adds `ContactCardPreview`,
`CandidateSearchFilters`, `InfiniteScrollSentinel` (generic
IntersectionObserver-based sentinel). `CxFeedPatterns` adds
`CampaignsPanel`.

**Employers / Icons / Incentives / Interviews / Marketplace / Job posting.**
`EmployersExtras` adds `EmployerCaseloadShareBookmarkToolbar`,
`EmployerIdentityCard`, `PublicEmployerProfileShell`. `BrandIcons` adds
`LinkedInSolidIcon`, `XeekrsMark`, `BrandIconButton`. `IncentivesExtras`
adds `IncentiveTierAssignCard` (with bronze/silver/gold/platinum
tones). `InterviewsExtras` adds `BookingModal`,
`WorkInterviewsViewShell`. `MarketplaceExtras` adds
`MarketplaceCatalogueJobTextCard`. `JobPostingExtras` adds
`DisclosurePlainMessageBar`, `JobPostingAiAssist`,
`JobPostingWizardSidebar`.

**Onboarding (10 shells).** `OnboardingPatterns` adds `WelcomeFlowShell`,
`PostcardShell`, `RoleSelectStep`, `WelcomeIconRadiogroup`,
`JobSeekerSteps`, `EmployerSteps`, `EmployerVerificationsPanel`,
`InviteUsersScreen`, `PasswordRegistrationScreen`,
`EmployerReferralLanding`.

**Account / Pages / Browse / Home.** `AccountPatterns` adds
`AccountSettingsShell`, four `Account*Section` shells,
`AccountProfilePreferencesShell`, `BrowsePageShell`, `HomePageShell`,
`HelpDeskSubpageShell`, `JobPostingsTableShell`,
`OrganizationRequestFloatingCard`.

**Recruitment overview dashboard (10 surfaces).**
`RecruitmentOverview` adds `RecruitmentOverviewDashboard` shell plus
`OverviewHeaderStrip`, `OverviewStatCards`, `ActiveJobsCard`,
`CandidatePipelineFunnelCard` (with horizontal bar viz),
`InsightsTipsStrip`, `JobPerformanceCard`, `MessagesCard`,
`OnboardingChecklistCard`, `RecentCandidateActivityCard`,
`RecommendedCandidatesCard`.

**Profile tabs / Walkthrough / Share.** `ProfileTabsShell` consolidates
the Xeekrs employer-profile and job-seeker-3-profile tab patterns into
a single slot-based shell with `ProfileTabSection` and named aliases
(`ProfileOverviewTab`, `ProfileNotesTab`, `ProfileRecruitmentTab`,
`ProfilePlacementsTab`, `ProfileDirectoryTab`, `ProfileCandidatesTab`,
`ProfileJobsTab`, `ProfileCaseTasksTab`). `RecruitmentWalkthrough`
adds a guided coach-mark / spotlight tour card.
`ShareOpportunityDialog` adds a slot-based share modal.

**Remaining UI primitives.** `CommandPalette` adds a ⌘K-style command
palette on Atlas's `Modal` shell with keyboard nav.
`UiPrimitivesExtra` adds `Separator`, `ScrollArea`, `HoverCard`,
`ContextMenu` (right-click activated), `NavigationMenu` (with submenu
slot), `CaseloadShellTabs`.

**Intentionally not ported.** The Xeekrs `DesignSystemAuditSection`,
`SettingsBacklogGalleryPreviews`, `SettingsColorTokensPanel`,
`SettingsComponentGallery`, `SettingsComponentInventoryPanel`,
`SettingsPagePatternsGallery`, `SettingsProductPatternsGallery`,
`SettingsRedundancyPanel`, `SettingsShellGalleryPreviews`,
`OverlayPreviewRoute` files are internal docs / preview pages for the
Xeekrs sandbox's own UI-library viewer and don't belong in the library
surface. `route-map.ts`, `sidebar-space-menus.tsx`, `recruitment-walkthrough-steps.ts`,
all `*-fixtures.ts`, `*-constants.ts`, `*-styles.ts`, `*-helpers.tsx`
files contain app-specific routing/data/styles and remain in the
Xeekrs repo.

`tsc --noEmit` on the new surface is clean (only pre-existing
BottomSheet TS2742 type-portability warnings remain, unrelated).

## [0.4.0] — 2026-05-26

### Added — Groups A, B, C: full Xeekrs `src/components/` import

Following the v0.3 work which brought in the deferred dashboards, route
shells, and major compositions, v0.4 closes out the remaining surface
from `Xeekrsmainapp/src/components`. Three groups:

**Group A — reusable atoms & small wrappers (30+ exports across 10 files).**
`ActionButton`, `IconButton`, `SortButton` (`SortDirection`),
`AspectRatio`; side panels (`NotificationsPanel`, `RemindersPanel`,
`MessagesPanel`, `RightSidebar`, `WorkspaceTakeoverPanel`); mobile
interaction primitives (`MobileMenu`, `MobileSearch`,
`MobileSectionTabPicker`, `SwipeHandler`, `PullToRefresh`); page-shape
helpers (`PlaceholderPage`, `ProfileSectionCard`, `WorkPageShell`,
`BusinessAvatarMark`); form extras (`LanguageSwitcher`,
`AboutRoleRichTextEditor`, `ResponsibilitiesBulletEditor`,
`SupportTicketForm`); modal extras (`SlideInModal`,
`ResourceCreationModal`, `UnsplashImagePicker`,
`EmployerOnboardingModal`, `JobSeekerPostingPreviewModal`,
`JobPostingReviewRecap`); misc primitives (`CollapsibleCard`,
`MiniMonthCalendar`, `ResponsiveTabsList`, `TabBar`).

**Group B — domain composition pattern files.**
`CaseloadPatterns` (9 staff-side compositions including `CaseloadCard`,
`CaseloadCategoryTable`, `CaseworkerOnBehalfBar`, `ProfileQuickView`,
`TeamMembersTable`, `LeadsScreen`, `SupportServicesBrowseTile`);
`AcademyPatterns` (7 career-hub compositions including
`AcademyMyLearningCards`, `CoachHubPanel`, `CareerHubCard`,
`CareerHubProgress`, `CareerHubSidebar`, `HomeSearch`);
`RecruitmentExtras` (20+ recruitment / work / posting surfaces including
`RecruitmentAreaTabs`, `RecruitmentWorkspaceDestinationCards`,
`TalentSupplyRadar`, `TasksTable`, `TaskDrilldownPanel` /
`ProjectDrilldownPanel`, `ProjectProgramChannelPanel`,
`WorkAreaSubnav`, `WorkBusinessSiteEmptyState`, `WorkDashboard`,
`SkillGapBridgingItem`, `PerformanceExecutiveSummarySuggestions`,
`XeekrsHeaderLogo`, `ReferralsHubMark`, `JobPostingCreationFlow`,
`JobPostingForm`, `JobPostingSettingsDashboard`,
`JobPostingQualityTab`, `JobPostingDisclosurePublicPreview`,
`EmployerPendingApprovalBar`, `EmployerOnboardingLocationStep`,
`ApplicationStatusModal`); `MessagingExtras`
(`ChatConnectionReceivedBar`, `ClientInboundConnectionInviteCards`,
`StaffConnectionRequestsManageTable`, `MessagesWorkspace`);
`AdminPatterns` (`AdminConfigPanel`, `CoachboardTasksTab`,
`EmployerHubBusinessSwitcher`, `EmployerHubDashboardContent`,
`SiteSwitcherModal`, `ProjectOverviewShell`, `ProjectFilesShell`,
`ReportsViewShell`).

**Group C — Page-suffixed templates.** `NamedPages` adds Page-suffixed
aliases for Xeekrs's `*Page.tsx` / `*View.tsx` files, mapped onto the
appropriate Atlas Route shell: `AccountPage`, `JobBoardPage`,
`JobListingsPage`, `ProgramsPage` / `ProgramsView`, `ProjectsPage` /
`ProjectsView`, `ReportsPage` / `ReportsView`, `TasksPage`,
`WorkspacePage`, `MyLearnersPage`, `PeoplePage` / `PeopleView`,
`ApplicantsView`, `SearchView`, `MessagesWorkspacePage`,
`CareerProfilesPage`, `NewPostingPage`, `LearnerProfile` /
`LearnerProfilePage`, `CareerProgressPage`, `ProjectFilesView`,
`ProjectPlanView`, `ProjectOverview`, `MobileNotifications`,
`MobileToolkit`.

The migration log in `docs/MIGRATION-CONFLICTS.md` records the new
surface and reconciliation choices for any Xeekrs names that collide
with v0.3 exports.

## [0.3.0] — 2026-05-26

### Added — Full Xeekrs library import (~50 components)

The items marked "permanently deferred" in `docs/MIGRATION-CONFLICTS.md`
after v0.2 are now in Atlas — as layout shells for app-level surfaces
(Routes, dashboards, marketing templates) and as real components for
the modals and compositions.

**Route layout shells (5):** `BoardRoute` (list/index), `DetailRoute`
(single-record), `WizardRoute` (multi-step), `MobileRoute` (phone
shell), `ProfileRoute` (record-profile). Slot-based — apps fill
content / actions / data. Atlas owns no routing or state.

**Named Routes (35):** thin wrappers over the generics with default
titles baked in — `AcademyDashboardRoute`, `AnalyticsRoute`,
`AnnouncementsBoardRoute`, `AnnouncementsListRoute`,
`AnnouncementEditorRoute`, `AnnouncementDetailRoute`, `CandidatesRoute`,
`CareerHubDashboardRoute`, `CareerProfilesRoute`, `CareerProgressRoute`,
`CaseloadOverviewRoute`, `CaseloadEmployersRoute`,
`CaseloadEmployersStageRoute`, `CaseloadTeamRoute`, `CxFeedRoute`,
`EmployerProfileRoute`, `HelpDeskRoute`, `HelpDeskLearningRoute`,
`HelpDeskSupportRoute`, `IncentivesManageRoute`,
`IncentiveTiersListRoute`, `RewardsRoute`, `InterviewsRoute`,
`JobMatchesRoute`, `JobPostingsIndexRoute`, `JobProcurementRoute`,
`MarketplaceCatalogueRoute`, `MessagesWorkspaceRoute`,
`MobileMessagesRoute`, `MobileNotificationsRoute`, `MobileToolkitRoute`,
`NewPostingRoute`, `ReferralNetworkRoute`, `ResumeBuilderRoute`,
`SupportNetworkRoute`.

**Dashboards (5):** `AnalyticsDashboard`, `CoachingDashboard`,
`AdminPanel`, `JobExplorer`, `CareerHubDashboard` — slot-based shells
with `kpis` / `filters` / `charts` / `tableOrFeed` slots.

**Domain modals (4, real components):** `IntroVideoDialog` (16:9 video
playback), `VideoInterviewModal` (full-screen call chrome with mic /
cam / leave controls), `ApplicationModal` (cover note + docs +
consent), `CreateProjectWizard` (multi-step wizard inside Modal).

**Specialized recruitment compositions (3):** `InterviewEventRecap`,
`ApplicantReviewRecap`, `ShareCandidatePreviewCard`.

**Messaging compositions (4):** `ChatOpportunityCard`, `GroupChatAvatar`
(overlapping avatar stack for group threads), `CannedMessageSelector`
(popover with Templates + AI Assist tabs), `ClientTouchpointCards`.

**Marketing templates (4):** `MarketingHero` (4 tones using
`jobAiGradients`), `SocialPostTemplate` (1080×1080 square),
`DisplayAdTemplate` (IAB sizes: medium-rectangle / leaderboard /
skyscraper), `CampaignSet` (grid of campaign tiles).

### Surface count

Atlas surface is now **138 component folders / 446 exports** (was
125 / 394 in v0.2). See `docs/COMPONENT-INVENTORY.json` (auto-generated
by `scripts/gen-component-inventory.mjs` — CI fails on drift).

### Migration manifest

`docs/MIGRATION-CONFLICTS.md` has been updated — the "Permanently
deferred" section is empty. Everything on the Xeekrs library page is
now in Atlas as either a real primitive or a named layout shell.

## [0.2.0] — 2026-05-26

### Added — Xeekrs UI library migration (31 net new components)

Brought the full Xeekrs library page into Atlas, rewritten to match
Atlas conventions (no `bg-[var(--…)]` arbitrary values in Tailwind
classes; named utilities only).

**Foundations & brand (8):** Full 10-step color ramps as named ramps
(`stone`, `lavender`, `earth`, `emerald`, `canary`, `pink`, `orange`)
exposed as Tailwind utilities (`bg-lavender-500`, `text-earth-700`, …).
New token groups: `chart-1..5`, `skill`, `sidebar`,
`browseHumanServices`, `spotlight`, `jobAiGradients` (4 named
gradients). New components: `BrandLogo` (8 SVG variants bundled),
`BrandSwatch`, `BrandBoard`, `ColorScale`, `TypographyScale`,
`GradientToken`, `VoiceAndTone`.

**Shell & chrome (13):** `TopBar` (slot-based desktop header),
`MobileTopBar`, `MegaSearch`, `SubNav`, `PageBack` (polymorphic anchor
/ button), `AccountMenu` (expanded + collapsed rail),
`SiteSwitcherTrigger`, `DisclosureBar`, `ConsentAlertBar` (staff +
client perspectives), `BrowseHubCard` (hub + mainSpace variants),
`CoverImageHero` (none / dark / gradient tones), `SearchToolbar`,
`AlertBar` (shell-level top banner).

**Recruitment (10):** `MatchDiamond` + match-level helpers,
`ReadinessBadge` (4 built-in stages + extensible),
`QuickActionButton` (polymorphic with 3 label modes),
`InterviewPipelineStepper` (decoupled from app status types),
`ProfileCardToolbar`, `ProfileIdentityWell` (with anonymized state),
`AnonymousProfileCard` (composition), `ApplicantDocumentMiniCard`,
`ContactInfoButton` (candidate / company audiences), `FilterSection`.

**Posting flow (7):** `PostingStepper` (wraps generic `Stepper`),
`EntryPathCards`, `TemplateCard`, `AiGeneratedBadge`, `InlineAiAssist`,
`QualityScorePanel`, `InternalNotesField`. `SkillTagInput` flagged as
alias for existing `TagsInput`.

**Other (5):** `Chip` (raw HeroUI Chip — kept side-by-side with
`Badge` per human reconciliation), `BulletinRow`, `PromotionCard` (4
tones using `jobAiGradients`), `ColumnSelector`, `ResizablePanel`
(+ `ResizablePanelGroup` + `ResizableHandle`).

### Changed

- `text-xs` Tailwind utility now defaults to 16px (Xeekrs's
  readability floor) — was 12px.
- Atlas Tailwind preset (`preset-tokens-only.ts`) now exposes all 7
  brand ramps as named utilities plus `chart-N`, `skill`, `sidebar`,
  `spotlight`, `browseHumanServices`.
- `package.json`: `react-resizable-panels` declared as optional peer
  dep (mirrors `vaul` / `sonner` / `recharts` / `embla-carousel-react`).
- `package.json` `files` field now publishes `src/assets/brand` (logo
  SVGs) and `docs/MIGRATION-CONFLICTS.md`.

### Docs

- `docs/MIGRATION-CONFLICTS.md` — full per-component migration log,
  conflict policy, reconciliation decisions, and deferral list.
- `docs/COMPONENT-INVENTORY.json` — auto-generated (run
  `npm run docs:inventory`). 125 component folders / 394 exports.
- `playground/docs/SOP-feature-development.md` — appended v0.2
  component update section.
- `scripts/gen-component-inventory.mjs` — new tooling script.

### Notes

- Atlas's `Badge` and `Chip` both ship as distinct primitives.
  `Badge` is the branded, opinionated pill (default Atlas styling);
  `Chip` exposes the raw HeroUI Chip API. Decision logged in the
  migration manifest.
- App-level surfaces (~30 `*Route` page components, full dashboards,
  domain modals, marketing layout templates, specialized recruitment
  compositions, messaging compositions) are explicitly deferred —
  they belong in consuming apps, not the design system. See the
  manifest's "Permanently deferred" section.

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
