'use strict';

const webpack = require('webpack');

function build(config) {
  return new Promise((resolve, reject) => {
    webpack(config, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}

module.exports = build;
