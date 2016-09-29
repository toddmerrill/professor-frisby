var assert = require('chai').assert;

var nameOfFirstCar =  require('../src/ch05-exercise-02');

var CARS = require('./ch05-test-data');

describe('Ch 05 exercise 2: Use _.compose(), _.prop() and _.head() to retrieve the name of the first car.', function () {
    it('returns "Ferrari FF"', function () {
        assert.equal(nameOfFirstCar(CARS), "Ferrari FF");
    });
});
