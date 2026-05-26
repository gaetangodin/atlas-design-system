# Radix → HeroUI migration map

Xeekrs currently uses ~25 Radix packages **plus** HeroUI **plus** Vaul,
cmdk, Sonner, and TipTap. The directive: collapse Radix usage onto
HeroUI where there's a clean equivalent, leave Radix in place where
HeroUI doesn't cover the surface, and merge duplicates into Atlas as
the canonical wrapper.

This doc is the authoritative migration table. Update it when a
component graduates from Radix to HeroUI/Atlas, or when a row is ruled
out as "stays Radix forever."

## Decision matrix

| Radix package                  | HeroUI equivalent            | Atlas wrapper      | Status   | Notes |
| ------------------------------ | ---------------------------- | ------------------ | -------- | ----- |
| `@radix-ui/react-accordion`    | `Accordion`, `AccordionItem` | `<Accordion>`      | Migrate  | HeroUI's API is the same shape. |
| `@radix-ui/react-alert-dialog` | `Modal` + `role="alertdialog"` | `<AlertModal>`   | Migrate  | Wrap HeroUI Modal with the role and a destructive default action. |
| `@radix-ui/react-aspect-ratio` | — none                       | `<AspectRatio>`    | Keep Radix | Pure CSS primitive; not worth porting. Atlas exposes Radix passthrough. |
| `@radix-ui/react-avatar`       | `Avatar`, `AvatarGroup`      | `<Avatar>`         | Migrate  | HeroUI handles fallback initials + image swap. |
| `@radix-ui/react-checkbox`     | `Checkbox`, `CheckboxGroup`  | `<Checkbox>`       | Migrate  | |
| `@radix-ui/react-collapsible`  | `Accordion` (single, allowZero) | `<Disclosure>`  | Migrate  | Use a single-item Accordion. |
| `@radix-ui/react-context-menu` | `Dropdown` (`trigger="contextMenu"`) | `<ContextMenu>` | Migrate | HeroUI Dropdown supports contextmenu trigger. |
| `@radix-ui/react-dialog`       | `Modal`, `ModalContent`, `ModalBody`, `ModalFooter` | `<Modal>` | Migrate | The headline migration. Lots of dialogs to sweep. |
| `@radix-ui/react-dropdown-menu`| `Dropdown`                   | `<Dropdown>`       | Migrate  | |
| `@radix-ui/react-hover-card`   | `Tooltip` (with delay 300ms+) | `<HoverCard>`     | Migrate  | Style the tooltip slightly larger; HeroUI has no dedicated HoverCard. |
| `@radix-ui/react-label`        | native `<label>`             | n/a                | Drop     | HeroUI inputs handle their own labels. Use native `<label>` for non-HeroUI fields. |
| `@radix-ui/react-menubar`      | — none                       | n/a                | Keep Radix | HeroUI has no menubar. Used in admin tools only. |
| `@radix-ui/react-navigation-menu` | — none (HeroUI Navbar is different) | n/a            | Keep Radix | Mega-menu pattern; rebuild only if needed for new features. |
| `@radix-ui/react-popover`      | `Popover`, `PopoverTrigger`, `PopoverContent` | `<Popover>` | Migrate  | |
| `@radix-ui/react-progress`     | `Progress`                   | `<Progress>`       | Migrate  | |
| `@radix-ui/react-radio-group`  | `RadioGroup`, `Radio`        | `<RadioGroup>`     | Migrate  | |
| `@radix-ui/react-scroll-area`  | — none                       | n/a                | Keep Radix | Custom scrollbars; HeroUI has no equivalent. |
| `@radix-ui/react-select`       | `Select`                     | `<Select>`         | Migrate  | Big sweep; lots of usages. |
| `@radix-ui/react-separator`    | `Divider`                    | `<Divider>`        | Migrate  | Trivial. |
| `@radix-ui/react-slider`       | `Slider`                     | `<Slider>`         | Migrate  | |
| `@radix-ui/react-slot`         | n/a (utility)                | n/a                | Keep     | Used by `cva`; not user-facing. |
| `@radix-ui/react-switch`       | `Switch`                     | `<Switch>`         | Migrate  | |
| `@radix-ui/react-tabs`         | `Tabs`, `Tab`                | `<Tabs>`           | Migrate  | HeroUI Tabs supports underlined / pill / bordered. |
| `@radix-ui/react-toggle`       | `Switch` w/ icon, or `Button variant="bordered"` aria-pressed | `<Toggle>` | Case-by-case | Two distinct uses in the app. |
| `@radix-ui/react-toggle-group` | — none                       | `<ToggleGroup>`    | Keep Radix | HeroUI has no toggle-group. |
| `@radix-ui/react-tooltip`      | `Tooltip`                    | `<Tooltip>`        | Migrate  | |

## Non-Radix duplicates worth merging

| Library              | Atlas decision                                                                  |
| -------------------- | ------------------------------------------------------------------------------- |
| `vaul`               | **Keep.** Best-in-class mobile bottom-sheets. Atlas exposes `<BottomSheet>` as a Vaul wrapper. |
| `sonner`             | **Keep.** No HeroUI equivalent. Atlas exposes `<Toaster>` + `toast()` re-exports. |
| `cmdk`               | **Keep for now.** HeroUI `Autocomplete` is close but cmdk's command-palette UX is not 1:1. Reconsider when HeroUI ships a CommandMenu. |
| `embla-carousel`     | **Keep.** HeroUI has no carousel. |
| `react-day-picker`   | **Migrate.** HeroUI ships `Calendar` + `DatePicker` + `RangeCalendar`. Sweep day-picker usages. |
| `tiptap`             | **Keep.** Editor primitive, out of HeroUI scope. |
| `recharts`           | **Keep.** Charting, out of HeroUI scope. |

## Phasing

1. **Phase A — leaf migrations.** No-risk replacements where the API is
   essentially identical: `Separator`, `Progress`, `Switch`, `Tabs`,
   `Tooltip`, `Avatar`. Migrate file-by-file, no codemod needed.
2. **Phase B — Modal sweep.** Single biggest payoff. All
   `@radix-ui/react-dialog` and `@radix-ui/react-alert-dialog` usages
   become Atlas `<Modal>`. Codemod helps; a11y review required.
3. **Phase C — Select sweep.** Bigger surface area + more visual
   variants in the wild. Stage behind a feature flag in one feature
   first.
4. **Phase D — long-tail.** ContextMenu, Popover, RadioGroup, Slider,
   Checkbox.
5. **Phase E — leave Radix-only.** ScrollArea, Menubar, NavigationMenu,
   ToggleGroup, AspectRatio, Slot. These remain Radix unless HeroUI
   adds equivalents.

## Atlas obligations during the migration

- Every "Migrate" row gets a corresponding wrapper in
  `src/api/components/<Name>/<Name>.tsx`. Wrappers mirror the
  `heroui-branded/` style: `disableAnimation` defaults to true, brand
  radius defaults to pill where the visual demands it, classes use
  Xeekrs CSS-var Tailwind tokens.
- Every wrapper carries a doc page in `docs/components/<Name>.md`
  showing the Radix-equivalent code side-by-side with the Atlas
  version, so the migrator knows what changed.
- Tracker updates land in `docs/components/INDEX.md` in the same PR.

## When to NOT migrate

- The component is in deeply legacy code that's about to be deleted —
  delete instead of migrate.
- The Radix surface uses a feature HeroUI doesn't expose (e.g.
  `forceMount` portal control). Document the gap and decide whether
  to (a) accept the regression, (b) wait for HeroUI, or (c) keep Radix.
