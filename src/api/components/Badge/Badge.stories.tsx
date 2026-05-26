import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Core/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: { children: "Active" },
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "bordered", "light", "flat", "faded", "shadow", "dot"],
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Solid: Story = { args: { variant: "solid", color: "primary" } };
export const Flat: Story = { args: { variant: "flat", color: "success" } };
export const Pill: Story = { args: { radius: "full", variant: "flat", color: "primary" } };

export const AllColors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {(["default", "primary", "secondary", "success", "warning", "danger"] as const).map((c) => (
        <Badge key={c} variant="flat" color={c}>
          {c}
        </Badge>
      ))}
    </div>
  ),
};
