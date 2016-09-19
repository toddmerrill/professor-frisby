var assert = require('chai').assert;

var sanitizeNames =  require('../src/ch05-exercise-04');

var CARS = require('./ch05-test-data');

describe('Ch 5 exercise 4: Write a function: sanitizeNames()', function () {
    it('returns a list of lowercase car names with underscores as separators', function () {
        assert.deepEqual(sanitizeNames(CARS), [
            "ferrari_ff",
            "spyker_c12_zagato",
            "jaguar_xkr_s",
            "audi_r8",
            "aston_martin_one_77",
            "pagani_huayra"
        ]);
    });
});
