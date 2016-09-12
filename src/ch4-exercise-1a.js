var _ = require('ramda');
var curry = require('lodash/curry');

// copied from book
var map = curry(function(f, ary) {
    return ary.map(f);
});

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

// words solution
var words = _.split(' ');

// exercise solution
var sentences = map(words);

module.exports = sentences;
