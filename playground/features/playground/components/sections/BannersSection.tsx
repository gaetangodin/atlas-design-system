import { AlertTriangle, CircleAlert, CircleCheck, Info } from "lucide-react";
import { Banner, Button, Divider } from "@atlas/design-system";
import { Section } from "../Section";

interface BannersSectionProps {
  onBannerDismiss: () => void;
  onPlainToastTrigger: () => void;
  onSuccessToastTrigger: () => void;
  onWarningToastTrigger: () => void;
  onErrorToastTrigger: () => void;
  onActionToastTrigger: () => void;
}

export function BannersSection({
  onBannerDismiss,
  onPlainToastTrigger,
  onSuccessToastTrigger,
  onWarningToastTrigger,
  onErrorToastTrigger,
  onActionToastTrigger,
}: BannersSectionProps) {
  return (
    <Section id="banners" title="Banners & toasts">
      <div className="space-y-3">
        <Banner tone="info" icon={<Info className="size-4" />}>
          New: Atlas charts now ship with Recharts under the hood.
        </Banner>
        <Banner tone="success" icon={<CircleCheck className="size-4" />}>
          Your workspace is fully provisioned.
        </Banner>
        <Banner
          tone="warning"
          icon={<AlertTriangle className="size-4" />}
          action={<Button size="sm" variant="flat">Review</Button>}
          onClose={onBannerDismiss}
        >
          Billing details are missing for one workspace.
        </Banner>
        <Banner tone="danger" icon={<CircleAlert className="size-4" />}>
          Webhook delivery failing — investigate from Settings → Webhooks.
        </Banner>
      </div>
      <Divider className="my-6" />
      <div className="flex flex-wrap gap-2">
        <Button variant="flat" onClick={onPlainToastTrigger}>Plain</Button>
        <Button variant="flat" color="success" onClick={onSuccessToastTrigger}>
          Success
        </Button>
        <Button variant="flat" color="warning" onClick={onWarningToastTrigger}>
          Warning
        </Button>
        <Button variant="flat" color="danger" onClick={onErrorToastTrigger}>
          Error
        </Button>
        <Button variant="flat" onClick={onActionToastTrigger}>With action</Button>
      </div>
    </Section>
  );
}
