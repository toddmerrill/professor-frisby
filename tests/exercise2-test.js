var assert = require('chai').assert;

var filterQs =  require('../src/exercise2');

describe('partial application impl', function () {
    it('parse the words of a sentence - apply the argument before', function () {
        assert.deepEqual(filterQs(['banana','frog','quizshow','quiet','pizza','quack']), ['quizshow','quiet','quack']);
    });
});
