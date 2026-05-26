import { useState } from "react";
import {
  AdminPanel,
  AnalyticsDashboard,
  ApplicationModal,
  ApplicantReviewRecap,
  BarChart,
  Button,
  CannedMessageSelector,
  CareerHubDashboard,
  CampaignSet,
  ChatOpportunityCard,
  ClientTouchpointCards,
  CoachingDashboard,
  CreateProjectWizard,
  DisplayAdTemplate,
  Divider,
  GroupChatAvatar,
  IntroVideoDialog,
  InterviewEventRecap,
  JobExplorer,
  MarketingHero,
  ShareCandidatePreviewCard,
  SocialPostTemplate,
  StatCard,
  Textarea,
  VideoInterviewModal,
} from "@atlas/design-system";
import { Section } from "../Section";
import { Row } from "../Row";

const SAMPLE_DATA = [
  { m: "Jan", v: 4200 },
  { m: "Feb", v: 5100 },
  { m: "Mar", v: 4800 },
  { m: "Apr", v: 6200 },
];

const KPIS = (
  <>
    <StatCard label="MRR" value="$48,210" delta="+12%" deltaTone="positive" />
    <StatCard label="Active users" value="1,284" delta="+3%" deltaTone="positive" />
    <StatCard label="Churn" value="2.4%" delta="-0.6%" deltaTone="negative" />
    <StatCard label="NPS" value="68" />
  </>
);

const CHARTS = (
  <>
    <div className="rounded-lg border border-border bg-card p-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Revenue</p>
      <BarChart data={SAMPLE_DATA} xKey="m" series={[{ key: "v", label: "USD" }]} />
    </div>
    <div className="rounded-lg border border-border bg-card p-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Engagement</p>
      <BarChart data={SAMPLE_DATA} xKey="m" series={[{ key: "v", label: "Sessions" }]} />
    </div>
  </>
);

const WIZARD_STEPS = [
  { id: "1", label: "Name", description: "Pick a name", status: "active" as const },
  { id: "2", label: "Team", description: "Invite people", status: "pending" as const },
  { id: "3", label: "Review", description: "Confirm + create", status: "pending" as const },
];

