'use strict';

const _merge = require('lodash.mergewith');
const merge  = require('webpack-merge');
const common = require('./common');
const dev    = require('./dev');
const prod   = require('./prod');

function createConfig(webpackConfig, sweetpackConfig) {
  const config = _merge({}, common(sweetpackConfig.sweetpack), webpackConfig);

  if (process.env.NODE_ENV === 'production') {
    return merge.smart(config, prod(config));
  }
  else {
    return merge.smart(config, dev());
  }
}

module.exports = createConfig;
