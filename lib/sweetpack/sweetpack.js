'use strict';

const path = require('path');

module.exports = {
  entry : path.join('src', 'index.js'),
  output: path.join('dist', 'main.js'),
  js    : {
    flow : false,
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
    env      : null,
    port     : 8080,
    analyzer : false,
    dashboard: true
  },
  prod: {
    env    : null,
    url    : false,
    extract: false
  }
};
