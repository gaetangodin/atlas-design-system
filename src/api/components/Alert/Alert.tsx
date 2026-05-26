/**
 * Alert — mirrors `heroui-branded/feedback.tsx::BrandedAlert`.
 * Tinted by semantic color; soft border + soft fill.
 */
import { forwardRef, type Ref } from "react";
import { Alert as HeroUIAlert, type AlertProps as HeroUIAlertProps } from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type AlertProps = HeroUIAlertProps;

export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { classNames, color = "default", ...rest },
  ref,
) {
  const tone =
    color === "success"
      ? "border-success/30 bg-success/10 text-success"
      : color === "warning"
        ? "border-warning/30 bg-warning/10 text-warning"
        : color === "danger"
          ? "border-destructive/30 bg-destructive/10 text-destructive"
          : color === "primary"
            ? "border-primary/30 bg-primary/10 text-primary"
            : color === "secondary"
              ? "border-secondary/30 bg-secondary/10 text-secondary"
              : "border-border bg-muted text-foreground";

  return (
    <HeroUIAlert
      ref={ref as Ref<HTMLDivElement>}
      color={color}
      {...rest}
      classNames={{
        ...classNames,
        base: cnHero("rounded-lg border px-4 py-3 text-sm", tone, classNames?.base),
        title: cnHero("font-medium", classNames?.title),
        description: cnHero("text-sm opacity-90", classNames?.description),
      }}
    />
  );
});
Alert.displayName = "Alert";
