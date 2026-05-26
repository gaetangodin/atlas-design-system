# Component: Spacer

## Description
Empty box that adds vertical or horizontal space. HeroUI pass-through
— useful in layouts where flex `gap` isn't an option.

## Exports

- `Spacer`

## Import

```tsx
import { Spacer } from "@atlas/design-system";
```

## Props

| Prop | Type      | Default | Description |
| ---- | --------- | ------- | ----------- |
| `x`  | `number`  | `1`     | Horizontal Tailwind spacing unit. |
| `y`  | `number`  | `1`     | Vertical Tailwind spacing unit. |

## Examples

```tsx
<Spacer y={4} />  // 16px of vertical space

<div className="flex items-center">
  <Avatar />
  <Spacer x={2} />  // 8px gap
  <span>Maya</span>
</div>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Use inside legacy non-flex layouts. | Reach for `Spacer` when flex `gap` is available — prefer that. |
