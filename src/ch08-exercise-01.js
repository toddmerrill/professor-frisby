require('./support-part2');
var Task = require('data.task');
var _ = require('ramda');

// Exercise 1
// ==========
// Use _.add(x,y) and _.map(f,x) to make a function that increments a value
// inside a functor.

var ex1 = _.map(_.add(1));

module.exports = ex1;