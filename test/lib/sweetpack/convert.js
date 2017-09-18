import test from 'ava';
import convert from '../../../lib/sweetpack/convert';

test('returns by default when obj is empty object', (t) => {
  t.snapshot(convert({}));
});

test('returns the combined object when obj is setted', (t) => {
  const obj = {
    entry : 'test',
    output: 'test',
    js    : {
      flow : true,
      react: true
    },
    css: {
      modules: true,
      postcss: true
    },
    html: {
      filename: 'test-',
      tempalte: 'test--'
    },
    dev: {
      env      : '.env.dev',
      port     : 1234,
      dashboard: false // because the default is true
    },
    prod: {
      env    : './.env.prod',
      url    : true,
      extract: true
    }
  };

  t.snapshot(convert(obj));
});
