const path = require('path');
const webpack = require('webpack');

const baseConfig = require('./webpack.config.base');

module.exports = {
  ...baseConfig,
  entry: {
    renderer: [
      'react-hot-loader/patch',
      path.join(__dirname, process.env.NODE_ENV === 'production' ? 'src/renderer' : 'src/renderer/index.dev'),
    ],
  },
  devServer: {
    contentBase: baseConfig.output.path,
    publicPath: baseConfig.output.publicPath,
    historyApiFallback: true,
    hotOnly: true,
  },
  plugins: process.env.NODE_ENV === 'production' ? [] : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  target: 'electron-renderer',
};
