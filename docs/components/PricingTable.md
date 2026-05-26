# Component: PricingTable

## Description
Section wrapper for a row of `PricingCard`s with optional shared
eyebrow / title / body. Pricing comparisons on marketing pages.

## Exports

- `PricingTable`

## Import

```tsx
import { PricingTable, Button } from "@atlas/design-system";
```

## Props

| Prop      | Type                          | Default | Description |
| --------- | ----------------------------- | ------- | ----------- |
| `eyebrow` | `ReactNode`                   | —       | Small uppercase line. |
| `title`   | `ReactNode`                   | —       | Section title. |
| `body`    | `ReactNode`                   | —       | Lead paragraph. |
| `tiers`   | `PricingTableTier[]`          | —       | Array of [`PricingCard`](./PricingCard.md) props, each with an `id`. |

## Examples

```tsx
<PricingTable
  eyebrow="Pricing"
  title="One per seat, no surprises"
  tiers={[
    {
      id: "free",
      tier: "Free", price: "$0", cadence: "/month",
      description: "For solo recruiters trying it out.",
      features: ["Up to 5 referrals", "Email support"],
      cta: <Button variant="bordered" fullWidth>Get started</Button>,
    },
    {
      id: "pro",
      tier: "Pro", price: "$24", cadence: "/seat / month",
      description: "For active teams.",
      features: ["Unlimited referrals", "Match scoring", "Priority support"],
      highlighted: true,
      cta: <Button color="primary" fullWidth>Choose Pro</Button>,
    },
    {
      id: "team",
      tier: "Team", price: "$49", cadence: "/seat / month",
      description: "For org-wide rollouts.",
      features: ["Everything in Pro", "SSO & SCIM", "Audit logs"],
      cta: <Button variant="bordered" fullWidth>Contact sales</Button>,
    },
  ]}
/>
```
