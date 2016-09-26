require('../src/support-part2');

var assert = require('chai').assert;

var returnHead = require('../src/ch08-exercise-02');

var xs = Identity.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);

describe('Use _.head to get the first element of the list.', function () {
    it('returns the first entry', function () {
        assert.deepEqual(returnHead(xs), Identity.of('do'));
    });
});
