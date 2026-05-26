import { useState } from "react";
import { Bookmark, BookmarkCheck, Mail, MessageSquare, MoreHorizontal, Phone } from "lucide-react";
import {
  AnonymousProfileCard,
  ApplicantDocumentMiniCard,
  Button,
  Checkbox,
  ContactInfoButton,
  Divider,
  FilterSection,
  MatchDiamond,
  matchLevelLabel,
  matchLevelPillClass,
  ProfileCardToolbar,
  ProfileIdentityWell,
  QuickActionButton,
  ReadinessBadge,
} from "@atlas/design-system";
import { Section } from "../Section";
import { Row } from "../Row";

export function RecruitmentCompositionsSection() {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <Section
      id="recruitment-compositions"
      title="Recruitment compositions"
      description="ProfileCardToolbar, ProfileIdentityWell, AnonymousProfileCard, ApplicantDocumentMiniCard, ContactInfoButton, FilterSection."
    >
      <Row label="ProfileCardToolbar">
        <div className="w-full max-w-2xl overflow-hidden rounded-lg border border-border bg-card">
          <ProfileCardToolbar
            leading={
              <>
                <ReadinessBadge stage="Interview-Ready" />
                <span className={matchLevelPillClass("great")}>
                  <MatchDiamond level="great" size={10} />
                  {matchLevelLabel("great")}
                </span>
              </>
            }
            trailing={
              <>
                <Button
                  size="sm"
                  variant="flat"
                  isIconOnly
                  aria-label={bookmarked ? "Remove bookmark" : "Bookmark"}
                  onClick={() => setBookmarked((b) => !b)}
                >
                  {bookmarked ? (
                    <BookmarkCheck className="size-4" />
                  ) : (
                    <Bookmark className="size-4" />
                  )}
                </Button>
                <Button size="sm" variant="flat" isIconOnly aria-label="More">
                  <MoreHorizontal className="size-4" />
                </Button>
                <Button size="sm" color="primary">Open profile</Button>
              </>
            }
          />
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="ProfileIdentityWell">
        <div className="w-full max-w-2xl space-y-4">
          <div className="rounded-lg border border-border bg-card p-4">
            <ProfileIdentityWell
              name="Avery Lin"
              role="Senior frontend engineer"
              location="Remote · Lisbon, PT"
              badges={<ReadinessBadge stage="Active" />}
              footer="5 years · React, TypeScript, accessibility"
            />
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <ProfileIdentityWell
              name="Pending candidate"
              isAnonymous
              role="Senior backend engineer"
              location="Hybrid · Amsterdam"
              badges={<ReadinessBadge stage="Training Phase" />}
              footer="Identity unlocks after consent"
            />
          </div>
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="ApplicantDocumentMiniCard">
        <div className="grid w-full max-w-2xl gap-2 sm:grid-cols-2">
          <ApplicantDocumentMiniCard
            title="Avery_Lin_Resume_2026.pdf"
            meta="2 pages · 184 KB"
            kind="resume"
            onOpen={() => {}}
            onDownload={() => {}}
          />
          <ApplicantDocumentMiniCard
            title="Cover_letter.pdf"
            meta="1 page · 92 KB"
            kind="cover-letter"
            onOpen={() => {}}
          />
          <ApplicantDocumentMiniCard
            title="Portfolio.pdf"
            meta="Uploading…"
            kind="portfolio"
            state="pending"
          />
          <ApplicantDocumentMiniCard
            title="references.docx"
            meta="Upload failed · retry"
            state="error"
          />
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="ContactInfoButton">
        <ContactInfoButton audience="candidate">
          <p className="font-semibold">Avery Lin</p>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Phone className="size-3.5" /> +1 415 555 0142
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Mail className="size-3.5" /> avery@marbleu.co
          </div>
        </ContactInfoButton>
        <ContactInfoButton audience="company">
          <p className="font-semibold">Marble University</p>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Mail className="size-3.5" /> careers@marbleu.co
          </div>
          <p className="text-muted-foreground">Verified partner</p>
        </ContactInfoButton>
      </Row>

      <Divider className="my-4" />

      <Row label="FilterSection">
        <div className="w-full max-w-xs overflow-hidden rounded-lg border border-border bg-card">
          <FilterSection title="Match level" activeCount={2}>
            <label className="flex items-center gap-2 text-sm">
              <Checkbox defaultSelected /> Great
            </label>
            <label className="flex items-center gap-2 text-sm">
              <Checkbox defaultSelected /> Good
            </label>
            <label className="flex items-center gap-2 text-sm">
              <Checkbox /> Fair
            </label>
          </FilterSection>
          <FilterSection title="Readiness" defaultOpen={false}>
            <label className="flex items-center gap-2 text-sm">
              <Checkbox /> Interview-Ready
            </label>
            <label className="flex items-center gap-2 text-sm">
              <Checkbox /> Active
            </label>
            <label className="flex items-center gap-2 text-sm">
              <Checkbox /> Training Phase
            </label>
          </FilterSection>
          <FilterSection title="Sector" defaultOpen={false}>
            <p className="text-xs text-muted-foreground">(filter body)</p>
          </FilterSection>
        </div>
      </Row>

      <Divider className="my-4" />

      <Row label="AnonymousProfileCard (composition)">
        <div className="w-full max-w-2xl">
          <AnonymousProfileCard
            name="Pending candidate"
            isAnonymous
            role="Senior backend engineer"
            location="Hybrid · Amsterdam"
            identityBadges={<ReadinessBadge stage="Active" />}
            toolbarLeading={
              <span className={matchLevelPillClass("good")}>
                <MatchDiamond level="good" size={10} />
                {matchLevelLabel("good")}
              </span>
            }
            toolbarTrailing={
              <Button size="sm" color="primary">Send connection</Button>
            }
            quickActions={
              <>
                <QuickActionButton
                  icon={<Phone className="size-4" />}
                  label="Call"
                  tooltip="Call (after consent)"
                  onClick={() => {}}
                  labelMode="auto"
                />
                <QuickActionButton
                  icon={<MessageSquare className="size-4" />}
                  label="Chat"
                  tooltip="Open chat"
                  onClick={() => {}}
                  labelMode="auto"
                />
                <QuickActionButton
                  icon={<Mail className="size-4" />}
                  label="Email"
                  tooltip="Send email (after consent)"
                  onClick={() => {}}
                  labelMode="auto"
                />
              </>
            }
            footer="Profile unlocks after the candidate accepts the connection request."
          >
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Skill fit:</strong> 6 of 8 required skills present
              · 2 stretch skills.
            </p>
          </AnonymousProfileCard>
        </div>
      </Row>
    </Section>
  );
}
