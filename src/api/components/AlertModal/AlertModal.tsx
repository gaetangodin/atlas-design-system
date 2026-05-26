/**
 * AlertModal — opinionated Modal preset for destructive / confirmation
 * flows. `role="alertdialog"`, focused on a single primary destructive
 * action, paired cancel.
 *
 * Use Modal directly when you need richer content (forms, tabs, etc.).
 */
"use client";
import { type ReactNode } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "../Modal";
import { Button } from "../Button";
import type { ModalProps } from "../Modal";

export interface AlertModalProps extends Omit<ModalProps, "children" | "title"> {
  title: ReactNode;
  description?: ReactNode;
  confirmLabel?: ReactNode;
  cancelLabel?: ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  /** Tone of the primary action. `danger` styles the confirm in destructive red. */
  tone?: "default" | "danger";
  isLoading?: boolean;
}

export function AlertModal(props: AlertModalProps) {
  const {
    title,
    description,
    confirmLabel = "Confirm",
    cancelLabel = "Cancel",
    onConfirm,
    onCancel,
    tone = "default",
    isLoading = false,
    onOpenChange,
    ...modalProps
  } = props;

  const handleCancel = () => {
    onCancel?.();
    onOpenChange?.(false);
  };

  return (
    <Modal {...modalProps} onOpenChange={onOpenChange} role="alertdialog" size={modalProps.size ?? "sm"}>
      <ModalContent>
        {() => (
          <>
            <ModalHeader>
              <div className="text-base font-medium text-foreground">{title}</div>
              {description ? <div className="text-sm text-muted-foreground">{description}</div> : null}
            </ModalHeader>
            <ModalBody />
            <ModalFooter>
              <Button variant="light" onClick={handleCancel}>
                {cancelLabel}
              </Button>
              <Button
                variant="solid"
                color={tone === "danger" ? "danger" : "primary"}
                isLoading={isLoading}
                onClick={onConfirm}
              >
                {confirmLabel}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
