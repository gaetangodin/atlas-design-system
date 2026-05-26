import type { Meta, StoryObj } from "@storybook/react";
import { TemplateCard } from "./TemplateCard";

const meta: Meta<typeof TemplateCard> = {
  title: "Posting/TemplateCard",
  component: TemplateCard,
  tags: ["autodocs"],
  args: {
    title: "Frontend Engineer",
    description: "Mid–senior · Remote-friendly",
    meta: "Used in 14 postings",
    onSelect: () => {},
  },
};
export default meta;
type Story = StoryObj<typeof TemplateCard>;

export const Default: Story = {};
export const Selected: Story = { args: { isSelected: true } };
export const Disabled: Story = { args: { isDisabled: true } };
