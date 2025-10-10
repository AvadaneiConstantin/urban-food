// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { globalIgnores } from "eslint/config";

const tsRecommendedRules = tsPlugin.configs.recommended.rules;
const reactHooksRules = reactHooks.configs["recommended-latest"].rules;
const reactRefreshRules = reactRefresh.configs.vite.rules;

export default [
  globalIgnores(["dist"]),

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        project: "./tsconfig.app.json",
      },
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tsRecommendedRules,
      ...reactHooksRules,
      ...reactRefreshRules,
    },
  },

  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: globals.browser,
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
];
