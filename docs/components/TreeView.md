# Component: TreeView

## Description
Recursive expandable list. Keyboard-accessible (`role="tree"`,
`aria-expanded`, native focus order). Uncontrolled by default; pass
`expanded` for controlled mode.

## Exports

- `TreeView`

## Import

```tsx
import { TreeView } from "@atlas/design-system";
```

## Props

| Prop              | Type                          | Default | Description |
| ----------------- | ----------------------------- | ------- | ----------- |
| `nodes`           | `TreeNode[]`                  | —       | Top-level nodes. |
| `expanded`        | `string[]`                    | —       | Controlled set of expanded ids. |
| `defaultExpanded` | `string[]`                    | `[]`    | Uncontrolled initial. |
| `onExpandChange`  | `(ids: string[]) => void`     | —       | |
| `selectedId`      | `string`                      | —       | Highlights one row. |
| `onSelect`        | `(id: string) => void`        | —       | |

### `TreeNode`

| Field      | Type            | Description |
| ---------- | --------------- | ----------- |
| `id`       | `string`        | Stable key. |
| `label`    | `ReactNode`     | Row text. |
| `icon`     | `ReactNode`     | Leading glyph. |
| `children` | `TreeNode[]`    | Sub-nodes. |
| `isLeaf`   | `boolean`       | Force leaf rendering (no chevron) even with children. |

## Accessibility

- Renders `<ul role="tree">` with `<li role="treeitem">` rows.
- Each row is a focusable button. The active branch carries
  `aria-selected`; expandable nodes get `aria-expanded`.

## Examples

```tsx
<TreeView
  defaultExpanded={["projects"]}
  selectedId={selected}
  onSelect={setSelected}
  nodes={[
    { id: "inbox",    label: "Inbox", icon: <Inbox /> },
    {
      id: "projects",
      label: "Projects",
      icon: <Folder />,
      children: [
        { id: "recruitment", label: "Recruitment", isLeaf: true },
        { id: "academy",     label: "Academy",     isLeaf: true },
      ],
    },
  ]}
/>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Use for folder-like data. | Use TreeView for ordered flat lists — that's `Listbox`. |
| Render large trees with virtualization upstream — Atlas doesn't ship it. | Drop 5k nodes into TreeView raw. |
