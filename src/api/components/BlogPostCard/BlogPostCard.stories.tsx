import type { Meta, StoryObj } from "@storybook/react";
import { BlogPostCard } from "./BlogPostCard";

const meta: Meta<typeof BlogPostCard> = {
  title: "Patterns/BlogPostCard",
  component: BlogPostCard,
  tags: ["autodocs"],
  args: {
    coverUrl: "https://picsum.photos/seed/atlas-blog/640/360",
    meta: "Academy · 4 min read",
    title: "How match quality works",
    excerpt: "Behind every match is a score — here's what goes into it and how to read it.",
    href: "#",
  },
  decorators: [(Story) => <div style={{ maxWidth: 360 }}><Story /></div>],
};
export default meta;

type Story = StoryObj<typeof BlogPostCard>;
export const Default: Story = {};
export const NoCover: Story = { args: { coverUrl: undefined } };
