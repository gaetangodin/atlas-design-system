/**
 * Form — mirrors `heroui-branded/misc.tsx::BrandedForm`.
 */
import { forwardRef, type Ref } from "react";
import { Form as HeroUIForm, type FormProps as HeroUIFormProps } from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type FormProps = HeroUIFormProps;

export const Form = forwardRef<HTMLFormElement, FormProps>(function Form({ className, ...rest }, ref) {
  return (
    <HeroUIForm
      ref={ref as Ref<HTMLFormElement>}
      {...rest}
      className={cnHero("flex flex-col gap-4", className)}
    />
  );
});
Form.displayName = "Form";
