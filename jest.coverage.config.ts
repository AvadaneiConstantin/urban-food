import type { Config } from "jest";
import baseConfig from "./jest.base.config"; // Import the standardized base configuration

/**
 * @type {import('jest').Config}
 * Jest configuration dedicated to calculating and reporting code coverage.
 * It merges with the 'baseConfig' and adds coverage-specific options.
 */
const coverageConfig: Config = {
  // Spread all settings from the base configuration (roots, setupFiles, transform, etc.)
  ...baseConfig,

  // --- Coverage-Specific Settings ---

  // Enables the collection of test coverage during test execution.
  collectCoverage: true,

  // Specifies the array of file patterns that Jest should include in coverage reporting.
  collectCoverageFrom: [
    // Include all TypeScript and TSX files in the 'src' directory
    "src/**/*.{ts,tsx}",
    // Standard exclusions for coverage:
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/__tests__/**",
    // Exclude the main application entry file (often just bootstrapping)
    "!src/main.tsx",
    // You might also want to exclude config or setup files, e.g.,
    // "!src/setupTests.ts",
  ],

  // The output directory where Jest will place all coverage reports.
  coverageDirectory: "<rootDir>/coverage",

  // Defines the formats for the generated coverage reports.
  coverageReporters: ["text", "lcov", "json", "html"],
};

export default coverageConfig;
