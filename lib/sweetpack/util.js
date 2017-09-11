'use strict';

const fs     = require('fs');
const path   = require('path');
const YAML   = require('yamljs');
const findup = require('findup-sync');

function search() {
  return findup('.sweetpack.yml');
}

function parse(yml) {
  return YAML.parse(yml);
}

function convertYml() {
  const config = require('./sweetpack');

  return YAML.stringify(config);
}

function createSweetPackFile() {
  const yml = convertYml();

  fs.writeFileSync(path.join(process.cwd(), '.sweetpack.yml'), yml);
}

function prepare() {
  const settingFilePath = search();

  if (settingFilePath) {
    const context = fs.readFileSync(settingFilePath, 'utf8');
    const result  = parse(context);

    return result;
  }
  else {
    return null;
  }
}

module.exports = {
  prepare,
  convertYml,
  createSweetPackFile
};
