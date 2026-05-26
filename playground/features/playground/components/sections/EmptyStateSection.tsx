import { Inbox, Plus } from "lucide-react";
import { Button, EmptyState } from "@atlas/design-system";
import { Section } from "../Section";

export function EmptyStateSection() {
  return (
    <Section id="empty-state" title="Empty state">
      <EmptyState
        icon={<Inbox className="size-6" />}
        title="No messages yet"
        description="Once your team starts chatting, it'll show up here."
        action={
          <Button color="primary" startContent={<Plus />}>
            Invite teammates
          </Button>
        }
      />
    </Section>
  );
}
