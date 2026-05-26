/**
 * Domain errors. Explicit, named, meaningful. Per the agent rules:
 *   "Do not throw vague errors like new Error('failed')."
 */

export class DomainError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DomainError";
  }
}

export class UnknownVariantError extends DomainError {
  constructor(component: string, variant: string, valid: readonly string[]) {
    super(`Unknown ${component} variant: "${variant}". Valid: ${valid.join(", ")}`);
    this.name = "UnknownVariantError";
  }
}

export class TokenNotFoundError extends DomainError {
  constructor(category: string, key: string) {
    super(`No token found in "${category}" for key "${key}"`);
    this.name = "TokenNotFoundError";
  }
}
