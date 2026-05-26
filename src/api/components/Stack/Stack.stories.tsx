import type { Meta, StoryObj } from "@storybook/react";
import { Stack, HStack, VStack } from "./Stack";
import { Button } from "../Button";
import { Badge } from "../Badge";

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Stack>;

export const VerticalStack: Story = {
  render: () => (
    <VStack gap={4} style={{ width: 240 }}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </VStack>
  ),
};

export const HorizontalStack: Story = {
  render: () => (
    <HStack gap={2}>
      <Badge>React</Badge>
      <Badge>TypeScript</Badge>
      <Badge>Figma</Badge>
      <Badge>Storybook</Badge>
    </HStack>
  ),
};

export const Justify: Story = {
  render: () => (
    <HStack gap={3} justify="between" style={{ width: 320, padding: 8, background: "var(--muted)" }}>
      <span>Left</span>
      <span>Right</span>
    </HStack>
  ),
};
