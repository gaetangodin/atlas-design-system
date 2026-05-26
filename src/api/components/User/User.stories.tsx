import type { Meta, StoryObj } from "@storybook/react";
import { User } from "./User";

const meta: Meta<typeof User> = {
  title: "Display/User",
  component: User,
  tags: ["autodocs"],
  args: {
    name: "Maya Rodriguez",
    description: "Senior Designer · Vancouver",
    avatarProps: { name: "MR" },
  },
};
export default meta;

type Story = StoryObj<typeof User>;
export const Default: Story = {};
export const NoDescription: Story = { args: { description: undefined } };
