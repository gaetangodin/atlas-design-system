import type { Meta, StoryObj } from "@storybook/react";
import { NotificationBadge } from "./NotificationBadge";
import { Avatar } from "../Avatar";

const meta: Meta<typeof NotificationBadge> = {
  title: "Display/NotificationBadge",
  component: NotificationBadge,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof NotificationBadge>;

export const Count: Story = {
  render: () => (
    <NotificationBadge content="4">
      <Avatar name="Maya" />
    </NotificationBadge>
  ),
};

export const Dot: Story = {
  render: () => (
    <NotificationBadge>
      <Avatar name="Maya" />
    </NotificationBadge>
  ),
};

export const Hidden: Story = {
  render: () => (
    <NotificationBadge isInvisible content="0">
      <Avatar name="Maya" />
    </NotificationBadge>
  ),
};
