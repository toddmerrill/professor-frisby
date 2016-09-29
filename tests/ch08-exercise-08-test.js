require('../src/support-part2');
var assert = require('chai').assert;

var saveUser = require('../src/ch08-exercise-08');

describe('Ch 08 exercise 8: Use ex7 and Either as a functor to save the user if they are valid or ' +
         'return the error message string', function () {
    it('', function () {
        assert.deepEqual(saveUser("Bob").unsafePerformIO(), "You need > 3");
        assert.deepEqual(saveUser("Bobby").unsafePerformIO(), "Bobby-saved");
    });
});
