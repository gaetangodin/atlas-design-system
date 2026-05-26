import type { Meta, StoryObj } from "@storybook/react";
import { Briefcase } from "lucide-react";
import { BrowseHubCard } from "./BrowseHubCard";

const meta: Meta<typeof BrowseHubCard> = {
  title: "Shell/BrowseHubCard",
  component: BrowseHubCard,
  tags: ["autodocs"],
  argTypes: { variant: { control: "radio", options: ["hub", "mainSpace"] } },
};
export default meta;
type Story = StoryObj<typeof BrowseHubCard>;

const sampleChildren = (
  <div className="flex h-full flex-col gap-3 p-5">
    <Briefcase className="size-6 text-primary" aria-hidden />
    <div>
      <p className="text-base font-semibold">Job postings</p>
      <p className="text-sm text-muted-foreground">Author, publish, and manage roles.</p>
    </div>
  </div>
);

export const Hub: Story = { args: { variant: "hub", onClick: () => {}, children: sampleChildren } };
export const MainSpace: Story = { args: { variant: "mainSpace", onClick: () => {}, children: sampleChildren } };
