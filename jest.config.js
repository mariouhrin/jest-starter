module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  collectCoverageFrom: ['**/*.ts', '!**/*.spec.ts', '!**/*.d.ts', '!dist', '!node_modules/**'],
  coverageReporters: ['lcov', 'text'],
  moduleFileExtensions: ['ts', 'js'],
  coverageDirectory: 'test/coverage/jest_output'
};
