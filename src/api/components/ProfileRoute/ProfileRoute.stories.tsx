import type { Meta, StoryObj } from "@storybook/react";
import { ProfileRoute } from "./ProfileRoute";
import { ProfileIdentityWell } from "../ProfileIdentityWell";
import { StatCard } from "../StatCard";
import { Tab, Tabs } from "../Tabs";
import { ReadinessBadge } from "../ReadinessBadge";

const meta: Meta<typeof ProfileRoute> = {
  title: "Routes/ProfileRoute",
  component: ProfileRoute,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ProfileRoute>;

export const Default: Story = {
  args: {
    identity: (
      <ProfileIdentityWell
        name="Avery Lin"
        role="Senior frontend engineer"
        location="Remote · Lisbon, PT"
        badges={<ReadinessBadge stage="Active" />}
      />
    ),
    kpis: (
      <>
        <StatCard label="Match" value="92%" caption="Top 3%" />
        <StatCard label="Applications" value="14" caption="last 30 days" />
        <StatCard label="Interviews" value="3" caption="this month" />
        <StatCard label="Offers" value="1" />
      </>
    ),
    tabs: (
      <Tabs aria-label="Profile sections">
        <Tab key="overview" title="Overview" />
        <Tab key="skills" title="Skills" />
        <Tab key="docs" title="Documents" />
      </Tabs>
    ),
    children: <div className="rounded-lg border border-dashed border-border p-8 text-sm text-muted-foreground">Tab body content</div>,
  },
};
