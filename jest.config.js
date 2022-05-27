module.exports = {
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98,
    },
  },
  testEnvironment: "jest-environment-jsdom",
  roots: ["<rootDir>/src"],
  moduleDirectories: ["node_modules", "app"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/index.tsx",
    "!src/App.tsx",
  ],
  moduleNameMapper: {
    ".*\\.(css|less|styl|scss|sass)$": "identity-obj-proxy",
    ".*\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/config/mocks/fileMock.js",
    "\\.svg": "<rootDir>/config/mocks/svgrMock.tsx",
  },
};
