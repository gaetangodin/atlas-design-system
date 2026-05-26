# Component: Divider

## Description
Hairline separator. Wraps HeroUI's `Divider`, forced to `bg-border`
so the line picks up the Xeekrs border token.

## Exports

- `Divider`

## Import

```tsx
import { Divider } from "@atlas/design-system";
```

## Props

| Prop          | Type                          | Default      | Description |
| ------------- | ----------------------------- | ------------ | ----------- |
| `orientation` | `"horizontal" \| "vertical"`| `"horizontal"`| |
| `className`   | `string`                      | —            | Override the color or spacing. |

## Accessibility

- Renders `<hr role="separator">`. Decorative dividers can carry
  `aria-hidden="true"` if they pair with visible content groupings.

## Examples

```tsx
<div className="flex flex-col gap-3">
  <div>First section</div>
  <Divider />
  <div>Second section</div>
</div>

// Vertical
<div className="flex h-6 items-center gap-3">
  <span>Item</span>
  <Divider orientation="vertical" />
  <span>Next</span>
</div>
```
