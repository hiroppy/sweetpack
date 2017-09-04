import test from 'ava';
import babelrc from '../../../lib/setting-files/babelrc';

test('snapshot', (t) => {
  t.snapshot(babelrc);
});
