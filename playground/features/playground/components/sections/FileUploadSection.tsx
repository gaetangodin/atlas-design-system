import { Upload } from "lucide-react";
import { FileUpload } from "@atlas/design-system";
import { Section } from "../Section";

interface FileUploadSectionProps {
  onFilesSelect: (files: File[]) => void;
}

export function FileUploadSection({ onFilesSelect }: FileUploadSectionProps) {
  return (
    <Section id="file-upload" title="File upload">
      <FileUpload
        label="Drop files or click to upload"
        description="PNG, JPG up to 10MB"
        icon={<Upload className="size-5" />}
        multiple
        onFiles={onFilesSelect}
      />
    </Section>
  );
}
