/**
 * Playground feature — domain shapes.
 *
 * No props interfaces here (those live next to the component).
 * No imports from components or hooks.
 */

/* ------------------------------------------------------------------ */
/* Atlas intent palette                                                */
/* ------------------------------------------------------------------ */

export type IntentColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

/* ------------------------------------------------------------------ */
/* Gallery navigation                                                  */
/* ------------------------------------------------------------------ */

export interface PlaygroundNavItem {
  id: string;
  label: string;
}

/* ------------------------------------------------------------------ */
/* Demo entities                                                       */
/* ------------------------------------------------------------------ */

export type PersonStatus = "Active" | "Pending";

export interface Person {
  id: string;
  name: string;
  role: string;
  status: PersonStatus;
}

// Chart data shapes use `type` (not `interface`) so they structurally
// satisfy the design-system's `data: Record<string, unknown>[]` prop —
// interfaces are open for declaration merging and TS won't infer them
// as Record-compatible.
export type RevenueChartDatum = {
  month: string;
  revenue: number;
  expenses: number;
};

export type SparkDatum = {
  value: number;
};

export type DonutDatum = {
  label: string;
  value: number;
};

export type BubbleDatum = {
  x: number;
  y: number;
  z: number;
  label: string;
};

export type IconKey = "home" | "inbox" | "settings" | "alerts" | "me";

export interface SidebarNavMock {
  id: string;
  label: string;
  iconKey: IconKey;
  badge?: string;
}

export interface BottomNavMock {
  id: string;
  label: string;
  iconKey: IconKey;
  badge?: string;
}

export type StepStatus = "completed" | "active" | "pending";

export interface StepDef {
  id: string;
  label: string;
  description?: string;
  status: StepStatus;
}

export type TimelineTone = "primary" | "success" | "warning" | "danger";

export type TimelineIconKey = "circleDot" | "check" | "alert";

export interface TimelineEventMock {
  id: string;
  title: string;
  description?: string;
  meta?: string;
  tone: TimelineTone;
  iconKey: TimelineIconKey;
}

export interface DescriptionItem {
  label: string;
  value: string;
}
