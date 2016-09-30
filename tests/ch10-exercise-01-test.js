var assert = require('chai').assert;
var _ = require('ramda');
var myAdder = require('../src/ch10-exercise-01');

describe("Write a function that adds two possibly null numbers together using Maybe and ap()", function () {
    it('Adds 4 and 7', function(){
        assert.deepEqual(myAdder(4, 7), Maybe.of(11));
        assert.deepEqual(myAdder(4, null), Maybe.of(null));
        assert.deepEqual(myAdder(4, 'bla'), Maybe.of(NaN));
    });
});
