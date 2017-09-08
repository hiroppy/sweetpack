import test from 'ava';
import replacePath from '../../helper/replace-path';
import common from '../../../lib/webpack/common';

test('returns the config - js.react', (t) => {
  const config = {
    js: {
      react: true
    },
    css : {},
    html: {}
  };

  t.snapshot(replacePath(common(config)));

  config.js.react = false;
  t.snapshot(replacePath(common(config)));
});

test('returns the config - css.modules', (t) => {
  const config = {
    js : {},
    css: {
      modules: true
    },
    html: {}
  };

  t.snapshot(replacePath(common(config)));

  config.css.modules = false;
  t.snapshot(replacePath(common(config)));
});

test('returns the config - css.postcss', (t) => {
  const config = {
    js : {},
    css: {
      postcss: true
    },
    html: {}
  };

  t.snapshot(replacePath(common(config)));
  config.css.postcss = false;

  t.snapshot(replacePath(common(config)));
});

test('returns the config - html', (t) => {
  const config = {
    js  : {},
    css : {},
    html: {
      filename: 'test',
      template: process.cwd()
    }
  };

  t.snapshot(replacePath(common(config)));
});
