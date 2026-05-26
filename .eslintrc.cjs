/* eslint-env node */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  settings: { react: { version: "detect" } },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
  overrides: [
    {
      // domain/ may not import from any other layer.
      files: ["src/domain/**/*"],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: [
              {
                group: [
                  "@atlas/api",
                  "@atlas/api/*",
                  "@atlas/application",
                  "@atlas/application/*",
                  "@atlas/infrastructure",
                  "@atlas/infrastructure/*",
                  "@heroui/*",
                  "react",
                  "react-dom",
                ],
                message:
                  "domain/ must be framework-free. See ARCHITECTURE.md.",
              },
            ],
          },
        ],
      },
    },
    {
      // application/ may not import api/ or infrastructure directly.
      files: ["src/application/**/*"],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: [
              {
                group: [
                  "@atlas/api",
                  "@atlas/api/*",
                  "@atlas/infrastructure",
                  "@atlas/infrastructure/*",
                  "@heroui/*",
                ],
                message:
                  "application/ depends only on domain. Talk to infrastructure via ports.",
              },
            ],
          },
        ],
      },
    },
    {
      // contracts/ must not import infrastructure.
      files: ["src/contracts/**/*"],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: [
              {
                group: ["@atlas/infrastructure", "@atlas/infrastructure/*", "@heroui/*"],
                message: "contracts/ are public types — keep them implementation-free.",
              },
            ],
          },
        ],
      },
    },
  ],
};
