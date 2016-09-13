var _ = require('ramda');

// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition.

var _average = function(xs) {
    return _.reduce(_.add, 0, xs) / xs.length;
}; // <- leave be

// original:
// var averageDollarValue = function(cars) {
//     var dollar_values = _.map(function(c) {
//         return c.dollar_value;
//     }, cars);
//     return _average(dollar_values);
// };

// solution:
var averageDollarValue = _.compose(_average, _.map(_.prop('dollar_value')));

module.exports = averageDollarValue;
