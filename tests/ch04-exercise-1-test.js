var assert = require('chai').assert;

var words =  require('../src/ch04-exercise-1.js');

describe('Ch 04 exercise 1: partial application impl', function () {
    it('parse the words of a sentence - apply the argument before', function () {
        assert.deepEqual(words('the rain in spain'), ['the','rain','in','spain']);
    });
});
