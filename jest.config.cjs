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
    "!src/database/connectToDatabase.ts",
    "!src/server/routers/user/userRouter.ts",
    "!src/server/schemas/UserSchemas.ts",
    "!src/server/utils/paths/paths.ts",
  ],
};
