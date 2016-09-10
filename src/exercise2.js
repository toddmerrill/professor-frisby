var _ = require('ramda');
var curry = require('lodash/curry');

var match = curry(function(what, str) {
    return str.match(what);
});

// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions.

var filterQs = function(xs) {
    return _.filter(function(x) {
        return match(/q/i, x);
    }, xs);
};

module.exports = filterQs;