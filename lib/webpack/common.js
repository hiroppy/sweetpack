'use strict';

const path              = require('path');
const Dotenv            = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babelrc           = require('../babel/babelrc');

function common(config) {
  const {
    js,
    css,
    html
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
          test: /\.css|scss$/,
          use : [
            'style-loader',
            {
              loader : 'css-loader',
              options: {
                modules       : css.modules,
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
          use : ['file-loader']
        }
      ]
    },
    plugins: [
      new Dotenv()
    ]
  };

  if (css.postcss) {
    base.module.rules[1].use.push('postcss-loader');
  }

  if (html.filename && html.template) {
    base.plugins.push(new HtmlWebpackPlugin({
      filename: html.filename,
      template: html.template
    }));
  }
  else {
    base.plugins.push(new HtmlWebpackPlugin());
  }

  return base;
};

module.exports = common;
