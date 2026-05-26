# Component: Spinner

## Description
Loading indicator for indeterminate work. Wraps HeroUI's `Spinner`.

> **Prefer [`Skeleton`](./Skeleton.md)** for predictable content
> (lists, cards) and reach for Spinner only when the shape of the
> outcome is unknown (saving, calculating, queuing).

## Exports

- `Spinner`

## Import

```tsx
import { Spinner } from "@atlas/design-system";
```

## Props

| Prop    | Type                                       | Default     | Description |
| ------- | ------------------------------------------ | ----------- | ----------- |
| `size`  | `"sm" \| "md" \| "lg"`                 | `"md"`      | |
| `color` | `AtlasColor`                               | `"primary"` | |
| `label` | `string`                                   | —           | Visible label below the spinner (also announced). |
| `labelColor` | `AtlasColor`                          | —           | |

## Accessibility

- Renders with `role="status"` and `aria-label` (defaults to "Loading").
- Pass `label` so screen readers announce what's happening.

## Examples

```tsx
<Spinner label="Loading matches…" />

// Inside a Button
<Button isLoading>Saving…</Button>  // Uses Spinner internally

// Full-page loader
<div className="grid place-items-center min-h-screen">
  <Spinner size="lg" label="Loading your dashboard" />
</div>
```
