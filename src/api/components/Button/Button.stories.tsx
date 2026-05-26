import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Core/Button",
  component: Button,
  tags: ["autodocs"],
  args: { children: "Save changes" },
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "bordered", "light", "flat", "faded", "shadow", "ghost"],
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
    radius: { control: "select", options: ["none", "sm", "md", "lg", "full"] },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: "solid", color: "primary" } };
export const Danger: Story = { args: { variant: "solid", color: "danger", children: "Delete account" } };
export const Flat: Story = { args: { variant: "flat", color: "primary" } };
export const Bordered: Story = { args: { variant: "bordered", children: "Cancel" } };
export const Loading: Story = { args: { isLoading: true, children: "Saving…" } };
export const Disabled: Story = { args: { isDisabled: true } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {(["solid", "bordered", "light", "flat", "faded", "shadow", "ghost"] as const).map((v) => (
        <Button key={v} variant={v} color="primary">
          {v}
        </Button>
      ))}
    </div>
  ),
};
