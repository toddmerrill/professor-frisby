var assert = require('chai').assert;

var max =  require('../src/ch4.exercise3');

describe('maximum function refactor', function () {
    it('returns the maximum int in list', function () {
        assert.equal(max([-44,0,0,18,17,12]), 18);
    });
});