export function DashboardsAndModalsSection() {
  const [introOpen, setIntroOpen] = useState(false);
  const [callOpen, setCallOpen] = useState(false);
  const [muted, setMuted] = useState(false);
  const [videoOn, setVideoOn] = useState(true);
  const [appOpen, setAppOpen] = useState(false);
  const [wizardOpen, setWizardOpen] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <Section
      id="layouts"
      title="Dashboards, modals, recaps, messaging, marketing"
      description="Composite surfaces from the v0.3 import — slot-based dashboards, real domain modals, recruitment recap cards, messaging patterns, and marketing templates."
    >
      <Row label="Dashboards (sample)">
        <div className="w-full space-y-3">
          <div className="overflow-hidden rounded-xl border border-border">
            <AnalyticsDashboard kpis={KPIS} charts={CHARTS} />
          </div>
          <div className="grid gap-3 lg:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-border">
              <CoachingDashboard kpis={KPIS} />
            </div>
            <div className="overflow-hidden rounded-xl border border-border">
              <AdminPanel kpis={KPIS} />
            </div>
            <div className="overflow-hidden rounded-xl border border-border">
              <JobExplorer kpis={KPIS} />
            </div>
            <div className="overflow-hidden rounded-xl border border-border">
              <CareerHubDashboard kpis={KPIS} />
            </div>
          </div>
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="Modals">
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => setIntroOpen(true)}>Play intro video</Button>
          <Button onClick={() => setCallOpen(true)}>Join interview</Button>
          <Button onClick={() => setAppOpen(true)} color="primary">Apply</Button>
          <Button onClick={() => { setStep(0); setWizardOpen(true); }}>Create project</Button>
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="Recruitment recaps">
        <div className="grid w-full gap-3 lg:grid-cols-3">
          <InterviewEventRecap
            participantName="Avery Lin"
            whenLabel="Mar 14 · 10:30 AM"
            outcome="Move to offer"
            notes="Strong React + TypeScript."
          />
          <ApplicantReviewRecap
            applicantName="Morgan Reyes"
            reviewer="Sasha Park"
            whenLabel="Mar 12, 2026"
            verdict="Recommend"
            notes="Portfolio shows breadth."
          />
          <ShareCandidatePreviewCard
            candidateName="Jordan Kim"
            candidateRole="Backend engineer"
            preview="Shared preview: anonymized profile."
            sharedWith="hello@marbleu.co"
            expiryHint="Expires in 7 days"
          />
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="Messaging">
        <div className="w-full max-w-2xl space-y-3">
          <ChatOpportunityCard
            title="3 new candidates match this role"
            description="Senior frontend, Lisbon time-zone, 5+ years."
            initials="MC"
            onClick={() => {}}
          />
          <div className="flex items-center justify-between rounded-xl border border-border bg-card p-3">
            <div className="flex items-center gap-3">
              <GroupChatAvatar
                members={[
                  { name: "Avery", initials: "AL" },
                  { name: "Morgan", initials: "MR" },
                  { name: "Sasha", initials: "SP" },
                  { name: "Jordan", initials: "JK" },
                  { name: "Casey", initials: "CT" },
                ]}
              />
              <p className="text-sm font-medium">Hiring panel · Senior FE</p>
            </div>
            <CannedMessageSelector
              templates={[
                { id: "intro", label: "Intro: senior role" },
                { id: "thanks", label: "Thanks for applying" },
                { id: "schedule", label: "Schedule first call" },
              ]}
              onPick={() => {}}
            />
          </div>
          <ClientTouchpointCards
            touchpoints={[
              { id: "1", kind: "chat", whenLabel: "Today · 10:14", summary: "Quick check-in re: Q2 plan." },
              { id: "2", kind: "email", whenLabel: "Yesterday", summary: "Sent the proposal draft.", initiatedBy: "You" },
              { id: "3", kind: "call", whenLabel: "Mon", summary: "Kickoff — scope + timeline." },
              { id: "4", kind: "meeting", whenLabel: "Last week", summary: "Quarterly review." },
            ]}
          />
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="Marketing templates">
        <div className="w-full space-y-4">
          <MarketingHero
            eyebrow="For recruiters"
            headline="Hire faster, with less guesswork."
            body="Atlas helps your team turn applications into interviews."
            cta={
              <>
                <Button color="primary">Start free</Button>
                <Button variant="bordered">Talk to sales</Button>
              </>
            }
          />
          <div className="flex flex-wrap items-start gap-4">
            <SocialPostTemplate
              headline="New: AI-assisted matching."
              supporting="Get a ranked shortlist in seconds."
              tone="spark"
              footer="@marbleu · marbleu.co"
            />
            <DisplayAdTemplate
              headline="Smarter hiring."
              body="Atlas for recruitment teams."
              ctaLabel="Try free"
              imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80"
            />
          </div>
          <CampaignSet
            tiles={[
              { id: "1", title: "Spring launch", metrics: [{ label: "Reach", value: "12k" }, { label: "CTR", value: "3.4%" }] },
              { id: "2", title: "Founders email", metrics: [{ label: "Opens", value: "62%" }, { label: "Replies", value: "9%" }] },
              { id: "3", title: "Partner webinar", metrics: [{ label: "Signups", value: "245" }] },
            ]}
          />
        </div>
      </Row>

      {/* Modal portals */}
      <IntroVideoDialog
        isOpen={introOpen}
        onOpenChange={setIntroOpen}
        subjectName="Avery Lin"
        subjectSubtitle="Senior Frontend Engineer · Lisbon"
        caption="2-minute self-intro. No audio in this preview."
      />
      <VideoInterviewModal
        isOpen={callOpen}
        onOpenChange={setCallOpen}
        title="Avery Lin · Round 2"
        participantSlot={<div className="grid h-full w-full place-items-center bg-earth-800 text-white/60">Live feed</div>}
        selfViewSlot={<div className="grid h-full w-full place-items-center text-xs text-white/60">You</div>}
        isMuted={muted}
        isVideoOn={videoOn}
        onToggleMute={() => setMuted((m) => !m)}
        onToggleVideo={() => setVideoOn((v) => !v)}
        onLeave={() => setCallOpen(false)}
      />
      <ApplicationModal
        isOpen={appOpen}
        onOpenChange={setAppOpen}
        postingTitle="Senior Engineer @ Marble HQ"
        postingSummary="Remote · Lisbon time · $120–160k"
        coverNoteSlot={<Textarea placeholder="Tell us why you're a fit…" minRows={4} />}
        disclosure="Your application is shared with Marble HQ recruiters."
        onSubmit={() => setAppOpen(false)}
      />
      <CreateProjectWizard
        isOpen={wizardOpen}
        onOpenChange={setWizardOpen}
        title="Create a new project"
        steps={WIZARD_STEPS.map((s, i) => ({
          ...s,
          status: i < step ? "completed" : i === step ? "active" : "pending",
        }))}
        currentStep={step}
        onBack={() => setStep((s) => Math.max(0, s - 1))}
        onNext={() => setStep((s) => Math.min(WIZARD_STEPS.length - 1, s + 1))}
        onFinish={() => setWizardOpen(false)}
      >
        <div className="rounded-lg border border-dashed border-border p-8 text-sm text-muted-foreground">
          Step {step + 1} body
        </div>
      </CreateProjectWizard>
    </Section>
  );
}
