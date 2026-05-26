/**
 * PromotionCard — illustrated promo / announcement card used inline
 * (in feeds, on dashboards) or as a popover postcard.
 *
 * Renders title + body + CTA over an optional image / gradient
 * backdrop. Supports `tone` for gradient selection from the
 * `jobAiGradients` map.
 */

import { forwardRef, type ReactNode } from "react";
import { cnHero } from "../../../shared/cn-hero";
import { jobAiGradients } from "../../../domain/tokens/colorRamps";

export type PromotionCardTone = "lavender" | "earth" | "warm" | "image";

export interface PromotionCardProps {
  title: ReactNode;
  body?: ReactNode;
  tone?: PromotionCardTone;
  /** Image URL — used when `tone="image"`. */
  imageUrl?: string;
  imageAlt?: string;
  /** Top-right badge (e.g. "New"). */
  badge?: ReactNode;
  /** CTA slot — typically an Atlas Button. */
  cta?: ReactNode;
  /** Optional close handler — adds a dismiss × in the top-right. */
  onClose?: () => void;
  className?: string;
  testId?: string;
  id?: string;
}

function backdropFor(tone: PromotionCardTone, imageUrl?: string): React.CSSProperties | undefined {
  if (tone === "image" && imageUrl) {
    return {
      backgroundImage: `linear-gradient(180deg, rgba(12, 33, 32, 0.10) 0%, rgba(12, 33, 32, 0.45) 100%), url(${imageUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  }
  if (tone === "lavender") return { backgroundImage: jobAiGradients.subtle };
  if (tone === "earth") return { backgroundImage: jobAiGradients.hero };
  if (tone === "warm") return { backgroundImage: jobAiGradients.warmth };
  return undefined;
}

export const PromotionCard = forwardRef<HTMLDivElement, PromotionCardProps>(
  function PromotionCard(
    {
      title,
      body,
      tone = "lavender",
      imageUrl,
      imageAlt,
      badge,
      cta,
      onClose,
      className,
      testId,
      id,
    },
    ref,
  ) {
    const onTint = tone === "earth" || tone === "image";
    return (
      <div
        ref={ref}
        id={id}
        data-testid={testId}
        role={imageAlt ? "img" : undefined}
        aria-label={imageAlt}
        style={backdropFor(tone, imageUrl)}
        className={cnHero(
          "relative overflow-hidden rounded-2xl border border-border p-5 shadow-sm",
          tone === "lavender" && "bg-lavender-50",
          tone === "warm" && "bg-canary-50",
          tone === "earth" && "bg-earth-900",
          tone === "image" && "bg-card",
          className,
        )}
      >
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            aria-label="Dismiss"
            className={cnHero(
              "absolute right-3 top-3 inline-flex size-7 items-center justify-center rounded-full transition-colors",
              onTint
                ? "text-white/80 hover:bg-white/10 hover:text-white"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            ×
          </button>
        ) : null}

        {badge ? (
          <div className="mb-3 flex">
            {badge}
          </div>
        ) : null}

        <div className="space-y-2">
          <h3
            className={cnHero(
              "font-heading text-lg font-semibold tracking-tight",
              onTint ? "text-white" : "text-foreground",
            )}
          >
            {title}
          </h3>
          {body ? (
            <p
              className={cnHero(
                "text-sm",
                onTint ? "text-white/80" : "text-muted-foreground",
              )}
            >
              {body}
            </p>
          ) : null}
        </div>

        {cta ? <div className="mt-4">{cta}</div> : null}
      </div>
    );
  },
);

PromotionCard.displayName = "PromotionCard";
