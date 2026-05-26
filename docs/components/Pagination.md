# Component: Pagination

## Description
Numbered page controls. Wraps HeroUI's `Pagination` with full-radius
buttons and primary-tinted cursor.

## Exports

- `Pagination`
- `PaginationItem`
- `PaginationCursor`

## Import

```tsx
import { Pagination } from "@atlas/design-system";
```

## Props

Inherits HeroUI's `PaginationProps`. Most-used:

| Prop          | Type                          | Default     | Description |
| ------------- | ----------------------------- | ----------- | ----------- |
| `total`       | `number`                      | —           | **Required.** Total pages. |
| `page`        | `number`                      | —           | Controlled current page. |
| `initialPage` | `number`                      | `1`         | Uncontrolled initial. |
| `onChange`    | `(page: number) => void`      | —           | |
| `showControls`| `boolean`                     | `true`      | Render prev/next buttons. |
| `showShadow`  | `boolean`                     | `false`     | Lifts the cursor button. |
| `siblings`    | `number`                      | `1`         | Pages adjacent to current. |
| `boundaries`  | `number`                      | `1`         | Pages at each end. |
| `size` / `radius` / `color` | …               | `"md"` / `"full"` / `"primary"` | |

## Accessibility

- Renders semantic `<nav aria-label="pagination">` with buttons.
- Current page button carries `aria-current="page"`.

## Examples

```tsx
<Pagination total={12} initialPage={1} onChange={setPage} />

// Compact (sm) with no controls — for inline summary rows
<Pagination total={4} size="sm" showControls={false} />
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Pair with a count summary ("1–20 of 234"). | Show the pager without context of total items. |
| Use `SortableTable` if you need sortable + paged tables — it bundles this in. | Roll your own pagination state alongside a Table. |
