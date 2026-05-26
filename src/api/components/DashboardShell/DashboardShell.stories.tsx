import type { Meta, StoryObj } from "@storybook/react";
import { DashboardShell } from "./DashboardShell";
import { Sidebar } from "../Sidebar";
import { Container } from "../Container";
import { Stack } from "../Stack";
import { StatCard } from "../StatCard";

const Glyph = (path: string) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d={path} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: Glyph("M3 9 12 2l9 7v11a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z") },
  { id: "referrals", label: "Referrals", icon: Glyph("M5 21a7 7 0 0 1 14 0"), badge: "12" },
  { id: "messages",  label: "Messages",  icon: Glyph("M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z") },
];

const meta: Meta<typeof DashboardShell> = {
  title: "Patterns/DashboardShell",
  component: DashboardShell,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj<typeof DashboardShell>;

export const Default: Story = {
  render: () => (
    <DashboardShell
      sidebar={<Sidebar items={navItems} activeId="dashboard" brand={<strong>Xeekrs</strong>} />}
      topbar={<div style={{ width: "100%", fontWeight: 500 }}>Dashboard</div>}
    >
      <Container>
        <Stack gap={6}>
          <h1 style={{ fontSize: 28, fontWeight: 600, margin: 0 }}>Overview</h1>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            <StatCard label="Active referrals" value="128" delta="+12%" deltaTone="positive" />
            <StatCard label="Match rate" value="68%" delta="−3 pts" deltaTone="negative" />
            <StatCard label="Time to place" value="14d" />
          </div>
        </Stack>
      </Container>
    </DashboardShell>
  ),
};
