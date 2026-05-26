import {
  AnalyticsRoute,
  BoardRoute,
  Button,
  CandidatesRoute,
  DetailRoute,
  Divider,
  NewPostingRoute,
  PageBack,
  PostingStepper,
  ProfileIdentityWell,
  ProfileRoute,
  ReadinessBadge,
  StatCard,
  SubNav,
  WizardRoute,
} from "@atlas/design-system";
import { Section } from "../Section";
import { Row } from "../Row";

const WIZARD_STEPS = [
  { id: "1", label: "Role", description: "Title & summary", status: "completed" as const },
  { id: "2", label: "Requirements", description: "Skills", status: "active" as const },
  { id: "3", label: "Logistics", description: "Pay, location", status: "pending" as const },
];

const PLACEHOLDER = (
  <div className="rounded-md border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
    Page content goes here.
  </div>
);

export function RouteShellsSection() {
  return (
    <Section
      id="route-shells"
      title="Route shells & named routes"
      description="Page-shell layouts that apps wrap their routed pages in. Atlas owns no routing — slot in the content, drive the routing from your app."
    >
      <Row label="BoardRoute (generic)">
        <div className="w-full overflow-hidden rounded-xl border border-border">
          <BoardRoute
            title="Candidates"
            subtitle="All active applicants."
            actions={<Button size="sm" color="primary">Invite</Button>}
          >
            {PLACEHOLDER}
          </BoardRoute>
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="DetailRoute (generic)">
        <div className="w-full overflow-hidden rounded-xl border border-border">
          <DetailRoute
            toolbar={
              <SubNav
                left={<PageBack variant="pill" onClick={() => {}}>Caseload</PageBack>}
                right={<Button size="sm" color="primary">Open</Button>}
              />
            }
          >
            <section className="rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground">
              Profile sections render here.
            </section>
          </DetailRoute>
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="WizardRoute (generic)">
        <div className="w-full overflow-hidden rounded-xl border border-border">
          <WizardRoute
            stepper={<PostingStepper steps={WIZARD_STEPS} current={1} />}
            title="Requirements"
            subtitle="Pick the skills + qualifications you need."
            footerActions={
              <>
                <Button variant="bordered">Back</Button>
                <Button color="primary">Continue</Button>
              </>
            }
          >
            <div className="rounded-lg border border-dashed border-border p-8 text-sm text-muted-foreground">
              Step form fields
            </div>
          </WizardRoute>
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="ProfileRoute (generic)">
        <div className="w-full overflow-hidden rounded-xl border border-border">
          <ProfileRoute
            identity={
              <ProfileIdentityWell
                name="Avery Lin"
                role="Senior frontend engineer"
                location="Remote · Lisbon, PT"
                badges={<ReadinessBadge stage="Active" />}
              />
            }
            kpis={
              <>
                <StatCard label="Match" value="92%" />
                <StatCard label="Applications" value="14" />
                <StatCard label="Interviews" value="3" />
                <StatCard label="Offers" value="1" />
              </>
            }
          >
            {PLACEHOLDER}
          </ProfileRoute>
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="Named Routes (sample)">
        <div className="w-full space-y-3">
          <div className="overflow-hidden rounded-xl border border-border">
            <AnalyticsRoute>{PLACEHOLDER}</AnalyticsRoute>
          </div>
          <div className="overflow-hidden rounded-xl border border-border">
            <CandidatesRoute>{PLACEHOLDER}</CandidatesRoute>
          </div>
          <div className="overflow-hidden rounded-xl border border-border">
            <NewPostingRoute>
              <div className="rounded-lg border border-dashed border-border p-8 text-sm text-muted-foreground">
                Wizard variant — slot in the posting form.
              </div>
            </NewPostingRoute>
          </div>
        </div>
      </Row>
    </Section>
  );
}
