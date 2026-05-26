# Component: Slider

## Description
Range input for continuous values. Wraps HeroUI's `Slider` with Xeekrs
brand colors on track / filler / thumb.

## Exports

- `Slider`

## Import

```tsx
import { Slider } from "@atlas/design-system";
```

## Props

Inherits HeroUI `SliderProps`. Most-used:

| Prop             | Type                                          | Default | Description |
| ---------------- | --------------------------------------------- | ------- | ----------- |
| `label`          | `ReactNode`                                   | —       | Field label. |
| `value`          | `number \| number[]`                        | —       | Controlled. Pass `[low, high]` for a range slider. |
| `defaultValue`   | `number \| number[]`                        | —       | Uncontrolled. |
| `onChange`       | `(v: number \| number[]) => void`           | —       | Live drag updates. |
| `onChangeEnd`    | `(v: number \| number[]) => void`           | —       | Fires on release — prefer for expensive work. |
| `minValue` / `maxValue` | `number`                              | `0` / `100` | |
| `step`           | `number`                                      | `1`     | |
| `formatOptions`  | `Intl.NumberFormatOptions`                    | —       | E.g. `{ style: "currency", currency: "USD" }`. |
| `isDisabled`     | `boolean`                                     | `false` | |
| `showSteps`      | `boolean`                                     | `false` | Tick marks every `step`. |
| `showTooltip`    | `boolean`                                     | `false` | Hover tooltip on the thumb. |

## Accessibility

- Renders ARIA slider semantics with keyboard arrow + Home/End nav.
- `formatOptions` controls how the value is announced to screen readers.

## Examples

```tsx
<Slider label="Match score" defaultValue={64} minValue={0} maxValue={100} />

<Slider
  label="Salary range"
  defaultValue={[60_000, 120_000]}
  minValue={0}
  maxValue={250_000}
  step={5_000}
  formatOptions={{ style: "currency", currency: "USD", maximumFractionDigits: 0 }}
  showTooltip
/>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Use `onChangeEnd` for queries / network calls. | Fire a network request on every `onChange` tick. |
| Show the formatted value next to the slider. | Leave the user guessing what the current number is. |
