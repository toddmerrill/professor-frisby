var assert = require('chai').assert;

var averageDollarValue =  require('../src/ch05-exercise-03');

var CARS = require('./ch05-data');

describe('Use the helper function _average to refactor averageDollarValue as a composition.', function () {
    it('returns 790700', function () {
        assert.equal(averageDollarValue(CARS), 790700);
    });
});
