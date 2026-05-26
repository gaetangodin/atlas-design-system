import type { Meta, StoryObj } from "@storybook/react";
import { AiGeneratedBadge } from "./AiGeneratedBadge";

const meta: Meta<typeof AiGeneratedBadge> = {
  title: "Posting/AiGeneratedBadge",
  component: AiGeneratedBadge,
  tags: ["autodocs"],
  argTypes: { tone: { control: "radio", options: ["subtle", "solid"] } },
};
export default meta;
type Story = StoryObj<typeof AiGeneratedBadge>;

export const Subtle: Story = { args: { tone: "subtle" } };
export const Solid: Story = { args: { tone: "solid" } };
export const NoIcon: Story = { args: { hideIcon: true, children: "AI draft" } };
