require('./support-part2');

var _ = require('ramda');

// Exercise 4
// ==========
// Use Maybe to rewrite ex4 without an if statement.

// original:
// var ex4 = function(n) {
//     if (n) {
//         return parseInt(n);
//     }
// };

// solution:
var ex4 = _.compose(map(parseInt), Maybe.of);

module.exports = ex4;