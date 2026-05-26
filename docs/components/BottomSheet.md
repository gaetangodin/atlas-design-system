# Component: BottomSheet

## Description
Mobile-first sheet that slides up from the bottom edge. Wraps Vaul —
the canonical React bottom-sheet primitive (drag handle, snap points,
spring physics). For desktop-anchored slide-outs, use [`Drawer`](./Drawer.md).

> **Optional peer dep.** `vaul` isn't installed automatically. If you
> import BottomSheet, run `pnpm add vaul`.

## Exports

- `BottomSheet` — root
- `BottomSheetTrigger`
- `BottomSheetPortal`
- `BottomSheetClose`
- `BottomSheetOverlay`
- `BottomSheetContent` — has built-in drag handle + safe-area padding
- `BottomSheetTitle`
- `BottomSheetDescription`

## Import

```tsx
import {
  BottomSheet, BottomSheetTrigger, BottomSheetPortal,
  BottomSheetOverlay, BottomSheetContent,
  BottomSheetTitle, BottomSheetDescription,
} from "@atlas/design-system";
```

## Props

Inherits Vaul's `Drawer.Root` props. Most-used:

| Prop          | Type                          | Default | Description |
| ------------- | ----------------------------- | ------- | ----------- |
| `open`        | `boolean`                     | —       | Controlled. |
| `onOpenChange`| `(open: boolean) => void`     | —       | |
| `snapPoints`  | `(number \| string)[]`      | —       | Multi-stop snap (e.g. `[0.4, 0.9]`). |
| `dismissible` | `boolean`                     | `true`  | Drag-to-close. |
| `shouldScaleBackground` | `boolean`           | `false` | iOS-style scale-down effect. |

## Accessibility

- Vaul provides focus trap, scroll-lock, drag-to-close, and tap-backdrop.
- Use `BottomSheetTitle` and `BottomSheetDescription` so the role
  `dialog` announces purpose to assistive tech.

## Examples

```tsx
<BottomSheet>
  <BottomSheetTrigger asChild>
    <Button variant="bordered">Filter</Button>
  </BottomSheetTrigger>
  <BottomSheetPortal>
    <BottomSheetOverlay />
    <BottomSheetContent>
      <BottomSheetTitle>Filter referrals</BottomSheetTitle>
      <BottomSheetDescription>Choose the stages you want to see.</BottomSheetDescription>
      <CheckboxGroup defaultValue={["active"]}>
        <Checkbox value="active">Active</Checkbox>
        <Checkbox value="archived">Archived</Checkbox>
      </CheckboxGroup>
    </BottomSheetContent>
  </BottomSheetPortal>
</BottomSheet>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Use as the primary surface for mobile filters, pickers, share sheets. | Use BottomSheet on desktop — use Drawer or Popover. |
| Set `snapPoints` for sheets that have peek + full states. | Disable drag-to-close on a non-blocking sheet. |
