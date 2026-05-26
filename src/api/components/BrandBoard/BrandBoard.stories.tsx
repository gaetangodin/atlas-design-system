import type { Meta, StoryObj } from "@storybook/react";
import { BrandBoard } from "./BrandBoard";

const meta: Meta<typeof BrandBoard> = {
  title: "Brand/BrandBoard",
  component: BrandBoard,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof BrandBoard>;

export const Default: Story = {};
