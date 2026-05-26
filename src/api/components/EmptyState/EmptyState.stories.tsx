import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "./EmptyState";
import { Button } from "../Button";

const meta: Meta<typeof EmptyState> = {
  title: "Display/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  args: {
    title: "No referrals yet",
    description: "Start by inviting someone you've worked with — they'll show up here once they accept.",
  },
};
export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Vertical: Story = {
  args: { action: <Button variant="solid" color="primary">Send first invite</Button> },
};
export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
    action: <Button size="sm" variant="bordered">Learn more</Button>,
  },
};
