import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "./Hero";
import { Button } from "../Button";

const meta: Meta<typeof Hero> = {
  title: "Patterns/Hero",
  component: Hero,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj<typeof Hero>;

export const Split: Story = {
  args: {
    eyebrow: "Recruitment, redesigned",
    headline: "Hire faster, with less guesswork.",
    body: "Xeekrs matches your team with vetted candidates and tracks every step from referral to placement.",
    actions: (
      <>
        <Button color="primary" size="lg">Start free</Button>
        <Button variant="bordered" size="lg">Book a demo</Button>
      </>
    ),
    media: (
      <div style={{ background: "var(--muted)", aspectRatio: "4 / 3", borderRadius: 12 }} />
    ),
  },
};

export const StackedCenter: Story = {
  args: {
    orientation: "stacked",
    align: "center",
    headline: "Built for the way teams actually hire",
    body: "One source of truth for every referral, every conversation, every offer.",
    actions: <Button color="primary" size="lg">Start free</Button>,
  },
};
