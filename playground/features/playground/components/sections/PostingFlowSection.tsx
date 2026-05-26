import { useState } from "react";
import { FileText, FilePlus2, Sparkles, Wand2 } from "lucide-react";
import {
  AiGeneratedBadge,
  Divider,
  EntryPathCards,
  type EntryPathOption,
  InlineAiAssist,
  InternalNotesField,
  PostingStepper,
  QualityScorePanel,
  type QualityIssue,
  TemplateCard,
} from "@atlas/design-system";
import { Section } from "../Section";
import { Row } from "../Row";

const ENTRY_OPTIONS: EntryPathOption<"scratch" | "template" | "ai">[] = [
  {
    id: "scratch",
    title: "Start from scratch",
    description: "Build the posting field by field — most control.",
    icon: <FilePlus2 className="size-5" />,
  },
  {
    id: "template",
    title: "Use a template",
    description: "Pick a similar role and tweak the copy.",
    icon: <FileText className="size-5" />,
  },
  {
    id: "ai",
    title: "AI-assisted draft",
    description: "Describe the role; we'll draft the first version.",
    icon: <Sparkles className="size-5" />,
    badge: <AiGeneratedBadge tone="solid" hideIcon>AI</AiGeneratedBadge>,
  },
];

const POSTING_STEPS = [
  { id: "1", label: "Role", description: "Title & summary", status: "completed" as const },
  { id: "2", label: "Requirements", description: "Skills & qualifications", status: "active" as const },
  { id: "3", label: "Logistics", description: "Pay, location, hours", status: "pending" as const },
  { id: "4", label: "Review", description: "Quality + publish", status: "pending" as const },
];

const QUALITY_ISSUES: QualityIssue[] = [
  { id: "1", status: "ok", label: "Title is clear", description: "Specific job function, no jargon." },
  { id: "2", status: "ok", label: "Summary present", description: "82-word description covers the role." },
  { id: "3", status: "warn", label: "Skills list is short", description: "Only 2 required skills — consider 4–6." },
  { id: "4", status: "fail", label: "Pay range missing", description: "Postings with a pay range get 2× more applicants." },
  { id: "5", status: "info", label: "Cover image not set", description: "Optional, but adds polish." },
];

export function PostingFlowSection() {
  const [entry, setEntry] = useState<"scratch" | "template" | "ai">("ai");
  const [selectedTemplate, setSelectedTemplate] = useState("frontend");

  return (
    <Section
      id="posting-flow"
      title="Posting flow"
      description="Wizard chrome, entry-path cards, templates, AI assist, quality score, internal notes."
    >
      <Row label="EntryPathCards">
        <div className="w-full">
          <EntryPathCards
            options={ENTRY_OPTIONS}
            value={entry}
            onChange={(id) => setEntry(id as typeof entry)}
          />
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="TemplateCard">
        <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <TemplateCard
            title="Frontend Engineer"
            description="Mid–senior · Remote-friendly"
            meta="Used in 14 postings"
            isSelected={selectedTemplate === "frontend"}
            onSelect={() => setSelectedTemplate("frontend")}
            badges={<AiGeneratedBadge>Popular</AiGeneratedBadge>}
          />
          <TemplateCard
            title="Customer Success Lead"
            description="Senior · Hybrid"
            meta="Used in 8 postings"
            isSelected={selectedTemplate === "cs"}
            onSelect={() => setSelectedTemplate("cs")}
          />
          <TemplateCard
            title="Data Analyst"
            description="Junior–mid · On-site"
            meta="Used in 6 postings"
            isSelected={selectedTemplate === "data"}
            onSelect={() => setSelectedTemplate("data")}
          />
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="InlineAiAssist">
        <div className="w-full max-w-2xl">
          <InlineAiAssist
            prompt="Want me to draft a tighter version of the summary?"
            suggestions={[
              { id: "tighten", label: "Tighten copy" },
              { id: "warmer", label: "Make it warmer" },
              { id: "bullets", label: "Convert to bullets" },
            ]}
            onSuggest={() => {}}
            footer="You'll review the draft before it replaces the current copy."
          />
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="QualityScorePanel">
        <div className="w-full max-w-md">
          <QualityScorePanel score={64} issues={QUALITY_ISSUES} />
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="InternalNotesField">
        <div className="w-full max-w-md">
          <InternalNotesField
            defaultValue="Reviewer note: prefer candidates with B2B SaaS exposure."
          />
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="PostingStepper">
        <div className="w-full max-w-xs">
          <PostingStepper
            steps={POSTING_STEPS}
            current={1}
            footer={
              <span className="inline-flex items-center gap-1.5">
                <Wand2 className="size-3 shrink-0" aria-hidden />
                Drafts auto-save every 30s.
              </span>
            }
          />
        </div>
      </Row>
    </Section>
  );
}
