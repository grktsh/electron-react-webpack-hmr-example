# electron-react-webpack-hmr-example

> Electron / React / React Hot Loader 3 / Webpack 2 HMR

## dependencies

```
yarn add electron react react-dom
```

## devDependencies

Webpack 2 and React Hot Loader 3:

```
yarn add --dev \
  webpack@^2.1.0-beta \
  webpack-dev-server@^2.1.0-beta \
  react-hot-loader@^3.0.0-beta
```

ESLint:

```
npm info eslint-config-airbnb peerDependencies --json \
  | jq -r 'to_entries[] | "\(.key)@\(.value)"' \
  | xargs yarn add --dev eslint-config-airbnb
```

Babel:

```
yarn add --dev \
  babel-preset-es2015 \
  babel-preset-react \
  babel-plugin-transform-class-properties \
  babel-plugin-transform-object-rest-spread
```

Install babel-eslint for ESLint to parse class properties:

```
yarn add --dev babel-eslint
```

Install babel-register for *.babel.js and `electron --require`:

```
yarn add --dev babel-register
```

Install babel-loader and its peerDependencies:

```
yarn add --dev babel-core babel-loader
```

For npm-scripts:

```
yarn add --dev cross-env npm-run-all
```
