import type { Meta, StoryObj } from "@storybook/react";
import { BulletinRow } from "./BulletinRow";

const meta: Meta<typeof BulletinRow> = {
  title: "Shell/BulletinRow",
  component: BulletinRow,
  tags: ["autodocs"],
  args: {
    title: "New cohort enrolled in Foundations track",
    meta: "2h ago",
    description: "14 learners joined this morning.",
    onClick: () => {},
  },
  argTypes: { tone: { control: "select", options: ["info", "success", "warning", "danger", "neutral"] } },
};
export default meta;
type Story = StoryObj<typeof BulletinRow>;

export const Info_: Story = { args: { tone: "info", isUnread: true } };
export const Success_: Story = { args: { tone: "success" } };
export const Danger_: Story = { args: { tone: "danger", title: "Integration check failed for Stripe" } };
