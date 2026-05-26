import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: false,
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    coverage: {
      reporter: ["text", "lcov", "html"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["src/**/*.test.{ts,tsx}", "src/**/index.ts"],
    },
  },
  resolve: {
    alias: {
      "@atlas/domain": "/src/domain",
      "@atlas/application": "/src/application",
      "@atlas/infrastructure": "/src/infrastructure",
      "@atlas/api": "/src/api",
      "@atlas/contracts": "/src/contracts",
      "@atlas/shared": "/src/shared",
    },
  },
});
