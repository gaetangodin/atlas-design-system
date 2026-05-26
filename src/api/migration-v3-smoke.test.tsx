/**
 * v0.3 migration smoke — render checks for the ~50 components added
 * in the full Xeekrs library import.
 *
 * Per-component behavioural coverage lives in their colocated story
 * files; this barrel just catches broken imports / runtime crashes.
 */

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { HeroUIProvider } from "@heroui/react";
import {
  // Generic route shells
  BoardRoute,
  DetailRoute,
  WizardRoute,
  MobileRoute,
  ProfileRoute,
  // Named routes (sample — they're all thin wrappers)
  AcademyDashboardRoute,
  AnalyticsRoute,
  CandidatesRoute,
  HelpDeskRoute,
  InterviewsRoute,
  NewPostingRoute,
  ResumeBuilderRoute,
  MobileMessagesRoute,
  // Dashboards
  AnalyticsDashboard,
  CoachingDashboard,
  AdminPanel,
  JobExplorer,
  CareerHubDashboard,
  // Modals
  IntroVideoDialog,
  VideoInterviewModal,
  ApplicationModal,
  CreateProjectWizard,
  // Recruitment recaps
  InterviewEventRecap,
  ApplicantReviewRecap,
  ShareCandidatePreviewCard,
  // Messaging
  ChatOpportunityCard,
  GroupChatAvatar,
  CannedMessageSelector,
  ClientTouchpointCards,
  // Marketing
  MarketingHero,
  SocialPostTemplate,
  DisplayAdTemplate,
  CampaignSet,
} from "./index";

function withProvider(node: React.ReactNode) {
  return <HeroUIProvider>{node}</HeroUIProvider>;
}

describe("v0.3 migration smoke — Route shells", () => {
  it("BoardRoute renders title + actions", () => {
    render(<BoardRoute title="Candidates" actions={<button>Invite</button>} />);
    expect(screen.getByText("Candidates")).toBeInTheDocument();
    expect(screen.getByText("Invite")).toBeInTheDocument();
  });

  it("DetailRoute renders children + footer", () => {
    render(
      <DetailRoute footer={<p>footer-meta</p>}>
        <p>detail-body</p>
      </DetailRoute>,
    );
    expect(screen.getByText("detail-body")).toBeInTheDocument();
    expect(screen.getByText("footer-meta")).toBeInTheDocument();
  });

  it("WizardRoute renders title + footerActions", () => {
    render(
      <WizardRoute
        title="Requirements"
        footerActions={<button>Continue</button>}
      >
        <p>step-body</p>
      </WizardRoute>,
    );
    expect(screen.getByText("Requirements")).toBeInTheDocument();
    expect(screen.getByText("step-body")).toBeInTheDocument();
    expect(screen.getByText("Continue")).toBeInTheDocument();
  });

  it("MobileRoute renders top + bottom slots", () => {
    render(
      <MobileRoute
        topBar={<p>top</p>}
        bottomNav={<p>bottom</p>}
      >
        <p>main</p>
      </MobileRoute>,
    );
    expect(screen.getByText("top")).toBeInTheDocument();
    expect(screen.getByText("bottom")).toBeInTheDocument();
    expect(screen.getByText("main")).toBeInTheDocument();
  });

  it("ProfileRoute renders identity + tabs slots", () => {
    render(
      <ProfileRoute
        identity={<p>identity-slot</p>}
        tabs={<p>tabs-slot</p>}
      >
        <p>tab-body</p>
      </ProfileRoute>,
    );
    expect(screen.getByText("identity-slot")).toBeInTheDocument();
    expect(screen.getByText("tabs-slot")).toBeInTheDocument();
  });
});

