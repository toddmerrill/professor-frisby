var _ = require('ramda');
var accounting = require('accounting');

// Bonus 1:
// ============
// Refactor availablePrices with compose.

// original:
// var availablePrices = function(cars) {
//     var available_cars = _.filter(_.prop('in_stock'), cars);
//     return available_cars.map(function(x) {
//         return accounting.formatMoney(x.dollar_value);
//     }).join(', ');
// };

// solution
module.exports = _.compose(_.join(', '),
                           _.map(_.compose(accounting.formatMoney, _.prop('dollar_value'))),
                           _.filter(_.prop('in_stock')));
