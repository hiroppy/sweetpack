import test from 'ava';
import prod from '../../../lib/webpack/prod';

test('returns the default config', (t) => {
  t.snapshot(prod);
});
