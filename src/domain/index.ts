// Domain layer — pure tokens, primitives, invariants, errors.
// No framework, no JSX, no Tailwind, no browser APIs.

export * as tokens from "./tokens";
export * as primitives from "./primitives";
export { DomainError, UnknownVariantError, TokenNotFoundError } from "./errors";
