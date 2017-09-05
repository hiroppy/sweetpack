'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const babelrc = require('./babelrc');
const sweetpack = require('./sweetpack');

/**
 * overwrite
 * target, entry, output,
 *
 */
const base = (js, css) => {
  const common = {
    bail  : true,
    target: 'web',
    module: {
      rules: [
        {
          test: /\.js|jsx$/,
          use : {
            loader : 'babel-loader',
            options: js.react ? babelrc.react : babelrc.base
          },
          exclude: path.join(process.cwd(), 'node_modules')
        },
        {
          test: /\.css|scss$/,
          use : [
            'style-loader',
            {
              loader : 'css-loader',
              options: {
                modules       : css.module,
                importLoaders : 1,
                localIdentName: process.env.NODE_ENV !== 'production' ?
                  '[path]__[name]__[local]__[hash:base64:5]' :
                  '[hash:base64:5]'
              }
            }
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

  if (css.postcss) common.module.rules[1].use.push('postcss-loader');

  return common;
};

const dev = {
  cache  : true,
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
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

function createCommon(obj = sweetpack) {
  let filename, pathname;

  // [TODO] fix
  if (obj.output) {
    const entryFile = obj.output.match(/\/(.*.js)$/);

    if (entryFile) {
      pathname = path.resolve(process.cwd(), obj.output.replace(entryFile[1], ''));
      filename = entryFile[1];
    }
    else {
      pathname = path.resolve(process.cwd(), obj.output);
    }
  }

  obj.js = obj.js || {};
  obj.css = obj.css || {};

  return Object.assign({}, base(obj.js, obj.css), {
    entry : [obj.entry],
    output: {
      path      : pathname,
      publicPath: path.join(obj.output),
      filename
    }
  });
}

function createDev(obj) {
  console.dir(createCommon(obj), { depth: 6 });
  return merge.smart(createCommon(obj), dev);
}

function createProd(obj) {
  return merge.smart(createCommon(obj), prod);
}

module.exports = {
  createDev,
  createProd
};
