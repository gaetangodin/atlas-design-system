import type { Meta, StoryObj } from "@storybook/react";
import { TypographyScale } from "./TypographyScale";

const meta: Meta<typeof TypographyScale> = {
  title: "Brand/TypographyScale",
  component: TypographyScale,
  tags: ["autodocs"],
  args: { variant: "product" },
  argTypes: { variant: { control: "radio", options: ["product", "marketing"] } },
};
export default meta;

type Story = StoryObj<typeof TypographyScale>;

export const Product: Story = {};
export const Marketing: Story = { args: { variant: "marketing" } };
