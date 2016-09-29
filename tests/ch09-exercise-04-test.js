var assert = require('chai').assert;
var _ = require('ramda');
var sendMail = require('../src/ch09-exercise-04');

describe("Ch 09 exercise 4: Use validateEmail, addToMailingList, and emailBlast to implement " +
    "ex4's type signature", function () {
    it('Returns an Either with (Left) an invalid string, or (Right) an IO functor returning correct message', function(){
        var getIt = either(_.identity, unsafePerformIO);
        assert.equal(getIt(sendMail('bla@bla.com')), 'emailed: bla@bla.com');
        assert.equal(getIt(sendMail('bla')), 'invalid email');
    });
});
