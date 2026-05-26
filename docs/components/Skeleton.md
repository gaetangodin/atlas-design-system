# Component: Skeleton

## Description
Pulsing placeholder shaped like the content that's loading. Atlas
overrides HeroUI's shimmer with the muted-pulse treatment from shadcn
— quieter, less attention-stealing.

## Exports

- `Skeleton`

## Import

```tsx
import { Skeleton } from "@atlas/design-system";
```

## Props

Inherits HeroUI `SkeletonProps`. Most-used:

| Prop          | Type                          | Default | Description |
| ------------- | ----------------------------- | ------- | ----------- |
| `isLoaded`    | `boolean`                     | `false` | When `true`, renders children with no pulse. |
| `disableAnimation` | `boolean`                | `false` | |
| `className`   | `string`                      | —       | Size/shape via Tailwind (`h-4 w-3/4`). |

## Examples

```tsx
// Standalone shapes
<Skeleton className="h-4 w-1/2" />
<Skeleton className="h-4 w-full" />
<Skeleton className="h-9 w-32 rounded-full" />  // Button-shape

// Card row with avatar + lines
<Card>
  <CardBody className="flex items-center gap-3">
    <Skeleton className="size-9 rounded-full" />
    <div className="flex-1 flex flex-col gap-2">
      <Skeleton className="h-3 w-3/5" />
      <Skeleton className="h-3 w-2/5" />
    </div>
  </CardBody>
</Card>

// Switch back to content once loaded
<Skeleton isLoaded={!loading}>
  <Avatar name="Maya" />
</Skeleton>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Mirror the shape of the eventual content. | Use a Skeleton for a 200ms request — use no loading state at all. |
| Render the same layout sizes so there's no shift when content arrives. | Pulse arbitrarily-sized blocks that jump when real data lands. |
