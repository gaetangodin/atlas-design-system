import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "./Stepper";

const steps = [
  { id: "profile", label: "Profile", description: "Basic info" },
  { id: "skills", label: "Skills", description: "3 added" },
  { id: "match", label: "Match", description: "In progress" },
  { id: "submit", label: "Submit", description: "Pending" },
];

const meta: Meta<typeof Stepper> = {
  title: "Navigation/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  args: { steps, current: 2 },
};
export default meta;

type Story = StoryObj<typeof Stepper>;

export const Horizontal: Story = {};
export const Vertical: Story = { args: { orientation: "vertical" } };
export const FirstStep: Story = { args: { current: 0 } };
export const Complete: Story = { args: { current: 4 } };
