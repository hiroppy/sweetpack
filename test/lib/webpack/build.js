import test from 'ava';
import build from '../../../lib/webpack/build';

test('fails when the config is empty', async(t) => {
  await build({})
    .then(() => t.fail())
    .catch(() => t.pass());
});

// test('successes when the config is correct', async (t) => {
//
//   // [TODO] create tmp
//   const config = {
//
//   };
// });
