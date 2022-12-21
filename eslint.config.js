/* eslint-env es6 */
/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "import",
    ],
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "double"],
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:react-hooks/recommended",
        "prettier"
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
};

module.exports = config;