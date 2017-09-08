'use strict';

const webpack      = require('webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');

const prod = {
  plugins: [
    new MinifyPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug   : false,
      minimize: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};

module.exports = prod;
