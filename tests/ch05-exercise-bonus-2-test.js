var assert = require('chai').assert;

var fastestCar =  require('../src/ch05-exercise-bonus-2');

var CARS = require('./ch05-test-data');

describe('Ch 05 exercise bonus 2: Refactor to pointfree.', function () {
    it('returns the car with the highest horesepower', function () {
        assert.equal(fastestCar(CARS), "Aston Martin One-77 is the fastest");
    });
});
