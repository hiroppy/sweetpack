'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

function create(config, extract, modules, postcss) {
  const result = Object.assign({}, config);
  const cssLoader = {
    loader : 'css-loader',
    options: {
      modules,
      importLoaders : 1,
      localIdentName: process.env.NODE_ENV !== 'production' ?
        '[path]__[name]__[local]__[hash:base64:5]' :
        '[hash:base64:5]'
    }
  };
  const cssConfig = {
    test: /\.css|scss$/
  };

  if (extract && process.env.NODE_ENV === 'production') {
    const loaders = postcss ? [cssLoader, 'postcss-loader'] : [cssLoader];

    Object.assign(cssConfig, {
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use     : loaders
      })
    });

    result.plugins.push(new ExtractTextPlugin('styles.[hash].css'));
  }
  else {
    const loaders = postcss ? [cssLoader, 'postcss-loader'] : [cssLoader];

    Object.assign(cssConfig, {
      use: [
        'style-loader',
        ...loaders
      ]
    });
  }

  result.module.rules.push(cssConfig);

  return result;
}

module.exports = create;
