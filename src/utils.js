var _ = require('ramda');

// for debugging composition chain.  Pass in a string prefix or a function to manipulate
// the argument to the desired string.
var clog = function(f,x) {
    console.log(typeof f === "function" ? f(x) : f + " " + x);
    return x;
}

module.exports = _.curry(clog);