'use strict';

const mergewith     = require('lodash.mergewith');
const defaultConfig = require('./sweetpack');

function convert(obj) {
  const config = mergewith({}, defaultConfig, obj);

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
        flow : config.js.flow,
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
        env      : config.dev.env,
        analyzer : config.dev.analyzer,
        dashboard: config.dev.dashboard
      },
      prod: {
        env    : config.prod.env,
        url    : config.prod.url,
        extract: config.prod.extract
      }
    }
  };
}

module.exports = convert;
