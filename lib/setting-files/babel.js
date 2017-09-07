'use strict';

const base = {
  presets: [
    'stage-1', ['env', {
      modules: false
    }]
  ],
  compact: false
};

const react = Object.assign({}, base, {
  presets: [...base.presets, 'react'],
  env    : {
    development: {
      plugins: [
        'react-hot-loader/babel'
      ]
    }
  }
});

module.exports = {
  base,
  react
};
