import type { Meta, StoryObj } from "@storybook/react";
import { DescriptionList } from "./DescriptionList";

const items = [
  { label: "Name", value: "Maya Rodriguez" },
  { label: "Role", value: "Senior Designer" },
  { label: "Location", value: "Vancouver, BC" },
  { label: "Email", value: "m.rodriguez@xeekrs.com" },
];

const meta: Meta<typeof DescriptionList> = {
  title: "Display/DescriptionList",
  component: DescriptionList,
  tags: ["autodocs"],
  args: { items },
};
export default meta;

type Story = StoryObj<typeof DescriptionList>;
export const Inline: Story = {};
export const Stacked: Story = { args: { layout: "stacked", divided: false } };
