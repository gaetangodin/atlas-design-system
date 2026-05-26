import type { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "./StatCard";

const meta: Meta<typeof StatCard> = {
  title: "Display/StatCard",
  component: StatCard,
  tags: ["autodocs"],
  args: { label: "Active referrals", value: "128" },
  argTypes: { deltaTone: { control: "select", options: ["neutral", "positive", "negative"] } },
};
export default meta;

type Story = StoryObj<typeof StatCard>;

export const Positive: Story = {
  args: { delta: "+12%", deltaTone: "positive", caption: "vs. last month" },
};
export const Negative: Story = {
  args: { label: "Match rate", value: "68%", delta: "−3 pts", deltaTone: "negative", caption: "week over week" },
};
export const Plain: Story = { args: { label: "Avg. time to placement", value: "14d" } };

export const Grid: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
      <StatCard label="Active" value="128" delta="+12%" deltaTone="positive" />
      <StatCard label="Match rate" value="68%" delta="−3 pts" deltaTone="negative" />
      <StatCard label="Time to place" value="14d" delta="unchanged" />
    </div>
  ),
};
