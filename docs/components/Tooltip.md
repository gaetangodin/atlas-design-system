# Component: Tooltip

## Description
Short hint that appears on hover/focus. Wraps HeroUI's `Tooltip` —
inverse-foreground bubble (`bg-foreground text-background`), 8px sub-text.

## Exports

- `Tooltip`

## Import

```tsx
import { Tooltip } from "@atlas/design-system";
```

## Props

Inherits HeroUI `TooltipProps`. Most-used:

| Prop           | Type                          | Default        | Description |
| -------------- | ----------------------------- | -------------- | ----------- |
| `content`      | `ReactNode`                   | —              | The hint text. |
| `placement`    | `PopoverPlacement`            | `"top"`        | Anchor side. |
| `delay`        | `number`                      | `0`            | Open delay in ms. |
| `closeDelay`   | `number`                      | `500`          | Close delay in ms — keeps it open while user moves mouse. |
| `showArrow`    | `boolean`                     | `false`        | Render a pointing arrow. |
| `isDisabled`   | `boolean`                     | `false`        | |

## Accessibility

- Renders with `role="tooltip"` and `aria-describedby` on the trigger.
- Visible on hover AND focus — keyboard users get it too.
- Don't put interactive elements inside; use [`Popover`](./Popover.md).

## Examples

```tsx
<Tooltip content="Archive this referral">
  <Button isIconOnly aria-label="Archive">
    <Archive size={16} />
  </Button>
</Tooltip>

// Rich tooltip — hover-card style
<Tooltip
  placement="bottom-start"
  delay={300}
  content={
    <div className="max-w-xs">
      <div className="font-medium">Maya Rodriguez</div>
      <div className="text-xs">Senior Designer · Vancouver</div>
    </div>
  }
>
  <span className="underline decoration-dotted">Maya</span>
</Tooltip>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Use for icon-only button labels and abbreviation expansions. | Hide critical information inside a tooltip. |
| Keep content under ~80 characters. | Put forms, links, or buttons inside Tooltip. |
