import type { Meta, StoryObj } from "@storybook/react";
import {
  CampaignSet,
  DisplayAdTemplate,
  MarketingHero,
  SocialPostTemplate,
} from "./MarketingTemplates";
import { Button } from "../Button";

const meta: Meta = {
  title: "Marketing/Templates",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

export const Hero: Story = {
  render: () => (
    <MarketingHero
      eyebrow="For recruiters"
      headline="Hire faster, with less guesswork."
      body="Atlas helps your team turn applications into interviews — without losing the human touch."
      cta={
        <>
          <Button color="primary">Start free</Button>
          <Button variant="bordered">Talk to sales</Button>
        </>
      }
    />
  ),
};

export const SocialPost: Story = {
  render: () => (
    <SocialPostTemplate
      headline="New: AI-assisted matching."
      supporting="Get a ranked shortlist in seconds."
      tone="spark"
      footer="@marbleu · marbleu.co"
    />
  ),
};

export const DisplayAd: Story = {
  render: () => (
    <DisplayAdTemplate
      headline="Smarter hiring."
      body="Atlas for recruitment teams."
      ctaLabel="Try free"
      imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80"
    />
  ),
};

export const Campaigns: Story = {
  render: () => (
    <CampaignSet
      tiles={[
        { id: "1", title: "Spring launch", metrics: [{ label: "Reach", value: "12k" }, { label: "CTR", value: "3.4%" }] },
        { id: "2", title: "Founders email", metrics: [{ label: "Opens", value: "62%" }, { label: "Replies", value: "9%" }] },
        { id: "3", title: "Partner webinar", metrics: [{ label: "Signups", value: "245" }] },
      ]}
    />
  ),
};
