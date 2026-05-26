import { Divider } from "@atlas/design-system";
import { Section } from "../Section";
import { OverlayPopovers } from "./OverlayPopovers";
import { OverlayModals } from "./OverlayModals";

interface OverlaysSectionProps {
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

export function OverlaysSection(props: OverlaysSectionProps) {
  return (
    <Section id="overlays" title="Overlays">
      <OverlayPopovers />
      <Divider className="my-2" />
      <OverlayModals {...props} />
    </Section>
  );
}
