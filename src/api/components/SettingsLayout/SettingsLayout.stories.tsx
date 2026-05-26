import type { Meta, StoryObj } from "@storybook/react";
import { SettingsLayout } from "./SettingsLayout";
import { VerticalTabs, VerticalTab } from "../VerticalTabs";
import { useState } from "react";

function Demo() {
  const [section, setSection] = useState<string | number>("profile");
  return (
    <SettingsLayout
      title="Settings"
      description="Manage your profile, team, billing, and integrations."
      nav={
        <VerticalTabs aria-label="Settings" selectedKey={section} onSelectionChange={setSection}>
          <VerticalTab key="profile" title="Profile" />
          <VerticalTab key="notifications" title="Notifications" />
          <VerticalTab key="billing" title="Billing" />
          <VerticalTab key="team" title="Team" />
        </VerticalTabs>
      }
    >
      <div style={{ padding: 16, background: "var(--card)", border: "0.5px solid var(--border)", borderRadius: 12 }}>
        Section: {String(section)}
      </div>
    </SettingsLayout>
  );
}

const meta: Meta = { title: "Patterns/SettingsLayout" };
export default meta;

type Story = StoryObj;
export const Default: Story = { render: () => <Demo /> };
