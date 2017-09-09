import test from 'ava';
import replacePath from '../../helper/replace-path';
import convert from '../../../lib/webpack/convert';

function takeSnapshots(t, config) {
  t.snapshot(replacePath(convert('watch', config)));
  t.snapshot(replacePath(convert('build', config)));

  process.env.NODE_ENV = 'production';
  t.snapshot(replacePath(convert('watch', config)));
  t.snapshot(replacePath(convert('build', config)));
}

test.afterEach(() => {
  process.env.NODE_ENV = undefined;
});

test('returns converted data when config is empty', (t) => {
  takeSnapshots(t, {});
});

test('returns converted data when config does not have entry', (t) => {
  const config = {
    webpack: {
      output   : 'test/dist',
      devServer: {
        port: 1234
      }
    },
    sweetpack: {
      js: {
        react: false
      }
    }
  };

  takeSnapshots(t, config);
});

test('returns converted data when the entry array is one', (t) => {
  const config = {
    webpack: {
      entry    : ['./index.js'],
      output   : 'test/dist',
      devServer: {
        port: 1234
      }
    },
    sweetpack: {
      js: {
        react: false
      }
    }
  };

  takeSnapshots(t, config);
});

test('returns converted data when the entry array is plural', (t) => {
  const config = {
    webpack: {
      entry    : ['./index.js', './a.js', './b.js'],
      output   : 'test/dist',
      devServer: {
        port: 1234
      }
    },
    sweetpack: {
      js: {
        react: false
      }
    }
  };

  takeSnapshots(t, config);
});

test('returns converted data when the entry is Object', (t) => {
  const config = {
    webpack: {
      entry: {
        a: 'a.js',
        b: 'b.js',
        c: 'c.js'
      },
      output   : 'test/dist',
      devServer: {
        port: 1234
      }
    },
    sweetpack: {
      js: {
        react: false
      }
    }
  };

  takeSnapshots(t, config);
});

test('returns converted data when the entry is Object and add dummy name to output', (t) => {
  const config = {
    webpack: {
      entry: {
        a: 'a.js',
        b: 'b.js',
        c: 'c.js'
      },
      output   : 'test/dist/dummy.js',
      devServer: {
        port: 1234
      }
    },
    sweetpack: {
      js: {
        react: false
      }
    }
  };

  takeSnapshots(t, config);
});

test('returns converted data when dist does not have .js', (t) => {
  const config = {
    webpack: {
      entry    : ['a.js'],
      output   : 'test/dist',
      devServer: {
        port: 1234
      }
    },
    sweetpack: {
      js: {
        react: false
      }
    }
  };

  takeSnapshots(t, config);
});

test('returns converted data when dist has .js', (t) => {
  const config = {
    webpack: {
      entry    : ['a.js'],
      output   : 'test/dist/bundle.js',
      devServer: {
        port: 1234
      }
    },
    sweetpack: {
      js: {
        react: false
      }
    }
  };

  takeSnapshots(t, config);
});

test('returns converted data when js.react is true and entry is Array', (t) => {
  const config = {
    webpack: {
      entry    : ['a.js'],
      output   : 'test/dist',
      devServer: {
        port: 1234
      }
    },
    sweetpack: {
      js: {
        react: true
      }
    }
  };

  takeSnapshots(t, config);
});

test('returns converted data when js.react is true and entry is Object', (t) => {
  const config = {
    webpack: {
      entry: {
        a: 'a.js',
        b: 'b.js'
      },
      output   : 'test/dist',
      devServer: {
        port: 1234
      }
    },
    sweetpack: {
      js: {
        react: true
      }
    }
  };

  takeSnapshots(t, config);
});
