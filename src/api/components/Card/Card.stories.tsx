import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";
import { Button } from "../Button";
import { Badge } from "../Badge";

const meta: Meta<typeof Card> = {
  title: "Core/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    shadow: { control: "select", options: ["none", "sm", "md", "lg"] },
    variant: { control: "select", options: ["default", "hover-lift"] },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 360 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <div style={{ fontWeight: 500 }}>Active referral</div>
        <div style={{ fontSize: 12, color: "var(--muted-foreground)" }}>Submitted 2 days ago</div>
      </CardHeader>
      <CardBody>Maya R. — Senior Designer · Vancouver</CardBody>
      <CardFooter>
        <Badge variant="flat" color="primary">In review</Badge>
        <Button size="sm" variant="solid" color="primary">View</Button>
      </CardFooter>
    </Card>
  ),
};

export const HoverLift: Story = {
  args: { variant: "hover-lift" },
  render: (args) => (
    <Card {...args}>
      <CardBody>Dashboard tile — flat until hovered.</CardBody>
    </Card>
  ),
};

export const Pressable: Story = {
  args: { isPressable: true },
  render: (args) => (
    <Card {...args}>
      <CardBody>Tap me — pressable card.</CardBody>
    </Card>
  ),
};
