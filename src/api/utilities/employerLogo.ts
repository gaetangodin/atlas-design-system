/**
 * Deterministic placeholder employer/organization logo URL generator.
 *
 * Direct port of `Xeekrsmainapp/src/lib/employer-logo.ts`. Uses
 * DiceBear's `shapes` collection — a free, open-source, deterministic
 * geometric mark generator that works as an AI-generated stand-in for
 * fake employer logos. The seed is the employer name so the same row
 * always renders the same mark across the app.
 *
 * Background colors are restricted to brand-warm neutrals so the
 * marks read as logos, not avatars.
 */

export interface EmployerLogoOptions {
  /** Override the DiceBear background palette (comma-separated hex pairs). */
  backgroundColor?: string;
  /** Corner radius (0–50). Default 12. */
  radius?: number;
}

const DEFAULT_BG = "b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf,e0f7e7";

export function employerLogoUrl(seed: string, options: EmployerLogoOptions = {}): string {
  const params = new URLSearchParams({
    seed,
    backgroundColor: options.backgroundColor ?? DEFAULT_BG,
    backgroundType: "solid",
    radius: String(options.radius ?? 12),
  });
  return `https://api.dicebear.com/9.x/shapes/svg?${params.toString()}`;
}
