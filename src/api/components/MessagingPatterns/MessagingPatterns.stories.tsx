import type { Meta, StoryObj } from "@storybook/react";
import {
  CannedMessageSelector,
  ChatOpportunityCard,
  ClientTouchpointCards,
  GroupChatAvatar,
} from "./MessagingPatterns";

const meta: Meta = {
  title: "Messaging/Patterns",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

export const OpportunityCard: Story = {
  render: () => (
    <ChatOpportunityCard
      title="3 new candidates match this role"
      description="Senior frontend, Lisbon time-zone, 5+ years."
      initials="MC"
      onClick={() => {}}
    />
  ),
};

export const GroupChat: Story = {
  render: () => (
    <GroupChatAvatar
      members={[
        { name: "Avery Lin", initials: "AL" },
        { name: "Morgan Reyes", initials: "MR" },
        { name: "Sasha Park", initials: "SP" },
        { name: "Jordan Kim", initials: "JK" },
        { name: "Casey Tran", initials: "CT" },
      ]}
    />
  ),
};

export const CannedSelector: Story = {
  render: () => (
    <CannedMessageSelector
      templates={[
        { id: "intro", label: "Intro: senior role" },
        { id: "thanks", label: "Thanks for applying" },
        { id: "schedule", label: "Schedule first call" },
      ]}
      onPick={() => {}}
    />
  ),
};

export const Touchpoints: Story = {
  render: () => (
    <ClientTouchpointCards
      touchpoints={[
        { id: "1", kind: "chat", whenLabel: "Today · 10:14", summary: "Quick check-in re: Q2 plan." },
        { id: "2", kind: "email", whenLabel: "Yesterday", summary: "Sent the proposal draft for review.", initiatedBy: "You" },
        { id: "3", kind: "call", whenLabel: "Mon", summary: "Kickoff call — agreed scope + timeline." },
        { id: "4", kind: "meeting", whenLabel: "Last week", summary: "Quarterly business review." },
      ]}
    />
  ),
};
