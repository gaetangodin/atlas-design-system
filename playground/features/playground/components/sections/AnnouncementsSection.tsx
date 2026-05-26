import { AlertTriangle, Info } from "lucide-react";
import {
  AlertBar,
  BulletinRow,
  Button,
  ConsentAlertBar,
  Divider,
} from "@atlas/design-system";
import { Section } from "../Section";
import { Row } from "../Row";

export function AnnouncementsSection() {
  return (
    <Section
      id="announcements"
      title="Announcements"
      description="Shell-level alert bars, bulletin rows, and the recruitment consent flow."
    >
      <Row label="AlertBar">
        <div className="w-full space-y-2">
          <AlertBar
            tone="info"
            icon={<Info className="size-4" />}
            message="Scheduled maintenance — Atlas will be briefly unavailable on Saturday from 02:00–03:00."
            action={
              <Button size="sm" variant="light" className="text-info-foreground">
                Learn more
              </Button>
            }
            onClose={() => {}}
          />
          <AlertBar
            tone="warning"
            icon={<AlertTriangle className="size-4" />}
            message="Verification email expired — request a new one to keep your account active."
            onClose={() => {}}
          />
          <AlertBar tone="success" message="Workspace restore complete." onClose={() => {}} />
          <AlertBar
            tone="danger"
            message="Webhook delivery failing — last attempt 12m ago."
            action={
              <Button size="sm" variant="light" className="text-destructive-foreground">
                Investigate
              </Button>
            }
          />
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="BulletinRow">
        <div className="w-full max-w-2xl overflow-hidden rounded-lg border border-border bg-card">
          <BulletinRow
            tone="info"
            isUnread
            title="New cohort enrolled in Foundations track"
            meta="2h ago"
            description="14 learners joined this morning — the welcome flow has been queued."
            onClick={() => {}}
          />
          <BulletinRow
            tone="success"
            title="Q4 placements milestone reached"
            meta="yesterday"
            description="Cumulative placements exceeded the year target."
            onClick={() => {}}
          />
          <BulletinRow
            tone="warning"
            title="3 employer profiles need review"
            meta="3d ago"
            onClick={() => {}}
          />
          <BulletinRow
            tone="danger"
            title="Integration check failed for Stripe"
            meta="5d ago"
            description="Last sync errored on a missing webhook secret."
            onClick={() => {}}
          />
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="ConsentAlertBar">
        <div className="flex flex-wrap items-start gap-4">
          <ConsentAlertBar
            perspective="staff"
            displayName="Pending candidate"
            participantRole="Senior backend engineer"
            location="Remote · Lisbon"
            avatarInitials="PC"
            metaHint="Sent 12m ago"
            onViewTerms={() => {}}
            onRevoke={() => {}}
          />
          <ConsentAlertBar
            perspective="client"
            displayName="Marble University"
            participantRole="Recruiter"
            location="Boston, MA"
            avatarInitials="MU"
            metaHint="Sent 5m ago"
            onViewTerms={() => {}}
            onAccept={() => {}}
          />
        </div>
      </Row>
    </Section>
  );
}
