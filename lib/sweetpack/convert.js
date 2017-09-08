'use strict';

const merge         = require('lodash.merge');
const defaultConfig = require('./sweetpack');

function convert(obj) {
  const config = merge({}, defaultConfig, obj);

  return {
    webpack: {
      entry    : config.entry,
      output   : config.output,
      devServer: {
        port: config.dev.port
      }
    },
    sweetpack: {
      js: {
        react: config.js.react
      },
      css: {
        modules: config.css.modules,
        postcss: config.css.postcss
      },
      html: {
        filename: config.html.filename,
        template: config.html.template
      },
      dev: {
        dashboard: config.dev.dashboard
      }
    }
  };
}

module.exports = convert;
