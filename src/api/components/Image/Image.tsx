/**
 * Image — mirrors `heroui-branded/display.tsx::BrandedImage`.
 */
import { forwardRef, type Ref } from "react";
import { Image as HeroUIImage, type ImageProps as HeroUIImageProps } from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type ImageProps = HeroUIImageProps;

export const Image = forwardRef<HTMLImageElement, ImageProps>(function Image(
  { classNames, radius = "md", ...rest },
  ref,
) {
  return (
    <HeroUIImage
      ref={ref as Ref<HTMLImageElement>}
      radius={radius}
      {...rest}
      classNames={{ ...classNames, wrapper: cnHero("rounded-md overflow-hidden", classNames?.wrapper) }}
    />
  );
});
Image.displayName = "Image";
