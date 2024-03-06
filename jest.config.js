module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    ".(css|less|scss|jpg|jpeg|png|gif|webp|svg)$": "identity-obj-proxy",
  },
};
