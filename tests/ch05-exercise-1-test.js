var assert = require('chai').assert;

var isLastInStock =  require('../src/ch05-exercise-01');

var CARS = require('./ch05-test-data');

describe('Use _.compose() to rewrite function "isLastInStock"', function () {
    it('returns false', function () {
        assert(!isLastInStock(CARS), "last in stock is true");
    });
});
