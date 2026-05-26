import type { Meta, StoryObj } from "@storybook/react";
import { InterviewPipelineStepper, type PipelineStage } from "./InterviewPipelineStepper";

const STAGES: PipelineStage[] = [
  { id: "requested", label: "Requested", caption: "Awaiting confirmation.", state: "done" },
  { id: "confirmed", label: "Confirmed", caption: "Scheduled.", state: "active" },
  { id: "completed", label: "Completed", caption: "Recap can be filed.", state: "pending" },
];

const meta: Meta<typeof InterviewPipelineStepper> = {
  title: "Recruitment/InterviewPipelineStepper",
  component: InterviewPipelineStepper,
  tags: ["autodocs"],
  args: { stages: STAGES, summary: "Currently: Confirmed" },
  argTypes: { variant: { control: "radio", options: ["full", "compact"] } },
};
export default meta;
type Story = StoryObj<typeof InterviewPipelineStepper>;

export const Full: Story = {};
export const Compact: Story = { args: { variant: "compact" } };
export const Interactive: Story = { args: { onSelectStage: () => {} } };
