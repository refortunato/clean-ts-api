module.exports = {
  roots: ['<rootDir>/src'],
  // clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*-protocols.ts',
    '!**/protrocols/**'
  ],
  coverageDirectory: 'coverage',
  // coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
