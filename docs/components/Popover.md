# Component: Popover

## Description
Anchor-positioned floating panel. Wraps HeroUI's `Popover` with the
Xeekrs popover surface (border, `bg-popover`, `shadow-md`).

## Exports

- `Popover`
- `PopoverTrigger`
- `PopoverContent`

## Import

```tsx
import { Popover, PopoverTrigger, PopoverContent } from "@atlas/design-system";
```

## Props

Inherits HeroUI `PopoverProps`. Most-used:

| Prop           | Type                                                     | Default    | Description |
| -------------- | -------------------------------------------------------- | ---------- | ----------- |
| `placement`    | `"top" \| "right" \| "bottom" \| "left" \| "top-start" \| …` | `"bottom"` | Side + alignment. |
| `offset`       | `number`                                                 | `7`        | Px gap between trigger and content. |
| `showArrow`    | `boolean`                                                | `false`    | Render the pointing arrow. |
| `isOpen` / `onOpenChange` | `boolean`, `(o) => void`                      | —          | Controlled mode. |
| `triggerType`  | `"dialog" \| "menu" \| "listbox" \| "tree" \| "grid"` | `"dialog"` | ARIA role for assistive tech. |

## Accessibility

- Trigger gets `aria-haspopup` and `aria-expanded`.
- Content traps focus while open and restores it on close.
- Press Esc to close.

## Examples

```tsx
<Popover placement="bottom-start">
  <PopoverTrigger>
    <Button variant="bordered">Filters</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="p-1 flex flex-col gap-2">
      <Checkbox>Active</Checkbox>
      <Checkbox>Archived</Checkbox>
    </div>
  </PopoverContent>
</Popover>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Use for transient editors and filter panels. | Use a Popover when you really want a Dropdown menu. |
| Keep content under ~300px tall — anything more belongs in a Drawer. | Stuff long forms into a Popover. |
