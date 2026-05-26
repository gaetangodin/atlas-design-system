import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Building2, HelpCircle, Settings, User } from "lucide-react";
import { AccountMenu, type AccountMenuItem } from "./AccountMenu";

const ITEMS: AccountMenuItem[] = [
  { id: "profile", label: "Account Profile", icon: <User className="size-4" /> },
  { id: "workspaces", label: "Workspaces", icon: <Building2 className="size-4" /> },
  { id: "help", label: "Help Center", icon: <HelpCircle className="size-4" /> },
  { id: "settings", label: "Settings", icon: <Settings className="size-4" /> },
];

const meta: Meta<typeof AccountMenu> = {
  title: "Shell/AccountMenu",
  component: AccountMenu,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AccountMenu>;

export const Expanded: Story = {
  render: () => {
    const [active, setActive] = useState("profile");
    return (
      <div style={{ width: 260, border: "1px solid var(--border)", borderRadius: 8 }}>
        <AccountMenu items={ITEMS} activeId={active} onSelect={setActive} />
      </div>
    );
  },
};

export const Collapsed: Story = {
  render: () => {
    const [active, setActive] = useState("profile");
    return (
      <div style={{ width: 64, border: "1px solid var(--border)", borderRadius: 8 }}>
        <AccountMenu items={ITEMS} activeId={active} onSelect={setActive} isCollapsed />
      </div>
    );
  },
};
