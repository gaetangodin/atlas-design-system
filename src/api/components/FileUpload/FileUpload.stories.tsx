import type { Meta, StoryObj } from "@storybook/react";
import { FileUpload } from "./FileUpload";

const meta: Meta<typeof FileUpload> = {
  title: "Forms/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
  args: { onFiles: (f) => console.log(f) },
  decorators: [(Story) => <div style={{ maxWidth: 480 }}><Story /></div>],
};
export default meta;

type Story = StoryObj<typeof FileUpload>;
export const Default: Story = {};
export const Multiple: Story = { args: { multiple: true, label: "Drop CVs", description: "PDF or DOCX, up to 5 files" } };
export const ImageOnly: Story = { args: { accept: "image/*", label: "Upload avatar" } };
export const Disabled: Story = { args: { isDisabled: true } };
