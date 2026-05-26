/**
 * Modal — mirrors `heroui-branded/overlay.tsx::BrandedModal`.
 * Brand rule: 24px radius (`rounded-2xl`) for modals.
 */
import {
  Modal as HeroUIModal,
  ModalContent as HeroUIModalContent,
  ModalHeader as HeroUIModalHeader,
  ModalBody as HeroUIModalBody,
  ModalFooter as HeroUIModalFooter,
  useDisclosure as heroUseDisclosure,
  type ModalProps as HeroUIModalProps,
} from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type ModalProps = HeroUIModalProps;

export function Modal({ classNames, ...rest }: ModalProps) {
  return (
    <HeroUIModal
      {...rest}
      classNames={{
        ...classNames,
        base: cnHero(
          "rounded-2xl border border-border bg-background text-foreground shadow-lg",
          classNames?.base,
        ),
        backdrop: cnHero("bg-foreground/55 backdrop-blur-sm", classNames?.backdrop),
        closeButton: cnHero(
          "text-muted-foreground hover:bg-muted hover:text-foreground rounded-full",
          classNames?.closeButton,
        ),
        header: cnHero("flex flex-col gap-1.5 px-6 pt-6 pb-2", classNames?.header),
        body: cnHero("px-6 py-4 text-sm text-foreground", classNames?.body),
        footer: cnHero("flex items-center justify-end gap-2 px-6 pt-2 pb-6", classNames?.footer),
      }}
    />
  );
}

export const ModalContent = HeroUIModalContent;
export const ModalHeader = HeroUIModalHeader;
export const ModalBody = HeroUIModalBody;
export const ModalFooter = HeroUIModalFooter;
export const useDisclosure = heroUseDisclosure;
