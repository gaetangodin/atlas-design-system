# Component: ErrorState

## Description
Recoverable error / 404 placeholder. Like `EmptyState` but with a
destructive tone on the icon, an optional `code` line (e.g. "404"),
and dual primary/secondary actions.

## Exports

- `ErrorState`

## Import

```tsx
import { ErrorState } from "@atlas/design-system";
```

## Props

| Prop              | Type           | Default | Description |
| ----------------- | -------------- | ------- | ----------- |
| `code`            | `ReactNode`    | —       | Small uppercase code line above the title (e.g. `"404"`, `"500"`). |
| `title`           | `ReactNode`    | —       | **Required.** |
| `description`     | `ReactNode`    | —       | Body sentence. |
| `primaryAction`   | `ReactNode`    | —       | Usually "Retry" / "Reload". |
| `secondaryAction` | `ReactNode`    | —       | Usually "Back". |
| `icon`            | `ReactNode`    | —       | Top glyph (`text-destructive` background tint). |

## Accessibility

- Renders with `role="alert"` so screen readers announce immediately.
- Every error must offer a recovery path — primary or secondary action.

## Examples

```tsx
<ErrorState
  icon={<AlertTriangle />}
  code="500"
  title="Something went sideways"
  description="We couldn't load your referrals. Try again in a moment."
  primaryAction={<Button color="primary" onClick={retry}>Retry</Button>}
  secondaryAction={<Button variant="bordered" onClick={goHome}>Back to home</Button>}
/>

// 404
<ErrorState
  icon={<MapPinOff />}
  code="404"
  title="Page not found"
  primaryAction={<Button onClick={goHome}>Go home</Button>}
/>
```
