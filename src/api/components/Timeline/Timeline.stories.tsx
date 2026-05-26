import type { Meta, StoryObj } from "@storybook/react";
import { Timeline } from "./Timeline";

const meta: Meta<typeof Timeline> = {
  title: "Display/Timeline",
  component: Timeline,
  tags: ["autodocs"],
  args: {
    events: [
      { id: "1", title: "Referral created",   meta: "Today, 9:14am",   tone: "primary" },
      { id: "2", title: "Profile reviewed",   description: "By the hiring team", meta: "Today, 10:02am" },
      { id: "3", title: "Match recommended",  meta: "Today, 11:30am",  tone: "success" },
      { id: "4", title: "Awaiting candidate", meta: "Today, 12:15pm",  tone: "warning" },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof Timeline>;
export const Default: Story = {};
