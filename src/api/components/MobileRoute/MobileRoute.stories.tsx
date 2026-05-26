import type { Meta, StoryObj } from "@storybook/react";
import { Bell, Home, Inbox, Menu, Settings } from "lucide-react";
import { MobileRoute } from "./MobileRoute";
import { MobileTopBar } from "../MobileTopBar";
import { BottomNav } from "../BottomNav";
import { Button } from "../Button";

const meta: Meta<typeof MobileRoute> = {
  title: "Routes/MobileRoute",
  component: MobileRoute,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof MobileRoute>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 380, height: 600, border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
      <MobileRoute
        topBar={
          <MobileTopBar
            sticky={false}
            leading={<Button isIconOnly variant="light" aria-label="Menu"><Menu className="size-5" /></Button>}
            brand={<p className="text-base font-semibold">Recruitment</p>}
            trailing={<Button isIconOnly variant="light" aria-label="Alerts"><Bell className="size-5" /></Button>}
          />
        }
        bottomNav={
          <BottomNav
            activeId="home"
            items={[
              { id: "home", label: "Home", icon: <Home className="size-5" /> },
              { id: "inbox", label: "Inbox", icon: <Inbox className="size-5" /> },
              { id: "settings", label: "Me", icon: <Settings className="size-5" /> },
            ]}
            onSelect={() => {}}
          />
        }
      >
        <div className="p-4 text-sm text-muted-foreground">
          Scrollable main content.
        </div>
      </MobileRoute>
    </div>
  ),
};
