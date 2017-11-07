'use strict';

const path                     = require('path');
const Dotenv                   = require('dotenv-webpack');
const HtmlWebpackPlugin        = require('html-webpack-plugin');
const BundleAnalyzerPlugin     = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
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
          test: /\.(png|jpg|jpeg|gif|svg|ttf|woff2?)$/,
          use : process.env.NODE_ENV === 'production' && prod.url ?
            'url-loader' : ['file-loader', 'image-webpack-loader']
        }
      ]
    },
    plugins: [
      new CaseSensitivePathsPlugin(),
      new Dotenv({
        path: path.join(process.cwd(), (
          process.env.NODE_ENV === 'production' ? prod.env : dev.env
        ) || '.env'),
        systemvars: true
      })
    ]
  };

  if (html.filename && html.template) {
    base.plugins.push(new HtmlWebpackPlugin({
      filename: html.filename,
      template: html.template,
      favicon : path.join(process.cwd(), 'favicon.ico')
    }));
  }
  else {
    base.plugins.push(new HtmlWebpackPlugin());
  }

  if (dev.analyzer && process.env.NODE_ENV !== 'production') {
    base.plugins.push(new BundleAnalyzerPlugin());
  }

  if (js.flow) {
    base.plugins.push(new FlowStatusWebpackPlugin({
      flowArgs   : `--from ${process.cwd()}`,
      failOnError: true
    }));
  }

  return addCssRule(base, prod.extract, css.modules, css.postcss);
};

module.exports = common;
