# Component: Table

## Description
Data table with a list-feel: generous row padding, soft hover, no
heavy borders. Wraps HeroUI's `Table`. For sortable + paginated tables
use [`SortableTable`](./SortableTable.md); for inline-editable cells
use [`DataGrid`](./DataGrid.md).

## Exports

- `Table`
- `TableHeader`
- `TableColumn`
- `TableBody`
- `TableRow`
- `TableCell`

## Import

```tsx
import {
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,
} from "@atlas/design-system";
```

## Props (Table)

Inherits HeroUI's `TableProps`. Most-used:

| Prop          | Type                                                                   | Default | Description |
| ------------- | ---------------------------------------------------------------------- | ------- | ----------- |
| `aria-label`  | `string`                                                               | —       | **Required** when no caption. |
| `selectionMode` | `"none" \| "single" \| "multiple"`                                  | `"none"`| Adds a leading checkbox column. |
| `selectionBehavior` | `"toggle" \| "replace"`                                          | `"toggle"` | |
| `selectedKeys` / `onSelectionChange` | `Iterable<Key>`                              | —       | Controlled. |
| `removeWrapper`| `boolean`                                                             | `false` | Drop the outer card/border (when nesting inside a Card). |
| `radius`      | `AtlasRadius`                                                          | `"lg"`  | Outer wrapper corner. |
| `isStriped`   | `boolean`                                                              | `false` | Zebra rows. |
| `sortDescriptor` / `onSortChange` | `{ column, direction }` | —       | Sortable headers — handled here for one-off sorts; prefer `SortableTable`. |

## Accessibility

- HeroUI renders ARIA grid semantics. Always pass `aria-label`
  describing what the table contains.

## Examples

```tsx
<Table aria-label="Referrals">
  <TableHeader>
    <TableColumn>Name</TableColumn>
    <TableColumn>Role</TableColumn>
    <TableColumn>Stage</TableColumn>
  </TableHeader>
  <TableBody>
    {rows.map(r => (
      <TableRow key={r.id}>
        <TableCell>{r.name}</TableCell>
        <TableCell>{r.role}</TableCell>
        <TableCell><Badge variant="flat">{r.stage}</Badge></TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```
