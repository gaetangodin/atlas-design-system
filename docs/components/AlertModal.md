# Component: AlertModal

## Description
Destructive / confirmation preset over `Modal`. Adds `role="alertdialog"`,
opinionated cancel + confirm footer, and a tone switch for danger
styling. Use `Modal` directly when you need richer content (forms,
tabs, multi-step).

## Exports

- `AlertModal`

## Import

```tsx
import { AlertModal, useDisclosure } from "@atlas/design-system";
```

## Props

| Prop          | Type                          | Default      | Description |
| ------------- | ----------------------------- | ------------ | ----------- |
| `title`       | `ReactNode`                   | —            | Headline. |
| `description` | `ReactNode`                   | —            | Sub-headline / body. |
| `confirmLabel`| `ReactNode`                   | `"Confirm"`  | Primary action label. |
| `cancelLabel` | `ReactNode`                   | `"Cancel"`   | Secondary action label. |
| `onConfirm`   | `() => void`                  | —            | Fires when primary is pressed. |
| `onCancel`    | `() => void`                  | —            | Fires when secondary is pressed; modal also closes. |
| `tone`        | `"default" \| "danger"`     | `"default"`  | `danger` colors the confirm red. |
| `isLoading`   | `boolean`                     | `false`      | Confirm shows a spinner; click is a no-op. |
| `size`        | `ModalProps["size"]`          | `"sm"`       | Inherited from Modal. |
| `isOpen`, `onOpenChange` | …                  | —            | Inherited from Modal. |

## Accessibility

- Renders `role="alertdialog"` — assistive tech treats it as more
  urgent than a regular dialog.
- Focus lands on the cancel button by default (safer than auto-focusing
  the destructive action).
- `Esc` triggers `onCancel`.

## Examples

```tsx
const archive = useDisclosure();

<Button variant="bordered" onClick={archive.onOpen}>Archive referral</Button>

<AlertModal
  isOpen={archive.isOpen}
  onOpenChange={archive.onOpenChange}
  title="Archive this referral?"
  description="You can restore it from Archived within 30 days."
  confirmLabel="Archive"
  tone="default"
  onConfirm={() => { archiveReferral(id); archive.onClose(); }}
/>

// Destructive
<AlertModal
  isOpen={isOpen}
  onOpenChange={setOpen}
  title="Delete account?"
  description="This permanently removes your profile and cannot be undone."
  confirmLabel="Delete account"
  tone="danger"
  isLoading={deleting}
  onConfirm={deleteAccount}
/>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Use for irreversible actions (delete, send, archive). | Use for reversible saves — let the user undo instead. |
| Set `tone="danger"` only when the action destroys data. | Use `danger` to add visual urgency to harmless actions. |
