import type { Config } from "jest";

/**
 * @type {import('jest').Config}
 * Base Jest configuration for TypeScript and React projects.
 * Extends the default ts-jest preset and configures module resolution and setup.
 */
const baseConfig: Config = {
  // Use ts-jest preset for handling TypeScript files
  preset: "ts-jest",
  // Specify the test environment (simulates a browser DOM)
  testEnvironment: "jsdom",

  // Directories where Jest should look for source files and tests
  roots: ["<rootDir>/src"],

  // Setup file to run before each test suite (e.g., for extending 'expect' with jest-dom matchers)
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // Only run files ending with .test.(ts|tsx)
  testMatch: ["**/*.test.(ts|tsx)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // Configuration for file transformation before running tests
  transform: {
    // Apply ts-jest to all .ts and .tsx files
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        // IMPORTANT: Explicitly specify tsconfig for correct JSX processing
        tsconfig: "tsconfig.app.json",
        // Ignore the common ts-jest warning about esModuleInterop
        diagnostics: { ignoreCodes: [151001] },
      },
    ],
  },

  // Module aliasing and mocking
  moduleNameMapper: {
    // Align with the path alias defined in tsconfig.app.json and vite.config.ts
    "^@/(.*)$": "<rootDir>/src/$1",
    // Mock CSS/SCSS imports using identity-obj-proxy to prevent transform errors in tests
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },

  // Patterns for modules that should NOT be transformed (ignored from node_modules,
  // except for packages that require explicit transformation, like @mui if using ESM/MJS).
  transformIgnorePatterns: ["/node_modules/(?!@mui)"],

  // Display individual test results with the test file path during execution
  verbose: true,

  // Stop running tests after the first failure (optional, but good for CI)
  bail: true,
};

export default baseConfig;
