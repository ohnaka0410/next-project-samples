/**
 * Jest Configuration
 */
const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { readFileSync } = require("fs");
const { parse } = require("jsonc-parser");
const { compilerOptions } = parse(readFileSync("./tsconfig.json").toString());
const moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" });

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper,
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
};
