require('../src/support-part2');

var assert = require('chai').assert;

var myParseInt = require('../src/ch08-exercise-04');

describe('Use Maybe to rewrite ex4 without an if statement.', function () {
    it('coverts string to int', function () {
        assert.deepEqual(myParseInt(), Maybe.of(null));
        assert.deepEqual(myParseInt('354'), Maybe.of(354));
    });
});
