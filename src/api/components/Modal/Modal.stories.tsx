import type { Meta, StoryObj } from "@storybook/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "./Modal";
import { Button } from "../Button";

/**
 * Wrap the demo in a named component so the `useDisclosure` hook
 * call satisfies React's rules-of-hooks lint rule (hooks can only run
 * inside a component or another hook, not inside an inline render
 * function with a lowercase name).
 */
function ModalDemo() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button variant="solid" color="primary" onClick={onOpen}>
        Open modal
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <div style={{ fontWeight: 500 }}>Invite a referral</div>
                <div style={{ fontSize: 13, color: "var(--muted-foreground)" }}>
                  They&apos;ll get an email to complete their profile.
                </div>
              </ModalHeader>
              <ModalBody>Modal body content goes here.</ModalBody>
              <ModalFooter>
                <Button variant="light" onClick={onClose}>Cancel</Button>
                <Button variant="solid" color="primary" onClick={onClose}>Send invite</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

const meta: Meta<typeof Modal> = {
  title: "Overlays/Modal",
  component: Modal,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = { render: () => <ModalDemo /> };
