# Component: Checkbox

## Description
Single boolean or multi-select choice. Wraps HeroUI's `Checkbox` —
we override the `before:`/`after:` pseudo-elements to apply Xeekrs
border + primary fill without double-painting the box.

## Exports

- `Checkbox`
- `CheckboxGroup` (re-exported from HeroUI)

## Import

```tsx
import { Checkbox, CheckboxGroup } from "@atlas/design-system";
```

## Props — Checkbox

| Prop              | Type                                          | Default | Description |
| ----------------- | --------------------------------------------- | ------- | ----------- |
| `value`           | `string`                                      | —       | Required when inside a `CheckboxGroup`. |
| `isSelected`      | `boolean`                                     | —       | Controlled. |
| `defaultSelected` | `boolean`                                     | `false` | Uncontrolled. |
| `onValueChange`   | `(checked: boolean) => void`                  | —       | |
| `isIndeterminate` | `boolean`                                     | `false` | Tri-state ("some children selected"). |
| `radius`          | `AtlasRadius`                                 | `"md"`  | Box corner. |
| `size`            | `"sm" \| "md" \| "lg"`                    | `"md"`  | |
| `color`           | `AtlasColor`                                  | `"primary"` | Tint when checked. |
| `isDisabled` / `isInvalid` / `isReadOnly` | `boolean` | `false` | |

## Props — CheckboxGroup

Inherits HeroUI `CheckboxGroupProps` — `label`, `orientation`, `value`,
`onValueChange`, etc.

## Accessibility

- Real `<input type="checkbox">` semantics; full keyboard support.
- `isIndeterminate` sets `aria-checked="mixed"` for "all-or-some" affordances.
- Always wrap with a `CheckboxGroup` when 2+ checkboxes share a label.

## Examples

```tsx
<Checkbox defaultSelected>Subscribe to product updates</Checkbox>

<CheckboxGroup label="Notifications" defaultValue={["email"]}>
  <Checkbox value="email">Email</Checkbox>
  <Checkbox value="sms">SMS</Checkbox>
  <Checkbox value="push">Push</Checkbox>
</CheckboxGroup>

<Checkbox isIndeterminate>Select all</Checkbox>
```
