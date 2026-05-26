/**
 * EmptyState — onboarding-style empty placeholder.
 * Pattern: icon + headline + body + primary action.
 */
import { forwardRef, type ReactNode, type Ref } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface EmptyStateProps {
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  /** Layout: vertical (centered, default) or horizontal (icon left, content right). */
  orientation?: "vertical" | "horizontal";
  className?: string;
}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(function EmptyState(
  { icon, title, description, action, orientation = "vertical", className },
  ref,
) {
  const isHorizontal = orientation === "horizontal";
  return (
    <div
      ref={ref as Ref<HTMLDivElement>}
      role="status"
      className={cnHero(
        "rounded-2xl border border-border bg-background p-8",
        isHorizontal
          ? "flex items-start gap-5 text-left"
          : "flex flex-col items-center text-center gap-3",
        className,
      )}
    >
      {icon ? (
        <div
          className={cnHero(
            "inline-flex items-center justify-center rounded-full bg-muted text-foreground",
            isHorizontal ? "size-12 [&_svg]:size-6 shrink-0" : "size-14 [&_svg]:size-7",
          )}
        >
          {icon}
        </div>
      ) : null}
      <div className={cnHero(isHorizontal ? "flex-1" : "")}>
        <div className="text-base font-medium text-foreground">{title}</div>
        {description ? (
          <div className={cnHero("text-sm text-muted-foreground mt-1", !isHorizontal && "max-w-md mx-auto")}>
            {description}
          </div>
        ) : null}
        {action ? <div className={cnHero("mt-4", !isHorizontal && "flex justify-center")}>{action}</div> : null}
      </div>
    </div>
  );
});
EmptyState.displayName = "EmptyState";
