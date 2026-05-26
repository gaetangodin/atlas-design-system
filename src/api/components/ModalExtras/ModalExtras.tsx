/**
 * Modal-extra primitives — modal variants Atlas didn't have yet.
 *
 *  - `SlideInModal`               — bottom-up slide-in variant of Modal.
 *  - `ResourceCreationModal`      — generic "create X" modal with name +
 *                                   description + actions.
 *  - `UnsplashImagePicker`        — image picker modal w/ search slot.
 *  - `EmployerOnboardingModal`    — multi-step employer onboarding modal.
 *  - `JobSeekerPostingPreviewModal` — read-only posting preview modal.
 *  - `JobPostingReviewRecap`      — posting review summary card (not a
 *                                   modal itself — sized to drop into one).
 */
import { type ReactNode } from "react";
import { Image as ImageIcon } from "lucide-react";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "../Modal";
import { Button } from "../Button";
import { cnHero } from "../../../shared/cn-hero";

/* ────────────────────── SlideInModal ────────────────────────────── */

export interface SlideInModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  className?: string;
  testId?: string;
}

export function SlideInModal({ isOpen, onOpenChange, title, children, footer, className, testId }: SlideInModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="bottom" size="lg" data-testid={testId}>
      <ModalContent className={cnHero("rounded-t-2xl", className)}>
        {() => (
          <>
            {title ? <ModalHeader>{title}</ModalHeader> : null}
            <ModalBody>{children}</ModalBody>
            {footer ? <ModalFooter>{footer}</ModalFooter> : null}
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

/* ────────────────────── ResourceCreationModal ───────────────────── */

export interface ResourceCreationModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  /** "Create a project", "Create a workspace", etc. */
  title: string;
  /** Form-field slot (name input, description, etc.). */
  body: ReactNode;
  onCreate?: () => void;
  isCreating?: boolean;
  /** Override the primary CTA label. */
  createLabel?: string;
}

export function ResourceCreationModal({
  isOpen, onOpenChange, title, body, onCreate, isCreating, createLabel = "Create",
}: ResourceCreationModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="md">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>{title}</ModalHeader>
            <ModalBody className="space-y-3">{body}</ModalBody>
            <ModalFooter>
              <Button variant="light" onClick={onClose} isDisabled={isCreating}>
                Cancel
              </Button>
              <Button color="primary" onClick={onCreate} isLoading={isCreating}>
                {createLabel}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

/* ────────────────────── UnsplashImagePicker ─────────────────────── */

export interface UnsplashImage {
  id: string;
  url: string;
  thumbUrl?: string;
  authorName?: string;
}

export interface UnsplashImagePickerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  /** Search input slot — app wires the query state. */
  searchInput: ReactNode;
  /** Result thumbnails — apps fetch + render via this list. */
  results: UnsplashImage[];
  onPick: (image: UnsplashImage) => void;
  className?: string;
}

export function UnsplashImagePicker({ isOpen, onOpenChange, searchInput, results, onPick, className }: UnsplashImagePickerProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
      <ModalContent className={className}>
        {() => (
          <>
            <ModalHeader>
              <span className="inline-flex items-center gap-2">
                <ImageIcon className="size-4 text-muted-foreground" aria-hidden /> Pick an image
              </span>
            </ModalHeader>
            <ModalBody className="space-y-4">
              <div>{searchInput}</div>
              <div className="grid max-h-[55vh] grid-cols-2 gap-2 overflow-y-auto md:grid-cols-3 lg:grid-cols-4">
                {results.map((img) => (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => onPick(img)}
                    className="aspect-square overflow-hidden rounded-md border border-border bg-muted transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <img
                      src={img.thumbUrl ?? img.url}
                      alt={img.authorName ?? ""}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

/* ────────────────────── EmployerOnboardingModal ─────────────────── */

export interface EmployerOnboardingModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  /** Current step content. */
  children: ReactNode;
  /** Header progress line (e.g. "Step 2 of 4"). */
  progressLabel?: string;
  onBack?: () => void;
  onNext?: () => void;
  onFinish?: () => void;
  isFirstStep?: boolean;
  isLastStep?: boolean;
  isSubmitting?: boolean;
}

export function EmployerOnboardingModal({
  isOpen, onOpenChange, children, progressLabel, onBack, onNext, onFinish,
  isFirstStep, isLastStep, isSubmitting,
}: EmployerOnboardingModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-0.5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Employer onboarding
              </p>
              {progressLabel ? <p className="text-sm text-muted-foreground">{progressLabel}</p> : null}
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              <Button variant="bordered" onClick={onBack} isDisabled={isFirstStep || isSubmitting}>
                Back
              </Button>
              {isLastStep ? (
                <Button color="primary" onClick={onFinish} isLoading={isSubmitting}>
                  Finish
                </Button>
              ) : (
                <Button color="primary" onClick={onNext} isDisabled={isSubmitting}>
                  Continue
                </Button>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

/* ────────────────────── JobSeekerPostingPreviewModal ────────────── */

export interface JobSeekerPostingPreviewModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  postingTitle: ReactNode;
  postingBody: ReactNode;
  onApply?: () => void;
}

export function JobSeekerPostingPreviewModal({
  isOpen, onOpenChange, postingTitle, postingBody, onApply,
}: JobSeekerPostingPreviewModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-0.5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Posting preview
              </p>
              <p className="text-lg font-semibold">{postingTitle}</p>
            </ModalHeader>
            <ModalBody className="prose prose-sm max-w-none">{postingBody}</ModalBody>
            <ModalFooter>
              <Button variant="light" onClick={onClose}>Close</Button>
              {onApply ? (
                <Button color="primary" onClick={onApply}>Apply</Button>
              ) : null}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

/* ────────────────────── JobPostingReviewRecap ───────────────────── */

export interface JobPostingReviewRecapItem {
  label: string;
  value: ReactNode;
}

export interface JobPostingReviewRecapProps {
  items: JobPostingReviewRecapItem[];
  className?: string;
  testId?: string;
}

export function JobPostingReviewRecap({ items, className, testId }: JobPostingReviewRecapProps) {
  return (
    <div
      data-testid={testId}
      className={cnHero("overflow-hidden rounded-xl border border-border bg-card", className)}
    >
      <dl className="divide-y divide-border">
        {items.map((row) => (
          <div key={row.label} className="grid grid-cols-[140px_1fr] gap-3 px-4 py-3 text-sm">
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {row.label}
            </dt>
            <dd className="text-foreground">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
