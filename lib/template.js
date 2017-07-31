'use strict';

module.exports = function (source) {
  return function (h) {

    var rows = require('./template/rows')(h, this);
    var normalFilter = require('./template/normal-filter')(h, this);
    var dropdownPagination = require('./template/dropdown-pagination')(h, this);
    var columnFilters = require('./template/column-filters')(h, this);
    var footerHeadings = require('./template/footer-headings')(h, this);
    var noResults = require('./template/no-results')(h, this);
    var pagination = require('./template/pagination')(h, this);
    var dropdownPaginationCount = require('./template/dropdown-pagination-count')(h, this);
    var headings = require('./template/headings')(h, this);
    var perPage = require('./template/per-page')(h, this);

    return h(
      'div',
      { 'class': "ui container grid VueTables VueTables--" + this.source },
      [h(
        'div',
        { 'class': 'row' },
        [h(
          'div',
          { 'class': 'eight wide column' },
          [normalFilter]
        ), h(
          'div',
          { 'class': 'eight wide column' },
          [dropdownPagination, perPage]
        )]
      ), h(
        'table',
        { 'class': 'ui table VueTables__table ' + this.opts.skin },
        [h(
          'thead',
          null,
          [h(
            'tr',
            null,
            [headings]
          ), columnFilters]
        ), footerHeadings, h(
          'tbody',
          null,
          [noResults, rows]
        )]
      ), pagination, dropdownPaginationCount]
    );
  };
};