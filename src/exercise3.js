var _ = require('ramda');
var curry = require('lodash/curry');

// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any
// arguments.
// LEAVE BE:
var _keepHighest = function(x, y) {
    return x >= y ? x : y;
};

// REFACTOR THIS ONE:
var max = function(xs) {
    return _.reduce(function(acc, x) {
        return _keepHighest(acc, x);
    }, -Infinity, xs);
};

module.exports = max;