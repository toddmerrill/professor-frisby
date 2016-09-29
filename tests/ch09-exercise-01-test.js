require('../src/support-part2');
var assert = require('chai').assert;

var getStreet = require('../src/ch09-exercise-01');

var user = {
    id: 2,
    name: 'albert',
    address: {
        street: {
            number: 22,
            name: 'Walnut St',
        },
    },
};

describe('Ch 09 exercise 1: Use safeProp and map/join or chain to safely get the street name when given a user', function () {
    it('returns the street name', function () {
        assert.deepEqual(getStreet(user), Maybe.of('Walnut St'));
    });
});
