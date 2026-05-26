import { useState } from "react";
import { Pencil, Network, Settings, User } from "lucide-react";
import {
  AccountMenu,
  type AccountMenuItem,
  Button,
  DisclosureBar,
  Divider,
  PageBack,
  SiteSwitcherTrigger,
  SubNav,
} from "@atlas/design-system";
import { Section } from "../Section";
import { Row } from "../Row";

const ACCOUNT_ITEMS: AccountMenuItem[] = [
  { id: "profile", label: "Account Profile", icon: <User className="size-4" /> },
  { id: "workspaces", label: "Workspaces", icon: <Network className="size-4" /> },
  { id: "settings", label: "Settings", icon: <Settings className="size-4" /> },
];

export function ShellChromeSection() {
  const [activeAccount, setActiveAccount] = useState("profile");

  return (
    <Section
      id="shell-chrome"
      title="Shell & chrome"
      description="Page-level back navigation, sub-nav strips, account menu, workspace switcher, disclosure messages."
    >
      <Row label="PageBack">
        <PageBack onClick={() => {}}>Back to dashboard</PageBack>
        <PageBack variant="pill" onClick={() => {}}>
          Announcements
        </PageBack>
      </Row>

      <Divider className="my-4" />

      <Row label="DisclosureBar">
        <div className="flex w-full max-w-2xl flex-col gap-3">
          <DisclosureBar message="This posting is shared with all caseworkers on the team." />
          <DisclosureBar
            variant="notice"
            message="Heads up — this employer hasn't been verified yet. Apply with care."
          />
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="SubNav">
        <div className="w-full">
          <SubNav
            left={<PageBack variant="pill" onClick={() => {}}>Announcements</PageBack>}
            right={
              <>
                <Button size="sm" variant="flat" startContent={<Pencil className="size-4" />}>
                  Edit
                </Button>
                <Button size="sm" variant="bordered">
                  Cancel
                </Button>
              </>
            }
          />
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="SiteSwitcher">
        <div className="flex flex-wrap items-start gap-4">
          <SiteSwitcherTrigger
            siteName="Marble University HQ"
            initials="MU"
            onOpen={() => {}}
          />
          <div className="rounded-xl bg-earth-900 p-3">
            <SiteSwitcherTrigger
              siteName="Marble University HQ"
              initials="MU"
              variant="onTint"
              onOpen={() => {}}
            />
          </div>
          <SiteSwitcherTrigger
            siteName="Marble University HQ"
            initials="MU"
            collapsed
            onOpen={() => {}}
          />
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="AccountMenu">
        <div className="grid w-full max-w-3xl grid-cols-[280px_64px] gap-4">
          <div className="rounded-lg border border-border bg-card">
            <AccountMenu
              items={ACCOUNT_ITEMS}
              activeId={activeAccount}
              onSelect={setActiveAccount}
            />
          </div>
          <div className="rounded-lg border border-border bg-card">
            <AccountMenu
              items={ACCOUNT_ITEMS}
              activeId={activeAccount}
              onSelect={setActiveAccount}
              isCollapsed
            />
          </div>
        </div>
      </Row>
    </Section>
  );
}
