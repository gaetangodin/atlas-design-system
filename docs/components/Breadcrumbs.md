# Component: Breadcrumbs

## Description
Trail of links showing the current location in a hierarchy. Wraps
HeroUI's `Breadcrumbs` with muted-foreground links and a foreground
current-page weight.

## Exports

- `Breadcrumbs`
- `BreadcrumbItem`

## Import

```tsx
import { Breadcrumbs, BreadcrumbItem } from "@atlas/design-system";
```

## Props

Inherits HeroUI's `BreadcrumbsProps`. Most-used:

| Prop          | Type                                  | Default | Description |
| ------------- | ------------------------------------- | ------- | ----------- |
| `size`        | `"sm" \| "md" \| "lg"`            | `"md"`  | |
| `separator`   | `ReactNode`                           | `"/"`   | Override separator. |
| `radius`      | `AtlasRadius`                         | —       | Pill background mode. |
| `variant`     | `"solid" \| "bordered" \| "light"` | `"light"` | |
| `maxItems`    | `number`                              | —       | Collapses middle items with "…". |
| `itemsBeforeCollapse` / `itemsAfterCollapse` | `number`     | —       | |

## Accessibility

- Renders `<nav aria-label="Breadcrumb">` and an ordered list of links.
- Last item is `aria-current="page"` and unstyled as a link.

## Examples

```tsx
<Breadcrumbs>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/recruitment">Recruitment</BreadcrumbItem>
  <BreadcrumbItem>Referrals</BreadcrumbItem>
</Breadcrumbs>

// Collapsed (for deep trees)
<Breadcrumbs maxItems={3}>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/orgs">Orgs</BreadcrumbItem>
  <BreadcrumbItem href="/orgs/xeekrs">Xeekrs</BreadcrumbItem>
  <BreadcrumbItem href="/orgs/xeekrs/recruitment">Recruitment</BreadcrumbItem>
  <BreadcrumbItem>Referrals</BreadcrumbItem>
</Breadcrumbs>
```
