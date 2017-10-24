import webpack from 'webpack';
import {webpackConfig} from '../webpack.config';

export function scripts() {
  return new Promise(resolve =>
    webpack(webpackConfig, (error, stats) => {
      if (error) {
        console.log('Webpack', error); // eslint-disable-line no-console
      }

      console.log(stats.toString({colors: true})); // eslint-disable-line no-console

      resolve();
    })
  );
}
