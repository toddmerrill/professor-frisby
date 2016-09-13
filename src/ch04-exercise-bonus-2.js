var _ = require('ramda');

// Bonus 2:
// ============
// Use slice to define a function "take" that takes n elements from the beginning of the string. Make it curried.
// // Result for "Something" with n=4 should be "Some"

var take = _.slice(0);

module.exports = take;
