import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "Core/Link",
  component: Link,
  tags: ["autodocs"],
  args: { href: "#", children: "View referrals" },
};
export default meta;

type Story = StoryObj<typeof Link>;
export const Default: Story = {};
export const External: Story = { args: { href: "https://example.com", isExternal: true, showAnchorIcon: true, children: "Docs" } };
export const AlwaysUnderlined: Story = { args: { underline: "always", children: "Always-underlined link" } };
