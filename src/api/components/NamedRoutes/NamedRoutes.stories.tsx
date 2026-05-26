/**
 * NamedRoutes stories — one default + a few representative variants
 * for the 35 named Routes. Since they're all thin wrappers over the
 * generic shells, the variants are mostly about showing the
 * baked-in title.
 */
import type { Meta, StoryObj } from "@storybook/react";
import {
  AcademyDashboardRoute,
  AnalyticsRoute,
  CandidatesRoute,
  HelpDeskRoute,
  InterviewsRoute,
  JobPostingsIndexRoute,
  MarketplaceCatalogueRoute,
  MessagesWorkspaceRoute,
  NewPostingRoute,
  ResumeBuilderRoute,
} from "./NamedRoutes";

const meta: Meta = {
  title: "Routes/Named Routes",
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

const sampleBody = (
  <div className="rounded-md border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
    Page content goes here.
  </div>
);

export const Academy: Story = { render: () => <AcademyDashboardRoute>{sampleBody}</AcademyDashboardRoute> };
export const Analytics: Story = { render: () => <AnalyticsRoute>{sampleBody}</AnalyticsRoute> };
export const Candidates: Story = { render: () => <CandidatesRoute>{sampleBody}</CandidatesRoute> };
export const HelpDesk: Story = { render: () => <HelpDeskRoute>{sampleBody}</HelpDeskRoute> };
export const Interviews: Story = { render: () => <InterviewsRoute>{sampleBody}</InterviewsRoute> };
export const JobPostings: Story = { render: () => <JobPostingsIndexRoute>{sampleBody}</JobPostingsIndexRoute> };
export const Marketplace: Story = { render: () => <MarketplaceCatalogueRoute>{sampleBody}</MarketplaceCatalogueRoute> };
export const MessagesWorkspace: Story = { render: () => <MessagesWorkspaceRoute>{sampleBody}</MessagesWorkspaceRoute> };
export const NewPosting: Story = { render: () => <NewPostingRoute>{sampleBody}</NewPostingRoute> };
export const ResumeBuilder: Story = { render: () => <ResumeBuilderRoute>{sampleBody}</ResumeBuilderRoute> };
