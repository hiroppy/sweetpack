'use strict';

const webpack = require('webpack');

function build(config) {
  return new Promise((resolve, reject) => {
    webpack(config, (err, res) => {
      if (err) {
        reject(err);
      }

      resolve(res);
    });
  });
}

module.exports = build;
