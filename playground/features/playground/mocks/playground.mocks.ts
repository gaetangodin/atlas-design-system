/**
 * Playground feature — mock data.
 *
 * One place, one rule: all sample data lives here. Components and
 * sections never define data inline.
 *
 * Names and figures are realistic — no Lorem Ipsum, no Foo/Bar/Baz.
 */

import type {
  BottomNavMock,
  BubbleDatum,
  DescriptionItem,
  DonutDatum,
  Person,
  RevenueChartDatum,
  SidebarNavMock,
  SparkDatum,
  StepDef,
  TimelineEventMock,
} from "../types/playground.types";

/* ------------------------------------------------------------------ */
/* Charts                                                              */
/* ------------------------------------------------------------------ */

export const mockRevenueChart: RevenueChartDatum[] = [
  { month: "Jan", revenue: 4200, expenses: 2800 },
  { month: "Feb", revenue: 5100, expenses: 3100 },
  { month: "Mar", revenue: 4800, expenses: 2900 },
  { month: "Apr", revenue: 6200, expenses: 3400 },
  { month: "May", revenue: 7100, expenses: 3700 },
  { month: "Jun", revenue: 6800, expenses: 3600 },
];

export const mockSparkSeries: SparkDatum[] = [
  { value: 12 },
  { value: 18 },
  { value: 14 },
  { value: 22 },
  { value: 25 },
  { value: 28 },
  { value: 24 },
  { value: 31 },
];

export const mockTrafficSources: DonutDatum[] = [
  { label: "Direct", value: 42 },
  { label: "Search", value: 31 },
  { label: "Social", value: 18 },
  { label: "Referral", value: 9 },
];

/** Realistic campaign performance — replaces the prior Alpha/Beta/Gamma/Delta placeholders. */
export const mockCampaignBubbles: BubbleDatum[] = [
  { x: 12, y: 24, z: 80, label: "Spring Launch" },
  { x: 28, y: 38, z: 320, label: "Founders Email" },
  { x: 44, y: 18, z: 180, label: "Partner Webinar" },
  { x: 60, y: 52, z: 240, label: "Q2 Retargeting" },
];

/* ------------------------------------------------------------------ */
/* People                                                              */
/* ------------------------------------------------------------------ */

export const mockPeople: Person[] = [
  { id: "1", name: "Avery Lin", role: "Engineering", status: "Active" },
  { id: "2", name: "Morgan Reyes", role: "Design", status: "Active" },
  { id: "3", name: "Sasha Park", role: "Product", status: "Pending" },
  { id: "4", name: "Jordan Kim", role: "Engineering", status: "Active" },
  // Long-name + minimal-fields edge cases for layout testing:
  {
    id: "5",
    name: "Aleksandra Mikhailovna Volkonskaya-Romanenko",
    role: "Customer success",
    status: "Active",
  },
];

/* ------------------------------------------------------------------ */
/* Navigation shells                                                   */
/* ------------------------------------------------------------------ */

export const mockSidebarItems: SidebarNavMock[] = [
  { id: "home", label: "Home", iconKey: "home" },
  { id: "inbox", label: "Inbox", iconKey: "inbox", badge: "3" },
  { id: "settings", label: "Settings", iconKey: "settings" },
];

export const mockBottomNavItems: BottomNavMock[] = [
  { id: "home", label: "Home", iconKey: "home" },
  { id: "inbox", label: "Inbox", iconKey: "inbox", badge: "5" },
  { id: "alerts", label: "Alerts", iconKey: "alerts" },
  { id: "me", label: "Me", iconKey: "me" },
];

/* ------------------------------------------------------------------ */
/* Stepper                                                             */
/* ------------------------------------------------------------------ */

export const mockOnboardingSteps: StepDef[] = [
  { id: "1", label: "Account", description: "Basic info", status: "completed" },
  { id: "2", label: "Workspace", description: "Pick a name", status: "active" },
  { id: "3", label: "Invite", description: "Add teammates", status: "pending" },
];

/* ------------------------------------------------------------------ */
/* Timeline                                                            */
/* ------------------------------------------------------------------ */

export const mockWorkspaceTimeline: TimelineEventMock[] = [
  {
    id: "1",
    title: "Workspace created",
    description: "Avery Lin set up the Marble workspace.",
    meta: "2h ago",
    tone: "primary",
    iconKey: "circleDot",
  },
  {
    id: "2",
    title: "Billing connected",
    description: "Stripe account linked successfully.",
    meta: "1h ago",
    tone: "success",
    iconKey: "check",
  },
  {
    id: "3",
    title: "Webhook failing",
    description: "POST /events returning 500.",
    meta: "12m ago",
    tone: "danger",
    iconKey: "alert",
  },
];

/* ------------------------------------------------------------------ */
/* Description list                                                    */
/* ------------------------------------------------------------------ */

export const mockBillingSummary: DescriptionItem[] = [
  { label: "Plan", value: "Enterprise" },
  { label: "Seats", value: "42 of 100" },
  { label: "Renewal", value: "Mar 14, 2026" },
  { label: "Owner", value: "hello@marbleu.co" },
];
