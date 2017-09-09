'use strict';

const webpack = require('webpack');

function dev() {
  return {
    cache  : true,
    devtool: 'cheap-module-eval-source-map',
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  };
}

module.exports = dev;
