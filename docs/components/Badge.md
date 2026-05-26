# Component: Badge

## Description
Compact label for status, counts, or categorical metadata. Wraps
HeroUI's `Chip`. Default radius is `md` (matching shadcn-style badges);
pass `radius="full"` for a pill.

## Exports

- `Badge`

## Import

```tsx
import { Badge } from "@atlas/design-system";
```

## Props

| Prop          | Type                                                                   | Default   | Description |
| ------------- | ---------------------------------------------------------------------- | --------- | ----------- |
| `variant`     | `"solid" \| "bordered" \| "light" \| "flat" \| "faded" \| "shadow" \| "dot"` | `"solid"` | Visual style. `dot` shows a colored bullet. |
| `color`       | `AtlasColor`                                                           | `"default"` | Semantic intent. |
| `size`        | `"sm" \| "md" \| "lg"`                                             | `"md"`    | Padding + font size. |
| `radius`      | `AtlasRadius`                                                          | `"md"`    | Pill via `"full"`. |
| `startContent`| `ReactNode`                                                            | —         | Slot before label (e.g. icon, dot). |
| `endContent`  | `ReactNode`                                                            | —         | Slot after label. |
| `onClose`     | `() => void`                                                           | —         | Renders a close button (×). |

## Variants

| Variant   | Use when                                                  |
| --------- | --------------------------------------------------------- |
| `solid`   | High-contrast status (Active, Hired).                     |
| `flat`    | The default for most categorical/state tags — tinted bg.  |
| `bordered`| Subtle neutral metadata.                                  |
| `light`   | No fill, just color — sparingly.                          |
| `dot`     | Status indicator next to a label.                         |

## Accessibility

- Renders a `<span>` (or `<button>` when `onClose` is set).
- Color alone doesn't convey state — keep the text label readable.

## Examples

```tsx
<Badge variant="solid" color="success">Active</Badge>
<Badge variant="flat" color="primary">Match 92%</Badge>
<Badge variant="bordered">Draft</Badge>
<Badge variant="flat" color="warning" radius="full">In review</Badge>
<Badge variant="flat" onClose={() => remove(tag)}>{tag}</Badge>
```
