# Component: Sidebar

## Description
Desktop side navigation rail. Two widths (collapsed 64px / expanded
252px). Renders as a semantic `<aside aria-label="Primary navigation">`
with a `<ul>` of `<button>` or `<a>` items.

## Exports

- `Sidebar`

## Import

```tsx
import { Sidebar } from "@atlas/design-system";
```

## Props

| Prop         | Type                                            | Default | Description |
| ------------ | ----------------------------------------------- | ------- | ----------- |
| `items`      | `SidebarItem[]`                                 | —       | Nav rows. |
| `activeId`   | `string`                                        | —       | Highlights the current row. |
| `onSelect`   | `(id: string) => void`                          | —       | Fires when a row is clicked (skipped if `item.href` is set). |
| `collapsed`  | `boolean`                                       | `false` | 64px rail when true. |
| `brand`      | `ReactNode`                                     | —       | Top brand block (above the divider). |
| `footer`     | `ReactNode`                                     | —       | Bottom slot (sign-out, version, etc.). |

### `SidebarItem`

| Field    | Type            | Description |
| -------- | --------------- | ----------- |
| `id`     | `string`        | Stable key. |
| `label`  | `string`        | Row text (hidden when collapsed). |
| `icon`   | `ReactNode`     | Always-visible glyph. |
| `badge`  | `ReactNode`     | Optional right-side count. |
| `href`   | `string`        | If set, renders as `<a>` instead of `<button>`. |

## Accessibility

- `<aside aria-label="Primary navigation">`.
- Active row carries `aria-current="page"`.
- Keyboard: tab between rows, Enter/Space activates.

## Examples

```tsx
<Sidebar
  brand={<Brand />}
  activeId="dashboard"
  onSelect={setRoute}
  items={[
    { id: "dashboard", label: "Dashboard", icon: <Home /> },
    { id: "referrals", label: "Referrals", icon: <Users />, badge: "12" },
    { id: "messages",  label: "Messages",  icon: <MessageSquare />, badge: "4" },
    { id: "settings",  label: "Settings",  icon: <Settings />, href: "/settings" },
  ]}
/>

// Collapsed (icon-only) rail
<Sidebar collapsed items={items} activeId="dashboard" />
```
