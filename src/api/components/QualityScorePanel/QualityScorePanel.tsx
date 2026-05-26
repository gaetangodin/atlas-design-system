/**
 * QualityScorePanel — score-out-of-100 panel with category breakdown.
 *
 * Used in posting / profile completion flows to give the user a sense
 * of how complete their draft is. Renders a big score, a tone label
 * (poor / fair / good / great), and a list of issue rows with status
 * pips.
 *
 * Color tone is computed from the score: <40 destructive, <70 warning,
 * <90 emerald, ≥90 success+gold.
 */

import { forwardRef, type ReactNode } from "react";
import { AlertCircle, Check, CircleAlert, Info } from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";

export type QualityIssueStatus = "ok" | "warn" | "fail" | "info";

export interface QualityIssue {
  id: string;
  label: string;
  status: QualityIssueStatus;
  description?: string;
}

export interface QualityScorePanelProps {
  /** Score 0–100. */
  score: number;
  title?: string;
  issues?: QualityIssue[];
  className?: string;
  testId?: string;
  id?: string;
}

function toneFor(score: number): {
  label: string;
  scoreClass: string;
  bandClass: string;
  ringClass: string;
} {
  if (score < 40) {
    return {
      label: "Needs work",
      scoreClass: "text-destructive",
      bandClass: "bg-destructive/10",
      ringClass: "ring-destructive/30",
    };
  }
  if (score < 70) {
    return {
      label: "Fair",
      scoreClass: "text-warning",
      bandClass: "bg-warning/10",
      ringClass: "ring-warning/30",
    };
  }
  if (score < 90) {
    return {
      label: "Good",
      scoreClass: "text-emerald-600",
      bandClass: "bg-emerald-500/10",
      ringClass: "ring-emerald-500/30",
    };
  }
  return {
    label: "Great",
    scoreClass: "text-emerald-700",
    bandClass: "bg-emerald-500/15",
    ringClass: "ring-emerald-600/40",
  };
}

const STATUS_ICON: Record<QualityIssueStatus, ReactNode> = {
  ok: <Check className="size-3.5" aria-hidden />,
  warn: <CircleAlert className="size-3.5" aria-hidden />,
  fail: <AlertCircle className="size-3.5" aria-hidden />,
  info: <Info className="size-3.5" aria-hidden />,
};

const STATUS_CLASS: Record<QualityIssueStatus, string> = {
  ok: "bg-emerald-500/15 text-emerald-700",
  warn: "bg-warning/15 text-warning",
  fail: "bg-destructive/15 text-destructive",
  info: "bg-info/15 text-info",
};

export const QualityScorePanel = forwardRef<HTMLDivElement, QualityScorePanelProps>(
  function QualityScorePanel(
    { score, title = "Quality score", issues = [], className, testId, id },
    ref,
  ) {
    const clamped = Math.max(0, Math.min(100, Math.round(score)));
    const tone = toneFor(clamped);
    return (
      <div
        ref={ref}
        id={id}
        data-testid={testId}
        className={cnHero(
          "overflow-hidden rounded-2xl border border-border bg-card",
          className,
        )}
      >
        <div className={cnHero("flex items-center gap-4 p-5 ring-1 ring-inset", tone.bandClass, tone.ringClass)}>
          <div
            className={cnHero(
              "flex size-16 shrink-0 items-center justify-center rounded-full bg-card font-bold tabular-nums shadow-sm",
              tone.scoreClass,
            )}
          >
            <span className="text-2xl">{clamped}</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {title}
            </p>
            <p className={cnHero("text-lg font-semibold", tone.scoreClass)}>
              {tone.label}
            </p>
          </div>
        </div>

        {issues.length > 0 ? (
          <ul className="divide-y divide-border">
            {issues.map((issue) => (
              <li
                key={issue.id}
                className="flex items-start gap-3 px-5 py-3"
              >
                <span
                  className={cnHero(
                    "inline-flex size-6 shrink-0 items-center justify-center rounded-full",
                    STATUS_CLASS[issue.status],
                  )}
                  aria-hidden
                >
                  {STATUS_ICON[issue.status]}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground">{issue.label}</p>
                  {issue.description ? (
                    <p className="text-xs text-muted-foreground">{issue.description}</p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  },
);

QualityScorePanel.displayName = "QualityScorePanel";
