import type { Meta, StoryObj } from "@storybook/react";
import { InternalNotesField } from "./InternalNotesField";

const meta: Meta<typeof InternalNotesField> = {
  title: "Posting/InternalNotesField",
  component: InternalNotesField,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof InternalNotesField>;

export const Default: Story = {};
export const Prefilled: Story = {
  args: { defaultValue: "Reviewer note: prefer candidates with B2B SaaS exposure." },
};
