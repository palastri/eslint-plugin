# eslint-plugin

[![Build Status](https://github.com/palastri/eslint-plugin/workflows/Release/badge.svg?branch=main)](https://github.com/palastri/eslint-plugin/actions/workflows/production.yml)

## Installation

```bash
yarn add --dev eslint @palastri/eslint-plugin
```

## Usage

Add `@palastri` to the plugins section of your `.eslintrc` configuration file.

```json
{
  "extends": ["@palastri/recommended"],
  "plugins": ["@palastri"]
}
```

## Shareable configurations

### Recommended

This plugin exports a recommended configuration that enforces good testing practices.
To enable this configuration, please use the `extends` property in the `.eslintrc` config file:

```json
{
  "extends": ["plugin:@palastri/recommended"]
}
```

### Stylistic

This plugin also exports a configuration named `stylistic`, which adds some extra stylistic rules. The rules considered to be best practice for modern TypeScript codebase, but that do not impact program logic.
To enable this configuration, please use the `extends` property in the `.eslintrc` config file:

```json
{
  "extends": ["plugin:@palastri/recommended", "plugin:@palastri/stylistic"]
}
```

## Recommended plugin ruleset

This plugin includes the following plugins:

- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-plugin-eslint-plugin](https://github.com/eslint-community/eslint-plugin-eslint-plugin)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [eslint-plugin](https://github.com/jsx-eslint/eslint-plugin)

One or more default rules from those plugins are overridden such as:

| Name                                 | Description                                                       | Rules                                                                                    |
| :----------------------------------- | :---------------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| `@typescript-eslint/array-type`      | Require consistently using either `T[]` or `Array<T>` for arrays. | `["error", { default: "array-simple" }]`                                                 |
| `@typescript-eslint/member-ordering` | Require a consistent member declaration order.                    | `["error", { default: { optionallyOrder: "required-first", order: "alphabetically" } }]` |                                                                                |

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md)
