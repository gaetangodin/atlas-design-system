/**
 * Hero — marketing-page hero section. Eyebrow + headline + body +
 * actions, optional media slot to the right.
 */
import { forwardRef, type ReactNode, type Ref } from "react";
import { cnHero } from "../../../shared/cn-hero";

export interface HeroProps {
  eyebrow?: ReactNode;
  headline: ReactNode;
  body?: ReactNode;
  actions?: ReactNode;
  /** Optional media (image, illustration, screenshot). */
  media?: ReactNode;
  /** Layout: stacked (text above) or split (text left, media right). */
  orientation?: "stacked" | "split";
  align?: "start" | "center";
  className?: string;
}

export const Hero = forwardRef<HTMLElement, HeroProps>(function Hero(
  { eyebrow, headline, body, actions, media, orientation = "split", align = "start", className },
  ref,
) {
  const isSplit = orientation === "split";
  const isCenter = align === "center";
  return (
    <section
      ref={ref as Ref<HTMLElement>}
      className={cnHero(
        "py-16 sm:py-20 lg:py-24",
        isSplit && media ? "lg:py-28" : "",
        className,
      )}
    >
      <div className={cnHero("flex gap-12", isSplit && media ? "lg:flex-row flex-col items-center" : "flex-col", isCenter && !isSplit && "items-center text-center")}>
        <div className={cnHero("flex-1 min-w-0 max-w-2xl", isCenter && "mx-auto")}>
          {eyebrow ? (
            <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-3">{eyebrow}</div>
          ) : null}
          <h1
            style={{ fontSize: 48, lineHeight: 1.1, fontWeight: 700 }}
            className="text-foreground tracking-tight font-[var(--font-family-heading,'Raleway',sans-serif)]"
          >
            {headline}
          </h1>
          {body ? (
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{body}</p>
          ) : null}
          {actions ? (
            <div className={cnHero("mt-7 flex gap-3 flex-wrap", isCenter && !isSplit && "justify-center")}>{actions}</div>
          ) : null}
        </div>
        {isSplit && media ? <div className="flex-1 min-w-0 max-w-xl">{media}</div> : null}
      </div>
    </section>
  );
});
Hero.displayName = "Hero";
