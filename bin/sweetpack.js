#!/usr/bin/env node

'use strict';

const yargs          = require('yargs');
const { convertYml } = require('../lib/sweetpack/util');
const packageJson    = require('../package.json');

yargs
  .usage(`
    Version: ${packageJson.version}

    Default setting when not creating .sweetpack.yml

${convertYml()}
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
    desc   : 'Create .sweetpack.yml as an init file'
  })
  .help()
  .argv;

const _ = yargs.argv._;

if (_.length === 1) {
  require('../lib/process')(_[0]);
}
