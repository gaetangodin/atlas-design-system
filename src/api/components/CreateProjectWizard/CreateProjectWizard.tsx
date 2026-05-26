/**
 * CreateProjectWizard — modal-mounted multi-step wizard for project
 * (or workspace / cohort / campaign) creation.
 *
 * Composes `Modal` + `WizardRoute`'s footer pattern inline. Apps pass
 * the current step's body via `children` and drive `currentStep` via
 * their own state (or Atlas's `usePostingSteps` if it lands later).
 */

import type { ReactNode } from "react";
import { Modal, ModalContent } from "../Modal";
import { Button } from "../Button";
import { Stepper } from "../Stepper";
import type { StepperStep } from "../Stepper";
import { cnHero } from "../../../shared/cn-hero";

export interface CreateProjectWizardProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  /** Wizard title — "Create a new project". */
  title: ReactNode;
  steps: StepperStep[];
  currentStep: number;
  /** Body of the active step. */
  children: ReactNode;
  isFirstStep?: boolean;
  isLastStep?: boolean;
  /** Loading state for the primary CTA. */
  isSubmitting?: boolean;
  onBack?: () => void;
  onNext?: () => void;
  /** Fired on the last step's "Finish" / "Create" action. */
  onFinish?: () => void;
  /** Override the final CTA label (default "Create"). */
  finishLabel?: string;
  className?: string;
  testId?: string;
}

export function CreateProjectWizard({
  isOpen,
  onOpenChange,
  title,
  steps,
  currentStep,
  children,
  isFirstStep = currentStep === 0,
  isLastStep = currentStep === steps.length - 1,
  isSubmitting,
  onBack,
  onNext,
  onFinish,
  finishLabel = "Create",
  className,
  testId,
}: CreateProjectWizardProps) {
    return (
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl" data-testid={testId}>
        <ModalContent className={cnHero(className)}>
          {(onClose) => (
            <div className="flex max-h-[80vh] flex-col">
              <header className="border-b border-border px-6 py-4">
                <p className="text-base font-semibold">{title}</p>
                <p className="text-xs text-muted-foreground">
                  Step {currentStep + 1} of {steps.length}
                </p>
              </header>
              <div className="grid min-h-0 flex-1 grid-cols-[200px_1fr]">
                <aside className="hidden overflow-y-auto border-r border-border bg-card/50 p-4 md:block">
                  <Stepper steps={steps} current={currentStep} orientation="vertical" />
                </aside>
                <main className="overflow-y-auto p-6">{children}</main>
              </div>
              <footer className="flex items-center justify-between gap-2 border-t border-border px-6 py-3">
                <Button variant="light" onClick={onClose} isDisabled={isSubmitting}>
                  Cancel
                </Button>
                <div className="flex items-center gap-2">
                  <Button
                    variant="bordered"
                    onClick={onBack}
                    isDisabled={isFirstStep || isSubmitting}
                  >
                    Back
                  </Button>
                  {isLastStep ? (
                    <Button color="primary" onClick={onFinish} isLoading={isSubmitting}>
                      {finishLabel}
                    </Button>
                  ) : (
                    <Button color="primary" onClick={onNext} isDisabled={isSubmitting}>
                      Continue
                    </Button>
                  )}
                </div>
              </footer>
            </div>
          )}
        </ModalContent>
      </Modal>
    );
}
