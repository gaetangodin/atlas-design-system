/**
 * BrandBoard — single-page summary of the Atlas / Xeekrs brand.
 *
 * Renders the canonical postcard: logo lockup, voice tag, palette swatches,
 * type sample, radius/shadow chips. Use it as a brand reference, an
 * onboarding handout, or a designer-engineer alignment artifact.
 *
 * Composed entirely of other Atlas primitives (BrandLogo, BrandSwatch,
 * Card, Divider) — so a change to one of those flows through here.
 */

import { forwardRef } from "react";
import { Card, CardBody, CardHeader } from "../Card";
import { Divider } from "../Divider";
import { BrandLogo } from "../BrandLogo";
import { BrandSwatch } from "../BrandSwatch";
import {
  canary,
  earth,
  emerald,
  lavender,
  pink,
  stone,
} from "../../../domain/tokens/colorRamps";
import { cnHero } from "../../../shared/cn-hero";

export interface BrandBoardProps {
  className?: string;
  testId?: string;
}

const PALETTE = [
  { name: "Earth", value: earth.DEFAULT, role: "Foreground · dark fills", utility: "bg-earth-900" },
  { name: "Lavender", value: lavender.DEFAULT, role: "Primary CTAs", utility: "bg-lavender-500" },
  { name: "Emerald", value: emerald.DEFAULT, role: "Success / abundance", utility: "bg-emerald-500" },
  { name: "Canary", value: canary.DEFAULT, role: "Warning / spark", utility: "bg-canary-500" },
  { name: "Pink", value: pink.DEFAULT, role: "Destructive / urgent", utility: "bg-pink-500" },
  { name: "Stone", value: stone[200], role: "Neutral surfaces", utility: "bg-stone-200" },
] as const;

export const BrandBoard = forwardRef<HTMLDivElement, BrandBoardProps>(
  function BrandBoard({ className, testId }, ref) {
    return (
      <Card
        ref={ref}
        testId={testId}
        shadow="md"
        className={cnHero("max-w-3xl", className)}
      >
        <CardHeader className="flex flex-col items-start gap-3">
          <BrandLogo variant="xeekrsTagline" height={36} />
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Brand board · v1
          </p>
        </CardHeader>

        <CardBody className="space-y-8">
          <section className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Voice
            </p>
            <p className="font-heading text-2xl leading-tight text-foreground">
              Clear, generous, no jargon. We meet people where they are and
              help them move forward.
            </p>
          </section>

          <Divider />

          <section className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Palette
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {PALETTE.map((swatch) => (
                <BrandSwatch
                  key={swatch.name}
                  name={swatch.name}
                  value={swatch.value}
                  role={swatch.role}
                  utility={swatch.utility}
                />
              ))}
            </div>
          </section>

          <Divider />

          <section className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Headings
              </p>
              <p className="font-heading text-3xl font-bold leading-tight text-foreground">
                Raleway
              </p>
              <p className="text-sm text-muted-foreground">
                Display + section headings.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Body
              </p>
              <p className="font-body text-lg leading-snug text-foreground">
                Open Sans, 16/24
              </p>
              <p className="text-sm text-muted-foreground">
                Default product copy.
              </p>
            </div>
          </section>

          <Divider />

          <section className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Shape & elevation
            </p>
            <div className="flex flex-wrap items-end gap-4">
              <div className="flex flex-col items-center gap-1.5">
                <div className="size-16 rounded-lg border border-border bg-card shadow-sm" />
                <p className="text-[10px] font-mono text-muted-foreground">rounded-lg · shadow-sm</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="size-16 rounded-2xl border border-border bg-card shadow-md" />
                <p className="text-[10px] font-mono text-muted-foreground">rounded-2xl · shadow-md</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="size-16 rounded-full border border-border bg-card shadow-lg" />
                <p className="text-[10px] font-mono text-muted-foreground">rounded-full · shadow-lg</p>
              </div>
            </div>
          </section>
        </CardBody>
      </Card>
    );
  },
);

BrandBoard.displayName = "BrandBoard";
