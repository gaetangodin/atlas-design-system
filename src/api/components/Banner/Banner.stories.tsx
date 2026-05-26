import type { Meta, StoryObj } from "@storybook/react";
import { Banner } from "./Banner";
import { Button } from "../Button";

const meta: Meta<typeof Banner> = {
  title: "Feedback/Banner",
  component: Banner,
  tags: ["autodocs"],
  args: { children: "Your trial ends in 3 days." },
  argTypes: {
    tone: { control: "select", options: ["neutral", "info", "success", "warning", "danger"] },
  },
};
export default meta;

type Story = StoryObj<typeof Banner>;
export const Neutral: Story = {};
export const Warning: Story = { args: { tone: "warning", action: <Button size="sm">Upgrade</Button> } };
export const Success: Story = { args: { tone: "success", children: "All changes saved." } };
export const Closable: Story = { args: { tone: "info", onClose: () => {} } };
