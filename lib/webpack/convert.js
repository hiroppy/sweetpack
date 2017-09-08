'use strict';

const path = require('path');
const cconvert = require('../sweetpack/convert');
const sweetpack = require('../sweetpack/sweetpack');

// from sweetpack
function convert(config = cconvert()) {
  let filename, pathname, entry;

  const output = config.webpack.output;

  if (output) {
    const entryFile = output.match(/\/(.*.js)$/);

    if (entryFile) {
      filename = entryFile[1];
      pathname = path.resolve(process.cwd(), output.replace(filename, ''));
    }
    else {
      pathname = path.resolve(process.cwd(), output);
    }
  }

  if (!config.webpack.entry) {
    entry = [sweetpack.entry];
  }
  else if (Array.isArray(config.webpack.entry)) {
    entry = [...config.webpack.entry];
  }
  else if (typeof config.webpack.entry === 'string') {
    entry = [config.webpack.entry];
  }
  else if (
    typeof config.webpack.entry === 'object' &&
      process.env.NODE_ENV !== 'production'
  ) {
    entry = Object.assign({}, config.webpack.entry, {
      __wds: [] // for webpack-dev-server
    });
  }
  else { // obj.entry is object
    entry = config.webpack.entry;
  }

  if (!filename) filename = 'main.js';

  // for react-hot-loader
  if (config.sweetpack.js.react && process.env.NODE_ENV !== 'production') {
    entry.__wds ?
      entry.__wds.push('react-hot-loader/patch') :
      entry.unshift('react-hot-loader/patch');
  }

  // attach hash to filename when prod
  if (process.env.NODE_ENV === 'production') {
    filename = filename.replace(/.js$/, '.[hash].js');
  }

  // delete __wds when __wds is empty
  if (entry.__wds && entry.__wds.length === 0) {
    Reflect.deleteProperty(entry, '__wds');
  }

  return {
    entry,
    output: {
      path: pathname,
      filename
    },
    devServer: {
      port: config.webpack.devServer.port
    }
  };
}

module.exports = convert;
