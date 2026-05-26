import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button";

const meta: Meta<typeof Tooltip> = { title: "Overlays/Tooltip", component: Tooltip, tags: ["autodocs"] };
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip content="Archive this referral">
      <Button>Hover or focus me</Button>
    </Tooltip>
  ),
};
export const Placements: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, padding: 40 }}>
      {(["top", "right", "bottom", "left"] as const).map((p) => (
        <Tooltip key={p} placement={p} content={p}>
          <Button variant="bordered" size="sm">{p}</Button>
        </Tooltip>
      ))}
    </div>
  ),
};
