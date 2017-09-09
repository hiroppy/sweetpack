'use strict';

const path              = require('path');
const Dotenv            = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babelrc           = require('../babel/babelrc');
const addCssRule        = require('./css');

function common(config) {
  const {
    js,
    css,
    html,
    prod
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
            options: js.react ? babelrc.react : babelrc.base
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
      new Dotenv()
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

  return addCssRule(base, prod.extract, css.modules, css.postcss);
};

module.exports = common;
