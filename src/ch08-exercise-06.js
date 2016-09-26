require('./support-part2');
var Task = require('data.task');
var _ = require('ramda');

// Exercise 6
// ==========
// Write a function that uses checkActive() and showWelcome() to grant access
// or return the error.

var showWelcome = _.compose(_.concat('Welcome '), _.prop('name'));

var checkActive = function(user) {
    return user.active ? Right.of(user) : Left.of('Your account is not active');
};

var ex6 = _.compose(map(showWelcome), checkActive);

module.exports = ex6;
