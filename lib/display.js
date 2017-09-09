'use strict';

const Table = require('cli-table');

function createTable(arr = []) {
  const table = new Table({
    chars: {
      top           : '', 'top-mid'     : '', 'top-left'    : '', 'top-right'   : '',
      bottom        : '', 'bottom-mid'  : '', 'bottom-left' : '', 'bottom-right': '',
      left          : '', 'left-mid'    : '', 'mid'         : '', 'mid-mid'     : '',
      right         : '', 'right-mid'   : '', 'middle'      : ' '
    },
    style: { 'padding-left': 0, 'padding-right': 0 }
  });

  table.push(...arr);

  return table.toString();
}

module.exports = {
  createTable
};
