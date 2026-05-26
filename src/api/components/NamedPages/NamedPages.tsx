/**
 * NamedPages — Page-suffixed aliases for Xeekrs `*Page.tsx` /
 * `*View.tsx` files, mapped onto the corresponding Atlas Route shells.
 *
 * In Xeekrs, "Page" components are full app pages that combine routing,
 * data hooks, and a layout. In Atlas, a Page is purely a layout shell:
 * it owns chrome (title, subnav, hero, content area) and the consumer
 * supplies the data + state via slot props.
 *
 * This file exists so consumers migrating from Xeekrs can keep their
 * imports working (`import { JobBoardPage } from "@atlas/design-system"`)
 * while picking up Atlas's slot-based behavior.
 *
 * For pages whose shell isn't `BoardRoute`/`WizardRoute`, the export is
 * a direct re-export of the underlying shell (DetailRoute / ProfileRoute
 * / MobileRoute) — the consumer's toolbar / hero slot carries the title.
 */

import { BoardRoute, type BoardRouteProps } from "../BoardRoute";
import { DetailRoute } from "../DetailRoute";
import { WizardRoute, type WizardRouteProps } from "../WizardRoute";
import { ProfileRoute } from "../ProfileRoute";
import { MobileRoute } from "../MobileRoute";

function namedBoardPage(defaultTitle: string) {
  const Named = (props: BoardRouteProps) => <BoardRoute title={defaultTitle} {...props} />;
  Named.displayName = `${defaultTitle.replace(/[^a-z0-9]/gi, "")}Page`;
  return Named;
}

function namedWizardPage(defaultTitle: string) {
  const Named = (props: WizardRouteProps) => <WizardRoute title={defaultTitle} {...props} />;
  Named.displayName = `${defaultTitle.replace(/[^a-z0-9]/gi, "")}Page`;
  return Named;
}

// ───────────────────────────── Board-pattern pages ──────────────────
export const AccountPage = namedBoardPage("Account");
export const JobBoardPage = namedBoardPage("Job board");
export const JobListingsPage = namedBoardPage("Job listings");
export const ProgramsPage = namedBoardPage("Programs");
export const ProgramsView = namedBoardPage("Programs");
export const ProjectsPage = namedBoardPage("Projects");
export const ProjectsView = namedBoardPage("Projects");
export const ReportsPage = namedBoardPage("Reports");
export const ReportsView = namedBoardPage("Reports");
export const TasksPage = namedBoardPage("Tasks");
export const WorkspacePage = namedBoardPage("Workspace");
export const MyLearnersPage = namedBoardPage("My learners");
export const PeoplePage = namedBoardPage("People");
export const PeopleView = namedBoardPage("People");
export const ApplicantsView = namedBoardPage("Applicants");
export const SearchView = namedBoardPage("Search");
export const MessagesWorkspacePage = namedBoardPage("Messages");
export const CareerProfilesPage = namedBoardPage("Career profiles");

// ───────────────────────────── Wizard-pattern pages ─────────────────
export const NewPostingPage = namedWizardPage("New posting");

// ───────────────────────────── Profile / Detail pages ───────────────
// Hero / toolbar carries the title.
export const LearnerProfile = ProfileRoute;
export const LearnerProfilePage = ProfileRoute;
export const CareerProgressPage = ProfileRoute;
export const ProjectFilesView = DetailRoute;
export const ProjectPlanView = DetailRoute;
export const ProjectOverview = DetailRoute;

// ───────────────────────────── Mobile-pattern pages ─────────────────
export const MobileNotifications = MobileRoute;
export const MobileToolkit = MobileRoute;
