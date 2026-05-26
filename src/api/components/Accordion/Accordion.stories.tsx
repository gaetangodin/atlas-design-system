import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItem } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Navigation/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion>
      <AccordionItem key="profile" title="Profile" subtitle="Basic info">
        Update your name, email, and avatar.
      </AccordionItem>
      <AccordionItem key="notifications" title="Notifications">
        Choose how you want to be notified.
      </AccordionItem>
      <AccordionItem key="team" title="Team">
        Invite teammates and manage roles.
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion selectionMode="multiple" variant="light">
      <AccordionItem key="1" title="How does billing work?">
        Monthly per seat, cancel anytime.
      </AccordionItem>
      <AccordionItem key="2" title="Is there a free trial?">
        Yes — 14 days, no credit card required.
      </AccordionItem>
    </Accordion>
  ),
};
