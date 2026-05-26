import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Forms/Switch",
  component: Switch,
  tags: ["autodocs"],
  args: { children: "Email notifications" },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {};
export const On: Story = { args: { defaultSelected: true } };
export const Disabled: Story = { args: { isDisabled: true } };
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Switch size="sm">sm</Switch>
      <Switch size="md">md</Switch>
      <Switch size="lg">lg</Switch>
    </div>
  ),
};
