import fs from 'fs';
import path from 'path';

const getBabelLoader = () => {
  const baseOptions = JSON.parse(fs.readFileSync(path.join(__dirname, '.babelrc'), 'utf-8'));
  const options = {
    ...baseOptions,
    presets: baseOptions.presets.map(preset => (
      preset === 'es2015' ? ['es2015', { modules: false }] : preset
    )),
    babelrc: false,
  };
  return {
    loader: 'babel-loader',
    options,
  };
};

export default {
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: getBabelLoader(),
      },
    ],
  },
};
