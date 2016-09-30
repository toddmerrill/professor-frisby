require('../src/support-part2');
var assert = require('chai').assert;
var myAdder = require('../src/ch10-exercise-01');

describe("Write a function that adds two possibly null numbers together using Maybe and ap()", function () {
    it('Adds two numbers', function(){
        assert.deepEqual(myAdder(4, 7), Maybe.of(11));
        assert.deepEqual(myAdder(4, null), Maybe.of(null));
        assert.deepEqual(myAdder(4, 'bla'), Maybe.of(NaN));
    });
});
