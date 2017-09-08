'use strict';

const webpack          = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const Dashboard        = require('webpack-dashboard');
const DashboardPlugin  = require('webpack-dashboard/plugin');

function run(config, isDashbaord) {
  if (Array.isArray(config.entry)) {
    config.entry.unshift(
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/dev-server'
    );
  }
  else {
    config.entry.__wds.unshift(
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/dev-server'
    );
  }

  const compiler = webpack(config);
  const devConfig = Object.assign({
    hot        : true,
    inline     : true,
    contentBase: '.'
  }, config.devServer);

  // dashboard
  if (isDashbaord && process.env.NODE_ENV !== 'production') {
    const dashbaord = new Dashboard();

    devConfig.quiet = true;
    compiler.apply(new DashboardPlugin({ handler: dashbaord.setData }));
  }

  const server = new webpackDevServer(compiler, devConfig);

  server.listen(config.devServer.port);
}

module.exports = run;
