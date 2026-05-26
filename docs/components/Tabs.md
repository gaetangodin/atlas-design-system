# Component: Tabs

## Description
Segmented tab control. Wraps HeroUI's `Tabs` — full-radius track and
cursor pill, brand focus ring on tabs. For settings-style vertical
sub-navigation, use [`VerticalTabs`](./VerticalTabs.md).

## Exports

- `Tabs`
- `Tab`

## Import

```tsx
import { Tabs, Tab } from "@atlas/design-system";
```

## Props

Inherits HeroUI `TabsProps`. Most-used:

| Prop          | Type                                          | Default     | Description |
| ------------- | --------------------------------------------- | ----------- | ----------- |
| `variant`     | `"solid" \| "bordered" \| "light" \| "underlined"` | `"solid"` | |
| `size`        | `"sm" \| "md" \| "lg"`                    | `"md"`      | h-8 / h-9 / h-10. |
| `color`       | `AtlasColor`                                  | `"default"` | |
| `radius`      | `AtlasRadius`                                 | `"full"`    | Brand-default pill. |
| `selectedKey` / `onSelectionChange` | `Key`               | —           | Controlled. |
| `disabledKeys`| `Iterable<Key>`                               | —           | |
| `isDisabled`  | `boolean`                                     | `false`     | |

## Accessibility

- Renders ARIA tabs / tabpanel pattern.
- Arrow keys move focus inside the list; Home/End jump to ends.

## Examples

```tsx
<Tabs aria-label="Referrals view">
  <Tab key="active" title="Active">…</Tab>
  <Tab key="drafts" title="Drafts">…</Tab>
  <Tab key="archived" title="Archived">…</Tab>
</Tabs>

// Dense sub-nav row
<Tabs size="sm" variant="light">
  <Tab key="all"   title="All" />
  <Tab key="mine"  title="Assigned to me" />
  <Tab key="open"  title="Open" />
</Tabs>
```
