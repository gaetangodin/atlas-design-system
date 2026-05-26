/**
 * Timeline — vertical event list. Each event is a row with a marker
 * and connector line. Custom — no HeroUI primitive.
 */
import { forwardRef, type ReactNode, type Ref } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface TimelineEvent {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  /** Tone for the marker dot. Defaults to neutral. */
  tone?: "neutral" | "primary" | "success" | "warning" | "danger";
  icon?: ReactNode;
}

export interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

const toneClass: Record<NonNullable<TimelineEvent["tone"]>, string> = {
  neutral: "bg-muted text-foreground",
  primary: "bg-primary text-primary-foreground",
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  danger: "bg-destructive text-white",
};

export const Timeline = forwardRef<HTMLOListElement, TimelineProps>(function Timeline(
  { events, className },
  ref,
) {
  return (
    <ol ref={ref as Ref<HTMLOListElement>} role="list" className={cnHero("relative", className)}>
      {events.map((event, idx) => {
        const isLast = idx === events.length - 1;
        return (
          <li key={event.id} className="relative pl-9 pb-5 last:pb-0">
            {!isLast ? (
              <span aria-hidden="true" className="absolute left-3 top-7 bottom-0 w-px bg-border" />
            ) : null}
            <span
              className={cnHero(
                "absolute left-0 top-1 inline-flex items-center justify-center size-6 rounded-full ring-4 ring-background",
                toneClass[event.tone ?? "neutral"],
              )}
            >
              {event.icon ?? <span className="size-1.5 rounded-full bg-current opacity-80" />}
            </span>
            <div>
              <div className="text-sm font-medium text-foreground">{event.title}</div>
              {event.description ? (
                <div className="text-sm text-muted-foreground mt-0.5">{event.description}</div>
              ) : null}
              {event.meta ? <div className="text-xs text-muted-foreground mt-1">{event.meta}</div> : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
});
Timeline.displayName = "Timeline";
