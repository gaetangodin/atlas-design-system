/**
 * migration-smoke.test.tsx — render-smoke coverage for the components
 * added in the v0.2 Xeekrs migration.
 *
 * Each test renders the component with minimal props and asserts it
 * lands in the DOM. The intent is to catch obvious regressions (broken
 * imports, missing exports, runtime crashes) — not to assert behaviour.
 * Per-component behavioural tests live next to the component files
 * where it matters (BrandLogo, ColorScale, PageBack, etc. have richer
 * suites of their own).
 */

import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { HeroUIProvider } from "@heroui/react";
import {
  AccountMenu,
  AiGeneratedBadge,
  AlertBar,
  AnonymousProfileCard,
  ApplicantDocumentMiniCard,
  BrowseHubCard,
  BulletinRow,
  Chip,
  ColumnSelector,
  ConsentAlertBar,
  ContactInfoButton,
  CoverImageHero,
  DisclosureBar,
  EntryPathCards,
  FilterSection,
  GradientToken,
  InlineAiAssist,
  InterviewPipelineStepper,
  InternalNotesField,
  MatchDiamond,
  MegaSearch,
  MobileTopBar,
  PostingStepper,
  ProfileCardToolbar,
  ProfileIdentityWell,
  PromotionCard,
  QualityScorePanel,
  QuickActionButton,
  ReadinessBadge,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  SearchToolbar,
  SiteSwitcherTrigger,
  SubNav,
  TemplateCard,
  TopBar,
  VoiceAndTone,
} from "./index";
import { User } from "lucide-react";
import { Input } from "./components/Input";

/** Wrap components that depend on HeroUI's context. */
function withProvider(node: React.ReactNode) {
  return <HeroUIProvider>{node}</HeroUIProvider>;
}

