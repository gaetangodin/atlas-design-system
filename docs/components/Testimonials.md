# Component: Testimonials

## Description
Quote-card grid. Each card: quote + person (avatar + name + role) +
optional company logo.

## Exports

- `Testimonials`

## Import

```tsx
import { Testimonials } from "@atlas/design-system";
```

## Props

| Prop      | Type                  | Default | Description |
| --------- | --------------------- | ------- | ----------- |
| `items`   | `Testimonial[]`       | —       | |
| `columns` | `1 \| 2 \| 3`       | `3`     | Responsive — collapses to 1 column on mobile. |

### `Testimonial`

| Field       | Type        | Description |
| ----------- | ----------- | ----------- |
| `id`        | `string`    | Stable key. |
| `quote`     | `ReactNode` | The pull quote. |
| `name`      | `ReactNode` | Person name. |
| `role`      | `ReactNode` | Title / company. |
| `avatarUrl` | `string`    | |
| `initials`  | `string`    | Fallback when no `avatarUrl`. |
| `logo`      | `ReactNode` | Optional company logomark above the quote. |

## Examples

```tsx
<Testimonials
  columns={3}
  items={[
    {
      id: "a",
      quote: "We cut time-to-placement by 40% in the first quarter.",
      name: "Maya Rodriguez",
      role: "Head of People, Acme",
      initials: "MR",
    },
    // …
  ]}
/>
```
