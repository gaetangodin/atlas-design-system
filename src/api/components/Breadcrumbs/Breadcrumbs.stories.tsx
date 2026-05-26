import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs, BreadcrumbItem } from "./Breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  render: () => (
    <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/recruitment">Recruitment</BreadcrumbItem>
      <BreadcrumbItem>Referrals</BreadcrumbItem>
    </Breadcrumbs>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <Breadcrumbs maxItems={3}>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/orgs">Orgs</BreadcrumbItem>
      <BreadcrumbItem href="/orgs/xeekrs">Xeekrs</BreadcrumbItem>
      <BreadcrumbItem href="/orgs/xeekrs/recruitment">Recruitment</BreadcrumbItem>
      <BreadcrumbItem>Referrals</BreadcrumbItem>
    </Breadcrumbs>
  ),
};
