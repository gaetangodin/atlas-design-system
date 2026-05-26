# Component: Card

## Description
Surface container for grouped content. Wraps HeroUI's `Card` with the
Xeekrs flat treatment — `radius-lg` (12px) corner, hairline border,
soft `shadow-sm`, animation disabled by default.

## Exports

- `Card` — the shell
- `CardHeader` — title block (`px-6 pt-6 pb-2`, column, gap-1.5)
- `CardBody` — main content (`px-6 py-4`)
- `CardFooter` — actions row (`px-6 pt-2 pb-6`, items centered, gap-2)

## Import

```tsx
import { Card, CardHeader, CardBody, CardFooter } from "@atlas/design-system";
```

## Props

| Prop          | Type                                      | Default     | Description                                      |
| ------------- | ----------------------------------------- | ----------- | ------------------------------------------------ |
| `variant`     | `"default" \| "hover-lift"`             | `"default"` | `hover-lift` sits flat on the page bg, snaps to white on hover. |
| `shadow`      | `"none" \| "sm" \| "md" \| "lg"`     | `"sm"`      | Resting elevation.                               |
| `radius`      | `AtlasRadius`                             | `"lg"`      | Corner radius.                                   |
| `isPressable` | `boolean`                                 | `false`     | Whole card becomes a button (react-aria press).  |
| `isHoverable` | `boolean`                                 | `false`     | Subtle hover affordance without being pressable. |
| `onClick`     | `(e) => void`                             | —           | Fired when a pressable card is activated.        |

## Variants & states

| Variant      | Use when                                                         |
| ------------ | ---------------------------------------------------------------- |
| `default`    | Standard content grouping on the page background.                |
| `hover-lift` | Dashboard tiles — the surrounding canvas is already a surface, so the tile stays flat until hovered to avoid a double-card look. |

## Accessibility

- A non-pressable card is a plain `<div>` — put semantic elements inside.
- `isPressable` renders a real button role with keyboard activation and
  a focus ring. Give it an accessible name via the content or `aria-label`.

## Examples

```tsx
<Card>
  <CardHeader>
    <div className="font-medium">Active referral</div>
    <div className="text-xs text-muted-foreground">Submitted 2 days ago</div>
  </CardHeader>
  <CardBody>Maya R. — Senior Designer · Vancouver</CardBody>
  <CardFooter>
    <Badge variant="flat" color="primary">In review</Badge>
    <Button size="sm" color="primary">View</Button>
  </CardFooter>
</Card>

// Dashboard tile
<Card variant="hover-lift" isPressable onClick={openDetail}>
  <CardBody>128 active referrals</CardBody>
</Card>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Use `hover-lift` when the card sits on another card surface. | Nest a `default` card inside another `default` card — the borders muddy. |
| Make the whole card pressable for list→detail navigation. | Put a pressable card around an already-clickable button. |
