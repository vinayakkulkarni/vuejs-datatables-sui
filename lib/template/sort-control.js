'use strict';

module.exports = function (h, that) {
  return function (column) {

    if (!that.sortable(column)) return '';
    return h(
      'i',
      { 'class': 'VueTables__sort-icon ui icon ' + that.sortableChevronClass(column) },
      []
    );
  }.bind(that);
};