import test from 'ava';
import util from '../../../lib/sweetpack/util';

// test('finds .sweetpack.yml', (t) => {
//
// });

test('returns .sweetpack.yml as the string', (t) => {
  t.snapshot(util.convertYml());
});
