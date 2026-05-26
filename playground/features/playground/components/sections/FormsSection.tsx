import type { FormEvent } from "react";
import { Bold, Italic, Underline } from "lucide-react";
import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  Radio,
  RadioGroup,
  Slider,
  Switch,
  Toggle,
} from "@atlas/design-system";
import { Section } from "../Section";
import { Row } from "../Row";

interface FormsSectionProps {
  onSettingsFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function FormsSection({ onSettingsFormSubmit }: FormsSectionProps) {
  return (
    <Section id="forms" title="Form controls">
      <Row label="Switch">
        <Switch defaultSelected>Notifications</Switch>
        <Switch>Marketing emails</Switch>
        <Switch isDisabled>Disabled</Switch>
      </Row>
      <Divider className="my-2" />
      <Row label="Checkbox">
        <Checkbox defaultSelected>Remember me</Checkbox>
        <Checkbox color="success" defaultSelected>Success</Checkbox>
        <Checkbox isIndeterminate>Indeterminate</Checkbox>
        <Checkbox isDisabled>Disabled</Checkbox>
      </Row>
      <Divider className="my-2" />
      <Row label="Radio">
        <RadioGroup orientation="horizontal" defaultValue="monthly">
          <Radio value="monthly">Monthly</Radio>
          <Radio value="annual">Annual</Radio>
          <Radio value="lifetime">Lifetime</Radio>
        </RadioGroup>
      </Row>
      <Divider className="my-2" />
      <Row label="Slider">
        <div className="w-full max-w-md">
          <Slider label="Budget" defaultValue={40} minValue={0} maxValue={100} step={1} />
        </div>
      </Row>
      <Divider className="my-2" />
      <Row label="Toggle">
        <Toggle defaultPressed aria-label="Bold">
          <Bold className="size-4" />
        </Toggle>
        <Toggle aria-label="Italic">
          <Italic className="size-4" />
        </Toggle>
        <Toggle aria-label="Underline">
          <Underline className="size-4" />
        </Toggle>
        <Toggle defaultPressed>Filter on</Toggle>
      </Row>
      <Divider className="my-2" />
      <Row label="Form">
        <Form className="w-full max-w-md" onSubmit={onSettingsFormSubmit}>
          <Input label="Name" name="name" placeholder="Avery Lin" isRequired />
          <Input label="Email" name="email" type="email" isRequired />
          <Button type="submit" color="primary">
            Save profile
          </Button>
        </Form>
      </Row>
    </Section>
  );
}
