// var _ = require('ramda');
var curry = require('lodash/curry');

// Bonus 1:
// ============
// Wrap array's slice to be functional and curried.
// //[1, 2, 3].slice(0, 2)
var slice =  curry(function(start,end,ary) {return ary.slice(start,end);});

module.exports = slice;