describe("v0.2 migration smoke — Shell & chrome", () => {
  it("AccountMenu renders the heading + items", () => {
    render(
      <AccountMenu
        items={[{ id: "profile", label: "Profile", icon: <User /> }]}
        activeId="profile"
        onSelect={() => {}}
      />,
    );
    expect(screen.getByText("My Account")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
  });

  it("AlertBar renders the message", () => {
    render(<AlertBar message="System maintenance window scheduled." />);
    expect(screen.getByText(/System maintenance/)).toBeInTheDocument();
  });

  it("BrowseHubCard renders children", () => {
    render(
      <BrowseHubCard onClick={() => {}}>
        <p>Job postings</p>
      </BrowseHubCard>,
    );
    expect(screen.getByText("Job postings")).toBeInTheDocument();
  });

  it("BulletinRow renders title + meta", () => {
    render(<BulletinRow title="New cohort enrolled" meta="2h ago" />);
    expect(screen.getByText("New cohort enrolled")).toBeInTheDocument();
    expect(screen.getByText("2h ago")).toBeInTheDocument();
  });

  it("ConsentAlertBar (staff) renders revoke button", () => {
    render(
      <ConsentAlertBar
        perspective="staff"
        displayName="Pending candidate"
        onViewTerms={() => {}}
        onRevoke={() => {}}
      />,
    );
    expect(screen.getByText("Revoke request")).toBeInTheDocument();
  });

  it("CoverImageHero renders title", () => {
    render(<CoverImageHero title="Welcome back" />);
    expect(screen.getByText("Welcome back")).toBeInTheDocument();
  });

  it("DisclosureBar renders the message", () => {
    render(<DisclosureBar message="Posting is shared with all caseworkers." />);
    expect(screen.getByText(/shared with all caseworkers/)).toBeInTheDocument();
  });

  it("MegaSearch renders columns", () => {
    render(
      <MegaSearch
        searchInput={withProvider(<Input placeholder="Search" />)}
        columns={[<p key="a">People</p>, <p key="b">Jobs</p>]}
      />,
    );
    expect(screen.getByText("People")).toBeInTheDocument();
    expect(screen.getByText("Jobs")).toBeInTheDocument();
  });

  it("MobileTopBar renders brand slot", () => {
    render(
      <MobileTopBar sticky={false} brand={<p>Recruitment</p>} />,
    );
    expect(screen.getByText("Recruitment")).toBeInTheDocument();
  });

  it("PromotionCard renders title + body", () => {
    render(<PromotionCard title="Try AI matching" body="Get a ranked shortlist." />);
    expect(screen.getByText("Try AI matching")).toBeInTheDocument();
    expect(screen.getByText("Get a ranked shortlist.")).toBeInTheDocument();
  });

  it("SearchToolbar renders the input slot + chips", () => {
    render(
      <SearchToolbar
        searchInput={withProvider(<Input placeholder="Search" />)}
        chips={<span>Remote</span>}
      />,
    );
    expect(screen.getByText("Remote")).toBeInTheDocument();
  });

  it("SiteSwitcherTrigger fires onOpen", () => {
    const fn = vi.fn();
    render(<SiteSwitcherTrigger siteName="Marble HQ" initials="MU" onOpen={fn} />);
    fireEvent.click(screen.getByRole("button"));
    expect(fn).toHaveBeenCalledOnce();
  });

  it("SubNav renders left/right slots", () => {
    render(<SubNav left={<span>L</span>} right={<span>R</span>} />);
    expect(screen.getByText("L")).toBeInTheDocument();
    expect(screen.getByText("R")).toBeInTheDocument();
  });

  it("TopBar renders brand/right slots", () => {
    render(<TopBar brand={<span>logo</span>} right={<span>actions</span>} />);
    expect(screen.getByText("logo")).toBeInTheDocument();
    expect(screen.getByText("actions")).toBeInTheDocument();
  });
});

describe("v0.2 migration smoke — Recruitment & posting", () => {
  it("AiGeneratedBadge renders default copy", () => {
    render(<AiGeneratedBadge />);
    expect(screen.getByText("AI generated")).toBeInTheDocument();
  });

  it("AnonymousProfileCard renders identity well", () => {
    render(
      <AnonymousProfileCard
        name="Pending candidate"
        isAnonymous
        role="Engineer"
        location="Remote"
      />,
    );
    expect(screen.getByText("Anonymous candidate")).toBeInTheDocument();
  });

  it("ApplicantDocumentMiniCard renders title", () => {
    render(
      <ApplicantDocumentMiniCard
        title="resume.pdf"
        kind="resume"
        onOpen={() => {}}
      />,
    );
    expect(screen.getByText("resume.pdf")).toBeInTheDocument();
    expect(screen.getByText(/Resume/)).toBeInTheDocument();
  });

  it("Chip renders children inside HeroUIProvider", () => {
    render(withProvider(<Chip color="primary">tag</Chip>));
    expect(screen.getByText("tag")).toBeInTheDocument();
  });

  it("ContactInfoButton trigger renders + opens popover-able", () => {
    render(
      withProvider(
        <ContactInfoButton audience="candidate">
          <p>contact body</p>
        </ContactInfoButton>,
      ),
    );
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("EntryPathCards renders options", () => {
    render(
      <EntryPathCards
        options={[
          { id: "a", title: "Option A" },
          { id: "b", title: "Option B" },
        ]}
        value="a"
        onChange={() => {}}
      />,
    );
    expect(screen.getByText("Option A")).toBeInTheDocument();
    expect(screen.getByText("Option B")).toBeInTheDocument();
  });

  it("FilterSection toggles via header click", () => {
    render(
      <FilterSection title="Match" defaultOpen={false}>
        <p>body</p>
      </FilterSection>,
    );
    expect(screen.queryByText("body")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("body")).toBeInTheDocument();
  });

  it("InlineAiAssist renders the prompt + suggestions", () => {
    render(
      <InlineAiAssist
        prompt="Tighten the copy?"
        suggestions={[{ id: "x", label: "Tighten" }]}
        onSuggest={() => {}}
      />,
    );
    expect(screen.getByText("Tighten the copy?")).toBeInTheDocument();
    expect(screen.getByText("Tighten")).toBeInTheDocument();
  });

  it("InternalNotesField renders default label", () => {
    render(withProvider(<InternalNotesField />));
    expect(screen.getByText("Internal notes")).toBeInTheDocument();
  });

  it("InterviewPipelineStepper renders stage labels", () => {
    render(
      <InterviewPipelineStepper
        stages={[
          { id: "1", label: "Requested", state: "done" },
          { id: "2", label: "Confirmed", state: "active" },
        ]}
      />,
    );
    expect(screen.getByText("Requested")).toBeInTheDocument();
    expect(screen.getByText("Confirmed")).toBeInTheDocument();
  });

  it("MatchDiamond renders an SVG", () => {
    const { container } = render(<MatchDiamond level="great" />);
    expect(container.querySelector("svg")).toBeTruthy();
  });

  it("PostingStepper renders the title + step header", () => {
    render(
      <PostingStepper
        steps={[
          { id: "1", label: "Role", status: "active" },
          { id: "2", label: "Review", status: "pending" },
        ]}
        current={0}
      />,
    );
    expect(screen.getByText("Job posting")).toBeInTheDocument();
    expect(screen.getByText("Step 1 of 2")).toBeInTheDocument();
  });

  it("ProfileCardToolbar renders slots", () => {
    render(
      <ProfileCardToolbar leading={<span>L</span>} trailing={<span>T</span>} />,
    );
    expect(screen.getByText("L")).toBeInTheDocument();
    expect(screen.getByText("T")).toBeInTheDocument();
  });

  it("ProfileIdentityWell renders name + role + location", () => {
    render(
      <ProfileIdentityWell
        name="Avery Lin"
        role="Engineer"
        location="Lisbon"
      />,
    );
    expect(screen.getByText("Avery Lin")).toBeInTheDocument();
    expect(screen.getByText("Engineer")).toBeInTheDocument();
    expect(screen.getByText("Lisbon")).toBeInTheDocument();
  });

  it("QualityScorePanel renders the score + tone label", () => {
    render(<QualityScorePanel score={50} title="Score" />);
    expect(screen.getByText("Score")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();
  });

  it("QuickActionButton fires onClick", () => {
    const fn = vi.fn();
    render(
      withProvider(
        <QuickActionButton
          icon={<span>i</span>}
          label="Call"
          onClick={fn}
        />,
      ),
    );
    fireEvent.click(screen.getByRole("button"));
    expect(fn).toHaveBeenCalledOnce();
  });

  it("ReadinessBadge renders the stage", () => {
    render(<ReadinessBadge stage="Interview-Ready" />);
    expect(screen.getByText("Interview-Ready")).toBeInTheDocument();
  });

  it("TemplateCard renders title + meta", () => {
    render(<TemplateCard title="Frontend Engineer" meta="14 postings" onSelect={() => {}} />);
    expect(screen.getByText("Frontend Engineer")).toBeInTheDocument();
    expect(screen.getByText("14 postings")).toBeInTheDocument();
  });
});

describe("v0.2 migration smoke — Brand & data utilities", () => {
  it("GradientToken renders the token name + value", () => {
    render(<GradientToken name="spark" />);
    expect(screen.getByText("Spark")).toBeInTheDocument();
    expect(screen.getByText(/jobAiGradients\.spark/)).toBeInTheDocument();
  });

  it("VoiceAndTone renders the default statement", () => {
    render(<VoiceAndTone />);
    expect(screen.getByText(/Clear, generous/)).toBeInTheDocument();
  });

  it("ColumnSelector trigger renders count", () => {
    render(
      withProvider(
        <ColumnSelector
          columns={[
            { id: "a", label: "Name" },
            { id: "b", label: "Role" },
          ]}
          visibleIds={["a"]}
          onChange={() => {}}
        />,
      ),
    );
    expect(screen.getByText("Columns")).toBeInTheDocument();
    expect(screen.getByText("1/2")).toBeInTheDocument();
  });

  // Skipped: react-resizable-panels v4 needs ResizeObserver, which jsdom
  // doesn't ship. Real-render coverage lives in the playground gallery.
  it.skip("ResizablePanelGroup renders its panels", () => {
    render(
      <ResizablePanelGroup orientation="horizontal" defaultLayout={{ left: 50, right: 50 }}>
        <ResizablePanel id="left">
          <p>L</p>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel id="right">
          <p>R</p>
        </ResizablePanel>
      </ResizablePanelGroup>,
    );
    expect(screen.getByText("L")).toBeInTheDocument();
    expect(screen.getByText("R")).toBeInTheDocument();
  });
});
