var assert = require('chai').assert;

var sentences =  require('../src/ch04-exercise-1a.js');

describe('Ch 04 exercise 1a: partial application impl', function () {
    it('parse the words of a sentence - apply the argument before.  Accept an array of sentences', function () {
        assert.deepEqual(sentences(['the rain in spain','falls mostly on the plain']),
                                    [['the','rain','in','spain'],['falls','mostly','on','the','plain']]);

    });
});
