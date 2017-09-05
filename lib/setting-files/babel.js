'use strict';

const base = {
  presets: [
    'stage-1', ['env', {
      modules: false
    }]
  ]
};

const react = Object.assign({}, base, {
  presets: [...base.presets, 'react']
});

module.exports = {
  base,
  react
};
