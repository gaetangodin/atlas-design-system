import type { Meta, StoryObj } from "@storybook/react";
import { DisclosureBar } from "./DisclosureBar";

const meta: Meta<typeof DisclosureBar> = {
  title: "Shell/DisclosureBar",
  component: DisclosureBar,
  tags: ["autodocs"],
  args: { message: "This posting is shared with all caseworkers on the team." },
  argTypes: { variant: { control: "radio", options: ["default", "notice"] } },
};
export default meta;
type Story = StoryObj<typeof DisclosureBar>;
export const Default: Story = {};
export const Notice: Story = { args: { variant: "notice", message: "Heads up — this employer hasn't been verified yet." } };
