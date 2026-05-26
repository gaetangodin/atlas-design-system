import type { Meta, StoryObj } from "@storybook/react";
import { ApplicantDocumentMiniCard } from "./ApplicantDocumentMiniCard";

const meta: Meta<typeof ApplicantDocumentMiniCard> = {
  title: "Recruitment/ApplicantDocumentMiniCard",
  component: ApplicantDocumentMiniCard,
  tags: ["autodocs"],
  args: { title: "Avery_Lin_Resume_2026.pdf", meta: "2 pages · 184 KB", kind: "resume", onOpen: () => {}, onDownload: () => {} },
};
export default meta;
type Story = StoryObj<typeof ApplicantDocumentMiniCard>;

export const Resume: Story = {};
export const Pending: Story = { args: { state: "pending", title: "Portfolio.pdf", meta: "Uploading…" } };
export const Errored: Story = { args: { state: "error", title: "references.docx", meta: "Upload failed" } };
