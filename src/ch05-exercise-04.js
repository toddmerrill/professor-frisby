var _ = require('ramda');

/// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that returns a list of lowercase and
// underscored car's names: e.g:
// sanitizeNames([{name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true}]) //=> ['ferrari_ff'].

var _underscore = _.replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize

// solution:
module.exports = _.map(_.compose(_.toLower, _underscore, _.prop('name')));
