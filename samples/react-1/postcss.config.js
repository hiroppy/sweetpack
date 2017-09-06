const devConfig = (webpack) => {
  return {
    plugins: [
      require('postcss-reporter'),
      require('postcss-smart-import')({ addDependencyTo: webpack }),
      require('postcss-cssnext')
    ]
  };
};

const prodConfig = (webpack) => {
  return {
    plugins: [
      require('postcss-smart-import')({ addDependencyTo: webpack }),
      require('postcss-cssnext')
    ]
  };
};

module.exports = process.env.NODE_ENV !== 'production' ? devConfig : prodConfig;
