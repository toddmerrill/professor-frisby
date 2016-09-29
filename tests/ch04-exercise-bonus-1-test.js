var assert = require('chai').assert;

var slice =  require('../src/ch04-exercise-bonus-1.js');

describe('Ch 04 exercise bonus 1: slice is wrapped to be both functional and curried', function () {
    it('performs a slice', function () {
        assert.deepEqual(slice(0,2,[0,1,2]),[0,1]);
        assert.equal(typeof slice(),'function')
        assert.deepEqual(slice(0)(2)([0,1,2]),[0,1]);
    });
});
