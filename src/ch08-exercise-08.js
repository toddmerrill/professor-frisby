require('./support-part2');
var _ = require('ramda');
var checkSize = require('./ch08-exercise-07')

// Exercise 8
// ==========
// Use ex7 above and Either as a functor to save the user if they are valid or
// return the error message string. Remember either's two arguments must return
// the same type.

var save = function(x) {
    return new IO(function() {
        console.log('SAVED USER!');
        return x + '-saved';
    });
};

var ex8 = _.compose(either(IO.of, save), checkSize);

module.exports = ex8;