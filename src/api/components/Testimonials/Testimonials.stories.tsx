import type { Meta, StoryObj } from "@storybook/react";
import { Testimonials } from "./Testimonials";

const meta: Meta<typeof Testimonials> = {
  title: "Patterns/Testimonials",
  component: Testimonials,
  tags: ["autodocs"],
  args: {
    columns: 3,
    items: [
      { id: "a", quote: "We cut time-to-placement by 40% in the first quarter.", name: "Maya Rodriguez", role: "Head of People, Acme", initials: "MR" },
      { id: "b", quote: "Finally a tool where the audit trail is the default, not an afterthought.", name: "Jin Kim", role: "Engineering Director, Beam", initials: "JK" },
      { id: "c", quote: "The match scoring is uncanny — we trust it more than gut.", name: "Ana Torres", role: "Recruiter, Comet", initials: "AT" },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof Testimonials>;
export const Default: Story = {};
