const path = require('path');

const baseConfig = require('./webpack.config.base');

module.exports = {
  ...baseConfig,
  entry: {
    main: path.join(__dirname, 'src/main'),
  },
  target: 'electron',
  node: {
    __dirname: false,
    __filename: false,
  },
};
