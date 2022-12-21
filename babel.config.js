/* eslint-env es6 */
/**
 * @type {import('@babel/core').TransformOptions}
 */
const config = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-react",
    "@babel/preset-flow",
    "@babel/preset-typescript",
  ],
};

module.exports = config;
