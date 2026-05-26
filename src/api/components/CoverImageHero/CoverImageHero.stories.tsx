import type { Meta, StoryObj } from "@storybook/react";
import { CoverImageHero } from "./CoverImageHero";
import { Button } from "../Button";

const meta: Meta<typeof CoverImageHero> = {
  title: "Shell/CoverImageHero",
  component: CoverImageHero,
  tags: ["autodocs"],
  args: {
    title: "Welcome back, recruiter",
    subtitle: "3 new applicants since you last visited.",
  },
  argTypes: { tone: { control: "radio", options: ["none", "dark", "gradient"] } },
};
export default meta;
type Story = StoryObj<typeof CoverImageHero>;

export const Gradient: Story = {
  args: {
    tone: "gradient",
    bottomRight: <Button color="primary">Review queue</Button>,
  },
};
export const Dark: Story = {
  args: {
    tone: "dark",
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
  },
};
export const Plain: Story = { args: { tone: "none" } };
