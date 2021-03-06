"use strict";

module.exports = function (value, column, h) {

  if (!this.opts.highlightMatches) return value;

  var query = this.opts.filterByColumn ? this.query[column] : this.query;

  if (!query) return value;

  query = new RegExp("(" + query + ")", "i");

  return h("span", { class: 'VueTables__highlight' }, matches(value, query, h));
};

function matches(value, query, h) {
  var pieces = String(value).split(query);

  return pieces.map(function (piece) {
    if (query.test(piece)) {
      return h("b", {}, piece);
    }

    return piece;
  });
}