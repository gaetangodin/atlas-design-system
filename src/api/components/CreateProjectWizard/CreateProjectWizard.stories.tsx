import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { CreateProjectWizard } from "./CreateProjectWizard";
import { Button } from "../Button";

const STEPS = [
  { id: "1", label: "Name", description: "Pick a name", status: "active" as const },
  { id: "2", label: "Team", description: "Invite people", status: "pending" as const },
  { id: "3", label: "Review", description: "Confirm + create", status: "pending" as const },
];

const meta: Meta<typeof CreateProjectWizard> = {
  title: "Modals/CreateProjectWizard",
  component: CreateProjectWizard,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof CreateProjectWizard>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(0);
    return (
      <>
        <Button onClick={() => { setStep(0); setOpen(true); }}>Create project</Button>
        <CreateProjectWizard
          isOpen={open}
          onOpenChange={setOpen}
          title="Create a new project"
          steps={STEPS.map((s, i) => ({ ...s, status: i < step ? "completed" : i === step ? "active" : "pending" }))}
          currentStep={step}
          onBack={() => setStep((s) => Math.max(0, s - 1))}
          onNext={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))}
          onFinish={() => setOpen(false)}
        >
          <div className="rounded-lg border border-dashed border-border p-8 text-sm text-muted-foreground">
            Step {step + 1} body
          </div>
        </CreateProjectWizard>
      </>
    );
  },
};
