var assert = require('chai').assert;

var filterQs =  require('../src/ch4-exercise-2.js');

describe('refactor to remove arguments', function () {
    it('return the words from the array that contain a "q"', function () {
        assert.deepEqual(filterQs(['banana','frog','quizshow','quiet','pizza','quack']), ['quizshow','quiet','quack']);
    });
});
