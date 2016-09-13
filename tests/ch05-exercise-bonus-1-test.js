var assert = require('chai').assert;

var availablePrices =  require('../src/ch05-exercise-bonus-1');

var CARS = require('./ch05-data');

describe('Refactor availablePrices with compose.', function () {
    it('returns a list of prices for cars that are in stock', function () {
        assert.equal(availablePrices(CARS), "$700,000.00, $1,850,000.00");
    });
});
