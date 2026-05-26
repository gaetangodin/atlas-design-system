import type { Meta, StoryObj } from "@storybook/react";
import { ReadinessBadge } from "./ReadinessBadge";

const meta: Meta<typeof ReadinessBadge> = {
  title: "Recruitment/ReadinessBadge",
  component: ReadinessBadge,
  tags: ["autodocs"],
  argTypes: { stage: { control: "select", options: ["Interview-Ready", "Active", "Training Phase", "Other"] } },
};
export default meta;
type Story = StoryObj<typeof ReadinessBadge>;

export const InterviewReady: Story = { args: { stage: "Interview-Ready" } };
export const Active: Story = { args: { stage: "Active" } };
export const TrainingPhase: Story = { args: { stage: "Training Phase" } };
export const Other: Story = { args: { stage: "Other" } };
