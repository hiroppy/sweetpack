import test from 'ava';
import '../../_setup';
import webpack from '../../../lib/setting-files/webpack.config';


test('dev when arguments is none', (t) => {
  t.snapshot(webpack.createDev());
});

test('prod when arguments is none', (t) => {
  t.snapshot(webpack.createDev());
});
