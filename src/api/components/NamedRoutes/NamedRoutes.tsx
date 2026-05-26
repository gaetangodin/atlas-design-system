/**
 * NamedRoutes — thin wrappers over the generic Route shells
 * (`BoardRoute`, `DetailRoute`, `WizardRoute`, `MobileRoute`,
 * `ProfileRoute`) that bake in a sensible default title for each
 * Xeekrs route name.
 *
 * Apps still pass content, actions, and data via the slot props on
 * each wrapper — none of these components are routers or carry
 * domain state. They exist so the Xeekrs library's named pages are
 * present in Atlas, and the team can see what shell each maps to.
 *
 * `DetailRoute` and `ProfileRoute` don't expose a `title` prop —
 * the toolbar / hero slots carry the page title. Routes that follow
 * those patterns just re-export the shell directly.
 */

import { BoardRoute, type BoardRouteProps } from "../BoardRoute";
import { DetailRoute } from "../DetailRoute";
import { WizardRoute, type WizardRouteProps } from "../WizardRoute";
import { MobileRoute } from "../MobileRoute";
import { ProfileRoute } from "../ProfileRoute";

function namedBoard(defaultTitle: string) {
  const Named = (props: BoardRouteProps) => <BoardRoute title={defaultTitle} {...props} />;
  Named.displayName = `${defaultTitle.replace(/[^a-z0-9]/gi, "")}Route`;
  return Named;
}

function namedWizard(defaultTitle: string) {
  const Named = (props: WizardRouteProps) => <WizardRoute title={defaultTitle} {...props} />;
  Named.displayName = `${defaultTitle.replace(/[^a-z0-9]/gi, "")}Route`;
  return Named;
}

// ───────────────────────────── Board-pattern routes ─────────────────
export const AcademyDashboardRoute = namedBoard("Academy dashboard");
export const AnalyticsRoute = namedBoard("Analytics");
export const AnnouncementsBoardRoute = namedBoard("Announcements board");
export const AnnouncementsListRoute = namedBoard("Announcements");
export const CandidatesRoute = namedBoard("Candidates");
export const CaseloadOverviewRoute = namedBoard("Caseload overview");
export const CaseloadEmployersRoute = namedBoard("Caseload — Employers");
export const CaseloadEmployersStageRoute = namedBoard("Employer pipeline");
export const CaseloadTeamRoute = namedBoard("Caseload — Team");
export const CxFeedRoute = namedBoard("CX feed");
export const HelpDeskRoute = namedBoard("Help Desk");
export const HelpDeskLearningRoute = namedBoard("Help Desk — Learning");
export const HelpDeskSupportRoute = namedBoard("Help Desk — Support");
export const IncentivesManageRoute = namedBoard("Incentives");
export const IncentiveTiersListRoute = namedBoard("Incentive tiers");
export const RewardsRoute = namedBoard("Rewards");
export const InterviewsRoute = namedBoard("Interviews");
export const JobMatchesRoute = namedBoard("Job matches");
export const JobPostingsIndexRoute = namedBoard("Job postings");
export const JobProcurementRoute = namedBoard("Job procurement");
export const MarketplaceCatalogueRoute = namedBoard("Marketplace catalogue");
export const ReferralNetworkRoute = namedBoard("Referral network");
export const SupportNetworkRoute = namedBoard("Support network");
export const MessagesWorkspaceRoute = namedBoard("Messages");
export const CareerProfilesRoute = namedBoard("Career profiles");

// ───────────────────────────── Wizard-pattern routes ────────────────
export const AnnouncementEditorRoute = namedWizard("Edit announcement");
export const NewPostingRoute = namedWizard("New posting");
export const ResumeBuilderRoute = namedWizard("Resume builder");

// ───────────────────────────── Detail / Profile-pattern routes ──────
// Re-exports — title is part of the consumer's toolbar / hero slot.
export const AnnouncementDetailRoute = DetailRoute;
export const EmployerProfileRoute = ProfileRoute;
export const CareerHubDashboardRoute = ProfileRoute;
export const CareerProgressRoute = ProfileRoute;

// ───────────────────────────── Mobile-pattern routes ────────────────
export const MobileMessagesRoute = MobileRoute;
export const MobileNotificationsRoute = MobileRoute;
export const MobileToolkitRoute = MobileRoute;
