var _ = require('ramda');

// Exercise 1
// ==========
// Write a function that adds two possibly null numbers together using Maybe and ap().

// ex1 :: Number -> Number -> Maybe Number
var ex1 = function(x, y) {
    return Maybe.of(_.add).ap(Maybe.of(x)).ap(Maybe.of(y));
};

module.exports = ex1;
