# Component: SortableTable

## Description
Data-driven Table wrapper with built-in column sort and pagination.
Composes Atlas's `Table` + `Pagination`. Use for typical lists; drop
down to [`Table`](./Table.md) for custom layouts, up to
[`DataGrid`](./DataGrid.md) for inline-editable cells.

## Exports

- `SortableTable`

## Import

```tsx
import { SortableTable } from "@atlas/design-system";
```

## Props

| Prop          | Type                                  | Default       | Description |
| ------------- | ------------------------------------- | ------------- | ----------- |
| `columns`     | `SortableTableColumn<T>[]`            | —             | Column config. |
| `rows`        | `T[]`                                 | —             | Data array. |
| `rowKey`      | `keyof T`                             | —             | **Required.** Unique key field. |
| `pageSize`    | `number`                              | `10`          | Rows per page. |
| `emptyContent`| `ReactNode`                           | `"No results"`| |
| `onRowClick`  | `(row: T) => void`                    | —             | Makes rows clickable. |
| `ariaLabel`   | `string`                              | `"Data table"`| |

### `SortableTableColumn<T>`

| Field      | Type                          | Description |
| ---------- | ----------------------------- | ----------- |
| `key`      | `keyof T`                     | Field name. |
| `label`    | `ReactNode`                   | Column header. |
| `sortable` | `boolean`                     | Defaults to `true`. |
| `width`    | `number \| string`          | Fixed column width. |
| `align`    | `"start" \| "center" \| "end"` | |
| `render`   | `(row: T) => ReactNode`       | Cell renderer. |

## Examples

```tsx
type Referral = { id: string; name: string; role: string; matchScore: number };

<SortableTable<Referral>
  rowKey="id"
  rows={referrals}
  onRowClick={(r) => navigate(`/referrals/${r.id}`)}
  columns={[
    { key: "name",  label: "Name" },
    { key: "role",  label: "Role" },
    {
      key: "matchScore",
      label: "Match",
      align: "end",
      render: (r) => `${r.matchScore}%`,
    },
  ]}
/>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Provide a stable `rowKey` (`"id"` field on every row). | Use array index as key — sorting breaks selection state. |
| Use `render` to wrap cells in `Badge`, `Avatar`, etc. | Mix custom JSX in raw `row[col.key]` values — use `render`. |
