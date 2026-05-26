# Component: BottomNav

## Description
Mobile bottom navigation bar. Custom — `<nav>` + `<button>` rows, safe-
area aware (`pb-[env(safe-area-inset-bottom)]`), with badge support and
a foreground underline marker for the active tab.

## Exports

- `BottomNav`

## Import

```tsx
import { BottomNav } from "@atlas/design-system";
```

## Props

| Prop      | Type                          | Description |
| --------- | ----------------------------- | ----------- |
| `items`   | `BottomNavItem[]`             | Up to 5 visible items. |
| `activeId`| `string`                      | Active tab id. |
| `onSelect`| `(id: string) => void`        | Fires on tap. |

### `BottomNavItem`

| Field   | Type           | Description |
| ------- | -------------- | ----------- |
| `id`    | `string`       | Stable key. |
| `label` | `string`       | Always-visible text under the icon. |
| `icon`  | `ReactNode`    | Glyph above the label. |
| `badge` | `ReactNode`    | Optional pink notification badge. |

## Accessibility

- `<nav aria-label="Primary">` with `<button aria-current="page">`
  on the selected tab.
- Badges combine with the label so screen readers announce the count
  in context.

## Examples

```tsx
<BottomNav
  activeId="home"
  onSelect={setTab}
  items={[
    { id: "home",      label: "Home",      icon: <Home /> },
    { id: "referrals", label: "Referrals", icon: <Users /> },
    { id: "inbox",     label: "Inbox",     icon: <MessageSquare />, badge: "4" },
    { id: "activity",  label: "Activity",  icon: <Activity /> },
  ]}
/>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Use 3–5 destinations max. | Cram 7 tabs in — they get cramped under 360px. |
| Pair with `BottomSheet` for in-page actions, not BottomNav. | Use BottomNav rows for actions ("Save") — they're for destinations. |