describe("v0.3 migration smoke — Named routes (sample)", () => {
  it("AcademyDashboardRoute uses its default title", () => {
    render(<AcademyDashboardRoute />);
    expect(screen.getByText(/Academy dashboard/i)).toBeInTheDocument();
  });
  it("AnalyticsRoute uses its default title", () => {
    render(<AnalyticsRoute />);
    expect(screen.getByText("Analytics")).toBeInTheDocument();
  });
  it("CandidatesRoute uses its default title", () => {
    render(<CandidatesRoute />);
    expect(screen.getByText("Candidates")).toBeInTheDocument();
  });
  it("HelpDeskRoute uses its default title", () => {
    render(<HelpDeskRoute />);
    expect(screen.getByText(/Help Desk/i)).toBeInTheDocument();
  });
  it("InterviewsRoute uses its default title", () => {
    render(<InterviewsRoute />);
    expect(screen.getByText("Interviews")).toBeInTheDocument();
  });
  it("NewPostingRoute uses its default title (wizard variant)", () => {
    render(<NewPostingRoute />);
    expect(screen.getByText(/New posting/i)).toBeInTheDocument();
  });
  it("ResumeBuilderRoute uses its default title (wizard variant)", () => {
    render(<ResumeBuilderRoute />);
    expect(screen.getByText(/Resume builder/i)).toBeInTheDocument();
  });
  it("MobileMessagesRoute renders (re-exports MobileRoute)", () => {
    render(<MobileMessagesRoute><p>msgs</p></MobileMessagesRoute>);
    expect(screen.getByText("msgs")).toBeInTheDocument();
  });
});

describe("v0.3 migration smoke — Dashboards", () => {
  const kpi = <p>kpi-slot</p>;
  it("AnalyticsDashboard renders title + KPIs", () => {
    render(<AnalyticsDashboard kpis={kpi} />);
    expect(screen.getByText("Analytics")).toBeInTheDocument();
    expect(screen.getByText("kpi-slot")).toBeInTheDocument();
  });
  it("CoachingDashboard renders title", () => {
    render(<CoachingDashboard kpis={kpi} />);
    expect(screen.getByText("Coaching")).toBeInTheDocument();
  });
  it("AdminPanel renders title", () => {
    render(<AdminPanel kpis={kpi} />);
    expect(screen.getByText("Admin panel")).toBeInTheDocument();
  });
  it("JobExplorer renders title", () => {
    render(<JobExplorer kpis={kpi} />);
    expect(screen.getByText("Job explorer")).toBeInTheDocument();
  });
  it("CareerHubDashboard renders title", () => {
    render(<CareerHubDashboard kpis={kpi} />);
    expect(screen.getByText("Career hub")).toBeInTheDocument();
  });
});

describe("v0.3 migration smoke — Modals (closed state)", () => {
  it("IntroVideoDialog mounts without a participant slot when closed", () => {
    render(
      withProvider(
        <IntroVideoDialog
          isOpen={false}
          onOpenChange={() => {}}
          subjectName="Avery Lin"
        />,
      ),
    );
    // Modal hides its content when closed — assertion is the absence of a crash.
    expect(true).toBe(true);
  });
  it("VideoInterviewModal mounts when closed", () => {
    render(
      withProvider(
        <VideoInterviewModal
          isOpen={false}
          onOpenChange={() => {}}
          participantSlot={<p>p</p>}
        />,
      ),
    );
    expect(true).toBe(true);
  });
  it("ApplicationModal mounts when closed", () => {
    render(
      withProvider(
        <ApplicationModal
          isOpen={false}
          onOpenChange={() => {}}
          postingTitle="Senior engineer"
        />,
      ),
    );
    expect(true).toBe(true);
  });
  it("CreateProjectWizard mounts when closed", () => {
    render(
      withProvider(
        <CreateProjectWizard
          isOpen={false}
          onOpenChange={() => {}}
          title="Create project"
          steps={[{ id: "1", label: "Name", status: "active" }]}
          currentStep={0}
        >
          <p>step</p>
        </CreateProjectWizard>,
      ),
    );
    expect(true).toBe(true);
  });
});

