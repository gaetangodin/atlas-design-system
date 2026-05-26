import { useState } from "react";
import { Star } from "lucide-react";
import {
  Chip,
  ColumnSelector,
  type ColumnDefinition,
  Divider,
  Menu,
  MenuItem,
  Ripple,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@atlas/design-system";
import { Section } from "../Section";
import { Row } from "../Row";

const COLUMN_DEFS: ColumnDefinition[] = [
  { id: "name", label: "Name", isLocked: true },
  { id: "role", label: "Role" },
  { id: "status", label: "Status" },
  { id: "applied", label: "Applied date" },
  { id: "score", label: "Match score" },
];

export function MorePrimitivesSection() {
  const [visible, setVisible] = useState<string[]>(["name", "role", "status"]);
  return (
    <Section
      id="more-primitives"
      title="More primitives"
      description="Chip (raw HeroUI), Menu (un-anchored), Ripple, ColumnSelector, ResizablePanel."
    >
      <Row label="Chip">
        <Chip color="primary" variant="flat">primary</Chip>
        <Chip color="success" variant="dot">live</Chip>
        <Chip color="danger" variant="bordered">overdue</Chip>
        <Chip color="warning">draft</Chip>
      </Row>

      <Divider className="my-4" />

      <Row label="Menu (un-anchored)">
        <div className="w-full max-w-xs">
          <Menu aria-label="Quick actions" variant="flat">
            <MenuItem key="open" description="View the candidate profile">
              Open profile
            </MenuItem>
            <MenuItem key="message" description="Start a new chat">
              Send a message
            </MenuItem>
            <MenuItem key="archive" description="Move to archive">
              Archive
            </MenuItem>
          </Menu>
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="Ripple">
        <button
          type="button"
          className="relative inline-flex h-10 items-center justify-center gap-2 overflow-hidden rounded-full bg-card px-4 text-sm font-medium text-foreground shadow-sm hover:bg-muted/60"
        >
          <Star className="size-4" />
          Press me — Ripple inside
          <Ripple ripples={[]} onClear={() => {}} />
        </button>
        <p className="text-xs text-muted-foreground">
          (Ripple is normally wired via HeroUI's `useRipple` hook — shown
          here without active ripples for the static preview.)
        </p>
      </Row>

      <Divider className="my-4" />

      <Row label="ColumnSelector">
        <ColumnSelector
          columns={COLUMN_DEFS}
          visibleIds={visible}
          onChange={setVisible}
        />
        <span className="text-xs text-muted-foreground">
          Visible: {visible.join(", ")}
        </span>
      </Row>

      <Divider className="my-4" />

      <Row label="ResizablePanel">
        <div className="h-48 w-full overflow-hidden rounded-lg border border-border">
          <ResizablePanelGroup orientation="horizontal" defaultLayout={{ left: 50, right: 50 }}>
            <ResizablePanel id="left" minSize={20}>
              <div className="flex h-full items-center justify-center bg-muted/30 text-sm text-muted-foreground">
                Left panel
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel id="right" minSize={20}>
              <div className="flex h-full items-center justify-center bg-card text-sm text-foreground">
                Right panel · drag the divider
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </Row>
    </Section>
  );
}
