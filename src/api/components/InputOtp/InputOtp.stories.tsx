import type { Meta, StoryObj } from "@storybook/react";
import { InputOtp } from "./InputOtp";

const meta: Meta<typeof InputOtp> = {
  title: "Forms/InputOtp",
  component: InputOtp,
  tags: ["autodocs"],
  args: { length: 6 },
};
export default meta;

type Story = StoryObj<typeof InputOtp>;
export const SixDigit: Story = {};
export const FourDigit: Story = { args: { length: 4 } };
export const Disabled: Story = { args: { isDisabled: true } };
export const Invalid: Story = { args: { isInvalid: true } };
