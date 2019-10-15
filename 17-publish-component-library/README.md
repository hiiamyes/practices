# Publish Component Library

## Base Depenencies

```sh
yarn add --dev \
    rollup \
    rollup-plugin-babel \
    rollup-plugin-node-resolve \
    rollup-plugin-commonjs \
    @babel/core \
    @babel/preset-env \
    @babel/preset-react

yarn add --peer \
    react \
    styled-components
```

## Bundle

```sh
yarn bundle
```

By [Rollup](https://github.com/rollup/rollup)

- -c, --config <filename> Use this config file (if argument is used but value
  is unspecified, defaults to rollup.config.js)
- -f, --format <format>: Type of output (amd, cjs, esm, iife, umd)
  - use esm for frontend component library

Plugins:

- [rollup-plugin-node-resolve](https://github.com/rollup/rollup-plugin-node-resolve): Use the Node.js resolution algorithm with Rollup (formerly rollup-plugin-npm)
- [rollup-plugin-commonjs](https://github.com/rollup/rollup-plugin-commonjs): Convert CommonJS modules to ES2015
- [rollup-plugin-babel]():

## Publish

```sh
yarn publish
```

## Usage

```sh
yarn add react styled-components 17-publish-component-library
```

```js
import { Spinner } from "17-publish-component-library";

<Spinner />;
```

[Demo](https://codesandbox.io/embed/practice-17-publish-component-library-2p8tj)
