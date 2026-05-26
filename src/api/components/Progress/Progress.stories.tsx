import type { Meta, StoryObj } from "@storybook/react";
import { Progress, CircularProgress } from "./Progress";

const meta: Meta = { title: "Feedback/Progress" };
export default meta;

type Story = StoryObj;

export const Linear: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Progress label="Onboarding" value={3} maxValue={5} valueLabel="3 of 5" showValueLabel />
    </div>
  ),
};

export const Indeterminate: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Progress isIndeterminate label="Uploading…" />
    </div>
  ),
};

export const Circular: Story = {
  render: () => (
    <CircularProgress label="Match quality" value={68} showValueLabel formatOptions={{ style: "percent" }} />
  ),
};
