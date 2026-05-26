/**
 * InlineAiAssist — small "let AI help" prompt bar.
 *
 * Pattern from Xeekrs's posting AI assist surfaces. Renders a banner
 * with a sparkle icon, a prompt question, and one or more suggested
 * action chips the user can pick to nudge the AI.
 *
 * Click handler is fired with the chosen suggestion's id; apps wire
 * that to their own AI call.
 */

import { forwardRef, type ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { cnHero } from "../../../shared/cn-hero";

export interface AiAssistSuggestion {
  id: string;
  label: string;
}

export interface InlineAiAssistProps {
  /** Headline / prompt question. */
  prompt: ReactNode;
  /** Suggested actions rendered as chips. */
  suggestions?: AiAssistSuggestion[];
  /** Fired when a suggestion chip is clicked. */
  onSuggest?: (id: string) => void;
  /** Footer area (e.g. "Drafts are reviewed by you before sending"). */
  footer?: ReactNode;
  className?: string;
  testId?: string;
  id?: string;
}

export const InlineAiAssist = forwardRef<HTMLDivElement, InlineAiAssistProps>(
  function InlineAiAssist(
    { prompt, suggestions = [], onSuggest, footer, className, testId, id },
    ref,
  ) {
    return (
      <div
        ref={ref}
        id={id}
        data-testid={testId}
        className={cnHero(
          "rounded-2xl border border-lavender-200/70 bg-lavender-50/60 p-4",
          className,
        )}
      >
        <div className="flex items-start gap-3">
          <span
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-lavender-500/30 text-lavender-800"
            aria-hidden
          >
            <Sparkles className="size-4" />
          </span>
          <div className="min-w-0 flex-1 space-y-3">
            <p className="text-sm font-medium text-foreground">{prompt}</p>
            {suggestions.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {suggestions.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => onSuggest?.(s.id)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-lavender-300/60 bg-card px-2.5 py-1 text-xs font-medium text-lavender-800 shadow-sm transition-colors hover:bg-lavender-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            ) : null}
            {footer ? (
              <p className="text-xs text-muted-foreground">{footer}</p>
            ) : null}
          </div>
        </div>
      </div>
    );
  },
);

InlineAiAssist.displayName = "InlineAiAssist";
