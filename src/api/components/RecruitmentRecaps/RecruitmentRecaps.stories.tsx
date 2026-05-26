import type { Meta, StoryObj } from "@storybook/react";
import {
  ApplicantReviewRecap,
  InterviewEventRecap,
  ShareCandidatePreviewCard,
} from "./RecruitmentRecaps";
import { Button } from "../Button";

const meta: Meta = {
  title: "Recruitment/Recaps",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

export const Interview: Story = {
  render: () => (
    <InterviewEventRecap
      participantName="Avery Lin"
      whenLabel="Mar 14, 2026 · 10:30 AM"
      outcome="Move to offer"
      notes="Strong React + TypeScript fundamentals. Clear communication."
      actions={<Button size="sm" variant="flat">Share recap</Button>}
    />
  ),
};

export const Review: Story = {
  render: () => (
    <ApplicantReviewRecap
      applicantName="Morgan Reyes"
      reviewer="Sasha Park"
      whenLabel="Mar 12, 2026"
      verdict="Recommend"
      notes="Portfolio shows breadth. Suggest a working session before offer."
    />
  ),
};

export const SharePreview: Story = {
  render: () => (
    <ShareCandidatePreviewCard
      candidateName="Jordan Kim"
      candidateRole="Backend engineer"
      preview="Shared preview: anonymized profile + skill summary."
      sharedWith="hello@marbleu.co"
      expiryHint="Link expires in 7 days"
      actions={<Button size="sm" color="primary">Copy link</Button>}
    />
  ),
};
