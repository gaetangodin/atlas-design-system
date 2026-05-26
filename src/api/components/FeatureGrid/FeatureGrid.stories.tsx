import type { Meta, StoryObj } from "@storybook/react";
import { FeatureGrid } from "./FeatureGrid";

const Glyph = (path: string) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d={path} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const meta: Meta<typeof FeatureGrid> = {
  title: "Patterns/FeatureGrid",
  component: FeatureGrid,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FeatureGrid>;

export const Three: Story = {
  args: {
    columns: 3,
    items: [
      { id: "1", icon: Glyph("M13 2 3 14h9l-1 8 10-12h-9l1-8z"), title: "Faster matching", body: "AI ranks candidates by fit in under a second." },
      { id: "2", icon: Glyph("M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"), title: "Audit trail", body: "Every interaction logged for compliance." },
      { id: "3", icon: Glyph("M16 4h2a2 2 0 0 1 2 2v14l-4-3-4 3-4-3-4 3V6a2 2 0 0 1 2-2h2"), title: "Notes built in", body: "Stop chasing email threads — every comment lives in the case." },
    ],
  },
};
