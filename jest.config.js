// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  displayName: 'unit',

  verbose: true,
  testURL: 'http://localhost/',

  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  },

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],

  moduleFileExtensions: ['js', 'jsx', 'cssm', 'json', 'node', 'jpg'],

  testRegex: '\\.test\\.js$',
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  }
};
