import test from 'ava';
import sweetpack from '../../../lib/sweetpack/sweetpack';

test('returns the default config', (t) => {
  t.snapshot(sweetpack);
});
