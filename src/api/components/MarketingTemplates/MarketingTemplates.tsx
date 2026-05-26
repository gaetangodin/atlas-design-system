/**
 * Marketing layout templates.
 *
 *  - `MarketingHero` — large headline + supporting copy + CTA cluster
 *     over a tonal backdrop / image. The marketing-page hero band.
 *  - `SocialPostTemplate` — 1080×1080 square card with logo / headline
 *     / supporting line / brand mark. For LinkedIn / Instagram exports.
 *  - `DisplayAdTemplate` — IAB-standard 300×250 ad rectangle with
 *     image, headline, body, CTA pill.
 *  - `CampaignSet` — grid of campaign tiles (image + headline +
 *     metric strip) used in campaign dashboards.
 *
 * These are layout / typography templates, not engineered features —
 * apps fill the slots with real copy and images.
 */

import { forwardRef, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { BrandLogo, type BrandLogoVariant } from "../BrandLogo";
import { Card, CardBody } from "../Card";
import { cnHero } from "../../../shared/cn-hero";
import { jobAiGradients } from "../../../domain/tokens/colorRamps";

/* ────────────────────── MarketingHero ───────────────────────────── */

export type MarketingHeroTone = "lavender" | "earth" | "image" | "plain";

export interface MarketingHeroProps {
  eyebrow?: ReactNode;
  headline: ReactNode;
  body?: ReactNode;
  /** Primary + secondary CTA cluster. */
  cta?: ReactNode;
  imageUrl?: string;
  tone?: MarketingHeroTone;
  className?: string;
  testId?: string;
  id?: string;
}

export const MarketingHero = forwardRef<HTMLElement, MarketingHeroProps>(
  function MarketingHero(
    { eyebrow, headline, body, cta, imageUrl, tone = "lavender", className, testId, id },
    ref,
  ) {
    const onTint = tone === "earth" || tone === "image";
    const style: React.CSSProperties | undefined =
      tone === "image" && imageUrl
        ? {
            backgroundImage: `linear-gradient(180deg, rgba(12,33,32,.10), rgba(12,33,32,.55)), url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }
        : tone === "earth"
          ? { backgroundImage: jobAiGradients.hero }
          : tone === "lavender"
            ? { backgroundImage: jobAiGradients.subtle }
            : undefined;
    return (
      <section
        ref={ref}
        id={id}
        data-testid={testId}
        style={style}
        className={cnHero(
          "overflow-hidden rounded-3xl px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20",
          tone === "plain" && "bg-card",
          className,
        )}
      >
        <div className="mx-auto max-w-3xl space-y-5">
          {eyebrow ? (
            <p
              className={cnHero(
                "text-xs font-semibold uppercase tracking-widest",
                onTint ? "text-white/80" : "text-muted-foreground",
              )}
            >
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={cnHero(
              "font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl",
              onTint ? "text-white" : "text-foreground",
            )}
          >
            {headline}
          </h1>
          {body ? (
            <p
              className={cnHero(
                "text-lg leading-relaxed",
                onTint ? "text-white/85" : "text-muted-foreground",
              )}
            >
              {body}
            </p>
          ) : null}
          {cta ? <div className="flex flex-wrap items-center gap-3 pt-2">{cta}</div> : null}
        </div>
      </section>
    );
  },
);
MarketingHero.displayName = "MarketingHero";

/* ────────────────────── SocialPostTemplate ──────────────────────── */

export interface SocialPostTemplateProps {
  headline: ReactNode;
  supporting?: ReactNode;
  /** Brand logo variant. */
  logoVariant?: BrandLogoVariant;
  /** Background tone — uses `jobAiGradients`. */
  tone?: "lavender" | "earth" | "warm" | "spark";
  /** Optional footer hashtag / URL strip. */
  footer?: ReactNode;
  className?: string;
  testId?: string;
}

const SOCIAL_TONE_BG: Record<NonNullable<SocialPostTemplateProps["tone"]>, React.CSSProperties> = {
  lavender: { backgroundImage: jobAiGradients.subtle },
  earth: { backgroundImage: jobAiGradients.hero },
  warm: { backgroundImage: jobAiGradients.warmth },
  spark: { backgroundImage: jobAiGradients.spark },
};

export function SocialPostTemplate({
  headline,
  supporting,
  logoVariant = "xeekrs",
  tone = "lavender",
  footer,
  className,
  testId,
}: SocialPostTemplateProps) {
  const onTint = tone === "earth";
  return (
    <div
      data-testid={testId}
      style={SOCIAL_TONE_BG[tone]}
      className={cnHero(
        "relative aspect-square w-full max-w-md overflow-hidden rounded-2xl p-8 shadow-md",
        className,
      )}
    >
      <BrandLogo
        variant={onTint ? "xeekrsWhite" : logoVariant}
        height={28}
        className="mb-6"
      />
      <h3
        className={cnHero(
          "font-heading text-2xl font-bold leading-tight tracking-tight sm:text-3xl",
          onTint ? "text-white" : "text-foreground",
        )}
      >
        {headline}
      </h3>
      {supporting ? (
        <p
          className={cnHero(
            "mt-4 text-sm leading-relaxed",
            onTint ? "text-white/85" : "text-muted-foreground",
          )}
        >
          {supporting}
        </p>
      ) : null}
      {footer ? (
        <p
          className={cnHero(
            "absolute bottom-6 left-8 right-8 text-xs",
            onTint ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {footer}
        </p>
      ) : null}
    </div>
  );
}

/* ────────────────────── DisplayAdTemplate ───────────────────────── */

export interface DisplayAdTemplateProps {
  /** IAB sizes: medium-rectangle, leaderboard, skyscraper. */
  size?: "medium-rectangle" | "leaderboard" | "skyscraper";
  imageUrl?: string;
  headline: ReactNode;
  body?: ReactNode;
  ctaLabel: string;
  onCtaClick?: () => void;
  className?: string;
  testId?: string;
}

const AD_SIZE: Record<NonNullable<DisplayAdTemplateProps["size"]>, string> = {
  "medium-rectangle": "h-[250px] w-[300px]",
  leaderboard: "h-[90px] w-[728px]",
  skyscraper: "h-[600px] w-[160px]",
};

export function DisplayAdTemplate({
  size = "medium-rectangle",
  imageUrl,
  headline,
  body,
  ctaLabel,
  onCtaClick,
  className,
  testId,
}: DisplayAdTemplateProps) {
  return (
    <div
      data-testid={testId}
      className={cnHero(
        "flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm",
        AD_SIZE[size],
        className,
      )}
    >
      {imageUrl ? (
        <div
          className="h-1/2 w-full bg-muted"
          style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
          aria-hidden
        />
      ) : null}
      <div className="flex flex-1 flex-col justify-between p-3">
        <div className="space-y-1">
          <p className="font-heading text-sm font-bold leading-tight tracking-tight text-foreground">
            {headline}
          </p>
          {body ? <p className="line-clamp-2 text-xs text-muted-foreground">{body}</p> : null}
        </div>
        <button
          type="button"
          onClick={onCtaClick}
          className="mt-2 inline-flex items-center justify-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {ctaLabel}
          <ArrowRight className="size-3" aria-hidden />
        </button>
      </div>
    </div>
  );
}

/* ────────────────────── CampaignSet ─────────────────────────────── */

export interface CampaignTile {
  id: string;
  title: string;
  imageUrl?: string;
  metrics?: { label: string; value: ReactNode }[];
  href?: string;
  onClick?: () => void;
}

export interface CampaignSetProps {
  tiles: CampaignTile[];
  className?: string;
  testId?: string;
}

export function CampaignSet({ tiles, className, testId }: CampaignSetProps) {
  return (
    <div
      data-testid={testId}
      className={cnHero("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}
    >
      {tiles.map((t) => (
        <Card key={t.id} className="overflow-hidden" isPressable onClick={t.onClick}>
          {t.imageUrl ? (
            <div
              className="h-32 w-full bg-muted"
              style={{ backgroundImage: `url(${t.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
              aria-hidden
            />
          ) : null}
          <CardBody className="space-y-3">
            <p className="font-heading text-base font-semibold tracking-tight">{t.title}</p>
            {t.metrics && t.metrics.length > 0 ? (
              <dl className="flex flex-wrap gap-3">
                {t.metrics.map((m) => (
                  <div key={m.label} className="min-w-[5rem]">
                    <dt className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                      {m.label}
                    </dt>
                    <dd className="text-sm font-semibold tabular-nums text-foreground">
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
