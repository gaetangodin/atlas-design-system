/**
 * Navbar — HeroUI native, restyled to brand. Top app bar primitive.
 */
import { forwardRef, type Ref } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarBrand as HeroUINavbarBrand,
  NavbarContent as HeroUINavbarContent,
  NavbarItem as HeroUINavbarItem,
  NavbarMenu as HeroUINavbarMenu,
  NavbarMenuItem as HeroUINavbarMenuItem,
  NavbarMenuToggle as HeroUINavbarMenuToggle,
  type NavbarProps as HeroUINavbarProps,
} from "@heroui/react";
import { cnHero } from "../../../shared/cn-hero";

export type NavbarProps = HeroUINavbarProps;

export const Navbar = forwardRef<HTMLElement, NavbarProps>(function Navbar(
  { classNames, ...rest },
  ref,
) {
  return (
    <HeroUINavbar
      ref={ref as Ref<HTMLElement>}
      {...rest}
      classNames={{
        ...classNames,
        base: cnHero(
          "border-b border-border bg-background/80 backdrop-blur-md text-foreground",
          classNames?.base,
        ),
        wrapper: cnHero("px-4 sm:px-6", classNames?.wrapper),
        item: cnHero(
          "text-sm font-medium text-muted-foreground hover:text-foreground data-[active=true]:text-foreground",
          classNames?.item,
        ),
      }}
    />
  );
});
Navbar.displayName = "Navbar";

export const NavbarBrand = HeroUINavbarBrand;
export const NavbarContent = HeroUINavbarContent;
export const NavbarItem = HeroUINavbarItem;
export const NavbarMenu = HeroUINavbarMenu;
export const NavbarMenuItem = HeroUINavbarMenuItem;
export const NavbarMenuToggle = HeroUINavbarMenuToggle;
