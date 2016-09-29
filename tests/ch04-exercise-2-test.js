var assert = require('chai').assert;

var filterQs =  require('../src/ch04-exercise-2.js');

describe('Ch 04 exercise 2: refactor to remove arguments', function () {
    it('return the words from the array that contain a "q"', function () {
        assert.deepEqual(filterQs(['banana','frog','quizshow','quiet','pizza','quack']), ['quizshow','quiet','quack']);
    });
});
