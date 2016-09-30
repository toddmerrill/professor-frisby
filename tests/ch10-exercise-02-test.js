var assert = require('chai').assert;
var myLiftAdder = require('../src/ch10-exercise-02');

describe("Now write a function that takes 2 Maybe's and adds them. Use liftA2 instead of ap()", function () {
    it('Adds two numbers', function(){
        assert.deepEqual(myLiftAdder(Maybe.of(5), Maybe.of(8)), Maybe.of(13));
        assert.deepEqual(myLiftAdder(Maybe.of(4), Maybe.of(null)), Maybe.of(null));
    });
});
