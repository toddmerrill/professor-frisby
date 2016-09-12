var _ = require('ramda');

// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any
// arguments.
// LEAVE BE:
var _keepHighest = function(x, y) {
    return x >= y ? x : y;
};

// REFACTOR THIS ONE:
var max = _.reduce(_keepHighest, -Infinity);

module.exports = max;
