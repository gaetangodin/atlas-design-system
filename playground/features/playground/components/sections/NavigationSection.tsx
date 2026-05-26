import {
  Accordion,
  AccordionItem,
  BreadcrumbItem,
  Breadcrumbs,
  Divider,
  Pagination,
  Stepper,
  Tab,
  Tabs,
} from "@atlas/design-system";
import { Section } from "../Section";
import { Row } from "../Row";
import { mockOnboardingSteps } from "../../mocks/playground.mocks";

export function NavigationSection() {
  return (
    <Section id="navigation" title="Navigation">
      <Row label="Tabs">
        <Tabs aria-label="Tabs demo" color="primary" variant="solid">
          <Tab key="overview" title="Overview">
            <p className="pt-4 text-sm text-muted-foreground">
              Overview content goes here. Atlas Tabs wrap HeroUI's primitive.
            </p>
          </Tab>
          <Tab key="usage" title="Usage">
            <p className="pt-4 text-sm text-muted-foreground">
              Usage docs and examples land in this tab.
            </p>
          </Tab>
          <Tab key="props" title="Props">
            <p className="pt-4 text-sm text-muted-foreground">
              The full prop table is generated from the contracts module.
            </p>
          </Tab>
        </Tabs>
      </Row>
      <Divider className="my-2" />
      <Row label="Accordion">
        <Accordion defaultExpandedKeys={["1"]} className="w-full">
          <AccordionItem key="1" title="What is Atlas?" subtitle="A 30s overview">
            <p className="text-sm text-muted-foreground">
              Atlas is a layered design system on top of HeroUI with Preline tokens.
            </p>
          </AccordionItem>
          <AccordionItem key="2" title="Theming">
            <p className="text-sm text-muted-foreground">
              All colors flow through CSS variables — swap a token and the whole
              library follows.
            </p>
          </AccordionItem>
          <AccordionItem key="3" title="Accessibility">
            <p className="text-sm text-muted-foreground">
              Every primitive carries the underlying React Aria semantics.
            </p>
          </AccordionItem>
        </Accordion>
      </Row>
      <Divider className="my-2" />
      <Row label="Breadcrumbs">
        <Breadcrumbs>
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem href="#">Components</BreadcrumbItem>
          <BreadcrumbItem>Breadcrumbs</BreadcrumbItem>
        </Breadcrumbs>
      </Row>
      <Divider className="my-2" />
      <Row label="Pagination">
        <Pagination total={10} initialPage={1} />
      </Row>
      <Divider className="my-2" />
      <Row label="Stepper">
        <div className="w-full">
          <Stepper steps={mockOnboardingSteps} current={1} />
          <div className="h-6" />
          <Stepper steps={mockOnboardingSteps} current={1} orientation="vertical" />
        </div>
      </Row>
    </Section>
  );
}
