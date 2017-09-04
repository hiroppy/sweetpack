#!/usr/bin/env node

'use strict';

const path = require('path');
const yargs = require('yargs');
const packageJson = require('../package.json');

yargs
  .usage(`
    Version: ${packageJson.version}

    Default setting when not creating .sweetpack.yml

    entry : ${path.join('.', 'src', 'index.js')}
    output: ${path.join('.', 'dist')}
  `)
  .command({
    command: 'watch',
    desc   : 'Watch mode'
  })
  .command({
    command: 'build',
    desc   : 'Build mode'
  })
  .command({
    command: 'init',
    desc   : 'Create .sweetpack.yml as init file'
  })
  .options({
    'display-config': {
      describe: 'Show webpack-config.js'
    }
  })
  .help()
  .argv;

const _ = yargs.argv._;

if (_.length === 1) require('../lib/process')(_[0]);
