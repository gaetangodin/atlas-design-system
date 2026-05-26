# Component: PricingCard

## Description
Single tier in a pricing comparison. Tier name + price + cadence +
feature checklist + primary CTA. Optional `highlighted` ring for the
recommended plan. Composes `Card`. For full pricing tables, see
[`PricingTable`](./PricingTable.md).

## Exports

- `PricingCard`

## Import

```tsx
import { PricingCard } from "@atlas/design-system";
```

## Props

| Prop          | Type                          | Default | Description |
| ------------- | ----------------------------- | ------- | ----------- |
| `tier`        | `ReactNode`                   | —       | Plan name (Free, Pro, Team). |
| `price`       | `ReactNode`                   | —       | The big number. |
| `cadence`     | `ReactNode`                   | —       | `"/month"`, `"billed annually"`. |
| `description` | `ReactNode`                   | —       | One-line value prop. |
| `features`    | `ReactNode[]`                 | —       | Checklist rows. |
| `cta`         | `ReactNode`                   | —       | Usually a `<Button>`. |
| `highlighted` | `boolean`                     | `false` | 2px ring + "Recommended" pill. |

## Examples

```tsx
<PricingCard
  tier="Pro"
  price="$24"
  cadence="/month"
  description="Everything teams need to recruit at scale."
  highlighted
  features={[
    "Unlimited referrals",
    "Advanced match scoring",
    "Priority support",
  ]}
  cta={<Button color="primary" fullWidth>Choose Pro</Button>}
/>
```
