import type { Meta, StoryObj } from "@storybook/react";
import { Phone } from "lucide-react";
import { QuickActionButton } from "./QuickActionButton";

const meta: Meta<typeof QuickActionButton> = {
  title: "Recruitment/QuickActionButton",
  component: QuickActionButton,
  tags: ["autodocs"],
  args: { icon: <Phone className="size-4" />, label: "Call", tooltip: "Call Avery", onClick: () => {} },
  argTypes: { labelMode: { control: "radio", options: ["auto", "always", "never"] } },
};
export default meta;
type Story = StoryObj<typeof QuickActionButton>;

export const Auto: Story = {};
export const LabelAlways: Story = { args: { labelMode: "always" } };
export const IconOnly: Story = { args: { labelMode: "never" } };
