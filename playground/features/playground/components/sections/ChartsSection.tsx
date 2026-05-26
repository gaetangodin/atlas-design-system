import {
  AreaChart,
  BarChart,
  BubbleChart,
  DonutChart,
  LineChart,
  Sparkline,
} from "@atlas/design-system";
import { Section } from "../Section";
import {
  mockCampaignBubbles,
  mockRevenueChart,
  mockSparkSeries,
  mockTrafficSources,
} from "../../mocks/playground.mocks";

const CHART_SERIES = [
  { key: "revenue", label: "Revenue" },
  { key: "expenses", label: "Expenses" },
];

const REVENUE_ONLY = [{ key: "revenue", label: "Revenue" }];

export function ChartsSection() {
  return (
    <Section id="charts" title="Charts">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Bar chart
          </p>
          <BarChart
            data={mockRevenueChart}
            xKey="month"
            series={CHART_SERIES}
            showLegend
          />
        </div>
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Line chart
          </p>
          <LineChart
            data={mockRevenueChart}
            xKey="month"
            series={CHART_SERIES}
            showLegend
          />
        </div>
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Area chart
          </p>
          <AreaChart data={mockRevenueChart} xKey="month" series={REVENUE_ONLY} />
        </div>
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Donut chart
          </p>
          <DonutChart data={mockTrafficSources} centerLabel="100%" centerCaption="Sources" />
        </div>
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Sparkline
          </p>
          <div className="rounded-md border border-border p-3">
            <p className="text-xs text-muted-foreground">Last 8 days</p>
            <p className="text-2xl font-semibold tabular-nums">31</p>
            <Sparkline data={mockSparkSeries} />
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Bubble chart
          </p>
          <BubbleChart
            data={mockCampaignBubbles}
            xName="Reach"
            yName="Engagement"
            zName="Spend"
          />
        </div>
      </div>
    </Section>
  );
}
