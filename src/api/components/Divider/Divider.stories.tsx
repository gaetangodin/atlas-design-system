import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = { title: "Display/Divider", component: Divider, tags: ["autodocs"] };
export default meta;

type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <p>Section A</p>
      <Divider />
      <p>Section B</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: "flex", height: 24, alignItems: "center", gap: 12 }}>
      <span>Item</span>
      <Divider orientation="vertical" />
      <span>Next</span>
      <Divider orientation="vertical" />
      <span>Last</span>
    </div>
  ),
};
