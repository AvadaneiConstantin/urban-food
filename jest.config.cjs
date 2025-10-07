//  Jest configuration with TypeScript + React support
//  - Uses ts-jest preset for compiling TS in tests
//  - Test environment: jsdom (browser-like)
//  - Loads setup file: jest.setup.ts
//  - Applies tsconfig: tsconfig.app.json for test compilation
//  - Mocks CSS/SCSS imports with identity-obj-proxy (for style modules)

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      { tsconfig: "tsconfig.app.json" }, // mutat aici
    ],
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
