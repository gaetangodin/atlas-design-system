import type { Meta, StoryObj } from "@storybook/react";
import { BarChart, LineChart, AreaChart, DonutChart, Sparkline, BubbleChart } from "./Charts";

const meta: Meta = { title: "Charts/Recharts wrappers" };
export default meta;

type Story = StoryObj;

const submissions = [
  { week: "W1", new: 17, hired: 4 },
  { week: "W2", new: 26, hired: 7 },
  { week: "W3", new: 29, hired: 5 },
  { week: "W4", new: 21, hired: 6 },
  { week: "W5", new: 32, hired: 9 },
  { week: "W6", new: 25, hired: 8 },
];

const series = [
  { key: "new",   label: "New" },
  { key: "hired", label: "Hired" },
];

export const Bar: Story = {
  render: () => <div style={{ width: 480 }}><BarChart data={submissions} xKey="week" series={series} showLegend /></div>,
};
export const Line: Story = {
  render: () => <div style={{ width: 480 }}><LineChart data={submissions} xKey="week" series={series} showLegend /></div>,
};
export const Area: Story = {
  render: () => <div style={{ width: 480 }}><AreaChart data={submissions} xKey="week" series={series} showLegend /></div>,
};
export const Donut: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <DonutChart
        centerLabel="218"
        centerCaption="total"
        data={[
          { label: "New",    value: 64 },
          { label: "Screen", value: 51 },
          { label: "Match",  value: 38 },
          { label: "Hold",   value: 17 },
          { label: "Hired",  value: 48 },
        ]}
      />
    </div>
  ),
};
export const SparklineStory: Story = {
  name: "Sparkline",
  render: () => (
    <div style={{ width: 200 }}>
      <Sparkline data={[{ value: 3 }, { value: 5 }, { value: 4 }, { value: 7 }, { value: 9 }, { value: 6 }, { value: 11 }]} />
    </div>
  ),
};
export const Bubble: Story = {
  render: () => (
    <div style={{ width: 480 }}>
      <BubbleChart
        data={[
          { x: 10, y: 30, z: 200, label: "A" },
          { x: 40, y: 80, z: 300, label: "B" },
          { x: 70, y: 50, z: 150, label: "C" },
          { x: 90, y: 90, z: 500, label: "D" },
        ]}
      />
    </div>
  ),
};
