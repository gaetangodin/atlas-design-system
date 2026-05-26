# Component: Modal

## Description
Centered overlay dialog. Wraps HeroUI's `Modal` with the Xeekrs brand
corner (`rounded-2xl` = 24px), large shadow, and a backdrop blur.
For destructive confirmations, prefer [`AlertModal`](./AlertModal.md) —
it's a preset over this.

## Exports

- `Modal` — the root (controls open state, backdrop, sizing)
- `ModalContent` — render-prop child receiving `onClose`
- `ModalHeader` / `ModalBody` / `ModalFooter` — layout slots
- `useDisclosure` — hook returning `{ isOpen, onOpen, onClose, onOpenChange }`

## Import

```tsx
import {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure,
} from "@atlas/design-system";
```

## Props

Inherits HeroUI `ModalProps`. Most-used:

| Prop           | Type                                                  | Default  | Description                          |
| -------------- | ----------------------------------------------------- | -------- | ------------------------------------ |
| `isOpen`       | `boolean`                                             | —        | Controlled open state.               |
| `onOpenChange` | `(open: boolean) => void`                             | —        | Fires on open/close.                 |
| `size`         | `"sm" \| "md" \| "lg" \| "xl" \| "full" \| …`   | `"md"`   | Modal width.                         |
| `placement`    | `"center" \| "top" \| "bottom" \| "auto"`         | `"auto"` | Vertical placement.                  |
| `isDismissable`| `boolean`                                             | `true`   | Click-backdrop / Esc closes.         |
| `scrollBehavior`| `"normal" \| "inside" \| "outside"`               | —        | Where overflow scrolls.              |

## States

| State      | Behavior                                              |
| ---------- | ----------------------------------------------------- |
| Closed     | Not in the DOM.                                       |
| Opening    | Backdrop fades in, panel scales/slides (HeroUI).      |
| Open       | Focus trapped inside; `Esc` and backdrop click close. |

## Accessibility

- Renders `role="dialog"` with focus trap and focus restore on close.
- The first focusable element is auto-focused; pass `aria-label` or a
  `ModalHeader` title so screen readers announce the dialog purpose.
- For irreversible actions use `AlertModal` (adds `role="alertdialog"`).

## Examples

```tsx
function InviteButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button color="primary" onClick={onOpen}>Invite</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Invite a referral</ModalHeader>
              <ModalBody>…form…</ModalBody>
              <ModalFooter>
                <Button variant="light" onClick={onClose}>Cancel</Button>
                <Button color="primary" onClick={onClose}>Send</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
```
