import type { Meta, StoryObj } from "@storybook/react";
import { SiteSwitcherTrigger } from "./SiteSwitcherTrigger";

const meta: Meta<typeof SiteSwitcherTrigger> = {
  title: "Shell/SiteSwitcherTrigger",
  component: SiteSwitcherTrigger,
  tags: ["autodocs"],
  args: { siteName: "Marble University HQ", initials: "MU", onOpen: () => {} },
  argTypes: { variant: { control: "radio", options: ["default", "onTint"] } },
};
export default meta;
type Story = StoryObj<typeof SiteSwitcherTrigger>;

export const Default: Story = {};
export const OnTint: Story = {
  args: { variant: "onTint" },
  decorators: [(Story) => <div style={{ background: "#0C2120", padding: 16 }}><Story /></div>],
};
export const Collapsed: Story = { args: { collapsed: true } };
