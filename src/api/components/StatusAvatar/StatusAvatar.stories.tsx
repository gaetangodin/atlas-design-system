import type { Meta, StoryObj } from "@storybook/react";
import { StatusAvatar } from "./StatusAvatar";

const meta: Meta<typeof StatusAvatar> = {
  title: "Display/StatusAvatar",
  component: StatusAvatar,
  tags: ["autodocs"],
  args: { name: "MR" },
};
export default meta;

type Story = StoryObj<typeof StatusAvatar>;
export const Online: Story = { args: { status: "online" } };
export const Away: Story = { args: { status: "away" } };
export const Busy: Story = { args: { status: "busy" } };
export const Offline: Story = { args: { status: "offline" } };
export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <StatusAvatar name="A" status="online" />
      <StatusAvatar name="B" status="away" />
      <StatusAvatar name="C" status="busy" />
      <StatusAvatar name="D" status="offline" />
    </div>
  ),
};
