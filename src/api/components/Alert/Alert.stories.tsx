import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Feedback/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: { title: "Referral submitted", description: "We'll notify the hiring team within 48 hours." },
  argTypes: {
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Success: Story = { args: { color: "success" } };
export const Warning: Story = {
  args: { color: "warning", title: "Profile incomplete", description: "Add a phone number to unlock SMS check-ins." },
};
export const Danger: Story = {
  args: { color: "danger", title: "Submission failed", description: "Check your connection and retry." },
};
export const Neutral: Story = { args: { color: "default" } };
