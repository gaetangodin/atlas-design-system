import { EmptyState } from "@atlas/design-system";
import { Inbox } from "lucide-react";

/**
 * Rendered by PlaygroundPage when the showcase has no sections.
 * Today the gallery is always populated, but the rules require an
 * empty-state companion for every page-level component.
 */
export function PlaygroundEmptyState() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <EmptyState
        icon={<Inbox className="size-6" />}
        title="No sections to show"
        description="The playground configuration didn't include any sections to render."
      />
    </div>
  );
}
