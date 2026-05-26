/**
 * StatCard — KPI card pattern.
 * Small label up top, big number below, optional delta chip.
 * Mirrors the Wealthsimple-style "numbers are heroes" treatment.
 */
import { forwardRef, type ReactNode, type Ref } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface StatCardProps {
  label: ReactNode;
  value: ReactNode;
  /** Comparison vs. prior period — colors auto by sign. Pass plain text or your own node. */
  delta?: ReactNode;
  deltaTone?: "neutral" | "positive" | "negative";
  /** Caption under the value (e.g. "vs. last month"). */
  caption?: ReactNode;
  /** Optional icon in the top-right. */
  icon?: ReactNode;
  className?: string;
}

const toneClass: Record<NonNullable<StatCardProps["deltaTone"]>, string> = {
  neutral: "bg-muted text-foreground",
  positive: "bg-success/10 text-success",
  negative: "bg-destructive/10 text-destructive",
};

export const StatCard = forwardRef<HTMLDivElement, StatCardProps>(function StatCard(
  { label, value, delta, deltaTone = "neutral", caption, icon, className },
  ref,
) {
  return (
    <div
      ref={ref as Ref<HTMLDivElement>}
      className={cnHero(
        "rounded-2xl border border-border bg-card p-5",
        className,
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </div>
        {icon ? (
          <span className="inline-flex items-center justify-center size-7 rounded-full bg-muted text-foreground">
            {icon}
          </span>
        ) : null}
      </div>
      <div className="font-semibold text-foreground tabular-nums" style={{ fontSize: "32px", lineHeight: "1.1" }}>
        {value}
      </div>
      {(delta || caption) && (
        <div className="mt-2 flex items-center gap-2">
          {delta ? (
            <span
              className={cnHero(
                "inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium",
                toneClass[deltaTone],
              )}
            >
              {delta}
            </span>
          ) : null}
          {caption ? <span className="text-xs text-muted-foreground">{caption}</span> : null}
        </div>
      )}
    </div>
  );
});
StatCard.displayName = "StatCard";
