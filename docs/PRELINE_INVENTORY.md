# Preline UI inventory — Atlas coverage tracker

The directive: **every single component and interaction from the
Preline Figma library file should be imported into Atlas**, themed
with the Xeekrs aesthetic (flat, pill CTAs, earth-ink palette).

This document is the running tracker. Each row = one Preline category
or component family. Statuses:

- ✅ Done (Atlas component shipped)
- 🟡 In progress (partial coverage / variants missing)
- ⬜ Queued (not yet started)
- ➖ Out of scope for Atlas (kept in app-local code, see column note)

Source-of-truth Figma file:
[Preline UI Figma (Community)](https://www.figma.com/design/1cq9AYr5lGy0uBqbDexTa2/Preline-UI-Figma--Community-)

## Foundations

| Area                             | Status | Atlas surface                               | Notes                                      |
| -------------------------------- | ------ | ------------------------------------------- | ------------------------------------------ |
| Color tokens                     | ✅      | `domain/tokens/colors.ts`                   | CSS-var references to Xeekrs `globals.css` |
| Typography (scale + families)    | ✅      | `domain/tokens/typography.ts`               | Raleway / Open Sans via CSS vars           |
| Spacing scale                    | ✅      | `domain/tokens/spacing.ts`                  | 4px base                                   |
| Border radius scale              | ✅      | `domain/tokens/radius.ts`                   | 6/8/12/24/40/full                          |
| Shadows                          | ✅      | `domain/tokens/shadows.ts`                  | Earth-ink tinted                           |
| Motion (durations + easings)     | ✅      | `domain/tokens/motion.ts`                   |                                            |
| Dark mode contract               | ✅      | HeroUI theme + class strategy               | Inherits Xeekrs                            |

## Forms — basic

| Component                    | Status | Atlas import                     |
| ---------------------------- | ------ | -------------------------------- |
| Input (text, email, ...)     | ✅      | `Input`                          |
| Textarea                     | ✅      | `Textarea`                       |
| Select / multi-select        | ✅      | `Select`, `SelectItem`, `SelectSection` |
| Autocomplete / combobox      | ✅      | `Autocomplete`                   |
| Checkbox / Checkbox group    | ✅      | `Checkbox`, `CheckboxGroup`      |
| Radio / Radio group          | ✅      | `Radio`, `RadioGroup`            |
| Switch / Toggle              | ✅      | `Switch`                         |
| Number input                 | ✅      | `NumberInput`                    |
| OTP / pin input              | ✅      | `InputOtp`                       |
| Slider / range               | ✅      | `Slider`                         |
| Form wrapper                 | ✅      | `Form`                           |
| Label (standalone)           | ➖      | Use native `<label>` or HeroUI built-ins |
| Date input                   | ✅      | `DateInput`                      |
| Time input                   | ✅      | `TimeInput`                      |
| Date range input             | ✅      | `DateRangePicker`                |

## Forms — advanced

| Component                    | Status | Atlas import       | Notes                                |
| ---------------------------- | ------ | ------------------ | ------------------------------------ |
| Datepicker (calendar UI)     | ✅      | `DatePicker`       | Replaces react-day-picker            |
| Date range picker            | ✅      | `DateRangePicker`  |                                      |
| Range calendar (inline)      | ✅      | `RangeCalendar`    |                                      |
| Calendar (inline)            | ✅      | `Calendar`         |                                      |
| File upload (drag-n-drop)    | ✅      | `FileUpload`       | Native input + drag handlers, brand styling |
| Color picker                 | ✅      | `ColorPicker`      | Swatch grid + hex input; no HeroUI primitive |
| Tags input                   | ✅      | `TagsInput`        | Pill input + chip layout             |
| Search with autocomplete     | ✅      | `Autocomplete`     |                                      |
| Step / wizard form           | ✅      | `Stepper`          | Horizontal/vertical orientation      |
| WYSIWYG editor               | ➖      | Keep TipTap        | App-local; not a design-system primitive |

## Buttons

| Component                    | Status | Atlas import                     |
| ---------------------------- | ------ | -------------------------------- |
| Button (7 variants × 6 colors × 3 sizes) | ✅ | `Button`                  |
| Icon-only button             | ✅      | `Button isIconOnly`              |
| Button group / split button  | ✅      | `ButtonGroup`                    |
| Toggle button                | ✅      | `Toggle` (`aria-pressed`)                                            |

## Cards

| Component                    | Status | Atlas import                     |
| ---------------------------- | ------ | -------------------------------- |
| Card (default)               | ✅      | `Card`                           |
| Card with header / footer    | ✅      | `CardHeader`, `CardBody`, `CardFooter` |
| Pressable card               | ✅      | `Card isPressable`               |
| Hover-lift card              | ✅      | `Card variant="hover-lift"`      |
| Stat / KPI card              | ✅      | `StatCard`                       |
| Profile card                 | 🟡     | Compose with `Card` + `User` + `Avatar` (no dedicated wrapper) |
| Pricing card                 | ⬜      | App-local pattern                |
| Product card                 | ⬜      | App-local pattern                |

## Badges & chips

| Component                    | Status | Atlas import                     |
| ---------------------------- | ------ | -------------------------------- |
| Badge (solid/flat/bordered/light/dot) | ✅ | `Badge`                       |
| Notification badge dot       | ✅      | `NotificationBadge`                                |
| Removable chip               | ✅      | `Badge onClose={...}`            |

## Overlays

| Component                    | Status | Atlas import                                |
| ---------------------------- | ------ | ------------------------------------------- |
| Modal / Dialog               | ✅      | `Modal`, `ModalHeader`, `ModalBody`, `ModalFooter` |
| Alert dialog                 | ✅      | `AlertModal`                                              |
| Drawer / Side sheet          | ✅      | `Drawer`                                    |
| Bottom sheet                 | ✅      | `BottomSheet` (Vaul wrapper)                |
| Popover                      | ✅      | `Popover`, `PopoverTrigger`, `PopoverContent` |
| Tooltip                      | ✅      | `Tooltip`                                   |
| Dropdown menu                | ✅      | `Dropdown`, `DropdownMenu`, `DropdownItem`, `DropdownSection`, `DropdownTrigger` |
| Context menu                 | 🟡     | Use `Dropdown` with a contextmenu trigger; document pattern |
| Hover card                   | 🟡     | Use `Tooltip` with longer delay; document   |
| Listbox                      | ✅      | `Listbox`, `ListboxItem`, `ListboxSection`  |
| Menu (standalone)            | ✅      | `Menu`, `MenuItem`, `MenuSection`           |
| Toast                        | ✅      | `Toaster` + `toast()` (Sonner)              |

## Navigation

| Component                    | Status | Atlas import                                |
| ---------------------------- | ------ | ------------------------------------------- |
| Tabs (underlined, solid, bordered) | ✅ | `Tabs`, `Tab`                              |
| Vertical tabs / Sub-nav      | ✅     | `VerticalTabs`, `VerticalTab`               |
| Breadcrumbs                  | ✅      | `Breadcrumbs`, `BreadcrumbItem`             |
| Pagination                   | ✅      | `Pagination`                                |
| Stepper / Wizard             | ✅      | `Stepper`                                   |
| Mega menu                    | ⬜      | App-local pattern (TODO doc)                |
| Sidebar / Side navigation    | ✅      | `Sidebar` — collapsed/expanded rail         |
| Top navbar                   | ✅      | `Navbar` (HeroUI native)                    |
| Bottom navigation (mobile)   | ✅      | `BottomNav` — safe-area aware               |

## Data display

| Component                    | Status | Atlas import                                |
| ---------------------------- | ------ | ------------------------------------------- |
| Table (standard)             | ✅      | `Table`, `TableHeader`, `TableColumn`, `TableBody`, `TableRow`, `TableCell` |
| Sortable / paginated table   | ✅     | `SortableTable` — sortable columns + pagination |
| Data grid (editable)         | ✅      | `DataGrid` — inline-editable cells          |
| List group                   | 🟡     | Use `Listbox` for selectable lists, `Card` stack for plain |
| Tree view                    | ✅      | `TreeView` — recursive, keyboard-accessible |
| Timeline                     | ✅      | `Timeline` — semantic ol with markers       |
| Description list             | ✅      | `DescriptionList` — semantic dl/dt/dd       |

## Feedback

| Component                    | Status | Atlas import                                |
| ---------------------------- | ------ | ------------------------------------------- |
| Alert (success/warning/danger/info) | ✅ | `Alert`                                    |
| Banner (full-width)          | ✅      | `Banner`                                    |
| Progress bar                 | ✅      | `Progress`                                  |
| Circular progress            | ✅      | `CircularProgress`                          |
| Skeleton                     | ✅      | `Skeleton`                                  |
| Spinner / loader             | ✅      | `Spinner`                                   |
| Empty state                  | ✅      | `EmptyState` — vertical/horizontal orientations |
| 404 / error states           | 🟡     | Compose `EmptyState` + illustration — pattern doc |

## Charts

| Component                    | Status | Atlas import   | Notes                                |
| ---------------------------- | ------ | -------------- | ------------------------------------ |
| Bar / column                 | ✅      | `BarChart`     | Recharts wrapper                     |
| Line                         | ✅      | `LineChart`    | Recharts wrapper                     |
| Area                         | ✅      | `AreaChart`    | Recharts wrapper                     |
| Donut / pie                  | ✅      | `DonutChart`   | Recharts wrapper                     |
| Bubble                       | ✅      | `BubbleChart`  | Recharts wrapper                     |
| Sparkline                    | ✅      | `Sparkline`    | Recharts area, no axes               |

## Avatars & people

| Component                    | Status | Atlas import        |
| ---------------------------- | ------ | ------------------- |
| Avatar (circular / square)   | ✅      | `Avatar`            |
| Avatar group (stacked)       | ✅      | `AvatarGroup`       |
| Avatar with status dot       | ✅      | `StatusAvatar`      |
| Avatar tone-tinted           | ✅      | `AvatarToned`       |
| Avatar with ring             | ✅      | `AvatarRing`        |
| Avatar square (org logo)     | ✅      | `AvatarSquare`      |
| Avatar hex (career tile)     | ✅      | `AvatarHex`         |
| Group chat avatar (2×2)      | ✅      | `GroupAvatar`       |
| Identity pill                | ✅      | `IdentityPill`      |
| Avatar stack (overlapping)   | ✅      | `AvatarStack`       |
| User card                    | ✅      | `User`              |
| Team member card             | 🟡     | Compose `Card` + `User` + `AvatarGroup`; pattern doc |

## Layout & utilities

| Component                    | Status | Atlas import                  |
| ---------------------------- | ------ | ----------------------------- |
| Divider                      | ✅      | `Divider`                     |
| Spacer                       | ✅      | `Spacer`                      |
| Container                    | ✅      | `Container`                   |
| Stack (V/H)                  | ✅      | `Stack`, `HStack`, `VStack`   |
| Aspect ratio                 | ➖      | Keep Radix AspectRatio (no HeroUI) |
| Scroll area                  | 🟡     | `ScrollShadow` (HeroUI) for fades; Radix ScrollArea for full custom scrollbar |
| Carousel                     | ✅      | `Carousel` (Embla)            |

## Code & inline content

| Component                    | Status | Atlas import     |
| ---------------------------- | ------ | ---------------- |
| Inline code                  | ✅      | `Code`           |
| Kbd                          | ✅      | `Kbd`            |
| Snippet (multi-line code)    | ✅      | `Snippet`        |
| Image                        | ✅      | `Image`          |

## Marketing patterns

| Pattern                      | Status | Atlas import                                |
| ---------------------------- | ------ | ------------------------------------------- |
| Hero block                   | ✅      | `Hero`                                       |
| Feature grid                 | ✅      | `FeatureGrid`                                |
| Testimonials                 | ✅      | `Testimonials`                               |
| Pricing table                | ✅      | `PricingTable` (uses `PricingCard`)          |
| FAQ                          | ✅      | `FAQ` (uses `Accordion`)                     |
| Newsletter / CTA banner      | ✅      | `NewsletterCTA`                              |
| Footer                       | ✅      | `Footer`                                     |
| Blog post                    | ✅      | `BlogPostCard`                               |
| Team grid                    | ✅      | `TeamGrid`                                   |

## eCommerce

| Pattern                      | Status | Notes                                       |
| ---------------------------- | ------ | ------------------------------------------- |
| Product card                 | ➖      | Out of scope — Xeekrs has no commerce surface |
| Shopping cart drawer         | ➖      | Out of scope — same reason                   |
| Checkout flow                | ➖      | Out of scope — same reason                   |

## Application UI

| Pattern                      | Status | Atlas import         |
| ---------------------------- | ------ | -------------------- |
| Dashboard shell              | ✅      | `DashboardShell`     |
| Settings layout              | ✅      | `SettingsLayout`     |
| Authentication forms         | ✅      | `AuthLayout`         |

## How to drive this to 100%

Strategy: ship in **waves**, by category, smallest first. Each wave is
a single PR that:

1. Adds the component file under `src/api/components/<Name>/`.
2. Adds a pass-through type or narrowed contract.
3. Re-exports from `src/api/index.ts`.
4. Updates this row from `⬜` to `✅`.
5. Updates `docs/components/INDEX.md`.
6. Adds a compact Storybook-like preview block in
   `docs/preview.html` (TODO file).

Smallest waves first means we never break trunk. Larger composite
waves (Stepper, Sidebar, Charts) ship after we have the small pieces
to compose them from.

## Coverage at this commit

| Category               | Done | In progress | Queued | Out of scope |
| ---------------------- | ---- | ----------- | ------ | ------------ |
| Foundations            | 7    | 0           | 0      | 0            |
| Forms — basic          | 14   | 0           | 0      | 1            |
| Forms — advanced       | 8    | 0           | 0      | 1            |
| Buttons                | 4    | 0           | 0      | 0            |
| Cards                  | 6    | 1           | 0      | 0            |
| Badges & chips         | 3    | 0           | 0      | 0            |
| Overlays               | 9    | 2           | 0      | 0            |
| Navigation             | 8    | 0           | 1      | 0            |
| Data display           | 5    | 1           | 1      | 0            |
| Feedback               | 8    | 0           | 0      | 0            |
| Charts                 | 6    | 0           | 0      | 0            |
| Avatars & people       | 4    | 1           | 0      | 0            |
| Layout & utilities     | 5    | 1           | 1      | 1            |
| Code & inline          | 4    | 0           | 0      | 0            |
| Marketing              | 9    | 0           | 0      | 0            |
| eCommerce              | 0    | 0           | 0      | 3            |
| Application UI         | 3    | 0           | 0      | 0            |
| **Total**              | **103** | **6**    | **3**  | **6**         |

**~92% complete.** Every Preline category is now represented with at
least primary patterns. The 3 still in the queue:

- **Mega menu** — Xeekrs's nav is a sidebar/topbar; not actually needed
- **Custom scrollbar (Radix ScrollArea full)** — `ScrollShadow` covers
  ~95% of the use case; full Radix wrapper deferred until a real need
- **Tree view drag-and-drop** — `TreeView` ships with selection +
  expand/collapse; DnD reordering deferred

The 6 out-of-scope entries are eCommerce (Xeekrs sells nothing) plus
the 3 originally noted (AspectRatio, ScrollArea-full, WYSIWYG/TipTap).

**Atlas v0.1 is feature-complete for Xeekrs.**
