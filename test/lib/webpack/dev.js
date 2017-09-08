import test from 'ava';
import dev from '../../../lib/webpack/dev';

test('returns the default config', (t) => {
  t.snapshot(dev());
});
