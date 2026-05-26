import type { Meta, StoryObj } from "@storybook/react";
import { FAQ } from "./FAQ";

const meta: Meta<typeof FAQ> = {
  title: "Patterns/FAQ",
  component: FAQ,
  tags: ["autodocs"],
  args: {
    title: "Common questions",
    items: [
      { id: "billing",  question: "How does billing work?",      answer: "Monthly per seat, cancel anytime." },
      { id: "trial",    question: "Is there a free trial?",      answer: "Yes — 14 days, no credit card required." },
      { id: "security", question: "How do you handle our data?", answer: "AES-256 at rest, SOC 2 Type II in progress." },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof FAQ>;
export const Default: Story = {};
