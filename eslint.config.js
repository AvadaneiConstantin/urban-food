// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

/**
 * @type {import('eslint').Linter.Config[]}
 * Modern flat configuration for ESLint, designed for a React, TypeScript, and Vite project.
 * This configuration ensures code quality, adherence to best practices, and compatibility with Hooks/HMR.
 */
export default tseslint.config(
  // 1. Ignore files within the 'dist' directory (build output)
  globalIgnores(["dist"]),

  // --- Type-Specific Configuration (for .ts and .tsx files) ---
  {
    // Target only TypeScript and TSX files
    files: ["**/*.{ts,tsx}"],

    // Extend with recommended rulesets:
    extends: [
      // Recommended baseline rules from ESLint core
      js.configs.recommended,
      // Recommended rules for TypeScript
      ...tseslint.configs.recommended,
      // Best practices for React Hooks (ensures dependency array completeness, etc.)
      reactHooks.configs["recommended-latest"],
      // Rules specific to React Fast Refresh (used by Vite)
      reactRefresh.configs.vite,
    ],

    // Language and environment options for the parser
    languageOptions: {
      // Use ECMAScript 2020 features
      ecmaVersion: 2020,
      // Define available global variables (specifically for a browser environment)
      globals: globals.browser,
    },
  }
);
