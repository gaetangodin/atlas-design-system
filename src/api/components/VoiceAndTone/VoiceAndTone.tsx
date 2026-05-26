/**
 * VoiceAndTone — brand voice documentation card.
 *
 * Renders a structured set of "we sound like / we don't sound like"
 * pairs alongside the brand's voice principles. Designed for the
 * foundations gallery and onboarding docs — not for production UI.
 *
 * Atlas ships sensible defaults that mirror the Xeekrs brand voice
 * (clear / generous / no jargon). Apps can override every list.
 */

import { forwardRef, type ReactNode } from "react";
import { Check, X } from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";

export interface VoicePair {
  /** What we say. */
  we: string;
  /** What we don't say. */
  notUs: string;
  /** Optional context. */
  why?: string;
}

export interface VoiceAndToneProps {
  /** One-sentence voice statement. */
  statement?: ReactNode;
  /** Bullet principles. */
  principles?: string[];
  /** Do / don't pairs. */
  pairs?: VoicePair[];
  className?: string;
  testId?: string;
  id?: string;
}

const DEFAULT_STATEMENT =
  "Clear, generous, no jargon. We meet people where they are and help them move forward.";

const DEFAULT_PRINCIPLES = [
  "Plain language over industry-speak.",
  "Specific over vague — name the thing.",
  "Encouraging without being saccharine.",
  "Concise. Cut anything the reader doesn't need.",
];

const DEFAULT_PAIRS: VoicePair[] = [
  {
    we: "Tell us a bit about yourself.",
    notUs: "Please populate the user profile metadata fields.",
    why: "Conversational, second-person.",
  },
  {
    we: "We couldn't save that.",
    notUs: "An error has occurred.",
    why: "Own the problem; avoid passive blame.",
  },
  {
    we: "Add teammates",
    notUs: "Provision additional users",
    why: "Verbs people actually use.",
  },
];

export const VoiceAndTone = forwardRef<HTMLDivElement, VoiceAndToneProps>(
  function VoiceAndTone(
    {
      statement = DEFAULT_STATEMENT,
      principles = DEFAULT_PRINCIPLES,
      pairs = DEFAULT_PAIRS,
      className,
      testId,
      id,
    },
    ref,
  ) {
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
        <div className="space-y-3 border-b border-border bg-muted/30 px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Voice
          </p>
          <p className="font-heading text-2xl leading-tight text-foreground">
            {statement}
          </p>
        </div>

        <div className="grid gap-6 px-6 py-5 md:grid-cols-2">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Principles
            </p>
            <ul className="space-y-2">
              {principles.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                  <span
                    className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700"
                    aria-hidden
                  >
                    <Check className="size-3" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Do / don't
            </p>
            <ul className="space-y-3">
              {pairs.map((pair) => (
                <li key={pair.we} className="rounded-lg border border-border bg-background p-3">
                  <div className="flex items-start gap-2 text-sm">
                    <span
                      className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700"
                      aria-hidden
                    >
                      <Check className="size-3" />
                    </span>
                    <span className="text-foreground">{pair.we}</span>
                  </div>
                  <div className="mt-1.5 flex items-start gap-2 text-sm">
                    <span
                      className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-destructive/15 text-destructive"
                      aria-hidden
                    >
                      <X className="size-3" />
                    </span>
                    <span className="text-muted-foreground line-through">{pair.notUs}</span>
                  </div>
                  {pair.why ? (
                    <p className="mt-2 pl-6 text-xs text-muted-foreground">{pair.why}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  },
);

VoiceAndTone.displayName = "VoiceAndTone";
