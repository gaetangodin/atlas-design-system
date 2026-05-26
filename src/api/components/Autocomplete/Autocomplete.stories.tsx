import type { Meta, StoryObj } from "@storybook/react";
import { Autocomplete, AutocompleteItem, AutocompleteSection } from "./Autocomplete";

const meta: Meta<typeof Autocomplete> = {
  title: "Forms/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
  args: { label: "Region", placeholder: "Choose a region" },
};
export default meta;

type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {
  render: (args) => (
    <Autocomplete {...args}>
      <AutocompleteItem key="van">Vancouver, BC</AutocompleteItem>
      <AutocompleteItem key="tor">Toronto, ON</AutocompleteItem>
      <AutocompleteItem key="mtl">Montréal, QC</AutocompleteItem>
    </Autocomplete>
  ),
};

export const Grouped: Story = {
  render: (args) => (
    <Autocomplete {...args} label="Skill">
      <AutocompleteSection title="Design">
        <AutocompleteItem key="figma">Figma</AutocompleteItem>
        <AutocompleteItem key="research">User research</AutocompleteItem>
      </AutocompleteSection>
      <AutocompleteSection title="Engineering">
        <AutocompleteItem key="react">React</AutocompleteItem>
        <AutocompleteItem key="ts">TypeScript</AutocompleteItem>
      </AutocompleteSection>
    </Autocomplete>
  ),
};
