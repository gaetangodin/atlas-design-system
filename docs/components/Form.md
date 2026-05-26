# Component: Form

## Description
Semantic `<form>` wrapper with a `flex flex-col gap-4` layout — the
Xeekrs default form rhythm. Wraps HeroUI's `Form`, which integrates
with React Aria for field validation.

## Exports

- `Form`

## Import

```tsx
import { Form } from "@atlas/design-system";
```

## Props

Inherits HeroUI `FormProps` (extends native `<form>`):

| Prop             | Type                                       | Default     | Description |
| ---------------- | ------------------------------------------ | ----------- | ----------- |
| `onSubmit`       | `(e: FormEvent) => void`                   | —           | Standard form submission. |
| `validationBehavior` | `"native" \| "aria"`                   | `"native"`  | React-Aria mode runs validators on every change. |
| `validationErrors` | `Record<string, string>`                  | —           | Server errors keyed by field name. |
| `action` / `method` | `string`                                 | —           | Native HTML form attributes. |

## Accessibility

- Renders a real `<form>` — submit works with Enter inside any field.
- HeroUI integrates field validation messages with `aria-describedby`
  on the corresponding input.

## Examples

```tsx
<Form onSubmit={handleSubmit}>
  <Input label="Email" type="email" name="email" isRequired />
  <Input label="Password" type="password" name="password" isRequired />
  <Button type="submit" color="primary" fullWidth>Sign in</Button>
</Form>
```

```tsx
// With server-side validation errors after submit
<Form validationErrors={{ email: "Already registered" }}>
  <Input label="Email" name="email" />
  <Button type="submit">Continue</Button>
</Form>
```

## Do's and don'ts

| ✅ Do | ❌ Don't |
| --- | --- |
| Use `name` on every field so server validation can target them. | Submit forms via button onClick — use `type="submit"` and Enter. |
| Pair with `react-hook-form` + `zod` for client validation in larger forms. | Reimplement form state with `useState` chains for a 5-field form. |
