import type { Meta, StoryObj } from "@storybook/react";
import { FilterSection } from "./FilterSection";
import { Checkbox } from "../Checkbox";

const meta: Meta<typeof FilterSection> = {
  title: "Recruitment/FilterSection",
  component: FilterSection,
  tags: ["autodocs"],
  args: { title: "Match level", activeCount: 2 },
};
export default meta;
type Story = StoryObj<typeof FilterSection>;

export const Default: Story = {
  args: {
    children: (
      <>
        <label className="flex items-center gap-2 text-sm"><Checkbox defaultSelected /> Great</label>
        <label className="flex items-center gap-2 text-sm"><Checkbox defaultSelected /> Good</label>
        <label className="flex items-center gap-2 text-sm"><Checkbox /> Fair</label>
      </>
    ),
  },
};
export const Collapsed: Story = { args: { defaultOpen: false, activeCount: 0 } };
