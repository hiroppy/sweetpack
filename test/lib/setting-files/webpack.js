import test from 'ava';

// import '../../_setup';
import webpack from '../../../lib/setting-files/webpack';

function replacePath(obj) {
  const str = JSON.stringify(obj);
  const re = new RegExp(process.cwd(), 'g');

  return JSON.parse(str.replace(re, 'test-tmp'));
}

test('arguments is none - dev', (t) => {
  t.snapshot(replacePath(webpack.createDev()));
});

test('arguments is none - prod', (t) => {
  process.env.NODE_ENV = 'production';
  t.snapshot(replacePath(webpack.createProd()));
  process.env.NODE_ENV = 'test';
});

test('entry is 1 file - dev', (t) => {
  t.snapshot(replacePath(webpack.createDev({
    entry: 'test/test.js'
  })));
});

test('entry is 4 files - dev', (t) => {
  t.snapshot(replacePath(webpack.createDev({
    entry: [
      'a.js',
      'b.js',
      'c.js',
      'd.js'
    ]
  })));
});

test('entry is 2 named files - dev', (t) => {
  t.snapshot(replacePath(webpack.createDev({
    entry: {
      a: 'a.js',
      b: 'test/b.js'
    }
  })));
});

test('output is "out" - dev', (t) => {
  t.snapshot(replacePath(webpack.createDev({
    output: 'out'
  })));
});

test('output is "out" - prod', (t) => {
  t.snapshot(replacePath(webpack.createProd({
    output: 'out'
  })));
});

test('output is "out/test.js" - dev', (t) => {
  t.snapshot(replacePath(webpack.createDev({
    output: 'out/test.js'
  })));
});

test('output is "out/test.js" - prod', (t) => {
  t.snapshot(replacePath(webpack.createProd({
    output: 'out/test.js'
  })));
});

test('js.react is true - dev', (t) => {
  t.snapshot(replacePath(webpack.createDev({
    js: {
      react: true
    }
  })));
});

test('js.react is true - prod', (t) => {
  t.snapshot(replacePath(webpack.createProd({
    js: {
      react: true
    }
  })));
});

test('css.modules is true - dev', (t) => {
  t.snapshot(replacePath(webpack.createDev({
    css: {
      modules: true
    }
  })));
});

test('css.modules is true - prod', (t) => {
  t.snapshot(replacePath(webpack.createProd({
    css: {
      modules: true
    }
  })));
});

test('css.postcss is true - dev', (t) => {
  t.snapshot(replacePath(webpack.createDev({
    css: {
      postcss: true
    }
  })));
});

test('css.postcss is true - prod', (t) => {
  t.snapshot(replacePath(webpack.createProd({
    css: {
      postcss: true
    }
  })));
});

test('html.filename is true - dev', (t) => {
  t.snapshot(replacePath(webpack.createDev({
    html: {
      filename: 'test.html'
    }
  })));
});

test('html.filename is true - prod', (t) => {
  t.snapshot(replacePath(webpack.createProd({
    html: {
      filename: 'test.html'
    }
  })));
});

test('html.template is true - dev', (t) => {
  t.snapshot(replacePath(webpack.createDev({
    html: {
      template: './template.ejs'
    }
  })));
});

test('html.template is true - prod', (t) => {
  t.snapshot(replacePath(webpack.createProd({
    html: {
      template: './template.ejs'
    }
  })));
});
