//  ESLint configuration for TypeScript + React project
//  - Ignores build output: dist
//  - Applies recommended rules from: ESLint core, TypeScript, React Hooks, React Refresh
//  - Targets files: *.ts, *.tsx
//  - Sets language options: ECMAScript 2020, browser globals
//  - Designed for Vite + React + TypeScript environment

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
]);
