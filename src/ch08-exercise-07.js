require('./support-part2');
var _ = require('ramda');

// Exercise 7
// ==========
// Write a validation function that checks for a length > 3. It should return
// Right(x) if it is greater than 3 and Left("You need > 3") otherwise.

var ex7 = function(x) {
    return x.length > 3 ? Right.of(x) : Left.of("You need > 3");
};

module.exports = ex7;
