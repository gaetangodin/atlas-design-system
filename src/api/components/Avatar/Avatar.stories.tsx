import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarGroup } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: { name: "MR" },
  argTypes: { size: { control: "select", options: ["sm", "md", "lg"] } },
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Initials: Story = {};
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Avatar name="SM" size="sm" />
      <Avatar name="MD" size="md" />
      <Avatar name="LG" size="lg" />
    </div>
  ),
};
export const Group: Story = {
  render: () => (
    <AvatarGroup max={3}>
      <Avatar name="A" />
      <Avatar name="B" />
      <Avatar name="C" />
      <Avatar name="D" />
      <Avatar name="E" />
    </AvatarGroup>
  ),
};
