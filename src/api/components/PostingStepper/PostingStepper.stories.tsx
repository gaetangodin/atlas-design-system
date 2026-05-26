import type { Meta, StoryObj } from "@storybook/react";
import { PostingStepper } from "./PostingStepper";

const STEPS = [
  { id: "1", label: "Role", description: "Title & summary", status: "completed" as const },
  { id: "2", label: "Requirements", description: "Skills", status: "active" as const },
  { id: "3", label: "Logistics", description: "Pay, location", status: "pending" as const },
  { id: "4", label: "Review", description: "Quality + publish", status: "pending" as const },
];

const meta: Meta<typeof PostingStepper> = {
  title: "Posting/PostingStepper",
  component: PostingStepper,
  tags: ["autodocs"],
  args: { steps: STEPS, current: 1 },
};
export default meta;
type Story = StoryObj<typeof PostingStepper>;

export const Default: Story = {};
export const WithFooter: Story = { args: { footer: "Drafts auto-save every 30s." } };
