# Component: Navbar

## Description
Top app bar with backdrop blur, hairline bottom border, and slots for
brand / center content / right content / mobile menu. Wraps HeroUI's
`Navbar`.

## Exports

- `Navbar`
- `NavbarBrand`
- `NavbarContent`
- `NavbarItem`
- `NavbarMenu`
- `NavbarMenuItem`
- `NavbarMenuToggle`

## Import

```tsx
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem,
  NavbarMenu, NavbarMenuItem, NavbarMenuToggle,
} from "@atlas/design-system";
```

## Props (selected)

| Prop                | Type                          | Default | Description |
| ------------------- | ----------------------------- | ------- | ----------- |
| `isBordered`        | `boolean`                     | `true`  | Bottom border. |
| `isBlurred`         | `boolean`                     | `true`  | Backdrop blur on scroll. |
| `position`          | `"sticky" \| "static"`      | `"sticky"` | |
| `maxWidth`          | `"sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "full"` | `"lg"` | Inner content width. |
| `height`            | `string`                      | `"4rem"`| |
| `isMenuOpen` / `onMenuOpenChange` | `boolean`         | —       | Controlled mobile menu state. |

## Accessibility

- Renders `<nav aria-label="…">`. Pass `aria-label` describing this nav.
- `NavbarMenuToggle` is keyboard-accessible and toggles the mobile menu.

## Examples

```tsx
<Navbar maxWidth="xl">
  <NavbarBrand>
    <span className="font-medium">Xeekrs</span>
  </NavbarBrand>
  <NavbarContent justify="center">
    <NavbarItem><Link href="/dashboard">Dashboard</Link></NavbarItem>
    <NavbarItem isActive><Link href="/referrals">Referrals</Link></NavbarItem>
    <NavbarItem><Link href="/messages">Messages</Link></NavbarItem>
  </NavbarContent>
  <NavbarContent justify="end">
    <Avatar name="Maya" size="sm" />
  </NavbarContent>
</Navbar>
```
