import path from 'path';

import baseConfig from './webpack.config.base';

export default {
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
