import type { Meta, StoryObj } from "@storybook/react";
import { AnonymousProfileCard } from "./AnonymousProfileCard";
import { ReadinessBadge } from "../ReadinessBadge";
import { Button } from "../Button";

const meta: Meta<typeof AnonymousProfileCard> = {
  title: "Recruitment/AnonymousProfileCard",
  component: AnonymousProfileCard,
  tags: ["autodocs"],
  args: {
    name: "Pending candidate",
    isAnonymous: true,
    role: "Senior backend engineer",
    location: "Hybrid · Amsterdam",
    identityBadges: <ReadinessBadge stage="Active" />,
    toolbarTrailing: <Button size="sm" color="primary">Send connection</Button>,
    footer: "Profile unlocks after the candidate accepts the connection request.",
  },
};
export default meta;
type Story = StoryObj<typeof AnonymousProfileCard>;

export const Anonymous: Story = {};
export const Named: Story = { args: { isAnonymous: false, name: "Avery Lin" } };
