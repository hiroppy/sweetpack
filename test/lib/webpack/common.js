import test from 'ava';
import replacePath from '../../helper/replace-path';
import common from '../../../lib/webpack/common';

function createbase() {
  return {
    js  : {},
    css : {},
    html: {},
    dev : {},
    prod: {}
  };
};

test('returns the config - js.flow', (t) => {
  const config = createbase();

  config.js.flow = true;
  t.snapshot(replacePath(common(config)));

  config.js.flow = false;
  t.snapshot(replacePath(common(config)));
});

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

test('returns the config - dev.env, prod.env', (t) => {
  const config = createbase();

  config.dev.env = './test.env';
  t.snapshot(replacePath(common(config)));
  process.env.NODE_ENV = 'production';
  t.snapshot(replacePath(common(config)));
  process.env.NODE_ENV = undefined;

  config.dev.env = '';
  t.snapshot(replacePath(common(config)));
  process.env.NODE_ENV = 'production';
  t.snapshot(replacePath(common(config)));
  process.env.NODE_ENV = undefined;
});

test('returns the config - prod.url', (t) => {
  const config = createbase();

  config.prod.url = true;
  t.snapshot(replacePath(common(config)));
  process.env.NODE_ENV = 'production';
  t.snapshot(replacePath(common(config)));
  process.env.NODE_ENV = undefined;

  config.prod.url = false;
  t.snapshot(replacePath(common(config)));
  process.env.NODE_ENV = 'production';
  t.snapshot(replacePath(common(config)));
  process.env.NODE_ENV = undefined;
});

test('returns the config - dev.analyzer', (t) => {
  const config = createbase();

  config.dev.analyzer = false;
  t.snapshot(replacePath(common(config)));
  process.env.NODE_ENV = 'production';
  t.snapshot(replacePath(common(config)));
  process.env.NODE_ENV = undefined;

  config.dev.analyzer = true;
  t.snapshot(replacePath(common(config)));
  process.env.NODE_ENV = 'production';
  t.snapshot(replacePath(common(config)));
  process.env.NODE_ENV = undefined;
});
