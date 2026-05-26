import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, Tab } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs aria-label="Referrals view">
      <Tab key="active" title="Active">Active referrals…</Tab>
      <Tab key="drafts" title="Drafts">Drafts…</Tab>
      <Tab key="archived" title="Archived">Archived…</Tab>
    </Tabs>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Tabs aria-label="sm" size="sm">
        <Tab key="a" title="Small" />
        <Tab key="b" title="Tabs" />
      </Tabs>
      <Tabs aria-label="md" size="md">
        <Tab key="a" title="Medium" />
        <Tab key="b" title="Tabs" />
      </Tabs>
      <Tabs aria-label="lg" size="lg">
        <Tab key="a" title="Large" />
        <Tab key="b" title="Tabs" />
      </Tabs>
    </div>
  ),
};

export const Light: Story = {
  render: () => (
    <Tabs aria-label="sub-nav" variant="light" size="sm">
      <Tab key="all" title="All" />
      <Tab key="mine" title="Assigned to me" />
      <Tab key="open" title="Open" />
    </Tabs>
  ),
};
