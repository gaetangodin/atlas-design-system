import type { Meta, StoryObj } from "@storybook/react";
import { Spacer } from "./Spacer";

const meta: Meta<typeof Spacer> = { title: "Display/Spacer", component: Spacer, tags: ["autodocs"] };
export default meta;

type Story = StoryObj<typeof Spacer>;

export const Vertical: Story = {
  render: () => (
    <div style={{ background: "var(--muted)", padding: 8, width: 200 }}>
      <div>Above</div>
      <Spacer y={4} />
      <div>Below</div>
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span>Left</span>
      <Spacer x={4} />
      <span>Right</span>
    </div>
  ),
};
