'use strict';

const chalk = require('chalk');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const settingFileProcess = require('./setting-file');

function tasks(mode) {
  if (mode === 'init') {
    settingFileProcess.createSweetPackFile();
    return;
  }

  const config = settingFileProcess.tasks();

  if (mode === 'watch') {

    config.entry.unshift(
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/dev-server'
    );

    // https://webpack.github.io/docs/webpack-dev-server.html
    const compiler = webpack(config);
    const server = new webpackDevServer(compiler, {
      hot        : true,
      inline     : true,
      contentBase: '.'

      // publicPath: '/dist/'
    });
    server.listen(8080);
  }

  else if (mode === 'build') {
    webpack(config, (err) => {
      if (err) {
        console.log(chalk.red(err));
      }

      console.log(chalk.cyan('start to build'));
    });
  }
}

module.exports = tasks;
