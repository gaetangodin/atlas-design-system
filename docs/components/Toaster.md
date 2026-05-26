# Component: Toaster

## Description
Transient notifications via [Sonner](https://sonner.emilkowal.ski/),
themed with Xeekrs tokens. Mount the `Toaster` once near your root,
then call `toast()` imperatively from anywhere.

> **Optional peer dep.** `sonner` isn't installed automatically. If
> you import Toaster, run `pnpm add sonner`.

## Exports

- `Toaster` — the provider (mount once)
- `toast` — imperative API (call from event handlers, actions, etc.)

## Import

```tsx
import { Toaster, toast } from "@atlas/design-system";
```

## Toaster props

Inherits Sonner's `ToasterProps`. Most-used:

| Prop          | Type                                                    | Default        | Description |
| ------------- | ------------------------------------------------------- | -------------- | ----------- |
| `position`    | `"top-right" \| "top-center" \| "bottom-right" \| …` | `"bottom-right"` | |
| `expand`      | `boolean`                                               | `false`        | Stack stays expanded instead of collapsing on hover. |
| `closeButton` | `boolean`                                               | `true`         | × on each toast. |
| `richColors`  | `boolean`                                               | `false`        | Atlas overrides this with our own semantic palette. |
| `duration`    | `number`                                                | `4000`         | Auto-dismiss in ms. |

## `toast` API

```ts
toast("Saved")                                  // default
toast.success("Referral submitted")
toast.error("Couldn't save")
toast.warning("Profile incomplete")
toast.info("Heads up")
toast.message("With a description", { description: "…" })
toast.promise(saveAsync(), {
  loading: "Saving…",
  success: "Saved",
  error: "Couldn't save",
})

// With an action
toast("Archived", { action: { label: "Undo", onClick: restore } })

// Programmatic dismiss
const id = toast("Working…");
toast.dismiss(id);
```

## Accessibility

- Sonner manages `aria-live` regions so toasts are announced without
  stealing focus.
- Pair destructive toasts with an `action` ("Undo") so users can recover.

## Examples

```tsx
// Mount once, e.g. in your root layout
<AtlasProvider>
  <Toaster position="bottom-right" />
  {children}
</AtlasProvider>

// Call from anywhere
function submit() {
  toast.success("Referral submitted", {
    description: "We'll update you within 48 hours.",
    action: { label: "Undo", onClick: undoSubmit },
  });
}
```
