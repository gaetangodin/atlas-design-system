import type { Meta, StoryObj } from "@storybook/react";
import {
  AnalyticsDashboard,
  CoachingDashboard,
  AdminPanel,
  JobExplorer,
  CareerHubDashboard,
} from "./Dashboards";
import { StatCard } from "../StatCard";
import { BarChart } from "../Charts";

const KPIS = (
  <>
    <StatCard label="MRR" value="$48,210" delta="+12%" deltaTone="positive" />
    <StatCard label="Active users" value="1,284" delta="+3%" deltaTone="positive" />
    <StatCard label="Churn" value="2.4%" delta="-0.6%" deltaTone="negative" />
    <StatCard label="NPS" value="68" />
  </>
);

const CHARTS = (
  <>
    <div className="rounded-lg border border-border bg-card p-4">
      <p className="mb-2 text-xs uppercase text-muted-foreground">Revenue</p>
      <BarChart data={[{ m: "Jan", v: 4200 }, { m: "Feb", v: 5100 }, { m: "Mar", v: 4800 }]} xKey="m" series={[{ key: "v", label: "USD" }]} />
    </div>
    <div className="rounded-lg border border-border bg-card p-4">
      <p className="mb-2 text-xs uppercase text-muted-foreground">Engagement</p>
      <BarChart data={[{ m: "Jan", v: 80 }, { m: "Feb", v: 95 }, { m: "Mar", v: 112 }]} xKey="m" series={[{ key: "v", label: "Sessions" }]} />
    </div>
  </>
);

const meta: Meta = {
  title: "Dashboards/Dashboards",
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

export const Analytics: Story = { render: () => <AnalyticsDashboard kpis={KPIS} charts={CHARTS} /> };
export const Coaching: Story = { render: () => <CoachingDashboard kpis={KPIS} charts={CHARTS} /> };
export const Admin: Story = { render: () => <AdminPanel kpis={KPIS} charts={CHARTS} /> };
export const Jobs: Story = { render: () => <JobExplorer kpis={KPIS} charts={CHARTS} /> };
export const CareerHub: Story = { render: () => <CareerHubDashboard kpis={KPIS} charts={CHARTS} /> };
