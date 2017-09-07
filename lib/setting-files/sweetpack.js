'use strict';

const path = require('path');

module.exports = {
  entry : path.join('src', 'index.js'),
  output: path.join('dist', 'main.js'),
  js    : {
    react: false
  },
  css: {
    modules: false,
    postcss: false
  },
  html: {
    filename: null,
    template: null
  },
  dev: {
    dashboard: true
  }
};
