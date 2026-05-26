import { ArrowRight, Briefcase, GraduationCap, Search, Users } from "lucide-react";
import {
  BrowseHubCard,
  Button,
  CoverImageHero,
  Divider,
  GradientToken,
  Input,
  PageBack,
  PromotionCard,
  SearchToolbar,
  VoiceAndTone,
  Badge,
  AiGeneratedBadge,
} from "@atlas/design-system";
import { Section } from "../Section";
import { Row } from "../Row";

export function DiscoverySection() {
  return (
    <Section
      id="discovery"
      title="Discovery & marketing"
      description="Hero bands, browse tiles, search toolbar, promo cards, brand polish."
    >
      <Row label="CoverImageHero">
        <div className="w-full space-y-3">
          <CoverImageHero
            tone="gradient"
            title="Welcome back, recruiter"
            subtitle="3 new applicants since you last visited."
            bottomLeft={<PageBack variant="pill" onClick={() => {}}>Dashboard</PageBack>}
            bottomRight={
              <Button color="primary" endContent={<ArrowRight className="size-4" />}>
                Review queue
              </Button>
            }
          />
          <CoverImageHero
            tone="dark"
            imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
            imageAlt="Team collaboration"
            title="Build your dream team"
            subtitle="Match candidates by skill, not by keyword."
            height="h-48"
          />
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="BrowseHubCard">
        <div className="grid w-full gap-3 sm:grid-cols-3">
          <BrowseHubCard onClick={() => {}}>
            <div className="flex h-full flex-col gap-3 p-5">
              <Briefcase className="size-6 text-primary" aria-hidden />
              <div>
                <p className="text-base font-semibold">Job postings</p>
                <p className="text-sm text-muted-foreground">
                  Author, publish, and manage roles.
                </p>
              </div>
            </div>
          </BrowseHubCard>
          <BrowseHubCard onClick={() => {}}>
            <div className="flex h-full flex-col gap-3 p-5">
              <Users className="size-6 text-primary" aria-hidden />
              <div>
                <p className="text-base font-semibold">Talent pool</p>
                <p className="text-sm text-muted-foreground">
                  Search and message qualified candidates.
                </p>
              </div>
            </div>
          </BrowseHubCard>
          <BrowseHubCard onClick={() => {}}>
            <div className="flex h-full flex-col gap-3 p-5">
              <GraduationCap className="size-6 text-primary" aria-hidden />
              <div>
                <p className="text-base font-semibold">Academy</p>
                <p className="text-sm text-muted-foreground">
                  Up-skill candidates before they apply.
                </p>
              </div>
            </div>
          </BrowseHubCard>
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="SearchToolbar">
        <div className="w-full overflow-hidden rounded-lg border border-border">
          <SearchToolbar
            searchInput={
              <Input
                placeholder="Search candidates by skill, location, or keyword"
                startContent={<Search className="size-4 text-muted-foreground" />}
              />
            }
            chips={
              <>
                <Badge variant="bordered" color="default">Remote</Badge>
                <Badge variant="bordered" color="default">Senior</Badge>
                <Badge variant="bordered" color="default">EU time-zone</Badge>
              </>
            }
            trailing={
              <Button size="sm" variant="flat">Filters</Button>
            }
            secondary={<span>4 active filters · 312 results</span>}
          />
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="PromotionCard">
        <div className="grid w-full gap-3 sm:grid-cols-2">
          <PromotionCard
            tone="lavender"
            title="Try AI-assisted matching"
            body="Get a ranked candidate shortlist in seconds, based on your posting requirements."
            badge={<AiGeneratedBadge>New</AiGeneratedBadge>}
            cta={<Button size="sm" color="primary">Try it</Button>}
          />
          <PromotionCard
            tone="earth"
            title="Year-end placements report"
            body="Download a one-page summary of your hiring funnel for 2025."
            cta={
              <Button size="sm" variant="bordered" className="border-spotlight/40 text-spotlight">
                Download
              </Button>
            }
            onClose={() => {}}
          />
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="GradientToken">
        <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <GradientToken name="subtle" description="Backdrop pills, suggestion banners." />
          <GradientToken name="spark" description="AI feature highlights." />
          <GradientToken name="hero" description="Hero / illustration cards." />
          <GradientToken name="warmth" description="Spotlight / featured rails." />
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="VoiceAndTone">
        <div className="w-full max-w-3xl">
          <VoiceAndTone />
        </div>
      </Row>
    </Section>
  );
}
