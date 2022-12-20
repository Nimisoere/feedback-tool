const nextJest = require("next/jest");
require('jest-fetch-mock').enableMocks()

const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};
module.exports = createJestConfig(customJestConfig);