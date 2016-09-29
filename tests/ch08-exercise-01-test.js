require('../src/support-part2');

var assert = require('chai').assert;

var increment =  require('../src/ch08-exercise-01');

describe('Ch 08 exercise 1: Use _.add(x,y) and _.map(f,x) to make a function that increments a ' +
    'value inside a functor.', function () {
    it('returns functor with incremented value', function () {
        assert.deepEqual(increment(Identity.of(4)), Identity.of(5));
    });
});
