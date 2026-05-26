# Component: FeatureGrid

## Description
Grid of feature tiles — icon + title + body. Used to expand on a hero
with 2/3/4 columns of capabilities.

## Exports

- `FeatureGrid`

## Import

```tsx
import { FeatureGrid } from "@atlas/design-system";
```

## Props

| Prop      | Type                          | Default | Description |
| --------- | ----------------------------- | ------- | ----------- |
| `items`   | `FeatureGridItem[]`           | —       | |
| `columns` | `2 \| 3 \| 4`               | `3`     | Responsive — collapses to 1 column on mobile. |

### `FeatureGridItem`

| Field   | Type             | Description |
| ------- | ---------------- | ----------- |
| `id`    | `string`         | Stable key. |
| `icon`  | `ReactNode`      | 20–24px glyph. |
| `title` | `ReactNode`      | One-line capability. |
| `body`  | `ReactNode`      | 1–2 sentence explanation. |

## Examples

```tsx
<FeatureGrid
  columns={3}
  items={[
    { id: "1", icon: <Zap />,   title: "Faster matching",       body: "AI ranks candidates by fit in under a second." },
    { id: "2", icon: <Shield />, title: "Audit trail by default", body: "Every interaction is logged for compliance." },
    { id: "3", icon: <Users />,  title: "Teams over inboxes",     body: "Stop chasing email threads. Everything lives in the case." },
  ]}
/>
```
