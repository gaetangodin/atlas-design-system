import type { Meta, StoryObj } from "@storybook/react";
import { VerticalTabs, VerticalTab } from "./VerticalTabs";

const meta: Meta<typeof VerticalTabs> = {
  title: "Navigation/VerticalTabs",
  component: VerticalTabs,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof VerticalTabs>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 220 }}>
      <VerticalTabs aria-label="Settings sections">
        <VerticalTab key="profile" title="Profile" />
        <VerticalTab key="notifications" title="Notifications" />
        <VerticalTab key="billing" title="Billing" />
        <VerticalTab key="team" title="Team" />
        <VerticalTab key="integrations" title="Integrations" />
      </VerticalTabs>
    </div>
  ),
};
