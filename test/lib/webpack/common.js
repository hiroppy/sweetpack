import test from 'ava';
import replacePath from '../../helper/replace-path';
import common from '../../../lib/webpack/common';

function createbase() {
  return {
    js  : {},
    css : {},
    html: {},
    prod: {}
  };
};

test('returns the config - js.react', (t) => {
  const config = createbase();

  config.js.react = true;
  t.snapshot(replacePath(common(config)));

  config.js.react = false;
  t.snapshot(replacePath(common(config)));
});

test('returns the config - css.modules', (t) => {
  const config = createbase();

  config.css.modules = true;
  t.snapshot(replacePath(common(config)));

  config.css.modules = false;
  t.snapshot(replacePath(common(config)));
});

test('returns the config - css.postcss', (t) => {
  const config = createbase();

  config.css.postcss = true;
  t.snapshot(replacePath(common(config)));

  config.css.postcss = false;
  t.snapshot(replacePath(common(config)));
});

test('returns the config - html', (t) => {
  const config = createbase();

  config.html = {
    filename: 'test', template: process.cwd()
  };

  t.snapshot(replacePath(common(config)));
});

test('returns the config - prod.extract', (t) => {
  const config = createbase();

  config.prod.extract = true;
  t.snapshot(replacePath(common(config)));

  config.prod.extract = false;
  t.snapshot(replacePath(common(config)));
});

test('returns the config when prod - css.postcss, prod.extract', (t) => {
  const config = createbase();

  process.env.NODE_ENV = 'production';

  config.css.postcss = true;
  config.prod.extract = true;
  t.snapshot(replacePath(common(config)));

  config.css.postcss = false;
  config.prod.extract = false;
  t.snapshot(replacePath(common(config)));

  process.env.NODE_ENV = undefined;
});
