import type { Meta, StoryObj } from "@storybook/react";
import { GradientToken } from "./GradientToken";

const meta: Meta<typeof GradientToken> = {
  title: "Brand/GradientToken",
  component: GradientToken,
  tags: ["autodocs"],
  argTypes: { name: { control: "select", options: ["subtle", "spark", "hero", "warmth"] } },
};
export default meta;
type Story = StoryObj<typeof GradientToken>;

export const Subtle: Story = { args: { name: "subtle" } };
export const Spark: Story = { args: { name: "spark" } };
export const Hero: Story = { args: { name: "hero" } };
export const Warmth: Story = { args: { name: "warmth" } };
