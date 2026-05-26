import type { Meta, StoryObj } from "@storybook/react";
import { SubNav } from "./SubNav";
import { PageBack } from "../PageBack";
import { Button } from "../Button";

const meta: Meta<typeof SubNav> = {
  title: "Shell/SubNav",
  component: SubNav,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof SubNav>;

export const Default: Story = {
  args: {
    left: <PageBack variant="pill" onClick={() => {}}>Announcements</PageBack>,
    right: <Button size="sm" variant="flat">Edit</Button>,
  },
};
export const LeftOnly: Story = {
  args: { left: <PageBack variant="pill" onClick={() => {}}>Help Desk</PageBack> },
};
