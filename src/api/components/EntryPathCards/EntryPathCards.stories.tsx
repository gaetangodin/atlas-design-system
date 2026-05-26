import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FilePlus2, FileText, Sparkles } from "lucide-react";
import { EntryPathCards, type EntryPathOption } from "./EntryPathCards";

const OPTIONS: EntryPathOption<"scratch" | "template" | "ai">[] = [
  { id: "scratch", title: "Start from scratch", description: "Build field by field.", icon: <FilePlus2 className="size-5" /> },
  { id: "template", title: "Use a template", description: "Pick a similar role.", icon: <FileText className="size-5" /> },
  { id: "ai", title: "AI-assisted draft", description: "We'll draft the first version.", icon: <Sparkles className="size-5" /> },
];

const meta: Meta<typeof EntryPathCards> = {
  title: "Posting/EntryPathCards",
  component: EntryPathCards,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof EntryPathCards>;

export const Default: Story = {
  render: () => {
    const [v, setV] = useState<"scratch" | "template" | "ai">("ai");
    return <EntryPathCards options={OPTIONS} value={v} onChange={(id) => setV(id as typeof v)} />;
  },
};
