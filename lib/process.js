'use strict';

const chalk               = require('chalk');
const sweetpackUtil       = require('./sweetpack/util');
const convertToSweetpack  = require('./sweetpack/convert');
const convertToWebpack    = require('./webpack/convert');
const createWebpackConfig = require('./webpack/create-config');
const runServer           = require('./webpack/server');
const build               = require('./webpack/build');

function tasks(mode) {
  if (mode === 'init') {
    sweetpackUtil.createSweetPackFile();
    return;
  }

  const config          = sweetpackUtil.prepare();
  const sweetpackConfig = convertToSweetpack(config);
  const webpackConfig   = convertToWebpack(mode, sweetpackConfig);
  const res             = createWebpackConfig(webpackConfig, sweetpackConfig);

  if (mode === 'watch') {
    runServer(res, sweetpackConfig.sweetpack.dev.dashboard);
  }

  else if (mode === 'build') {
    console.log(chalk.cyan('start to build'));

    build(res)
      .then(() => console.log('success'))
      .catch((err) => console.log(chalk.red(err)));
  }
}

module.exports = tasks;
