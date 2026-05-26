import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { useState } from "react";

// Simple SVG glyphs to avoid pulling lucide into stories
const Glyph = (path: string) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d={path} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const items = [
  { id: "dashboard", label: "Dashboard", icon: Glyph("M3 9 12 2l9 7v11a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z") },
  { id: "referrals", label: "Referrals", icon: Glyph("M5 21a7 7 0 0 1 14 0"), badge: "12" },
  { id: "messages",  label: "Messages",  icon: Glyph("M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"), badge: "4" },
  { id: "settings",  label: "Settings",  icon: Glyph("M19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.5-2.4.8a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.3a7 7 0 0 0-2 1.2l-2.4-.8-2 3.5 2 1.6A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.5 2.4-.8a7 7 0 0 0 2 1.2L10 21h4l.5-2.3a7 7 0 0 0 2-1.2l2.4.8 2-3.5-2-1.6c.1-.4.1-.8.1-1.2z") },
];

function Demo({ collapsed = false }: { collapsed?: boolean }) {
  const [active, setActive] = useState("referrals");
  return (
    <div style={{ height: 480, display: "flex" }}>
      <Sidebar items={items} activeId={active} onSelect={setActive} collapsed={collapsed} brand={<strong>Xeekrs</strong>} />
      <div style={{ padding: 16 }}>Selected: {active}</div>
    </div>
  );
}

const meta: Meta<typeof Sidebar> = { title: "Navigation/Sidebar", component: Sidebar, tags: ["autodocs"], parameters: { layout: "fullscreen" } };
export default meta;

type Story = StoryObj<typeof Sidebar>;
export const Expanded: Story = { render: () => <Demo /> };
export const Collapsed: Story = { render: () => <Demo collapsed /> };
