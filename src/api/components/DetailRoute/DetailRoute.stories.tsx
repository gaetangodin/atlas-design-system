import type { Meta, StoryObj } from "@storybook/react";
import { DetailRoute } from "./DetailRoute";
import { CoverImageHero } from "../CoverImageHero";
import { PageBack } from "../PageBack";
import { SubNav } from "../SubNav";
import { Button } from "../Button";

const meta: Meta<typeof DetailRoute> = {
  title: "Routes/DetailRoute",
  component: DetailRoute,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof DetailRoute>;

export const Default: Story = {
  args: {
    hero: <CoverImageHero tone="gradient" title="Employer profile" subtitle="Marble HQ" />,
    toolbar: (
      <SubNav
        left={<PageBack variant="pill" onClick={() => {}}>Caseload</PageBack>}
        right={<Button size="sm" color="primary">Open profile</Button>}
      />
    ),
    children: (
      <section className="rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground">
        Profile sections render here.
      </section>
    ),
  },
};
