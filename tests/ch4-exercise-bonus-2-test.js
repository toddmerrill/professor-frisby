var assert = require('chai').assert;

var take =  require('../src/ch4-exercise-bonus-2.js');

describe('a curried function "take" that takes n elements from the beginning of the string.', function () {
    it('takes the first n characters away', function () {
        assert.equal(take(4,'Something'),'Some');
        assert.equal(take(4)('Something'),'Some');
        assert.deepEqual(take(2)(['W','h','a','t','e','v','a']),['W','h']);
    });
});
