require('./support-part2');
var _ = require('ramda');

// Exercise 2
// ==========
// Use getFile to get the filename, remove the directory so it's just the file,
// then purely log it.

var getFile = function() {
    return new IO(function() {
        return __filename;
    });
};

var pureLog = function(x) {
    return new IO(function() {
        console.log(x);
        return 'logged ' + x;
    });
};

var ex2 = _.compose(chain(pureLog), map(_.last), map(_.split('/')), getFile);

module.exports = ex2;