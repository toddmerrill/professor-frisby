var _ = require('ramda');

// Exercise 1:
// ============
// Use _.compose() to rewrite the function below. Hint: _.prop() is curried.

// original:
// var isLastInStock = function(cars) {
//     var last_car = _.last(cars);
//     return _.prop('in_stock', last_car);
// };

// solution:
var isLastInStock = _.compose(_.prop('in_stock'), _.last);

module.exports = isLastInStock;