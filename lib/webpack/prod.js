'use strict';

const webpack            = require('webpack');
const MinifyPlugin       = require('babel-minify-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function prod(config) {
  return {
    plugins: [
      new CleanWebpackPlugin(config.output.path.match(/([^/]+?)?$/)[0], {
        root: process.cwd()
      }),
      new MinifyPlugin(),
      new webpack.LoaderOptionsPlugin({
        debug   : false,
        minimize: true
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin()
    ]
  };
}

module.exports = prod;
