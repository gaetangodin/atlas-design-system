import type { Meta, StoryObj } from "@storybook/react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ResizablePanel";

const meta: Meta<typeof ResizablePanelGroup> = {
  title: "Layout/ResizablePanel",
  component: ResizablePanelGroup,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ResizablePanelGroup>;

export const Horizontal: Story = {
  render: () => (
    <div style={{ height: 240, border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
      <ResizablePanelGroup orientation="horizontal" defaultLayout={{ left: 40, right: 60 }}>
        <ResizablePanel id="left" minSize={20}>
          <div style={{ height: "100%", display: "grid", placeItems: "center", background: "var(--muted)" }}>
            Left
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel id="right" minSize={20}>
          <div style={{ height: "100%", display: "grid", placeItems: "center" }}>
            Right · drag the divider
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};
