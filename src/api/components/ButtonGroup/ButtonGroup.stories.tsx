import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "../Button";

const meta: Meta<typeof ButtonGroup> = { title: "Display/ButtonGroup", component: ButtonGroup, tags: ["autodocs"] };
export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Segmented: Story = {
  render: () => (
    <ButtonGroup variant="bordered">
      <Button>Day</Button>
      <Button>Week</Button>
      <Button>Month</Button>
    </ButtonGroup>
  ),
};

export const Solid: Story = {
  render: () => (
    <ButtonGroup color="primary">
      <Button>Save</Button>
      <Button>Save as draft</Button>
      <Button>Save as template</Button>
    </ButtonGroup>
  ),
};
