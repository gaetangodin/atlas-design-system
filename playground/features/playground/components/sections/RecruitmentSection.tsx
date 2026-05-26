import { useState } from "react";
import { Calendar, Mail, MessageSquare, Phone } from "lucide-react";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  InterviewPipelineStepper,
  type PipelineStage,
  MatchDiamond,
  type MatchLevel,
  matchLevelLabel,
  matchLevelPillClass,
  QuickActionButton,
  ReadinessBadge,
} from "@atlas/design-system";
import { Section } from "../Section";
import { Row } from "../Row";

const PIPELINE_BASE: { id: string; label: string; caption: string }[] = [
  {
    id: "requested",
    label: "Requested",
    caption: "Candidate has been invited; awaiting time confirmation.",
  },
  {
    id: "confirmed",
    label: "Confirmed",
    caption: "Time agreed. Interview scheduled.",
  },
  {
    id: "completed",
    label: "Completed",
    caption: "Interview wrapped — recap can be filed.",
  },
];

function pipelineStagesFor(status: "requested" | "confirmed" | "completed"): PipelineStage[] {
  return PIPELINE_BASE.map((stage) => {
    const order = PIPELINE_BASE.findIndex((s) => s.id === status);
    const idx = PIPELINE_BASE.findIndex((s) => s.id === stage.id);
    let state: PipelineStage["state"] = "pending";
    if (idx < order) state = "done";
    else if (idx === order) state = "active";
    return { ...stage, state };
  });
}

export function RecruitmentSection() {
  const [pipelineStatus, setPipelineStatus] = useState<
    "requested" | "confirmed" | "completed"
  >("confirmed");

  return (
    <Section
      id="recruitment"
      title="Recruitment primitives"
      description="Domain-specific atoms used across applicant cards, interview rails, and contact rows."
    >
      <Row label="MatchDiamond">
        <div className="flex items-center gap-4">
          {(["great", "good", "fair"] as MatchLevel[]).map((level) => (
            <div key={level} className="flex flex-col items-center gap-1.5">
              <MatchDiamond level={level} size={24} aria-label={matchLevelLabel(level)} />
              <span className={matchLevelPillClass(level)}>
                <MatchDiamond level={level} size={10} />
                {matchLevelLabel(level)}
              </span>
            </div>
          ))}
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="ReadinessBadge">
        <ReadinessBadge stage="Interview-Ready" />
        <ReadinessBadge stage="Active" />
        <ReadinessBadge stage="Training Phase" />
        <ReadinessBadge stage="Other" />
      </Row>

      <Divider className="my-4" />

      <Row label="QuickActionButton">
        <QuickActionButton
          icon={<Phone className="size-4" />}
          label="Call"
          tooltip="Call Avery"
          onClick={() => {}}
          labelMode="always"
        />
        <QuickActionButton
          icon={<MessageSquare className="size-4" />}
          label="Chat"
          tooltip="Open chat"
          onClick={() => {}}
          labelMode="always"
        />
        <QuickActionButton
          icon={<Mail className="size-4" />}
          label="Email"
          tooltip="Send email"
          href="mailto:hello@marbleu.co"
          labelMode="auto"
        />
        <QuickActionButton
          icon={<Calendar className="size-4" />}
          label="Schedule"
          tooltip="Book an interview"
          onClick={() => {}}
          labelMode="never"
        />
      </Row>

      <Divider className="my-4" />

      <Row label="InterviewPipelineStepper">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <p className="text-sm font-semibold">Interview pipeline (interactive)</p>
            <p className="text-xs text-muted-foreground">
              Click a stage label to advance the interview status.
            </p>
          </CardHeader>
          <CardBody>
            <InterviewPipelineStepper
              stages={pipelineStagesFor(pipelineStatus)}
              summary={`Currently: ${pipelineStatus[0].toUpperCase() + pipelineStatus.slice(1)}`}
              onSelectStage={(id) =>
                setPipelineStatus(id as typeof pipelineStatus)
              }
            />
          </CardBody>
        </Card>
      </Row>
    </Section>
  );
}
