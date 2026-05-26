import {
  BrandBoard,
  BrandLogo,
  type BrandLogoVariant,
  BrandSwatch,
  ColorScale,
  Divider,
  TypographyScale,
} from "@atlas/design-system";
import { Section } from "../Section";
import { Row } from "../Row";

type BrandLogoEntry = { variant: BrandLogoVariant; label: string; dark?: boolean };

const BRAND_LOGOS: readonly BrandLogoEntry[] = [
  { variant: "xeekrs", label: "xeekrs" },
  { variant: "xeekrsWhite", label: "xeekrsWhite", dark: true },
  { variant: "xeekrsTagline", label: "xeekrsTagline" },
  { variant: "xeekrsTaglineStacked", label: "xeekrsTaglineStacked" },
  { variant: "xeekrsSocial", label: "xeekrsSocial" },
  { variant: "employnext", label: "employnext" },
];

export function FoundationsSection() {
  return (
    <Section
      id="foundations"
      title="Foundations & brand"
      description="Color ramps (50–900), typography scale, brand assets, postcard summary."
    >
      <Row label="Logo">
        <div className="flex w-full flex-wrap items-center gap-6">
          {BRAND_LOGOS.map((logo) => (
            <div
              key={logo.variant}
              className={[
                "flex flex-col items-start gap-2 rounded-lg border border-border p-4",
                logo.dark ? "bg-earth-900" : "bg-card",
              ].join(" ")}
            >
              <BrandLogo variant={logo.variant} height={32} />
              <code className="font-mono text-[10px] uppercase tracking-tight text-muted-foreground">
                {logo.label}
              </code>
            </div>
          ))}
        </div>
      </Row>

      <Divider className="my-4" />

      <div className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Color ramps
        </p>
        <ColorScale ramp="stone" description="Neutral paper / borders." />
        <ColorScale ramp="lavender" description="Primary CTAs." />
        <ColorScale ramp="earth" description="Secondary / dark fills." />
        <ColorScale ramp="emerald" description="Success / abundance." />
        <ColorScale ramp="canary" description="Warning / spark." />
        <ColorScale ramp="pink" description="Destructive / urgent." />
        <ColorScale ramp="orange" description="Energy / intensity accents." />
      </div>

      <Divider className="my-6" />

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Brand swatches
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          <BrandSwatch
            name="Earth 900"
            value="#0C2120"
            role="Primary text"
            utility="text-earth-900"
          />
          <BrandSwatch
            name="Lavender 500"
            value="#A3B5ED"
            role="Primary CTA"
            utility="bg-lavender-500"
          />
          <BrandSwatch
            name="Emerald 500"
            value="#00685D"
            role="Success"
            utility="bg-emerald-500"
          />
          <BrandSwatch
            name="Canary 500"
            value="#EDFF7D"
            role="Warning"
            utility="bg-canary-500"
          />
          <BrandSwatch
            name="Pink 500"
            value="#F31260"
            role="Destructive"
            utility="bg-pink-500"
          />
          <BrandSwatch
            name="Orange 500"
            value="#F97316"
            role="Energy accent"
            utility="bg-orange-500"
          />
          <BrandSwatch
            name="Stone 200"
            value="#E3E3DD"
            role="Borders / dividers"
            utility="border-stone-200"
          />
          <BrandSwatch
            name="browseHumanServices"
            value="#5F4F86"
            role="Recruitment chrome"
            utility="bg-browseHumanServices"
          />
        </div>
      </div>

      <Divider className="my-6" />

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Typography — product (Open Sans)
        </p>
        <TypographyScale variant="product" />
      </div>

      <Divider className="my-6" />

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Typography — marketing (Raleway)
        </p>
        <TypographyScale variant="marketing" />
      </div>

      <Divider className="my-6" />

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Brand board
        </p>
        <BrandBoard />
      </div>
    </Section>
  );
}
