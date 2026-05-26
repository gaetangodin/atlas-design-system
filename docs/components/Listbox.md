# Component: Listbox

## Description
Standalone selectable list. Wraps HeroUI's `Listbox` — same item
styling as `Dropdown` but rendered inline (no popover, no trigger).
Useful for filter rails, side-nav alternatives, and command-palette
results.

## Exports

- `Listbox`
- `ListboxItem`
- `ListboxSection`

## Import

```tsx
import { Listbox, ListboxItem, ListboxSection } from "@atlas/design-system";
```

## Props

Inherits HeroUI `ListboxProps`. Most-used:

| Prop                | Type                                          | Default | Description |
| ------------------- | --------------------------------------------- | ------- | ----------- |
| `selectionMode`     | `"none" \| "single" \| "multiple"`        | `"none"`| |
| `selectedKeys`      | `Iterable<Key>`                               | —       | Controlled. |
| `onSelectionChange` | `(keys) => void`                              | —       | |
| `disabledKeys`      | `Iterable<Key>`                               | —       | Disable individual items. |
| `aria-label`        | `string`                                      | —       | **Required** when no visible label. |

## Accessibility

- Renders `role="listbox"` with `role="option"` children.
- Arrow keys move focus; Home/End jump to ends; type-to-select.
- Always pass `aria-label` or a visible heading.

## Examples

```tsx
<Listbox aria-label="Stages" selectionMode="single" defaultSelectedKeys={["screen"]}>
  <ListboxItem key="new">New</ListboxItem>
  <ListboxItem key="screen">Screen</ListboxItem>
  <ListboxItem key="match">Match</ListboxItem>
  <ListboxItem key="hire">Hired</ListboxItem>
</Listbox>

// Grouped, multi-select
<Listbox aria-label="Skills" selectionMode="multiple">
  <ListboxSection title="Design">
    <ListboxItem key="figma">Figma</ListboxItem>
    <ListboxItem key="research">User research</ListboxItem>
  </ListboxSection>
  <ListboxSection title="Engineering">
    <ListboxItem key="react">React</ListboxItem>
  </ListboxSection>
</Listbox>
```
