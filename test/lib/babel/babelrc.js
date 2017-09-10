import test from 'ava';
import babelrc from '../../../lib/babel/babelrc';

test('base', (t) => {
  t.snapshot(babelrc());
});

test('react', (t) => {
  t.snapshot(babelrc({
    react: true
  }));
});

test('flow', (t) => {
  t.snapshot(babelrc({
    flow: true
  }));
});

test('react + flow', (t) => {
  t.snapshot(babelrc({
    flow : true,
    react: true
  }));
});
