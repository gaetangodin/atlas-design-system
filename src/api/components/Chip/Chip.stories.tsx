import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Core/Chip",
  component: Chip,
  tags: ["autodocs"],
  args: { children: "Primary" },
  argTypes: {
    variant: { control: "select", options: ["solid", "flat", "bordered", "light", "shadow", "dot"] },
    color: { control: "select", options: ["default", "primary", "secondary", "success", "warning", "danger"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = { args: { color: "primary", variant: "flat" } };
export const Bordered: Story = { args: { color: "default", variant: "bordered" } };
export const Dot: Story = { args: { color: "success", variant: "dot", children: "live" } };
export const Danger: Story = { args: { color: "danger", children: "overdue" } };
