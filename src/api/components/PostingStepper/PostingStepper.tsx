/**
 * PostingStepper — wizard sidebar pattern from Xeekrs's posting flow.
 *
 * Wraps Atlas's generic `Stepper` with the wizard sidebar chrome
 * (rounded card, sticky positioning, "Step N of M" header, optional
 * resume / save-draft footer). Apps still pass `steps[]` in the
 * standard Stepper shape; this just adds the surrounding shell.
 */

import { forwardRef, type ReactNode } from "react";
import { Stepper } from "../Stepper";
import type { StepperStep } from "../Stepper";
import { cnHero } from "../../../shared/cn-hero";

export interface PostingStepperProps {
  steps: StepperStep[];
  current: number;
  title?: string;
  footer?: ReactNode;
  className?: string;
  testId?: string;
  id?: string;
}

export const PostingStepper = forwardRef<HTMLElement, PostingStepperProps>(
  function PostingStepper(
    { steps, current, title = "Job posting", footer, className, testId, id },
    ref,
  ) {
    const total = steps.length;
    const safeCurrent = Math.max(0, Math.min(total - 1, current));
    return (
      <aside
        ref={ref}
        id={id}
        data-testid={testId}
        className={cnHero(
          "flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm",
          className,
        )}
      >
        <div className="space-y-1 border-b border-border pb-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {title}
          </p>
          <p className="text-sm font-medium text-foreground">
            Step {safeCurrent + 1} of {total}
          </p>
        </div>
        <Stepper steps={steps} current={safeCurrent} orientation="vertical" />
        {footer ? (
          <div className="border-t border-border pt-3 text-xs text-muted-foreground">
            {footer}
          </div>
        ) : null}
      </aside>
    );
  },
);

PostingStepper.displayName = "PostingStepper";
