# Component: ColorPicker

## Description
Swatch grid + custom hex input. Lightweight — for full HSL/RGB pickers
drop down to `react-colorful` directly; Atlas doesn't ship one.

## Exports

- `ColorPicker`

## Import

```tsx
import { ColorPicker } from "@atlas/design-system";
```

## Props

| Prop            | Type                          | Default                       | Description |
| --------------- | ----------------------------- | ----------------------------- | ----------- |
| `value`         | `string`                      | —                             | Controlled hex (`#0c2120`). |
| `defaultValue`  | `string`                      | `"#0c2120"`                   | Uncontrolled. |
| `onChange`      | `(hex: string) => void`       | —                             | Fires on swatch click or hex input. |
| `swatches`      | `ReadonlyArray<string>`       | Atlas brand + chart palette   | Override the visible palette. |
| `customInput`   | `boolean`                     | `true`                        | Show the hex input below the grid. |
| `label`         | `string`                      | —                             | Field label. |
| `isDisabled`    | `boolean`                     | `false`                       | |

## Accessibility

- Every swatch is a focusable `<button>` with `aria-label="Select #hex"`.
- The selected swatch carries a 2px ring offset from the background so
  it's distinguishable on any swatch color.
- The hex input is a plain text field; consumers can wire their own
  validation if needed.

## Examples

```tsx
<ColorPicker label="Accent color" defaultValue="#4c6fdc" onChange={setAccent} />

// Restricted to brand swatches only
<ColorPicker
  swatches={["#0c2120", "#4c6fdc", "#10b981", "#f31260"]}
  customInput={false}
/>
```
