var assert = require('chai').assert;

var take =  require('../src/ch4-exercise-bonus-2a.js');

describe('a curried function "take" that removes n elements from the beginning of the string.', function () {
    it('returns characters after the first n characters', function () {
        assert.equal(take(4,'Something'),'thing');
        assert.equal(take(4)('Something'),'thing');
        assert.deepEqual(take(2)(['W','h','a','t','e','v','a']),['a','t','e','v','a']);
    });
});
