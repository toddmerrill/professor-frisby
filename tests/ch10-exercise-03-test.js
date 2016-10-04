var assert = require('chai').assert;
var renderComments = require('../src/ch10-exercise-03');

describe("Run both getPost(n) and getComments(n) then render the page with both. (The n arg is arbitrary.)", function () {
    it('returns the required HTML', function(done){
        renderComments.fork(console.log, function(res) {
            assert.equal(res, '<div>Love them futures</div><li>This book should be illegal</li><li>Monads are like space burritos</li>');
            done();
        });
    });


});
