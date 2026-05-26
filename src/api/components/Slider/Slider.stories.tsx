import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Forms/Slider",
  component: Slider,
  tags: ["autodocs"],
  args: { label: "Match score", defaultValue: 64, minValue: 0, maxValue: 100 },
};
export default meta;

type Story = StoryObj<typeof Slider>;
export const Single: Story = {};
export const Range: Story = {
  args: {
    label: "Salary range",
    defaultValue: [60000, 120000],
    minValue: 0,
    maxValue: 250000,
    step: 5000,
    formatOptions: { style: "currency", currency: "USD", maximumFractionDigits: 0 },
    showTooltip: true,
  },
};
export const Steps: Story = { args: { step: 10, showSteps: true } };
export const Disabled: Story = { args: { isDisabled: true } };
