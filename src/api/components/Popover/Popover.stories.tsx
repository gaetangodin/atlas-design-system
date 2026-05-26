import type { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverTrigger, PopoverContent } from "./Popover";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";

const meta: Meta<typeof Popover> = { title: "Overlays/Popover", component: Popover, tags: ["autodocs"] };
export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <Button variant="bordered">Filters</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-1 flex flex-col gap-2">
          <Checkbox defaultSelected>Active</Checkbox>
          <Checkbox>Archived</Checkbox>
          <Checkbox>Drafts</Checkbox>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
