/**
 * InterviewPipelineStepper — vertical pipeline stepper used for
 * recruitment interview stages (Requested → Confirmed → Completed),
 * with optional terminal rows (Rescheduled / Cancelled).
 *
 * Simplified port of Xeekrs (`interviews/InterviewPipelineStepper.tsx`).
 * The Xeekrs version maps interview status → stage state internally;
 * Atlas keeps the rendering primitive and pushes that mapping to the
 * app. Apps build a `StageState[]` from their domain status and pass
 * it in.
 *
 * Two variants:
 *   - `full`    — captions visible, header summary, terminal action rows.
 *   - `compact` — narrow rail (use inside cards on the expanded chevron).
 */

import { forwardRef, type ReactNode } from "react";
import { Check, Circle, X as CancelX, RotateCw } from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";

export type PipelineState = "done" | "active" | "pending" | "skipped";

export interface PipelineStage {
  id: string;
  label: string;
  caption?: string;
  state: PipelineState;
}

export type PipelineClosureTone = "rescheduled" | "cancelled";

export interface PipelineClosureRow {
  id: string;
  label: string;
  tone: PipelineClosureTone;
  isCurrent?: boolean;
  onSelect?: () => void;
}

export interface InterviewPipelineStepperProps {
  stages: PipelineStage[];
  variant?: "full" | "compact";
  /** Header summary line shown above the steps (full variant only). */
  summary?: ReactNode;
  /** When set, each stage label becomes a clickable button. */
  onSelectStage?: (id: string) => void;
  /** Terminal action rows beneath the main stages (Rescheduled / Cancelled). */
  closureRows?: PipelineClosureRow[];
  className?: string;
  testId?: string;
  id?: string;
}

function StageDot({ state }: { state: PipelineState }) {
  const base = "relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2";
  if (state === "done") {
    return (
      <span className={cnHero(base, "border-emerald-500 bg-emerald-500 text-white")} aria-hidden>
        <Check className="size-3.5" />
      </span>
    );
  }
  if (state === "active") {
    return (
      <span className={cnHero(base, "border-emerald-500 bg-background text-emerald-500")} aria-hidden>
        <span className="size-2 rounded-full bg-emerald-500" />
      </span>
    );
  }
  if (state === "skipped") {
    return (
      <span className={cnHero(base, "border-border bg-muted text-muted-foreground")} aria-hidden>
        <CancelX className="size-3.5" />
      </span>
    );
  }
  return (
    <span className={cnHero(base, "border-border bg-background text-muted-foreground")} aria-hidden>
      <Circle className="size-2" fill="currentColor" />
    </span>
  );
}

function StageLabel({
  label,
  state,
  compact,
  onClick,
  isCurrent,
}: {
  label: string;
  state: PipelineState;
  compact: boolean;
  onClick?: () => void;
  isCurrent: boolean;
}) {
  const text = cnHero(
    compact ? "text-sm" : "text-base",
    state === "skipped" ? "text-muted-foreground line-through" : "text-foreground",
    isCurrent ? "font-semibold" : "font-medium",
  );
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={cnHero(
          text,
          "rounded-md text-left transition-colors hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        )}
      >
        {label}
      </button>
    );
  }
  return <p className={text}>{label}</p>;
}

const CLOSURE_TONE_CLASS: Record<PipelineClosureTone, string> = {
  rescheduled: "text-warning-700",
  cancelled: "text-destructive",
};

const CLOSURE_ICON: Record<PipelineClosureTone, ReactNode> = {
  rescheduled: <RotateCw className="size-3.5 shrink-0" aria-hidden />,
  cancelled: <CancelX className="size-3.5 shrink-0" aria-hidden />,
};

export const InterviewPipelineStepper = forwardRef<
  HTMLDivElement,
  InterviewPipelineStepperProps
>(function InterviewPipelineStepper(
  { stages, variant = "full", summary, onSelectStage, closureRows, className, testId, id },
  ref,
) {
  const compact = variant === "compact";

  return (
    <div
      ref={ref}
      id={id}
      data-testid={testId}
      className={cnHero("flex flex-col", className)}
    >
      {!compact && summary ? (
        <p className="mb-3 text-sm text-muted-foreground md:text-base">{summary}</p>
      ) : null}

      <ol className="relative">
        {stages.map((stage, idx) => {
          const isLast = idx === stages.length - 1;
          const connectorClass =
            stage.state === "done"
              ? "bg-emerald-500/60"
              : stage.state === "active"
                ? "bg-emerald-500/35"
                : "bg-border";
          return (
            <li
              key={stage.id}
              className={cnHero("relative flex gap-3", compact ? "pb-4 last:pb-0" : "pb-6 last:pb-0")}
            >
              {!isLast ? (
                <span
                  aria-hidden
                  className={cnHero("absolute left-3 top-6 bottom-0 w-0.5", connectorClass)}
                />
              ) : null}
              <StageDot state={stage.state} />
              <div className="min-w-0 flex-1 pt-0.5">
                <StageLabel
                  label={stage.label}
                  state={stage.state}
                  compact={compact}
                  onClick={onSelectStage ? () => onSelectStage(stage.id) : undefined}
                  isCurrent={stage.state === "active"}
                />
                {!compact && stage.caption ? (
                  <p
                    className={cnHero(
                      "mt-1 text-sm text-muted-foreground md:text-base",
                      stage.state === "skipped" && "italic",
                    )}
                  >
                    {stage.state === "skipped" ? "Skipped." : stage.caption}
                  </p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>

      {closureRows && closureRows.length > 0 ? (
        <div
          className={cnHero(
            "mt-2 flex flex-col gap-1.5 border-t border-border/60 pt-3",
            compact ? "text-sm" : "text-base",
          )}
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Change status
          </p>
          {closureRows.map((row) => (
            <button
              key={row.id}
              type="button"
              onClick={row.onSelect}
              className={cnHero(
                "inline-flex items-center gap-2 rounded-md px-2 py-1 text-left transition-colors hover:bg-muted/60",
                CLOSURE_TONE_CLASS[row.tone],
                row.isCurrent && "font-semibold",
              )}
            >
              {CLOSURE_ICON[row.tone]}
              {row.label}
              {row.isCurrent ? (
                <span className="ml-1 text-xs text-muted-foreground">(current)</span>
              ) : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
});

InterviewPipelineStepper.displayName = "InterviewPipelineStepper";
