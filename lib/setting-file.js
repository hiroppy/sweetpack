'use strict';

const fs = require('fs');
const path = require('path');
const YAML = require('yamljs');
const findup = require('findup-sync');
const createWebpackConfig = require('./setting-files/webpack.config');

function search() {
  return findup('.sweetpack.yml');
}

function parse(yml) {
  return YAML.parse(yml);
}

function createSweetPackFile() {
  const config = {
    entry : path.join('.', 'src', 'index.js'),
    output: path.join('.', 'dist')
  };

  const yml = YAML.stringify(config);

  fs.writeFileSync(path.join(process.cwd(), '.sweetpack.yml'), yml);
}

function createSettings(obj) {
  const config = process.env.NODE_ENV !== 'production' ?
    createWebpackConfig.createDev(obj) :
    createWebpackConfig.createProd(obj);

  return config;
}

function tasks() {
  const settingFilePath = search();
  const context = fs.readFileSync(settingFilePath, 'utf8');
  const result = parse(context);

  return createSettings(result);
}

module.exports = {
  tasks,
  createSweetPackFile
};
