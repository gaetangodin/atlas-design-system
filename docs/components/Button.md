# Component: Button

## Description
The primary interactive element for triggering actions. Wraps HeroUI's
`Button` with Preline-flavored variants and tightened paddings.

Source of truth: Preline UI Figma — Button family.

## Variants

| Variant     | Use when                                                    |
| ----------- | ----------------------------------------------------------- |
| `primary`   | Main action on a page or form (one per region).             |
| `secondary` | Supporting actions next to a primary button.                |
| `ghost`     | Tertiary actions, toolbars, dense UIs.                      |
| `outline`   | Neutral actions where outline reads better than fill.       |
| `danger`    | Destructive actions (delete, remove, archive).              |
| `link`      | Inline text actions that should look like a link.           |

## Props

| Property      | Type                                                                        | Default       | Description                                      |
| ------------- | --------------------------------------------------------------------------- | ------------- | ------------------------------------------------ |
| `variant`     | `"primary" \| "secondary" \| "ghost" \| "outline" \| "danger" \| "link"` | `"primary"`   | Visual style.                                    |
| `size`        | `"xs" \| "sm" \| "md" \| "lg" \| "xl"`                                  | `"md"`        | Height, padding, font size.                      |
| `shape`       | `"rectangle" \| "pill" \| "square"`                                       | `"rectangle"` | Corner radius and aspect.                        |
| `isLoading`   | `boolean`                                                                   | `false`       | Shows a spinner; click is no-op.                 |
| `isDisabled`  | `boolean`                                                                   | `false`       | Greys out and removes pointer events.            |
| `isFullWidth` | `boolean`                                                                   | `false`       | Stretches to container width.                    |
| `startContent`| `ReactNode`                                                                 | —             | Slot before label (e.g. icon).                   |
| `endContent`  | `ReactNode`                                                                 | —             | Slot after label.                                |
| `onClick`     | `(e: MouseEvent) => void`                                                   | —             | Click handler.                                   |
| `type`        | `"button" \| "submit" \| "reset"`                                         | `"button"`    | Native button type. Use `"submit"` in forms.     |

## States

| State    | Visual                                          | Behavior                  |
| -------- | ----------------------------------------------- | ------------------------- |
| Default  | Variant fill, weight 500.                       | —                         |
| Hover    | Variant fill darkens by ~one shade.             | Cursor pointer.           |
| Active   | Variant fill darkens further.                   | Brief scale-down (HeroUI).|
| Focus    | 4px ring at variant tone, 20% alpha.            | Visible only on keyboard. |
| Disabled | 50% opacity.                                    | Non-interactive.          |
| Loading  | Spinner replaces start content; cursor-wait.    | Click is a no-op.         |

## Accessibility

- Renders a real `<button>` (or `<a>` with `as="a"` + `href`).
- Focus ring is keyboard-only (`focus-visible`).
- When `isLoading`, ensure `aria-label` describes the action; the
  spinner doesn't announce.
- Pair with `aria-describedby` if the button result needs context.

## Examples

```tsx
import { Button } from "@atlas/design-system";

// Primary CTA
<Button variant="primary" size="md">Save changes</Button>

// Destructive
<Button variant="danger" onClick={handleDelete}>Delete account</Button>

// With icons
import { Plus, Trash2 } from "lucide-react";
<Button startContent={<Plus size={16} />}>Add user</Button>
<Button variant="danger" startContent={<Trash2 size={16} />}>Delete</Button>

// Full width in a form
<Button type="submit" isFullWidth>Sign in</Button>
```

## Do's and don'ts

| Do                                                  | Don't                                                |
| --------------------------------------------------- | ---------------------------------------------------- |
| One `primary` button per region.                    | Stack two primaries side-by-side — pick a hierarchy. |
| Use `danger` for destructive actions.               | Use `danger` to grab attention for a non-destructive action. |
| Pass an `aria-label` for icon-only buttons.         | Ship icon-only buttons without an accessible name.   |
