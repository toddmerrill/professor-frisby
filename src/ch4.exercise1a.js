var _ = require('ramda');
var curry = require('lodash/curry');

var map = curry(function(f, ary) {
    return ary.map(f);
});

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.
var words = function(str) {
        return _.split(' ', str);
};

var sentences = map(words);

module.exports = sentences;
