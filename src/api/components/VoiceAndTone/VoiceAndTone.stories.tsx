import type { Meta, StoryObj } from "@storybook/react";
import { VoiceAndTone } from "./VoiceAndTone";

const meta: Meta<typeof VoiceAndTone> = {
  title: "Brand/VoiceAndTone",
  component: VoiceAndTone,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof VoiceAndTone>;

export const Default: Story = {};
