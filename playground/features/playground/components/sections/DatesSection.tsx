import {
  Calendar,
  DateInput,
  DatePicker,
  DateRangePicker,
  Divider,
  RangeCalendar,
  TimeInput,
} from "@atlas/design-system";
import { Section } from "../Section";

export function DatesSection() {
  return (
    <Section id="dates" title="Dates & times">
      <div className="grid gap-6 md:grid-cols-2">
        <DatePicker label="Date" />
        <DateRangePicker label="Date range" />
        <DateInput label="Date input" />
        <TimeInput label="Time input" />
      </div>
      <Divider className="my-6" />
      <div className="flex flex-wrap items-start gap-6">
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Calendar
          </p>
          <Calendar aria-label="Date" />
        </div>
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Range calendar
          </p>
          <RangeCalendar aria-label="Date range" />
        </div>
      </div>
    </Section>
  );
}
