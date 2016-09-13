var assert = require('chai').assert;

var take =  require('../src/ch04-exercise-bonus-2.js');

describe('a curried function "take" that returns n elements from the beginning of the string.', function () {
    it('returns the first n characters', function () {
        assert.equal(take(4,'Something'),'Some');
        assert.equal(take(4)('Something'),'Some');
        assert.deepEqual(take(2)(['W','h','a','t','e','v','a']),['W','h']);
    });
});
