require('./support-part2');

var _ = require('ramda');

// Exercise 3
// ==========
// Use safeProp and _.head to find the first initial of the user.

var safeProp = _.curry(function(x, o) {
    return Maybe.of(o[x]);
});

var ex3 = _.compose(map(_.head), safeProp('name'));

module.exports = ex3;