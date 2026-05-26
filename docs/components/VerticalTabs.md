# Component: VerticalTabs

## Description
Settings-style left sub-navigation. Wraps HeroUI's `Tabs` with
`isVertical` plus a brand-tuned look — left-aligned full-text pills
(`bg-muted` on active), no animated cursor pill (the horizontal Tabs'
look doesn't translate to vertical settings rails).

## Exports

- `VerticalTabs`
- `VerticalTab`

## Import

```tsx
import { VerticalTabs, VerticalTab } from "@atlas/design-system";
```

## Props

Inherits HeroUI `TabsProps` (with `isVertical` forced true). Most-used:

| Prop          | Type                          | Default   | Description |
| ------------- | ----------------------------- | --------- | ----------- |
| `variant`     | `TabsProps["variant"]`        | `"light"` | |
| `size`        | `"sm" \| "md" \| "lg"`    | `"md"`    | |
| `selectedKey` / `onSelectionChange` | `Key`               | —         | Controlled. |
| `disabledKeys`| `Iterable<Key>`               | —         | |

## Pairs with [`SettingsLayout`](./SettingsLayout.md)

```tsx
<SettingsLayout
  title="Settings"
  nav={
    <VerticalTabs aria-label="Settings sections" selectedKey={section} onSelectionChange={setSection}>
      <VerticalTab key="profile" title="Profile" />
      <VerticalTab key="notifications" title="Notifications" />
      <VerticalTab key="billing" title="Billing" />
      <VerticalTab key="team" title="Team" />
    </VerticalTabs>
  }
>
  {/* content for the selected section */}
</SettingsLayout>
```
