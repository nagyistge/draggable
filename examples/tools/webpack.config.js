import path from 'path';
import initPlugins from './webpack.plugins';

const distPath = path.resolve(__dirname, '../dist'); // eslint-disable-line no-undef
const assetsPath = '/assets/js/';
const srcApp = 'src/scripts/app.js';
const vendorScripts = ['core-js/es6/object', 'core-js/es6/map'];

export const webpackConfig = {
  context: distPath,
  devtool: 'source-map',
  entry: {
    vendor: vendorScripts,
    app: `../${srcApp}`,
  },
  output: {
    path: distPath + assetsPath,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: initPlugins(),
};
