/**
 * InputOtp — mirrors `heroui-branded/forms.tsx::BrandedInputOtp`.
 */
import { InputOtp as HeroUIInputOtp } from "@heroui/react";
import type { ComponentProps } from "react";
import { cnHero } from "../../../shared/cn-hero";

export type InputOtpProps = ComponentProps<typeof HeroUIInputOtp>;

export function InputOtp(props: InputOtpProps) {
  const { classNames, ...rest } = props;
  return (
    <HeroUIInputOtp
      {...rest}
      classNames={{
        ...classNames,
        segmentWrapper: cnHero("gap-2", classNames?.segmentWrapper),
        segment: cnHero(
          "size-9 rounded-md border border-input bg-input-background text-base font-medium text-foreground",
          "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:ring-[3px]",
          classNames?.segment,
        ),
      }}
    />
  );
}
