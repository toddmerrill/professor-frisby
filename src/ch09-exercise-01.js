require('./support-part2');
var _ = require('ramda');

// Exercise 1
// ==========
// Use safeProp and map/join or chain to safely get the street name when given
// a user.

var safeProp = _.curry(function(x, o) {
    return Maybe.of(o[x]);
});

var ex1 = _.compose(chain(safeProp('name')), chain(safeProp('street')), safeProp('address'));

module.exports = ex1;