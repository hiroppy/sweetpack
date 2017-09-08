import test from 'ava';
import replacePath from '../../helper/replace-path';
import prod from '../../../lib/webpack/prod';

test('returns the default config', (t) => {
  const config = {
    output: {
      path: '/out/test'
    }
  };

  t.snapshot(replacePath(prod(config)));
});
