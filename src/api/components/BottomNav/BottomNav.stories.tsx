import type { Meta, StoryObj } from "@storybook/react";
import { BottomNav } from "./BottomNav";
import { useState } from "react";

const Glyph = (path: string) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d={path} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Demo() {
  const [active, setActive] = useState("home");
  return (
    <div style={{ width: 380, height: 400, border: "0.5px solid var(--border)", borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column", background: "var(--background)" }}>
      <div style={{ flex: 1, padding: 16 }}>Tab: {active}</div>
      <BottomNav
        activeId={active}
        onSelect={setActive}
        items={[
          { id: "home",      label: "Home",      icon: Glyph("M3 9 12 2l9 7v11a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z") },
          { id: "referrals", label: "Referrals", icon: Glyph("M5 21a7 7 0 0 1 14 0") },
          { id: "inbox",     label: "Inbox",     icon: Glyph("M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"), badge: "4" },
          { id: "activity",  label: "Activity",  icon: Glyph("M22 12h-4l-3 9L9 3l-3 9H2") },
        ]}
      />
    </div>
  );
}

const meta: Meta<typeof BottomNav> = { title: "Navigation/BottomNav", component: BottomNav, tags: ["autodocs"] };
export default meta;

type Story = StoryObj<typeof BottomNav>;
export const Default: Story = { render: () => <Demo /> };
