# Component: Accordion

## Description
Collapsible content rows. Wraps HeroUI's `Accordion` with the Xeekrs
divider-between-rows treatment. Replaces Radix Accordion + Radix
Collapsible per `docs/RADIX_TO_HEROUI.md`.

## Exports

- `Accordion`
- `AccordionItem`

## Import

```tsx
import { Accordion, AccordionItem } from "@atlas/design-system";
```

## Props — Accordion

Inherits HeroUI's `AccordionProps`. Most-used:

| Prop              | Type                                                  | Default       | Description |
| ----------------- | ----------------------------------------------------- | ------------- | ----------- |
| `selectionMode`   | `"none" \| "single" \| "multiple"`                | `"single"`    | |
| `variant`         | `"light" \| "shadow" \| "bordered" \| "splitted"` | `"light"`     | |
| `selectedKeys` / `onSelectionChange` | `Iterable<Key>`              | —             | Controlled. |
| `disabledKeys`    | `Iterable<Key>`                                       | —             | |
| `isCompact`       | `boolean`                                             | `false`       | Tighter row padding. |
| `disallowEmptySelection` | `boolean`                                      | `false`       | Force at least one open. |

## Props — AccordionItem

| Prop          | Type                          | Description |
| ------------- | ----------------------------- | ----------- |
| `key`         | `Key`                         | **Required.** |
| `title`       | `ReactNode`                   | Visible row label. |
| `subtitle`    | `ReactNode`                   | Muted sub-label. |
| `startContent`| `ReactNode`                   | Leading slot (icon, avatar). |
| `indicator`   | `ReactNode \| ((args) => ReactNode)` | Override the chevron. |

## Accessibility

- Renders ARIA accordion semantics with full keyboard support.
- Use `title` (not custom markup) so the trigger gets correct semantics.

## Examples

```tsx
<Accordion>
  <AccordionItem key="profile" title="Profile" subtitle="Basic info">
    …
  </AccordionItem>
  <AccordionItem key="notifications" title="Notifications">
    …
  </AccordionItem>
</Accordion>

// FAQ
<Accordion selectionMode="multiple" variant="light">
  {faqs.map(f => (
    <AccordionItem key={f.id} title={f.question}>
      {f.answer}
    </AccordionItem>
  ))}
</Accordion>
```
