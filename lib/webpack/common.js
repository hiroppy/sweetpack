'use strict';

const path                     = require('path');
const webpack                  = require('webpack');
const Dotenv                   = require('dotenv-webpack');
const HtmlWebpackPlugin        = require('html-webpack-plugin');
const FlowStatusWebpackPlugin  = require('flow-status-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const babelrc                  = require('../babel/babelrc');
const addCssRule               = require('./css');

function common(config) {
  const {
    js, css, html,
    dev, prod
  } = config;

  const base = {
    bail  : true,
    target: 'web',
    module: {
      rules: [
        {
          test: /\.js|jsx$/,
          use : {
            loader : 'babel-loader',
            options: babelrc(js)
          },
          exclude: path.join(process.cwd(), 'node_modules')
        },
        {
          test: /\.(png|jpg|gif|svg|woff2?)$/,
          use : ['file-loader']
        }
      ]
    },
    plugins: [
      new CaseSensitivePathsPlugin(),
      new Dotenv({
        path: path.join(process.cwd(), (
          process.env.NODE_ENV === 'production' ? prod.env : dev.env
        ) || '.env')
      }),
      new webpack.NoEmitOnErrorsPlugin()
    ]
  };

  if (html.filename && html.template) {
    base.plugins.push(new HtmlWebpackPlugin({
      filename: html.filename,
      template: html.template
    }));
  }
  else {
    base.plugins.push(new HtmlWebpackPlugin());
  }

  if (js.flow) {
    base.plugins.push(new FlowStatusWebpackPlugin({
      failOnError: true
    }));
  }

  return addCssRule(base, prod.extract, css.modules, css.postcss);
};

module.exports = common;
