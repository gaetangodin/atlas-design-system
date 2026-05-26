# Component: NotificationBadge

## Description
Small overlay badge for unread counts / dot indicators. Wraps HeroUI's
`Badge` (the "overlay" badge, not Atlas `Badge`), themed pink so it
reads as an alert at a glance.

## Exports

- `NotificationBadge`

## Import

```tsx
import { NotificationBadge } from "@atlas/design-system";
```

## Props

Inherits HeroUI's `BadgeProps`. Most-used:

| Prop          | Type                                       | Default        | Description |
| ------------- | ------------------------------------------ | -------------- | ----------- |
| `content`     | `ReactNode`                                | —              | The number or short label. Omit for a dot. |
| `color`       | `AtlasColor`                               | `"danger"`     | Brand pink by default. |
| `size`        | `"sm" \| "md" \| "lg"`                 | `"sm"`         | |
| `placement`   | `"top-right" \| "top-left" \| …`        | `"top-right"`  | |
| `showOutline` | `boolean`                                  | `true`         | 2px ring matching the page bg. |
| `isInvisible` | `boolean`                                  | `false`        | Hide the badge but keep layout (zero count). |
| `shape`       | `"circle" \| "rectangle"`                | `"circle"`     | |

## Accessibility

- Pair with the trigger's `aria-label` describing the count (e.g.
  `aria-label="Inbox, 4 unread"`).
- Don't rely on the badge alone for critical state — combine with
  text on the active screen.

## Examples

```tsx
<NotificationBadge content="4">
  <Button isIconOnly aria-label="Inbox, 4 unread">
    <Inbox />
  </Button>
</NotificationBadge>

// Dot indicator
<NotificationBadge isInvisible={!hasUnread}>
  <Avatar name="Maya" />
</NotificationBadge>
```
