# Component: Drawer

## Description
Side-anchored overlay panel. Wraps HeroUI's `Drawer` with the Xeekrs
brand corner (`rounded-2xl` = 24px), large shadow, header/body/footer
slots with dividing borders. For mobile sheets that slide up from the
bottom, prefer [`BottomSheet`](./BottomSheet.md) (Vaul).

## Exports

- `Drawer`
- `DrawerContent` / `DrawerHeader` / `DrawerBody` / `DrawerFooter`

## Import

```tsx
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, useDisclosure } from "@atlas/design-system";
```

## Props

Inherits HeroUI `DrawerProps`. Most-used:

| Prop           | Type                                       | Default     | Description |
| -------------- | ------------------------------------------ | ----------- | ----------- |
| `isOpen`       | `boolean`                                  | —           | Controlled. |
| `onOpenChange` | `(open: boolean) => void`                  | —           | |
| `placement`    | `"left" \| "right" \| "top" \| "bottom"` | `"right"`   | Anchor edge. |
| `size`         | `"sm" \| "md" \| "lg" \| "xl" \| "full"` | `"md"` | Cross-axis size. |
| `isDismissable`| `boolean`                                  | `true`      | Click-backdrop / Esc closes. |
| `hideCloseButton` | `boolean`                               | `false`     | Hide the × button. |

## Accessibility

- Renders `role="dialog"` with focus trap and focus restore on close.
- Pass a `DrawerHeader` with a clear title so screen readers announce
  the panel's purpose.

## Examples

```tsx
function ProfileDrawer() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open profile</Button>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange} placement="right" size="md">
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader>Maya Rodriguez</DrawerHeader>
              <DrawerBody>…details…</DrawerBody>
              <DrawerFooter>
                <Button variant="light" onClick={onClose}>Close</Button>
                <Button color="primary" onClick={save}>Save</Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Use for detail panels that don't take the user away from context. | Use a drawer when a modal would do — drawers eat horizontal space. |
| Anchor right by default on desktop; bottom on mobile via BottomSheet. | Mix drawers and modals on the same screen with both open. |
