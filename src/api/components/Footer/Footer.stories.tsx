import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Patterns/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    brand: "Xeekrs",
    tagline: "Recruitment built around the way teams actually work.",
    columns: [
      {
        id: "product", title: "Product",
        links: [
          { label: "Referrals", href: "#" },
          { label: "Match scoring", href: "#" },
          { label: "Pricing", href: "#" },
        ],
      },
      {
        id: "company", title: "Company",
        links: [
          { label: "About", href: "#" },
          { label: "Careers", href: "#" },
          { label: "Contact", href: "#" },
        ],
      },
      {
        id: "legal", title: "Legal",
        links: [
          { label: "Privacy", href: "#" },
          { label: "Terms", href: "#" },
          { label: "Security", href: "#" },
        ],
      },
    ],
    bottomLeft: <span>© 2026 Xeekrs Inc.</span>,
    bottomRight: <span>Made with care in Vancouver</span>,
  },
};
