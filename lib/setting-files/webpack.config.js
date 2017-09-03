'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const babelrc = require('./babelrc');

/**
 * overwrite
 * target, entry, output,
 *
 */
const base = {
  bail  : true,
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use : {
          loader : 'babel-loader',
          options: babelrc
        },
        exclude: path.join(process.cwd(), 'node_modules')
      },
      {
        test: /\.css|scss$/,
        use : [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?)$/,
        use : [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};

const dev = {
  cache    : true,
  devtool  : 'cheap-module-eval-source-map',
  devServer: {
    hot        : true,
    port       : 8080,
    inline     : true,
    contentBase: '.'
  }
};

const prod = {
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug   : false,
      minimize: true
    }),
    new MinifyPlugin()
  ]
};

function createCommon(obj) {
  return Object.assign({}, base, obj, {
    output: {
      path: path.resolve(process.cwd(), obj.output)
    }
  });
}

function createDev(obj) {
  return merge.smart(createCommon(obj), dev);
}

function createProd(obj) {
  return merge.smart(createCommon(obj), prod);
}

module.exports = {
  createDev,
  createProd
};
