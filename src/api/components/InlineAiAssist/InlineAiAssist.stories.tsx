import type { Meta, StoryObj } from "@storybook/react";
import { InlineAiAssist } from "./InlineAiAssist";

const meta: Meta<typeof InlineAiAssist> = {
  title: "Posting/InlineAiAssist",
  component: InlineAiAssist,
  tags: ["autodocs"],
  args: {
    prompt: "Want me to draft a tighter version of the summary?",
    suggestions: [
      { id: "tighten", label: "Tighten copy" },
      { id: "warmer", label: "Make it warmer" },
      { id: "bullets", label: "Convert to bullets" },
    ],
    onSuggest: () => {},
    footer: "You'll review the draft before it replaces the current copy.",
  },
};
export default meta;
type Story = StoryObj<typeof InlineAiAssist>;

export const Default: Story = {};
