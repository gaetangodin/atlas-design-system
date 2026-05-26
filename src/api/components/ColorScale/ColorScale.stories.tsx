import type { Meta, StoryObj } from "@storybook/react";
import { ColorScale } from "./ColorScale";

const meta: Meta<typeof ColorScale> = {
  title: "Brand/ColorScale",
  component: ColorScale,
  tags: ["autodocs"],
  args: { ramp: "lavender", showValues: true },
  argTypes: {
    ramp: {
      control: "select",
      options: ["stone", "lavender", "earth", "emerald", "canary", "pink", "orange"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof ColorScale>;

export const Lavender: Story = {};
export const Earth: Story = { args: { ramp: "earth" } };
export const Emerald: Story = { args: { ramp: "emerald" } };
export const Canary: Story = { args: { ramp: "canary" } };
export const Pink: Story = { args: { ramp: "pink" } };
export const Stone: Story = { args: { ramp: "stone" } };
export const Orange: Story = { args: { ramp: "orange" } };
