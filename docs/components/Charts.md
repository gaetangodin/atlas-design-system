# Component: Charts

## Description
Thin Recharts wrappers themed with Xeekrs brand chart colors
(`--chart-1` through `--chart-5`). Covers the common cases; for
advanced needs (mixed axes, brushing, custom shapes) drop down to
Recharts directly.

> **Optional peer dep.** `recharts` isn't installed automatically. If
> you use any chart, run `pnpm add recharts`.

## Exports

- `BarChart`
- `LineChart`
- `AreaChart`
- `DonutChart`
- `Sparkline`
- `BubbleChart`

## Import

```tsx
import {
  BarChart, LineChart, AreaChart, DonutChart, Sparkline, BubbleChart,
} from "@atlas/design-system";
```

## Common props (Bar / Line / Area)

| Prop         | Type                                          | Default | Description |
| ------------ | --------------------------------------------- | ------- | ----------- |
| `data`       | `Array<Record<string, unknown>>`              | —       | One object per category point. |
| `xKey`       | `string`                                      | —       | Field on each row used as the X axis. |
| `series`     | `{ key, label?, color? }[]`                   | —       | Series to plot. |
| `height`     | `number`                                      | `240`   | |
| `showGrid`   | `boolean`                                     | `true`  | |
| `showLegend` | `boolean`                                     | `false` | |
| `tooltip`    | `boolean`                                     | `true`  | |
| `stacked` (Bar) | `boolean`                                  | `false` | |
| `smooth` (Line/Area) | `boolean`                             | `true`  | |

## DonutChart

| Prop            | Type                                                  | Default | Description |
| --------------- | ----------------------------------------------------- | ------- | ----------- |
| `data`          | `{ label, value, color? }[]`                          | —       | |
| `centerLabel`   | `ReactNode`                                           | —       | Number in the donut hole. |
| `centerCaption` | `ReactNode`                                           | —       | Sub-label below `centerLabel`. |
| `showLegend`    | `boolean`                                             | `true`  | |

## Sparkline

| Prop    | Type                          | Default                  | Description |
| ------- | ----------------------------- | ------------------------ | ----------- |
| `data`  | `{ value: number }[]`         | —                        | |
| `color` | `string`                      | `var(--chart-2, #3b82f6)`| |
| `height`| `number`                      | `40`                     | |
| `fill`  | `boolean`                     | `true`                   | Area fill under the line. |

## BubbleChart

`data: { x, y, z, label? }[]` — `z` controls the bubble size.

## Examples

```tsx
<BarChart
  data={[
    { week: "W1", new: 17, hired: 4 },
    { week: "W2", new: 26, hired: 7 },
    { week: "W3", new: 29, hired: 5 },
  ]}
  xKey="week"
  series={[
    { key: "new",   label: "New" },
    { key: "hired", label: "Hired" },
  ]}
  showLegend
/>

<DonutChart
  centerLabel="218"
  centerCaption="total"
  data={[
    { label: "New",    value: 64 },
    { label: "Screen", value: 51 },
    { label: "Match",  value: 38 },
    { label: "Hold",   value: 17 },
    { label: "Hired",  value: 48 },
  ]}
/>

// Inline trend in a StatCard caption
<StatCard label="Submissions" value="128" caption={<Sparkline data={trend} />} />
```
