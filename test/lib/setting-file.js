import test from 'ava';
import * as settingFile from '../../lib/setting-file';

test('convertYml()', (t) => {
  t.snapshot(settingFile.convertYml());
});

// should use rewire
// test('createSettings() - dev', (t) => {
//   t.snapshot(settingFile.createSettings({}));
// });
//
// test('createSettings() - prod', (t) => {
//   process.env.NODE_ENV = 'production';
//   t.snapshot(settingFile.createSettings({}));
//   process.env.NODE_ENV = 'test';
// });