describe("v0.3 migration smoke — Recruitment recaps", () => {
  it("InterviewEventRecap renders the participant + when", () => {
    render(
      <InterviewEventRecap
        participantName="Avery Lin"
        whenLabel="Mar 14, 2026"
      />,
    );
    expect(screen.getByText("Avery Lin")).toBeInTheDocument();
    expect(screen.getByText("Mar 14, 2026")).toBeInTheDocument();
  });
  it("ApplicantReviewRecap renders applicant + reviewer", () => {
    render(
      <ApplicantReviewRecap
        applicantName="Morgan Reyes"
        reviewer="Sasha Park"
        whenLabel="Mar 12, 2026"
      />,
    );
    expect(screen.getByText("Morgan Reyes")).toBeInTheDocument();
    expect(screen.getByText(/Sasha Park/)).toBeInTheDocument();
  });
  it("ShareCandidatePreviewCard renders candidate + expiry", () => {
    render(
      <ShareCandidatePreviewCard
        candidateName="Jordan Kim"
        expiryHint="Expires in 7 days"
      />,
    );
    expect(screen.getByText("Jordan Kim")).toBeInTheDocument();
    expect(screen.getByText("Expires in 7 days")).toBeInTheDocument();
  });
});

describe("v0.3 migration smoke — Messaging compositions", () => {
  it("ChatOpportunityCard fires onClick", () => {
    const fn = vi.fn();
    render(<ChatOpportunityCard title="3 new matches" onClick={fn} initials="CM" />);
    screen.getByText("3 new matches").click();
    expect(fn).toHaveBeenCalled();
  });
  it("GroupChatAvatar renders +N overflow", () => {
    const { container } = render(
      <GroupChatAvatar
        members={[
          { name: "A", initials: "AA" },
          { name: "B", initials: "BB" },
          { name: "C", initials: "CC" },
          { name: "D", initials: "DD" },
          { name: "E", initials: "EE" },
        ]}
        max={3}
      />,
    );
    expect(container.textContent).toContain("+2");
  });
  it("CannedMessageSelector trigger renders", () => {
    render(
      withProvider(
        <CannedMessageSelector
          templates={[{ id: "1", label: "Intro" }]}
          onPick={() => {}}
        />,
      ),
    );
    expect(screen.getByText("Quick replies")).toBeInTheDocument();
  });
  it("ClientTouchpointCards renders each kind label", () => {
    render(
      <ClientTouchpointCards
        touchpoints={[
          { id: "1", kind: "call", whenLabel: "today", summary: "kickoff" },
          { id: "2", kind: "email", whenLabel: "yesterday", summary: "follow-up" },
        ]}
      />,
    );
    expect(screen.getByText("Call")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });
});

describe("v0.3 migration smoke — Marketing templates", () => {
  it("MarketingHero renders eyebrow + headline + body", () => {
    render(
      <MarketingHero
        eyebrow="For recruiters"
        headline="Hire faster"
        body="Atlas helps your team."
      />,
    );
    expect(screen.getByText("For recruiters")).toBeInTheDocument();
    expect(screen.getByText("Hire faster")).toBeInTheDocument();
    expect(screen.getByText("Atlas helps your team.")).toBeInTheDocument();
  });
  it("SocialPostTemplate renders headline + footer", () => {
    render(
      <SocialPostTemplate
        headline="New: AI matching."
        footer="@marbleu"
      />,
    );
    expect(screen.getByText("New: AI matching.")).toBeInTheDocument();
    expect(screen.getByText("@marbleu")).toBeInTheDocument();
  });
  it("DisplayAdTemplate renders headline + cta", () => {
    render(
      <DisplayAdTemplate
        headline="Smarter hiring"
        ctaLabel="Try free"
      />,
    );
    expect(screen.getByText("Smarter hiring")).toBeInTheDocument();
    expect(screen.getByText("Try free")).toBeInTheDocument();
  });
  it("CampaignSet renders each tile", () => {
    render(
      <CampaignSet
        tiles={[
          { id: "1", title: "Spring launch" },
          { id: "2", title: "Founders email" },
        ]}
      />,
    );
    expect(screen.getByText("Spring launch")).toBeInTheDocument();
    expect(screen.getByText("Founders email")).toBeInTheDocument();
  });
});
