import type { Meta, StoryObj } from "@storybook/react";
import { PromotionCard } from "./PromotionCard";
import { Button } from "../Button";

const meta: Meta<typeof PromotionCard> = {
  title: "Shell/PromotionCard",
  component: PromotionCard,
  tags: ["autodocs"],
  args: {
    title: "Try AI-assisted matching",
    body: "Get a ranked candidate shortlist in seconds.",
    cta: <Button size="sm" color="primary">Try it</Button>,
  },
  argTypes: { tone: { control: "radio", options: ["lavender", "earth", "warm", "image"] } },
};
export default meta;
type Story = StoryObj<typeof PromotionCard>;

export const Lavender: Story = { args: { tone: "lavender" } };
export const Earth: Story = { args: { tone: "earth" } };
export const Warm: Story = { args: { tone: "warm" } };
