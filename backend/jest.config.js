module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  // The glob patterns Jest uses to detect test files
  testMatch: [
      '**/__tests__/**/*.test.ts',
  ],
  // Stop running tests after `n` failures
  bail: 10,
};
