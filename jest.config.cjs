/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testMatch: ["**/src/**/*.test.ts"],
  resolver: "jest-ts-webcompat-resolver",
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/index.ts",
    "!src/loadEnvironment.ts",
    "!src/server/app.ts",
    "!**/connectToDatabase.ts",
    "!**/userRouter.ts",
    "!**/UserSchemas.ts",
    "!**/paths.ts",
    "!**/userControllers.ts",
  ],
};
