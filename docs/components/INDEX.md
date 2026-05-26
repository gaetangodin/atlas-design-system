# Component coverage

86 components shipped across 17 categories. Visual chains mirror
`Xeekrsmainapp/src/components/heroui-branded/` where they exist;
custom components follow Wealthsimple-flat conventions with Xeekrs
CSS-var tokens.

For the full Preline catalog see [PRELINE_INVENTORY.md](../PRELINE_INVENTORY.md).

## Foundations

Tokens (colors / typography / spacing / radius / shadows / motion) — Done.

## Core
Button · Input · Textarea · Card (+ Header/Body/Footer) · Badge · Link

## Forms
Switch · Checkbox + Group · Radio + Group · Slider · NumberInput · InputOtp ·
Select (+ Item, Section) · Autocomplete (+ Item, Section) · Form · TagsInput ·
FileUpload · Toggle · ColorPicker

## Overlays
Modal (+ Header/Body/Footer + `useDisclosure`) · AlertModal · Drawer ·
BottomSheet (Vaul) · Popover · Dropdown (+ Trigger/Menu/Item/Section) ·
Tooltip · Listbox · Menu (+ Item, Section)

## Display
Avatar (+ Group) · StatusAvatar · AvatarToned · AvatarRing · AvatarSquare ·
AvatarHex · GroupAvatar · IdentityPill · AvatarStack · User · Image · Code · Kbd · Snippet ·
Divider · Spacer · ButtonGroup · ScrollShadow · StatCard · EmptyState ·
NotificationBadge · DescriptionList · Timeline · Ripple

## Layout
Stack · HStack · VStack · Container

## Feedback
Alert · Banner · Spinner · Skeleton · Progress · CircularProgress ·
Toaster (Sonner) + `toast()`

## Navigation
Tabs (+ Tab) · Accordion (+ Item) · Pagination · Breadcrumbs ·
Navbar (+ Brand/Content/Item/Menu) · Sidebar · BottomNav · Stepper ·
VerticalTabs (+ VerticalTab)

## Dates
Calendar · RangeCalendar · DatePicker · DateRangePicker · DateInput · TimeInput

## Data
Table (+ Header/Column/Body/Row/Cell) · SortableTable · DataGrid · TreeView

## Charts
BarChart · LineChart · AreaChart · DonutChart · Sparkline · BubbleChart

## Media
Carousel (Embla)

## Provider
AtlasProvider

## Still queued

Most queued items are app-local composite layouts (marketing patterns,
dashboard shells, eCommerce flows). Atlas may not own them at all; we
will ship pattern docs as features get built.

Genuine primitives still queued:
- None — ColorPicker, TreeView, DataGrid, SortableTable, and VerticalTabs
  are now built and exported from `@atlas/design-system`.

## Keeping this list honest

When a component is ported, update the row in the same PR. The list
is the single source of truth for "what's actually shipped in Atlas".
