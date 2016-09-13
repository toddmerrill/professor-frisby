var _ = require('ramda');

// Exercise 2:
// ============
// Use _.compose(), _.prop() and _.head() to retrieve the name of the first car.

module.exports = _.compose(_.prop('name'), _.head);
