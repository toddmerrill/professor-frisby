require('../src/support-part2');
var Task = require('data.task');
var assert = require('chai').assert;

var login = require('../src/ch08-exercise-06');

var activeUser = {
    name: 'Todd Active',
    active: true
}

var inactiveUser = {
    name: 'Todd Inactive',
    active: false
}

describe('Write a function that uses checkActive() and showWelcome() to ' +
         'grant access or return the error.', function () {
    it("Returns functor with welcome message or error message", function () {
        assert.deepEqual(login(activeUser), Right.of('Welcome Todd Active'))
        assert.deepEqual(login(inactiveUser), Left.of('Your account is not active'))
    });
});
