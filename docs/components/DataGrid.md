# Component: DataGrid

## Description
Table with inline-editable cells. Lightweight — each editable column
declares its editor (`text` | `number` | `select`). For richer needs
(virtualization, column drag, formulas) graduate to TanStack Table or
AG Grid.

## Exports

- `DataGrid`

## Import

```tsx
import { DataGrid } from "@atlas/design-system";
```

## Props

| Prop          | Type                                                  | Default | Description |
| ------------- | ----------------------------------------------------- | ------- | ----------- |
| `columns`     | `DataGridColumn<T>[]`                                 | —       | Column config. |
| `rows`        | `T[]`                                                 | —       | Data array. |
| `rowKey`      | `keyof T`                                             | —       | **Required.** |
| `onCellChange`| `(rowId, key, value) => void`                         | —       | Fired when an editor commits. |
| `ariaLabel`   | `string`                                              | —       | |

### `DataGridColumn<T>`

| Field      | Type                                              | Description |
| ---------- | ------------------------------------------------- | ----------- |
| `key`      | `keyof T`                                         | |
| `label`    | `ReactNode`                                       | |
| `editable` | `boolean`                                         | |
| `editor`   | `"text" \| "number" \| "select"`              | Editor type. |
| `options`  | `{ value: string; label: string }[]`              | Required when `editor="select"`. |
| `width`    | `number \| string`                              | |
| `render`   | `(row: T) => ReactNode`                           | Display renderer. |

## Behavior

- Click an editable cell to edit; blur or Enter commits; Esc cancels.
- `onCellChange` fires on commit. Persist server-side and reflect
  back into `rows` to confirm — the grid is uncontrolled.

## Examples

```tsx
type Referral = { id: string; name: string; role: string; stage: string };

<DataGrid<Referral>
  rowKey="id"
  rows={referrals}
  onCellChange={(id, key, value) => save(id, key, value)}
  columns={[
    { key: "name", label: "Name", editable: true, editor: "text" },
    { key: "role", label: "Role", editable: true, editor: "text" },
    {
      key: "stage",
      label: "Stage",
      editable: true,
      editor: "select",
      options: [
        { value: "new",    label: "New" },
        { value: "screen", label: "Screen" },
        { value: "match",  label: "Match" },
        { value: "hire",   label: "Hired" },
      ],
    },
  ]}
/>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Persist with optimistic update + rollback on error. | Block the UI while `onCellChange` resolves. |
| Validate inside `onCellChange` and toast errors. | Allow unbounded text in a free-text cell that's `number`-typed downstream. |
