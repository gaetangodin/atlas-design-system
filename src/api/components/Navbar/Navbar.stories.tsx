import type { Meta, StoryObj } from "@storybook/react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "./Navbar";
import { Avatar } from "../Avatar";
import { Link } from "../Link";

const meta: Meta<typeof Navbar> = {
  title: "Navigation/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: () => (
    <Navbar maxWidth="xl">
      <NavbarBrand>
        <span style={{ fontWeight: 500 }}>Xeekrs</span>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem><Link href="#">Dashboard</Link></NavbarItem>
        <NavbarItem isActive><Link href="#">Referrals</Link></NavbarItem>
        <NavbarItem><Link href="#">Messages</Link></NavbarItem>
        <NavbarItem><Link href="#">Settings</Link></NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Avatar name="Maya" size="sm" />
      </NavbarContent>
    </Navbar>
  ),
};
