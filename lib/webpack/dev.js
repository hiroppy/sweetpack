const webpack = require('webpack');

const dev = {
  cache  : true,
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = dev;
