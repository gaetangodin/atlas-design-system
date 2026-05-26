import type { Meta, StoryObj } from "@storybook/react";
import { PricingTable } from "./PricingTable";
import { Button } from "../Button";

const meta: Meta<typeof PricingTable> = {
  title: "Patterns/PricingTable",
  component: PricingTable,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof PricingTable>;

export const ThreeTiers: Story = {
  args: {
    eyebrow: "Pricing",
    title: "One per seat, no surprises",
    tiers: [
      {
        id: "free",
        tier: "Free", price: "$0", cadence: "/month",
        description: "For solo recruiters.",
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
    ],
  },
};
