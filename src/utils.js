var _ = require('ramda');

// for debugging composition chain.  Pass in a string prefix or a function to manipulate
// the argument to the desired string.
var clog = _.curry(function(f,x) {
    console.log(typeof f === "function" ? f(x) : f + " " + x);
    return x;
});

// stringify and log
var logStringify = function(tag) {
    return clog(function (x) {
        return `${tag} ${JSON.stringify(x)}`;
    });
}

// log just the object without prefix
var logObject = clog(function(x) {return x;});

module.exports = clog;