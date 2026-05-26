/**
 * CoverImageHero — full-width hero band with optional image, overlay,
 * title, and a `bottomLeft` slot for nav controls (PageBack pill, tabs).
 *
 * Simplified from Xeekrs's `CoverImageSection.tsx` (327 lines of
 * route-aware logic). Atlas exposes the visual band only — apps pass
 * any nav / breadcrumb chrome via slots.
 *
 * Three tones for the overlay tint:
 *   - `none`     — image only (or no overlay if no image).
 *   - `dark`     — earth-900 alpha overlay; readable white text.
 *   - `gradient` — diagonal hero gradient from the jobAiGradients map.
 */

import { forwardRef, type ReactNode } from "react";
import { cnHero } from "../../../shared/cn-hero";
import { jobAiGradients } from "../../../domain/tokens/colorRamps";

export type CoverImageHeroTone = "none" | "dark" | "gradient";

export interface CoverImageHeroProps {
  /** Image URL. Optional — without it, only the overlay color shows. */
  imageUrl?: string;
  /** Alt text when an image is set. */
  imageAlt?: string;
  /** Headline shown over the band. */
  title?: ReactNode;
  /** Subtitle / kicker beneath the title. */
  subtitle?: ReactNode;
  /** Slot in the bottom-left — typically a `PageBack` or breadcrumbs. */
  bottomLeft?: ReactNode;
  /** Slot in the bottom-right — typically primary CTAs. */
  bottomRight?: ReactNode;
  tone?: CoverImageHeroTone;
  /** Pixel / Tailwind class height. Default `h-64`. */
  height?: string;
  className?: string;
  testId?: string;
  id?: string;
}

const DARK_OVERLAY =
  "bg-gradient-to-t from-earth-900/85 via-earth-900/55 to-earth-900/20";

export const CoverImageHero = forwardRef<HTMLElement, CoverImageHeroProps>(
  function CoverImageHero(
    {
      imageUrl,
      imageAlt = "",
      title,
      subtitle,
      bottomLeft,
      bottomRight,
      tone = "dark",
      height = "h-64",
      className,
      testId,
      id,
    },
    ref,
  ) {
    return (
      <section
        ref={ref}
        id={id}
        data-testid={testId}
        className={cnHero(
          "relative w-full overflow-hidden rounded-2xl bg-muted",
          height,
          className,
        )}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt}
            className="absolute inset-0 size-full object-cover"
            draggable={false}
          />
        ) : null}

        {tone === "dark" ? (
          <div className={cnHero("absolute inset-0", DARK_OVERLAY)} aria-hidden />
        ) : tone === "gradient" ? (
          <div
            className="absolute inset-0"
            style={{ backgroundImage: jobAiGradients.hero, opacity: 0.85 }}
            aria-hidden
          />
        ) : null}

        <div className="relative flex h-full w-full flex-col justify-end p-6">
          {title || subtitle ? (
            <div className="mb-3 max-w-2xl space-y-1">
              {title ? (
                <h2
                  className={cnHero(
                    "font-heading text-2xl font-bold tracking-tight md:text-3xl",
                    tone === "none" ? "text-foreground" : "text-white",
                  )}
                >
                  {title}
                </h2>
              ) : null}
              {subtitle ? (
                <p
                  className={cnHero(
                    "text-sm md:text-base",
                    tone === "none" ? "text-muted-foreground" : "text-white/80",
                  )}
                >
                  {subtitle}
                </p>
              ) : null}
            </div>
          ) : null}

          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2">{bottomLeft}</div>
            <div className="flex shrink-0 items-center gap-2">{bottomRight}</div>
          </div>
        </div>
      </section>
    );
  },
);

CoverImageHero.displayName = "CoverImageHero";
