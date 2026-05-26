/**
 * Calendar + DatePicker + DateInput + RangeCalendar + DateRangePicker.
 * HeroUI native, lightly restyled. Replaces react-day-picker per
 * `RADIX_TO_HEROUI.md`.
 */
import {
  Calendar as HeroUICalendar,
  RangeCalendar as HeroUIRangeCalendar,
  DatePicker as HeroUIDatePicker,
  DateRangePicker as HeroUIDateRangePicker,
  DateInput as HeroUIDateInput,
  TimeInput as HeroUITimeInput,
  type CalendarProps as HeroUICalendarProps,
  type RangeCalendarProps as HeroUIRangeCalendarProps,
  type DatePickerProps as HeroUIDatePickerProps,
  type DateRangePickerProps as HeroUIDateRangePickerProps,
  type DateInputProps as HeroUIDateInputProps,
  type TimeInputProps as HeroUITimeInputProps,
} from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type CalendarProps = HeroUICalendarProps;
export type RangeCalendarProps = HeroUIRangeCalendarProps;
export type DatePickerProps = HeroUIDatePickerProps;
export type DateRangePickerProps = HeroUIDateRangePickerProps;
export type DateInputProps = HeroUIDateInputProps;
export type TimeInputProps = HeroUITimeInputProps;

const PICKER_WRAPPER =
  "flex h-9 w-full items-center rounded-md border border-input bg-input-background " +
  "px-3 text-base data-[hover=true]:border-input data-[focus=true]:border-ring " +
  "data-[focus=true]:ring-ring/50 data-[focus=true]:ring-[3px]";

export function Calendar(props: CalendarProps) {
  const { classNames, ...rest } = props;
  return (
    <HeroUICalendar
      {...rest}
      classNames={{
        ...classNames,
        base: cnHero(
          "rounded-lg border border-border bg-background text-foreground p-2",
          classNames?.base,
        ),
        headerWrapper: cnHero("px-2 py-1", classNames?.headerWrapper),
        title: cnHero("text-sm font-medium text-foreground", classNames?.title),
        gridHeader: cnHero("text-muted-foreground", classNames?.gridHeader),
        gridHeaderCell: cnHero("text-xs font-medium text-muted-foreground", classNames?.gridHeaderCell),
        cellButton: cnHero(
          "size-9 rounded-md text-sm text-foreground hover:bg-muted data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground",
          classNames?.cellButton,
        ),
      }}
    />
  );
}

export function RangeCalendar(props: RangeCalendarProps) {
  const { classNames, ...rest } = props;
  return (
    <HeroUIRangeCalendar
      {...rest}
      classNames={{
        ...classNames,
        base: cnHero(
          "rounded-lg border border-border bg-background text-foreground p-2",
          classNames?.base,
        ),
        cellButton: cnHero(
          "size-9 rounded-none text-sm text-foreground hover:bg-muted",
          "data-[range-selection=true]:bg-primary/10 data-[range-selection=true]:text-primary",
          "data-[selection-start=true]:rounded-l-md data-[selection-end=true]:rounded-r-md",
          "data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground",
          classNames?.cellButton,
        ),
      }}
    />
  );
}

export function DatePicker(props: DatePickerProps) {
  const { classNames, variant = "bordered", radius = "lg", labelPlacement = "outside", ...rest } = props;
  return (
    <HeroUIDatePicker
      variant={variant}
      radius={radius}
      labelPlacement={labelPlacement}
      {...rest}
      classNames={{
        ...classNames,
        base: cnHero("w-full min-w-0", classNames?.base),
        label: cnHero("text-sm font-medium text-foreground mb-1.5 text-left", classNames?.label),
        inputWrapper: cnHero(PICKER_WRAPPER, classNames?.inputWrapper),
        input: cnHero("text-base text-foreground outline-none", classNames?.input),
        popoverContent: cnHero(
          "rounded-md border border-border bg-popover shadow-md",
          classNames?.popoverContent,
        ),
      }}
    />
  );
}

export function DateRangePicker(props: DateRangePickerProps) {
  const { classNames, variant = "bordered", radius = "lg", labelPlacement = "outside", ...rest } = props;
  return (
    <HeroUIDateRangePicker
      variant={variant}
      radius={radius}
      labelPlacement={labelPlacement}
      {...rest}
      classNames={{
        ...classNames,
        base: cnHero("w-full min-w-0", classNames?.base),
        label: cnHero("text-sm font-medium text-foreground mb-1.5 text-left", classNames?.label),
        inputWrapper: cnHero(PICKER_WRAPPER, classNames?.inputWrapper),
        input: cnHero("text-base text-foreground outline-none", classNames?.input),
        popoverContent: cnHero(
          "rounded-md border border-border bg-popover shadow-md",
          classNames?.popoverContent,
        ),
      }}
    />
  );
}

export function DateInput(props: DateInputProps) {
  const { classNames, variant = "bordered", radius = "lg", ...rest } = props;
  return (
    <HeroUIDateInput
      variant={variant}
      radius={radius}
      {...rest}
      classNames={{
        ...classNames,
        label: cnHero("text-sm font-medium text-foreground", classNames?.label),
        inputWrapper: cnHero(PICKER_WRAPPER, classNames?.inputWrapper),
        input: cnHero("text-base text-foreground", classNames?.input),
      }}
    />
  );
}

export function TimeInput(props: TimeInputProps) {
  const { classNames, variant = "bordered", radius = "lg", ...rest } = props;
  return (
    <HeroUITimeInput
      variant={variant}
      radius={radius}
      {...rest}
      classNames={{
        ...classNames,
        label: cnHero("text-sm font-medium text-foreground", classNames?.label),
        inputWrapper: cnHero(PICKER_WRAPPER, classNames?.inputWrapper),
        input: cnHero("text-base text-foreground", classNames?.input),
      }}
    />
  );
}
