import type { Meta, StoryObj } from "@storybook/react";
import { Calendar, RangeCalendar, DatePicker, DateRangePicker, DateInput, TimeInput } from "./Calendar";

const meta: Meta = { title: "Dates/Calendar family" };
export default meta;

type Story = StoryObj;

export const InlineCalendar: Story = { render: () => <Calendar aria-label="Date" /> };
export const InlineRange: Story = { render: () => <RangeCalendar aria-label="Range" /> };
export const Picker: Story = { render: () => <DatePicker label="Start date" /> };
export const RangePicker: Story = { render: () => <DateRangePicker label="Trip dates" /> };
export const DateField: Story = { render: () => <DateInput label="Birth date" /> };
export const TimeField: Story = { render: () => <TimeInput label="Meeting time" /> };
