# Component: DescriptionList

## Description
Semantic `<dl>` for key/value pairs — receipts, profile pages, detail
panels. Two layouts: inline (label left, value right) and stacked
(label above).

## Exports

- `DescriptionList`

## Import

```tsx
import { DescriptionList } from "@atlas/design-system";
```

## Props

| Prop       | Type                                  | Default    | Description |
| ---------- | ------------------------------------- | ---------- | ----------- |
| `items`    | `DescriptionListItem[]`               | —          | `{ label, value }[]`. |
| `layout`   | `"stacked" \| "inline"`             | `"inline"` | |
| `divided`  | `boolean`                             | `true`     | Top-border between rows. |

## Accessibility

- Renders semantic `<dl>` / `<dt>` / `<dd>`. Screen readers announce
  "definition list, N items".

## Examples

```tsx
<DescriptionList
  items={[
    { label: "Name", value: "Maya Rodriguez" },
    { label: "Role", value: "Senior Designer" },
    { label: "Location", value: "Vancouver, BC" },
    { label: "Email", value: "m.rodriguez@xeekrs.com" },
  ]}
/>

// Stacked (form-summary style)
<DescriptionList
  layout="stacked"
  divided={false}
  items={[
    { label: "Total", value: "$1,234.56" },
    { label: "Tax (5%)", value: "$61.73" },
  ]}
/>
```
