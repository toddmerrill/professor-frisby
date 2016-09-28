require('../src/support-part2');
var assert = require('chai').assert;

var logFileName = require('../src/ch09-exercise-02');

describe("Use getFile to get the filename, remove the directory so it's just the file, " +
         "then purely log it", function () {
    it('returns the file name', function () {
        assert.equal(logFileName().unsafePerformIO(), 'logged ch09-exercise-02.js');
    });
});
