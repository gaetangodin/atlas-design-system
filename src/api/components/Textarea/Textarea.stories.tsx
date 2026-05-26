import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Forms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: { label: "Notes", placeholder: "What did the candidate mention?" },
};
export default meta;

type Story = StoryObj<typeof Textarea>;
export const Default: Story = {};
export const WithDescription: Story = { args: { description: "Tell us in 2–3 sentences." } };
export const Invalid: Story = {
  args: { isInvalid: true, errorMessage: "Please add at least one sentence." },
};
export const Capped: Story = { args: { label: "Bio", minRows: 4, maxRows: 8 } };
export const Disabled: Story = { args: { isDisabled: true } };
