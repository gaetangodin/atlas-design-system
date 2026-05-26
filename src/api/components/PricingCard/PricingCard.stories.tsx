import type { Meta, StoryObj } from "@storybook/react";
import { PricingCard } from "./PricingCard";
import { Button } from "../Button";

const meta: Meta<typeof PricingCard> = {
  title: "Patterns/PricingCard",
  component: PricingCard,
  tags: ["autodocs"],
  decorators: [(Story) => <div style={{ maxWidth: 320 }}><Story /></div>],
};
export default meta;

type Story = StoryObj<typeof PricingCard>;

export const Pro: Story = {
  args: {
    tier: "Pro",
    price: "$24",
    cadence: "/month",
    description: "Everything teams need to recruit at scale.",
    highlighted: true,
    features: ["Unlimited referrals", "Advanced match scoring", "Priority support"],
    cta: <Button color="primary" fullWidth>Choose Pro</Button>,
  },
};

export const Free: Story = {
  args: {
    tier: "Free",
    price: "$0",
    cadence: "/month",
    description: "For solo recruiters trying it out.",
    features: ["Up to 5 referrals", "Community support"],
    cta: <Button variant="bordered" fullWidth>Get started</Button>,
  },
};
