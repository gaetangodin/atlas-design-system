import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectItem, SelectSection } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Forms/Select",
  component: Select,
  tags: ["autodocs"],
  args: { label: "Region", placeholder: "Choose a region" },
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectItem key="van">Vancouver, BC</SelectItem>
      <SelectItem key="tor">Toronto, ON</SelectItem>
      <SelectItem key="mtl">Montréal, QC</SelectItem>
    </Select>
  ),
};

export const Multi: Story = {
  render: () => (
    <Select label="Skills" selectionMode="multiple" placeholder="Pick a few">
      <SelectItem key="figma">Figma</SelectItem>
      <SelectItem key="research">User research</SelectItem>
      <SelectItem key="react">React</SelectItem>
      <SelectItem key="ts">TypeScript</SelectItem>
    </Select>
  ),
};

export const Grouped: Story = {
  render: () => (
    <Select label="Skill">
      <SelectSection title="Design">
        <SelectItem key="figma">Figma</SelectItem>
        <SelectItem key="research">User research</SelectItem>
      </SelectSection>
      <SelectSection title="Engineering">
        <SelectItem key="react">React</SelectItem>
        <SelectItem key="ts">TypeScript</SelectItem>
      </SelectSection>
    </Select>
  ),
};

export const Invalid: Story = {
  args: { isInvalid: true, errorMessage: "Please choose a region." },
  render: (args) => (
    <Select {...args}>
      <SelectItem key="van">Vancouver, BC</SelectItem>
    </Select>
  ),
};
