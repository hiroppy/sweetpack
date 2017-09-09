'use strict';

const path               = require('path');
const sweetpack          = require('../sweetpack/sweetpack');
const convertToSweetpack = require('../sweetpack/convert');

// from sweetpack
function convert(mode, config) {
  let filename = 'main.js', pathname, entry;

  if (!config || !Object.keys(config).length) {
    config = convertToSweetpack();
  }

  const en = config.webpack.entry;

  if (!en) {
    entry = [sweetpack.entry];
  }
  else if (Array.isArray(en)) {
    entry = [...en];
  }
  else if (typeof en === 'string') {
    entry = [en];
  }
  else if (typeof en === 'object' && process.env.NODE_ENV !== 'production') {
    entry = Object.assign({}, en, {
      __wds: [] // for webpack-dev-server
    });
  }
  else { // obj.entry is object
    entry = en;
  }

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

    if (typeof entry === 'object' && !Array.isArray(entry)) {
      filename = '[name].js';
    }
  }

  if (mode === 'watch') {
    if (process.env.NODE_ENV !== 'production') {

      // for react-hot-loader
      if (config.sweetpack.js.react) {
        entry.__wds ?
          entry.__wds.push('react-hot-loader/patch') :
          entry.unshift('react-hot-loader/patch');
      }
    }
  }
  if (mode === 'build') {
    if (process.env.NODE_ENV === 'production') {

      // attach hash to filename when prod
      filename = filename.replace(/.js$/, '.[hash].js');
    }

    // delete __wds when __wds is empty
    if (entry.__wds && !entry.__wds.length) {
      Reflect.deleteProperty(entry, '__wds');
    }
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
