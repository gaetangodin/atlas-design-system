import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Forms/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  args: { children: "Bold" },
};
export default meta;

type Story = StoryObj<typeof Toggle>;
export const Idle: Story = {};
export const Pressed: Story = { args: { defaultPressed: true } };
export const Disabled: Story = { args: { isDisabled: true } };
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8 }}>
      <Toggle size="sm">sm</Toggle>
      <Toggle size="md">md</Toggle>
      <Toggle size="lg">lg</Toggle>
    </div>
  ),
};
