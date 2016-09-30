require('./support-part2');
var _ = require('ramda');

// Exercise 2
// ==========
// Now write a function that takes 2 Maybe's and adds them. Use liftA2 instead of ap().

// ex2 :: Maybe Number -> Maybe Number -> Maybe Number
var ex2 = liftA2(_.add);

module.exports = ex2;
