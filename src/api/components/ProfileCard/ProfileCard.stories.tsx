import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";
import { Button } from "../Button";

const meta: Meta<typeof ProfileCard> = {
  title: "Patterns/ProfileCard",
  component: ProfileCard,
  tags: ["autodocs"],
  args: {
    name: "Maya Rodriguez",
    role: "Senior Designer",
    bio: "Leads design for the recruitment platform.",
    initials: "MR",
    meta: "Vancouver, BC · joined 2024",
  },
  decorators: [(Story) => <div style={{ maxWidth: 380 }}><Story /></div>],
};
export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Stacked: Story = {
  args: {
    actions: (
      <>
        <Button variant="bordered" size="sm">Message</Button>
        <Button color="primary" size="sm">View profile</Button>
      </>
    ),
  },
};

export const Row: Story = {
  args: {
    orientation: "row",
    actions: <Button size="sm">View</Button>,
  },
};
