import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Navigation/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  args: { total: 12, initialPage: 1 },
};
export default meta;

type Story = StoryObj<typeof Pagination>;
export const Default: Story = {};
export const Small: Story = { args: { size: "sm" } };
export const Large: Story = { args: { size: "lg" } };
export const NoControls: Story = { args: { showControls: false } };
export const ManyPages: Story = { args: { total: 50, initialPage: 7 } };
