var assert = require('chai').assert;
var _ = require('ramda');
var postComments = require('../src/ch09-exercise-03');

describe("Use getPost() then pass the post's id to getComments()", function () {
    it('returns a list of objects with the passed value for post_id', function(done){
        postComments(44).fork(console.log, function (res) {
            assert.equal(res.length, 2);
            assert.deepEqual(res[0]['post_id'], 44);
            assert.deepEqual(res[1]['post_id'], 44);
            done();
        });
    });
});
