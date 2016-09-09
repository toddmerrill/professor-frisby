var _ = require('ramda');
// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function.
var words = function(str) {
    return function() {
        return _.split(' ', str);
    };
};

module.exports = words;
