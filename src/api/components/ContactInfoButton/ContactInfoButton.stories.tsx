import type { Meta, StoryObj } from "@storybook/react";
import { ContactInfoButton } from "./ContactInfoButton";

const meta: Meta<typeof ContactInfoButton> = {
  title: "Recruitment/ContactInfoButton",
  component: ContactInfoButton,
  tags: ["autodocs"],
  args: {
    children: <><p className="font-semibold">Avery Lin</p><p>avery@marbleu.co</p></>,
  },
  argTypes: { audience: { control: "radio", options: ["candidate", "company"] } },
};
export default meta;
type Story = StoryObj<typeof ContactInfoButton>;

export const Candidate: Story = { args: { audience: "candidate" } };
export const Company: Story = { args: { audience: "company" } };
