# Component: SettingsLayout

## Description
Two-column settings page: title + description header, left
sub-navigation, right content. Pair with
[`VerticalTabs`](./VerticalTabs.md) for the nav (recommended) or pass
any list-of-links element.

## Exports

- `SettingsLayout`

## Import

```tsx
import { SettingsLayout, VerticalTabs, VerticalTab } from "@atlas/design-system";
```

## Props

| Prop          | Type        | Default | Description |
| ------------- | ----------- | ------- | ----------- |
| `title`       | `ReactNode` | —       | Page title. |
| `description` | `ReactNode` | —       | Lead paragraph. |
| `nav`         | `ReactNode` | —       | **Required.** Left sub-nav. |
| `children`    | `ReactNode` | —       | Right content. |

## Examples

```tsx
<SettingsLayout
  title="Settings"
  description="Manage your profile, team, billing, and integrations."
  nav={
    <VerticalTabs aria-label="Settings" selectedKey={section} onSelectionChange={setSection}>
      <VerticalTab key="profile" title="Profile" />
      <VerticalTab key="notifications" title="Notifications" />
      <VerticalTab key="billing" title="Billing" />
      <VerticalTab key="team" title="Team" />
    </VerticalTabs>
  }
>
  {section === "profile" && <ProfileSettings />}
  {section === "notifications" && <NotificationSettings />}
  {/* … */}
</SettingsLayout>
```
