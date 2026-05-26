# Component: StatusAvatar

## Description
`Avatar` with a status dot overlaid on the bottom-right. Composes
Atlas's `Avatar`; status is an enum keyed to semantic colors.

## Exports

- `StatusAvatar`

## Import

```tsx
import { StatusAvatar } from "@atlas/design-system";
```

## Props

Inherits all [`Avatar`](./Avatar.md) props, plus:

| Prop     | Type                                                      | Default | Description |
| -------- | --------------------------------------------------------- | ------- | ----------- |
| `status` | `"online" \| "offline" \| "busy" \| "away"`           | —       | When omitted, no dot is rendered. |

## Status mapping

| Status   | Color                                |
| -------- | ------------------------------------ |
| `online` | `bg-success` (green)                 |
| `away`   | `bg-warning` (amber)                 |
| `busy`   | `bg-destructive` (brand pink)        |
| `offline`| `bg-muted` (neutral)                 |

## Accessibility

- The dot has `aria-label="Status: <status>"` so screen readers
  announce it.
- Don't rely on color alone — combine the dot with a text caption in
  list rows.

## Examples

```tsx
<StatusAvatar name="Maya" status="online" />

// In a list row
<div className="flex items-center gap-2">
  <StatusAvatar name="Maya" status="away" size="sm" />
  <div>
    <div className="text-sm font-medium">Maya Rodriguez</div>
    <div className="text-xs text-muted-foreground">Away — back at 3pm</div>
  </div>
</div>
```
