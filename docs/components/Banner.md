# Component: Banner

## Description
Full-width announcement bar pinned at the top of a page or layout.
Trial countdowns, scheduled maintenance, new-feature rollouts.
Distinct from [`Alert`](./Alert.md) (in-flow card with title + body)
and [`Toaster`](./Toaster.md) (transient toast).

## Exports

- `Banner`

## Import

```tsx
import { Banner } from "@atlas/design-system";
```

## Props

| Prop      | Type                                                          | Default     | Description |
| --------- | ------------------------------------------------------------- | ----------- | ----------- |
| `tone`    | `"neutral" \| "info" \| "success" \| "warning" \| "danger"`  | `"neutral"` | Tinted bg + text. |
| `icon`    | `ReactNode`                                                   | —           | Leading glyph. |
| `action`  | `ReactNode`                                                   | —           | Right-aligned action (link, button). |
| `onClose` | `() => void`                                                  | —           | Renders the × dismiss button. |
| `children`| `ReactNode`                                                   | —           | The message. |

## Accessibility

- Renders `role="status"` (non-urgent). Don't use Banner for actively
  breaking errors — use Toast or in-flow Alert.
- Always pair the dismiss button with an `aria-label="Dismiss"`.

## Examples

```tsx
<Banner
  tone="warning"
  icon={<Clock />}
  action={<Link href="/billing">Upgrade</Link>}
  onClose={dismiss}
>
  Your trial ends in 3 days.
</Banner>

// Maintenance window
<Banner tone="info" icon={<Wrench />}>
  Scheduled maintenance Saturday 9pm–10pm PT.
</Banner>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Make the action specific ("Upgrade", "Reload" — not "Click here"). | Pile up multiple Banners on top of each other. |
| Dismiss should be persistent (cookie / user prefs). | Re-show a dismissed banner every page load. |
