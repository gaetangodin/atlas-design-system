import type { Meta, StoryObj } from "@storybook/react";
import { ScrollShadow } from "./ScrollShadow";

const meta: Meta<typeof ScrollShadow> = { title: "Display/ScrollShadow", component: ScrollShadow, tags: ["autodocs"] };
export default meta;

type Story = StoryObj<typeof ScrollShadow>;

export const Vertical: Story = {
  render: () => (
    <ScrollShadow style={{ height: 220, width: 280, border: "0.5px solid var(--border)", borderRadius: 12, padding: 12 }}>
      <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {Array.from({ length: 30 }).map((_, i) => (
          <li key={i}>Item {i + 1}</li>
        ))}
      </ul>
    </ScrollShadow>
  ),
};
