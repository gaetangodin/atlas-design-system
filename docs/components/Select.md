# Component: Select

## Description
Single- or multi-select dropdown. Wraps HeroUI's `Select` with the
Xeekrs bordered field treatment — `radius-lg`, outside label, popover
styled to match `Dropdown`.

## Exports

- `Select` — the field
- `SelectItem` — an option
- `SelectSection` — a labelled group of options

## Import

```tsx
import { Select, SelectItem, SelectSection } from "@atlas/design-system";
```

## Props

Inherits HeroUI `SelectProps`. Most-used:

| Prop             | Type                                          | Default      | Description                          |
| ---------------- | --------------------------------------------- | ------------ | ------------------------------------ |
| `label`          | `ReactNode`                                   | —            | Field label (rendered outside).      |
| `selectionMode`  | `"single" \| "multiple"`                    | `"single"`   | One vs. many.                        |
| `selectedKeys`   | `Iterable<Key>`                               | —            | Controlled selection.                |
| `onSelectionChange` | `(keys) => void`                           | —            | Fires on change.                     |
| `placeholder`    | `string`                                      | —            | Empty-state text.                    |
| `isInvalid`      | `boolean`                                     | `false`      | Red border + error styling.          |
| `errorMessage`   | `ReactNode`                                   | —            | Shown when `isInvalid`.              |
| `isDisabled`     | `boolean`                                     | `false`      | Greys out, removes interaction.      |
| `isRequired`     | `boolean`                                     | `false`      | Adds the required affordance.        |

## Accessibility

- HeroUI/React-Aria provides listbox semantics, type-ahead, and
  arrow-key navigation.
- Always pass a `label` — never rely on `placeholder` alone.
- `isInvalid` sets `aria-invalid` and announces `errorMessage`.

## Examples

```tsx
<Select label="Region" placeholder="Choose a region">
  <SelectItem key="van">Vancouver, BC</SelectItem>
  <SelectItem key="tor">Toronto, ON</SelectItem>
  <SelectItem key="mtl">Montréal, QC</SelectItem>
</Select>

// Grouped + multi-select
<Select label="Skills" selectionMode="multiple">
  <SelectSection title="Design">
    <SelectItem key="figma">Figma</SelectItem>
    <SelectItem key="research">User research</SelectItem>
  </SelectSection>
  <SelectSection title="Engineering">
    <SelectItem key="react">React</SelectItem>
    <SelectItem key="ts">TypeScript</SelectItem>
  </SelectSection>
</Select>
```
