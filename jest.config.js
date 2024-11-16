export default {
  testPathIgnorePatterns: ['/node_modules/', '/.internal/'], // Exclude .internal from testing
  coveragePathIgnorePatterns: ['/node_modules/', '/.internal/'], // Exclude .internal from coverage
  transform: {
    '^.+\\.js$': 'babel-jest', // Use Babel for ES6+ syntax
  },
  collectCoverage: true, // Enable coverage collection
  coverageDirectory: 'coverage', // Directory for coverage reports
  coverageReporters: ['text', 'lcov'], // Coverage formats
  testEnvironment: 'node', // Environment for testing
};
