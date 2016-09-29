require('../src/support-part2');

var assert = require('chai').assert;

var safeProp = require('../src/ch08-exercise-03');

var user = {
    id: 2,
    name: 'Albert',
};

describe('Ch 08 exercise 3: Use safeProp and _.head to find the first initial of the user.', function () {
    it('returns the first initial', function () {
        assert.deepEqual(safeProp(user), Maybe.of('A'));
    });
});
