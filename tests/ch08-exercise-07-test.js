require('../src/support-part2');
var assert = require('chai').assert;

var validation = require('../src/ch08-exercise-07');

describe('Ch 08 exercise 7: Write a validation function that checks for a length > 3', function () {
    it('should return Right(x) if it is greater than 3 and Left("You need > 3") otherwise', function () {
        assert.deepEqual(validation('bla'), Left.of("You need > 3"));
        assert.deepEqual(validation('bloo'), Right.of('bloo'));
    });
});
