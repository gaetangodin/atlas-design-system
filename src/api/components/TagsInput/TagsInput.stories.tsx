import type { Meta, StoryObj } from "@storybook/react";
import { TagsInput } from "./TagsInput";

const meta: Meta<typeof TagsInput> = {
  title: "Forms/TagsInput",
  component: TagsInput,
  tags: ["autodocs"],
  args: { label: "Skills", description: "Press comma or enter to add" },
};
export default meta;

type Story = StoryObj<typeof TagsInput>;
export const Empty: Story = {};
export const WithTags: Story = { args: { defaultValue: ["Figma", "React", "TypeScript"] } };
export const MaxFive: Story = { args: { maxTags: 5, placeholder: "Up to 5 keywords" } };
export const Disabled: Story = { args: { defaultValue: ["Locked"], isDisabled: true } };
