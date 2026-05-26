# Component: Progress

## Description
Linear and circular progress indicators for determinate work. Both
wrap HeroUI primitives.

## Exports

- `Progress` — horizontal bar
- `CircularProgress` — donut

## Import

```tsx
import { Progress, CircularProgress } from "@atlas/design-system";
```

## Props (shared)

| Prop          | Type                                       | Default     | Description |
| ------------- | ------------------------------------------ | ----------- | ----------- |
| `value`       | `number`                                   | `0`         | Current value. |
| `maxValue`    | `number`                                   | `100`       | |
| `minValue`    | `number`                                   | `0`         | |
| `label`       | `ReactNode`                                | —           | Above the bar / inside the donut. |
| `valueLabel`  | `ReactNode`                                | —           | Override the formatted value (e.g. "3 of 5"). |
| `showValueLabel` | `boolean`                               | `false`     | Show the percent. |
| `formatOptions`  | `Intl.NumberFormatOptions`              | `{ style: "percent" }` | How the value is announced + displayed. |
| `color`       | `AtlasColor`                               | `"primary"` | |
| `size`        | `"sm" \| "md" \| "lg"`                 | `"md"`      | |
| `isIndeterminate` | `boolean`                              | `false`     | Looping animation; ignore `value`. |

## Accessibility

- Renders ARIA progressbar semantics; `value` and `formatOptions`
  determine how it's announced.
- For unknown duration work, use `isIndeterminate` rather than a fake
  value that climbs forever.

## Examples

```tsx
<Progress label="Onboarding" value={3} maxValue={5} valueLabel="3 of 5" showValueLabel />

<Progress isIndeterminate label="Uploading…" />

<CircularProgress
  label="Match quality"
  value={68}
  showValueLabel
  formatOptions={{ style: "percent" }}
/>
```
