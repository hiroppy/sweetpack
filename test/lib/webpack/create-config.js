import test from 'ava';
import replacePath from '../../helper/replace-path';
import createConfig from '../../../lib/webpack/create-config';

test('returns the combined webpack config', (t) => {
  const webapckConfig = {
    entry : ['./test/test.js'],
    output: {
      path    : 'test/dist',
      filename: 'bundle.js'
    },
    devServer: {
      port: 1234
    }
  };
  const sweetpackConfig = {
    webpack: {
      entry    : './a/b/c.js',
      output   : 'd/e.js',
      devServer: {
        port: 9876
      }
    },
    sweetpack: {
      js: {
        react: true
      },
      css: {
        modules: true,
        postcss: true
      },
      html: {
        filename: 'abcd.js',
        template: 'abd.html'
      },
      dev: {
        dashbaord: false
      }
    }
  };

  process.env.NODE_ENV = undefined;
  t.snapshot(replacePath(createConfig(webapckConfig, sweetpackConfig)));

  process.env.NODE_ENV = 'production';
  t.snapshot(replacePath(createConfig(webapckConfig, sweetpackConfig)));
  process.env.NODE_ENV = undefined;
});
