/**
 * RecruitmentWalkthrough — guided coach-mark / spotlight tour overlay.
 *
 * Slot-based: the consumer manages step state, target anchoring is left
 * to the host app (Atlas doesn't ship a positioner). This component
 * renders the per-step "card" with step counter, body, and nav buttons,
 * plus an optional global dismiss / skip affordance.
 */

import { type ReactNode } from "react";
import { Sparkles, X } from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";

export interface WalkthroughStep {
  id: string;
  title: ReactNode;
  body?: ReactNode;
  /** Optional visual / illustration. */
  visual?: ReactNode;
}
export interface RecruitmentWalkthroughProps {
  steps: WalkthroughStep[];
  /** Index of the current step. */
  currentIndex: number;
  onNext?: () => void;
  onBack?: () => void;
  onSkip?: () => void;
  onFinish?: () => void;
  /** Override "Next" label on the last step. */
  finishLabel?: ReactNode;
  className?: string;
}
export function RecruitmentWalkthrough({
  steps, currentIndex, onNext, onBack, onSkip, onFinish, finishLabel = "Finish", className,
}: RecruitmentWalkthroughProps) {
  const step = steps[currentIndex];
  if (!step) return null;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === steps.length - 1;
  return (
    <div
      role="dialog"
      aria-label="Walkthrough"
      className={cnHero(
        "pointer-events-auto flex w-full max-w-sm flex-col gap-3 rounded-2xl border border-border bg-background p-4 shadow-xl",
        className,
      )}
    >
      <header className="flex items-start justify-between gap-2">
        <p className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
          <Sparkles className="size-3" aria-hidden /> Walkthrough · {currentIndex + 1} of {steps.length}
        </p>
        {onSkip ? (
          <button type="button" onClick={onSkip} aria-label="Skip walkthrough" className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground">
            <X className="size-3.5" />
          </button>
        ) : null}
      </header>
      {step.visual ? <div className="overflow-hidden rounded-xl bg-muted/40">{step.visual}</div> : null}
      <div>
        <p className="text-sm font-semibold text-foreground">{step.title}</p>
        {step.body ? <p className="mt-0.5 text-xs text-muted-foreground">{step.body}</p> : null}
      </div>
      <footer className="flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={onBack}
          disabled={isFirst}
          className={cnHero(
            "rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-foreground hover:bg-muted",
            isFirst && "opacity-50",
          )}
        >
          Back
        </button>
        <button
          type="button"
          onClick={isLast ? onFinish : onNext}
          className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
        >
          {isLast ? finishLabel : "Next"}
        </button>
      </footer>
    </div>
  );
}
