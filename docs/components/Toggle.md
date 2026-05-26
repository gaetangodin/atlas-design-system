# Component: Toggle

## Description
Pressed-state button. For "on/off" affordances that look like buttons
rather than switches (e.g. Bold/Italic in a toolbar, filter chips
that toggle in place). Custom — built on `<button aria-pressed>`.

## Exports

- `Toggle`

## Import

```tsx
import { Toggle } from "@atlas/design-system";
```

## Props

| Prop             | Type                                          | Default  | Description |
| ---------------- | --------------------------------------------- | -------- | ----------- |
| `pressed`        | `boolean`                                     | —        | Controlled. |
| `defaultPressed` | `boolean`                                     | `false`  | Uncontrolled. |
| `onChange`       | `(pressed: boolean) => void`                  | —        | |
| `size`           | `"sm" \| "md" \| "lg"`                    | `"md"`   | |
| `radius`         | `"sm" \| "md" \| "lg" \| "full"`        | `"full"` | Pill by default. |
| `startContent`   | `ReactNode`                                   | —        | Icon before label. |
| `endContent`     | `ReactNode`                                   | —        | Icon after label. |
| `isDisabled`     | `boolean`                                     | `false`  | |
| `aria-label`     | `string`                                      | —        | Required for icon-only toggles. |

## States

| State    | Visual                                                |
| -------- | ----------------------------------------------------- |
| Idle     | Transparent background, foreground text.              |
| Pressed  | Inverted (`bg-foreground text-background`).           |
| Hover    | Muted background.                                     |
| Focus    | 3px ring at brand tone.                               |
| Disabled | 50% opacity, no pointer events.                       |

## Accessibility

- Renders a real `<button aria-pressed="true|false">`.
- Always pass `aria-label` for icon-only toggles (no visible text).

## Examples

```tsx
<Toggle aria-label="Bold" startContent={<Bold size={16} />} />

<Toggle defaultPressed>Showing archived</Toggle>

// Filter chip
<Toggle pressed={isPinned} onChange={setPinned}>Pinned</Toggle>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Use for view-state toggles inside toolbars and filter rows. | Use Toggle for settings that get saved — that's Switch. |
| Pair icon-only Toggles with `aria-label`. | Use icons alone with no accessible name. |
