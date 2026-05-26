import { DescriptionList } from "@atlas/design-system";
import { Section } from "../Section";
import { mockBillingSummary } from "../../mocks/playground.mocks";

export function DescriptionListSection() {
  return (
    <Section id="lists" title="Description list">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Inline
          </p>
          <DescriptionList items={mockBillingSummary} layout="inline" />
        </div>
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Stacked
          </p>
          <DescriptionList items={mockBillingSummary} layout="stacked" />
        </div>
      </div>
    </Section>
  );
}
