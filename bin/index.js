#!/usr/bin/env node

'use strict';

const path = require('path');
const packageJson = require('../package.json');

require('yargs')
  .usage(`
    Default setting when not creating .sweetpack.yml

    entry : ${path.join('.', 'src', 'index.js')}
    output: ${path.join('.', 'dist')}
  `)
  .command({
    command: 'watch',
    desc   : 'Watch mode'

    // builder: (yargs) => yargs.default('value', 'true'),
    // handler: (argv) => {
    //   console.log(`setting ${argv.key} to ${argv.value}`)
    // }
  })
  .command({
    command: 'build',
    desc   : 'Build mode'
  })
  .options({
    init: {
      alias       : 'i',
      describe    : 'Create an init file',
      demandOption: false
    },
    'display-config': {
      describe: 'Show webpack-config.js'
    }
  })

  // provide a minimum demand and a minimum demand message
  // .demandCommand(1, 'You need at least one command before moving on')
  .help()
  .argv;

const _ = require('yargs').argv._;

if (_.length === 1) {
  require('../lib/process')(_[0]);
}
