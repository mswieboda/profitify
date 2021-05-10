module.exports = {
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
    "transform-inline-environment-variables",
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
