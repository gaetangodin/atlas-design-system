# Component: ScrollShadow

## Description
Soft fade at the top/bottom (or left/right) edges of a scroll container
to signal overflow. Pass-through to HeroUI's `ScrollShadow`.

## Exports

- `ScrollShadow`

## Import

```tsx
import { ScrollShadow } from "@atlas/design-system";
```

## Props

| Prop          | Type                                          | Default       | Description |
| ------------- | --------------------------------------------- | ------------- | ----------- |
| `orientation` | `"vertical" \| "horizontal"`                | `"vertical"`  | |
| `size`        | `number`                                      | `40`          | Fade height/width in px. |
| `offset`      | `number`                                      | `0`           | Fade offset from the edge. |
| `hideScrollBar` | `boolean`                                   | `false`       | Hide the native scrollbar. |
| `isEnabled`   | `boolean`                                     | `true`        | Disable fades when not scrolling. |
| `visibility`  | `"auto" \| "top" \| "bottom" \| "both"` | `"auto"`      | Force fade sides. |

## Examples

```tsx
<ScrollShadow className="h-72 w-full">
  <ul className="flex flex-col gap-2 py-2">
    {items.map((it) => <li key={it.id}>{it.label}</li>)}
  </ul>
</ScrollShadow>

// Horizontal chip rail
<ScrollShadow orientation="horizontal" hideScrollBar className="w-full">
  <div className="flex gap-2">
    {chips.map((c) => <Badge key={c}>{c}</Badge>)}
  </div>
</ScrollShadow>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Use for any vertically scrollable list that doesn't have a natural footer affordance. | Nest scroll shadows inside scroll shadows. |
