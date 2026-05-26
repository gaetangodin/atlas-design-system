import type { Meta, StoryObj } from "@storybook/react";
import { NumberInput } from "./NumberInput";

const meta: Meta<typeof NumberInput> = {
  title: "Forms/NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
  args: { label: "Years of experience", defaultValue: 3, minValue: 0, maxValue: 50 },
};
export default meta;

type Story = StoryObj<typeof NumberInput>;
export const Default: Story = {};
export const Currency: Story = {
  args: {
    label: "Hourly rate",
    defaultValue: 45,
    step: 5,
    formatOptions: { style: "currency", currency: "CAD" },
  },
};
export const HiddenStepper: Story = { args: { hideStepper: true } };
export const Invalid: Story = { args: { isInvalid: true, errorMessage: "Must be greater than 0." } };
