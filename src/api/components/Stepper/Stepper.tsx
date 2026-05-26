/**
 * Stepper — horizontal numbered steps with connector lines.
 * Custom — no HeroUI primitive. Visual mirrors Preline's stepper
 * pattern but themed with Xeekrs tokens.
 *
 * States: pending, active, completed.
 */
"use client";
import { forwardRef } from "react";
import { cnHero } from "../../../shared/cn-hero";

export type StepStatus = "pending" | "active" | "completed";

export interface StepperStep {
  id: string;
  label: string;
  description?: string;
  status?: StepStatus;
}

export interface StepperProps {
  steps: StepperStep[];
  /** Index of the current step. Drives status if a step's status is undefined. */
  current?: number;
  orientation?: "horizontal" | "vertical";
  /** Optional click handler — called with the step id when a step is tapped. */
  onStepClick?: (id: string) => void;
  className?: string;
}

function deriveStatus(idx: number, current: number, explicit?: StepStatus): StepStatus {
  if (explicit) return explicit;
  if (idx < current) return "completed";
  if (idx === current) return "active";
  return "pending";
}

function Indicator({ status, idx }: { status: StepStatus; idx: number }) {
  const base =
    "shrink-0 inline-flex items-center justify-center size-8 rounded-full border text-sm font-medium transition-colors";
  if (status === "completed") {
    return (
      <span className={cnHero(base, "bg-primary border-primary text-primary-foreground")}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 7.5L6 10.5L11 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  if (status === "active") {
    return (
      <span className={cnHero(base, "bg-primary border-primary text-primary-foreground")}>{idx + 1}</span>
    );
  }
  return (
    <span className={cnHero(base, "bg-background border-border text-muted-foreground")}>{idx + 1}</span>
  );
}

export const Stepper = forwardRef<HTMLOListElement, StepperProps>(function Stepper(
  { steps, current = 0, orientation = "horizontal", onStepClick, className },
  ref,
) {
  const isHorizontal = orientation === "horizontal";
  return (
    <ol
      ref={ref}
      role="list"
      aria-label="Progress"
      className={cnHero(
        isHorizontal ? "flex w-full items-start" : "flex flex-col gap-3",
        className,
      )}
    >
      {steps.map((step, idx) => {
        const status = deriveStatus(idx, current, step.status);
        const isLast = idx === steps.length - 1;
        const interactive = !!onStepClick;
        const Tag: "button" | "div" = interactive ? "button" : "div";
        return (
          <li
            key={step.id}
            className={cnHero(
              isHorizontal ? "flex-1 flex items-start gap-3 min-w-0" : "flex items-start gap-3",
            )}
            aria-current={status === "active" ? "step" : undefined}
          >
            <Tag
              type={interactive ? "button" : undefined}
              onClick={interactive ? () => onStepClick?.(step.id) : undefined}
              className={cnHero(
                "flex items-start gap-3 text-left min-w-0",
                interactive && "cursor-pointer outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] rounded-md",
              )}
            >
              <Indicator status={status} idx={idx} />
              <div className="min-w-0">
                <div
                  className={cnHero(
                    "text-sm font-medium",
                    status === "pending" ? "text-muted-foreground" : "text-foreground",
                  )}
                >
                  {step.label}
                </div>
                {step.description ? (
                  <div className="text-xs text-muted-foreground mt-0.5 truncate">{step.description}</div>
                ) : null}
              </div>
            </Tag>
            {!isLast && isHorizontal ? (
              <div
                aria-hidden="true"
                className={cnHero(
                  "flex-1 h-px mt-4 mx-2",
                  status === "completed" ? "bg-primary" : "bg-border",
                )}
              />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
});
Stepper.displayName = "Stepper";
