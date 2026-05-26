import type { Meta, StoryObj } from "@storybook/react";
import { WizardRoute } from "./WizardRoute";
import { PostingStepper } from "../PostingStepper";
import { Button } from "../Button";

const STEPS = [
  { id: "1", label: "Role", description: "Title & summary", status: "completed" as const },
  { id: "2", label: "Requirements", description: "Skills", status: "active" as const },
  { id: "3", label: "Logistics", description: "Pay, location", status: "pending" as const },
];

const meta: Meta<typeof WizardRoute> = {
  title: "Routes/WizardRoute",
  component: WizardRoute,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof WizardRoute>;

export const Default: Story = {
  args: {
    stepper: <PostingStepper steps={STEPS} current={1} />,
    title: "Requirements",
    subtitle: "Pick the skills + qualifications you need.",
    children: <div className="rounded-lg border border-dashed border-border p-8 text-sm text-muted-foreground">Step form fields</div>,
    footerActions: (
      <>
        <Button variant="bordered">Back</Button>
        <Button color="primary">Continue</Button>
      </>
    ),
  },
};
