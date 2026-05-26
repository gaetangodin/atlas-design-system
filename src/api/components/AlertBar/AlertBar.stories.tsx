import type { Meta, StoryObj } from "@storybook/react";
import { Info } from "lucide-react";
import { AlertBar } from "./AlertBar";

const meta: Meta<typeof AlertBar> = {
  title: "Shell/AlertBar",
  component: AlertBar,
  tags: ["autodocs"],
  args: { message: "Scheduled maintenance Saturday 02:00–03:00.", onClose: () => {} },
  argTypes: { tone: { control: "select", options: ["info", "success", "warning", "danger"] } },
};
export default meta;
type Story = StoryObj<typeof AlertBar>;

export const Info_: Story = { args: { tone: "info", icon: <Info className="size-4" /> } };
export const Warning: Story = { args: { tone: "warning", message: "Verification email expired." } };
export const Danger: Story = { args: { tone: "danger", message: "Webhook delivery failing." } };
