/**
 * Dashboards — slot-based shells for the five named Xeekrs dashboards.
 *
 * Each takes a `kpis` strip, optional `filters` row, `charts`, and a
 * `tableOrFeed` slot. Specialized props for any per-dashboard touches.
 * Apps still own the data + the actual chart components — Atlas
 * provides the layout vocabulary.
 */

import { forwardRef, type ReactNode } from "react";
import { cnHero } from "../../../shared/cn-hero";

interface BaseDashboardProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  /** Top action slot (timeframe pickers, "Export"). */
  actions?: ReactNode;
  /** KPI strip — typically 3–4 `<StatCard />` instances. */
  kpis?: ReactNode;
  /** Optional filter row between KPIs and content. */
  filters?: ReactNode;
  /** Charts area — grid of `<BarChart />`, `<LineChart />`, etc. */
  charts?: ReactNode;
  /** Table or feed beneath the charts. */
  tableOrFeed?: ReactNode;
  /** Fallback children — rendered after `tableOrFeed`. */
  children?: ReactNode;
  className?: string;
  testId?: string;
  id?: string;
}

function DashboardShellComponent(
  props: BaseDashboardProps & { kind: string },
  ref: React.Ref<HTMLDivElement>,
) {
  const { kind, title, subtitle, actions, kpis, filters, charts, tableOrFeed, children, className, testId, id } = props;
  return (
    <div
      ref={ref}
      id={id}
      data-testid={testId}
      data-dashboard-kind={kind}
      className={cnHero("flex min-h-full flex-col gap-5 bg-background p-4 md:p-6", className)}
    >
      {title || actions ? (
        <header className="flex flex-wrap items-end justify-between gap-3">
          <div className="min-w-0">
            {title ? (
              <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {title}
              </h1>
            ) : null}
            {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
          </div>
          {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
        </header>
      ) : null}
      {kpis ? <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{kpis}</section> : null}
      {filters ? <section>{filters}</section> : null}
      {charts ? <section className="grid gap-4 lg:grid-cols-2">{charts}</section> : null}
      {tableOrFeed ? <section>{tableOrFeed}</section> : null}
      {children}
    </div>
  );
}

const Shell = forwardRef<HTMLDivElement, BaseDashboardProps & { kind: string }>(DashboardShellComponent);

function makeNamed(kind: string, defaultTitle: string) {
  const Named = forwardRef<HTMLDivElement, BaseDashboardProps>((props, ref) => (
    <Shell ref={ref} kind={kind} {...{ title: defaultTitle, ...props }} />
  ));
  Named.displayName = kind;
  return Named;
}

export const AnalyticsDashboard = makeNamed("AnalyticsDashboard", "Analytics");
export const CoachingDashboard = makeNamed("CoachingDashboard", "Coaching");
export const AdminPanel = makeNamed("AdminPanel", "Admin panel");
export const JobExplorer = makeNamed("JobExplorer", "Job explorer");
export const CareerHubDashboard = makeNamed("CareerHubDashboard", "Career hub");

export type { BaseDashboardProps as DashboardProps };
