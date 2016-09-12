var R = require('ramda');

// Bonus 2a:
// ============
// This isn't in the book.  I wanted to find an elegant solution for returning all the characters after the first n.
// // Result for "Something" with n=4 should be "thing"

var take = R.slice(R.__,Infinity);

module.exports = take;
