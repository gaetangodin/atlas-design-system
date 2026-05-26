import { Copy, Edit, Trash2 } from "lucide-react";
import {
  AlertModal,
  BottomSheet,
  BottomSheetContent,
  BottomSheetDescription,
  BottomSheetPortal,
  BottomSheetTitle,
  BottomSheetTrigger,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Slider,
  Switch,
} from "@atlas/design-system";
import { Row } from "../Row";

interface OverlayModalsProps {
  modalIsOpen: boolean;
  onModalOpen: () => void;
  onModalOpenChange: (open: boolean) => void;
  drawerIsOpen: boolean;
  onDrawerOpen: () => void;
  onDrawerOpenChange: (open: boolean) => void;
  alertModalIsOpen: boolean;
  onAlertModalOpen: () => void;
  onAlertModalOpenChange: (open: boolean) => void;
  onWorkspaceRenameConfirm: () => void;
  onWorkspaceDeleteConfirm: () => void;
}

export function OverlayModals({
  modalIsOpen,
  onModalOpen,
  onModalOpenChange,
  drawerIsOpen,
  onDrawerOpen,
  onDrawerOpenChange,
  alertModalIsOpen,
  onAlertModalOpen,
  onAlertModalOpenChange,
  onWorkspaceRenameConfirm,
  onWorkspaceDeleteConfirm,
}: OverlayModalsProps) {
  return (
    <>
      <Row label="Modal">
        <Button color="primary" onClick={onModalOpen}>Open modal</Button>
        <Modal isOpen={modalIsOpen} onOpenChange={onModalOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>Confirm rename</ModalHeader>
                <ModalBody>
                  <Input label="New name" defaultValue="Atlas Workspace" />
                </ModalBody>
                <ModalFooter>
                  <Button variant="light" onClick={onClose}>Cancel</Button>
                  <Button
                    color="primary"
                    onClick={() => {
                      onWorkspaceRenameConfirm();
                      onClose();
                    }}
                  >
                    Save
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </Row>
      <Divider className="my-2" />
      <Row label="Alert modal">
        <Button color="danger" variant="flat" onClick={onAlertModalOpen}>
          Delete workspace
        </Button>
        <AlertModal
          isOpen={alertModalIsOpen}
          onOpenChange={onAlertModalOpenChange}
          tone="danger"
          title="Delete workspace?"
          description="This permanently removes the workspace and all of its data."
          confirmLabel="Delete"
          cancelLabel="Keep"
          onConfirm={onWorkspaceDeleteConfirm}
        />
      </Row>
      <Divider className="my-2" />
      <Row label="Drawer">
        <Button variant="flat" onClick={onDrawerOpen}>Open drawer</Button>
        <Drawer isOpen={drawerIsOpen} onOpenChange={onDrawerOpenChange}>
          <DrawerContent>
            {(onClose) => (
              <>
                <DrawerHeader>Filters</DrawerHeader>
                <DrawerBody>
                  <div className="space-y-4">
                    <Switch defaultSelected>Active only</Switch>
                    <Slider label="Spend" defaultValue={50} />
                  </div>
                </DrawerBody>
                <DrawerFooter>
                  <Button variant="light" onClick={onClose}>Reset</Button>
                  <Button color="primary" onClick={onClose}>Apply</Button>
                </DrawerFooter>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </Row>
      <Divider className="my-2" />
      <Row label="Bottom sheet">
        <BottomSheet>
          <BottomSheetTrigger asChild>
            <Button variant="flat">Open bottom sheet</Button>
          </BottomSheetTrigger>
          <BottomSheetPortal>
            <BottomSheetContent>
              <div className="space-y-2 p-4">
                <BottomSheetTitle className="text-base font-semibold">
                  Quick actions
                </BottomSheetTitle>
                <BottomSheetDescription className="text-sm text-muted-foreground">
                  Sheet anchored to the bottom — drag the handle to dismiss.
                </BottomSheetDescription>
                <div className="flex flex-col gap-2 pt-2">
                  <Button variant="flat" startContent={<Edit className="size-4" />}>Edit</Button>
                  <Button variant="flat" startContent={<Copy className="size-4" />}>Duplicate</Button>
                  <Button color="danger" variant="flat" startContent={<Trash2 className="size-4" />}>
                    Delete
                  </Button>
                </div>
              </div>
            </BottomSheetContent>
          </BottomSheetPortal>
        </BottomSheet>
      </Row>
    </>
  );
}
