import type { Meta, StoryObj } from "@storybook/react";
import { ColorPicker } from "./ColorPicker";

const meta: Meta<typeof ColorPicker> = {
  title: "Forms/ColorPicker",
  component: ColorPicker,
  tags: ["autodocs"],
  args: { label: "Accent color" },
};
export default meta;

type Story = StoryObj<typeof ColorPicker>;
export const Default: Story = {};
export const Restricted: Story = {
  args: { swatches: ["#0c2120", "#4c6fdc", "#10b981", "#f31260"], customInput: false },
};
export const NoCustomInput: Story = { args: { customInput: false } };
