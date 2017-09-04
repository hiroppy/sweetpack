import test from 'ava';
import babelrc from '../../../lib/setting-files/babelrc';

test('base', (t) => {
  t.snapshot(babelrc.base);
});

test('react', (t) => {
  t.snapshot(babelrc.react);
});
