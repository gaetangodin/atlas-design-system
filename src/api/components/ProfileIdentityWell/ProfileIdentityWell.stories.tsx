import type { Meta, StoryObj } from "@storybook/react";
import { ProfileIdentityWell } from "./ProfileIdentityWell";
import { ReadinessBadge } from "../ReadinessBadge";

const meta: Meta<typeof ProfileIdentityWell> = {
  title: "Recruitment/ProfileIdentityWell",
  component: ProfileIdentityWell,
  tags: ["autodocs"],
  args: {
    name: "Avery Lin",
    role: "Senior frontend engineer",
    location: "Remote · Lisbon, PT",
    badges: <ReadinessBadge stage="Active" />,
    footer: "5 years · React, TypeScript, accessibility",
  },
};
export default meta;
type Story = StoryObj<typeof ProfileIdentityWell>;

export const Named: Story = {};
export const Anonymous: Story = { args: { isAnonymous: true, name: "Pending candidate" } };
