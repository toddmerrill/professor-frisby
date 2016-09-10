var assert = require('chai').assert;

var sentences =  require('../src/exercise1a');

describe('partial application impl', function () {
    it('parse the words of a sentence - apply the argument before', function () {
        assert.deepEqual(sentences(['the rain in spain','falls mostly on the plain']),
                                    [['the','rain','in','spain'],['falls','mostly','on','the','plain']]);

    });
});
