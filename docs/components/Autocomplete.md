# Component: Autocomplete

## Description
Combobox — typeahead-filtered selectable input. Wraps HeroUI's
`Autocomplete` with the same bordered field treatment as `Select`.

## Exports

- `Autocomplete`
- `AutocompleteItem`
- `AutocompleteSection`

## Import

```tsx
import { Autocomplete, AutocompleteItem, AutocompleteSection } from "@atlas/design-system";
```

## Props

Inherits HeroUI `AutocompleteProps`. Most-used:

| Prop                  | Type                                  | Default    | Description |
| --------------------- | ------------------------------------- | ---------- | ----------- |
| `label`               | `ReactNode`                           | —          | Outside label. |
| `placeholder`         | `string`                              | —          | Empty-state text. |
| `defaultSelectedKey` / `selectedKey` | `Key`              | —          | Selection. |
| `onSelectionChange`   | `(key: Key) => void`                  | —          | |
| `inputValue` / `onInputChange` | `(s: string) => void`       | —          | Controlled filter text. |
| `allowsCustomValue`   | `boolean`                             | `false`    | Accept values not in the list. |
| `isInvalid` / `errorMessage` | …                              | —          | Error state. |
| `isDisabled` / `isRequired` | …                               | `false`    | |

## Accessibility

- Renders ARIA combobox semantics with arrow-key navigation and
  type-ahead matching.
- Always pass a `label`. The popover is rendered into a portal so
  z-index conflicts with other overlays are handled by HeroUI.

## Examples

```tsx
<Autocomplete label="Region">
  <AutocompleteItem key="van">Vancouver, BC</AutocompleteItem>
  <AutocompleteItem key="tor">Toronto, ON</AutocompleteItem>
  <AutocompleteItem key="mtl">Montréal, QC</AutocompleteItem>
</Autocomplete>

// Grouped + free-text
<Autocomplete label="Skill" allowsCustomValue>
  <AutocompleteSection title="Design">
    <AutocompleteItem key="figma">Figma</AutocompleteItem>
    <AutocompleteItem key="research">User research</AutocompleteItem>
  </AutocompleteSection>
  <AutocompleteSection title="Engineering">
    <AutocompleteItem key="react">React</AutocompleteItem>
    <AutocompleteItem key="ts">TypeScript</AutocompleteItem>
  </AutocompleteSection>
</Autocomplete>
```
