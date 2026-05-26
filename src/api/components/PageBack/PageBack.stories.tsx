import type { Meta, StoryObj } from "@storybook/react";
import { PageBack } from "./PageBack";

const meta: Meta<typeof PageBack> = {
  title: "Shell/PageBack",
  component: PageBack,
  tags: ["autodocs"],
  args: { children: "Back to dashboard" },
  argTypes: { variant: { control: "radio", options: ["card", "pill"] } },
};
export default meta;

type Story = StoryObj<typeof PageBack>;

export const Card: Story = { args: { variant: "card", onClick: () => {} } };
export const Pill: Story = { args: { variant: "pill", children: "Announcements", onClick: () => {} } };
export const AsLink: Story = { args: { variant: "card", href: "/dashboard" } };
