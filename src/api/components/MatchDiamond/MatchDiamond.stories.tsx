import type { Meta, StoryObj } from "@storybook/react";
import { MatchDiamond } from "./MatchDiamond";

const meta: Meta<typeof MatchDiamond> = {
  title: "Recruitment/MatchDiamond",
  component: MatchDiamond,
  tags: ["autodocs"],
  args: { level: "great", size: 24 },
  argTypes: { level: { control: "radio", options: ["great", "good", "fair"] } },
};
export default meta;
type Story = StoryObj<typeof MatchDiamond>;

export const Great: Story = {};
export const Good: Story = { args: { level: "good" } };
export const Fair: Story = { args: { level: "fair" } };
