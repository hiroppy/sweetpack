'use strict';

const fs = require('fs');

function findSettingFile(file) {
  try {
    fs.statSync(file);

    return true;
  } catch (err) {
    if (err.code === 'ENOENT') {
      return false;
    }
  }
}

function checkSettingFiles(obj = {}) {
  const files = {
    flow   : '.flowconfig',
    postcss: 'postcss.config.js'
  };

  const checkedFiles = Object.keys(obj)
    .map((key) => obj[key] ? files[key] : false)
    .filter(Boolean);

  const res = checkedFiles.map((file) =>
    !findSettingFile(file) ? file : undefined);

  return res.filter(Boolean);
}

module.exports = {
  checkSettingFiles
};
