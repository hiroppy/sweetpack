import test from 'ava';
import sweetpack from '../../../lib/setting-files/sweetpack';

test('common', (t) => {
  t.snapshot(sweetpack);
});
