# Component: StatCard

## Description
KPI card pattern. Small uppercase label on top, big tabular-nums value
below, optional delta chip + caption. Wraps a `Card`. Used in
dashboards and overview pages.

## Exports

- `StatCard`

## Import

```tsx
import { StatCard } from "@atlas/design-system";
```

## Props

| Prop        | Type                                                  | Default     | Description |
| ----------- | ----------------------------------------------------- | ----------- | ----------- |
| `label`     | `ReactNode`                                           | —           | Top label (rendered in muted uppercase). |
| `value`     | `ReactNode`                                           | —           | The big number. |
| `delta`     | `ReactNode`                                           | —           | Comparison vs. prior period (chip). |
| `deltaTone` | `"neutral" \| "positive" \| "negative"`           | `"neutral"` | Color of the delta chip. |
| `caption`   | `ReactNode`                                           | —           | Helper line under the delta. |
| `icon`      | `ReactNode`                                           | —           | Top-right glyph. |

## Examples

```tsx
<StatCard label="Active referrals" value="128" delta="+12%" deltaTone="positive" caption="vs. last month" />

<StatCard
  label="Match rate"
  value="68%"
  delta="−3 pts"
  deltaTone="negative"
  caption="week over week"
  icon={<TrendingDown size={14} />}
/>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Format the value for humans (`$1,234.56`, `2d ago`). | Show raw numbers like `1234.56`. |
| Pair with a `Sparkline` inside `caption` for trend context. | Stack 4+ StatCards in a single row — use 2-3 max. |
