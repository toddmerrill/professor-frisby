var _ = require('ramda');

/// Bonus 2:
// ============
// Refactor to pointfree. Hint: you can use _.flip().

// original:
// var fastestCar = function(cars) {
//     var sorted = _.sortBy(function(car) {
//         return car.horsepower;
//     }, cars);
//     var fastest = _.last(sorted);
//     return fastest.name + ' is the fastest';
// };

// solution:

// with flip: _.compose(_.flip(_.concat)(' is the fastest'),
//                      _.prop('name'),
//                      _.last,
//                      _.sortBy(_.prop('horsepower')));

// but I find the placeholder more readable:
module.exports = _.compose(_.concat(_.__, ' is the fastest'),
                           _.prop('name'),
                           _.last,
                           _.sortBy(_.prop('horsepower')));
