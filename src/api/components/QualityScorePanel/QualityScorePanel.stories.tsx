import type { Meta, StoryObj } from "@storybook/react";
import { QualityScorePanel, type QualityIssue } from "./QualityScorePanel";

const ISSUES: QualityIssue[] = [
  { id: "1", status: "ok", label: "Title is clear" },
  { id: "2", status: "warn", label: "Skills list is short", description: "Consider 4–6 required skills." },
  { id: "3", status: "fail", label: "Pay range missing" },
];

const meta: Meta<typeof QualityScorePanel> = {
  title: "Posting/QualityScorePanel",
  component: QualityScorePanel,
  tags: ["autodocs"],
  args: { score: 64, issues: ISSUES },
};
export default meta;
type Story = StoryObj<typeof QualityScorePanel>;

export const Fair: Story = {};
export const Great: Story = { args: { score: 94, issues: ISSUES.filter((i) => i.status === "ok") } };
export const NeedsWork: Story = { args: { score: 28 } };
