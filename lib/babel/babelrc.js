'use strict';

const mergewith = require('lodash.mergewith');

const base = {
  presets: [
    'stage-1', ['env', {
      modules: false
    }]
  ],
  compact: false
};

const flow = {
  presets: ['flow']
};

const react = {
  presets: ['react'],
  env    : {
    development: {
      plugins: [
        'react-hot-loader/babel'
      ]
    },
    production: {
      presets: ['react-optimize']
    }
  }
};

function merge(objValue, srcValue) {
  return Array.isArray(objValue) ? objValue.concat(srcValue) : undefined;
}

function babelrc(config = {}) {
  const packages = {
    flow,
    react
  };

  const presets = mergewith(
    {}, ...Object.keys(config).map((p) => packages[p]), merge
  );

  return mergewith(Object.assign({}, base), presets, merge);
}

module.exports = babelrc;
