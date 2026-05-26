import { Mail, Search } from "lucide-react";
import {
  Input,
  InputOtp,
  NumberInput,
  TagsInput,
  Textarea,
} from "@atlas/design-system";
import { Section } from "../Section";

interface InputsSectionProps {
  otp: string;
  tags: string[];
  onOtpChange: (next: string) => void;
  onTagsChange: (next: string[]) => void;
}

export function InputsSection({
  otp,
  tags,
  onOtpChange,
  onTagsChange,
}: InputsSectionProps) {
  return (
    <Section id="inputs" title="Inputs">
      <div className="grid gap-6 md:grid-cols-2">
        <Input label="Email" placeholder="hello@marbleu.co" type="email" />
        <Input
          label="Search"
          placeholder="Search components"
          startContent={<Search className="size-4 text-muted-foreground" />}
        />
        <Input
          label="With description"
          placeholder="Your full name"
          description="Used on shared invoices."
        />
        <Input
          label="Errored"
          defaultValue="not-an-email"
          isInvalid
          errorMessage="Enter a valid email address."
        />
        <Textarea label="Bio" placeholder="Tell us a bit about yourself…" minRows={3} />
        <Input
          label="Disabled"
          defaultValue="locked@example.com"
          isDisabled
          startContent={<Mail className="size-4 text-muted-foreground" />}
        />
        <NumberInput label="Quantity" defaultValue={1} min={0} max={99} />
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            One-time code
          </p>
          <InputOtp length={6} value={otp} onValueChange={onOtpChange} />
        </div>
        <div className="md:col-span-2">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Tags
          </p>
          <TagsInput
            value={tags}
            onChange={onTagsChange}
            placeholder="Add a tag and press Enter"
          />
        </div>
      </div>
    </Section>
  );
}
