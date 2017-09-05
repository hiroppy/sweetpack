'use strict';

const path = require('path');

module.exports = {
  entry : path.join('.', 'src', 'index.js'),
  output: path.join('.', 'dist'),
  js    : {
    react: false
  },
  css: {
    module : false,
    postcss: false
  }
};
