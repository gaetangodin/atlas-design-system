import type { Meta, StoryObj } from "@storybook/react";
import { ConsentAlertBar } from "./ConsentAlertBar";

const meta: Meta<typeof ConsentAlertBar> = {
  title: "Shell/ConsentAlertBar",
  component: ConsentAlertBar,
  tags: ["autodocs"],
  args: {
    displayName: "Pending candidate",
    participantRole: "Senior backend engineer",
    location: "Hybrid · Amsterdam",
    metaHint: "Sent 12m ago",
    avatarInitials: "PC",
    onViewTerms: () => {},
    onAccept: () => {},
    onRevoke: () => {},
  },
  argTypes: { perspective: { control: "radio", options: ["staff", "client"] } },
};
export default meta;
type Story = StoryObj<typeof ConsentAlertBar>;

export const Staff: Story = { args: { perspective: "staff" } };
export const Client: Story = {
  args: { perspective: "client", displayName: "Marble University", avatarInitials: "MU" },
};
