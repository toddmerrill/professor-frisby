var assert = require('chai').assert;

var myGetPost = require('../src/ch08-exercise-05');

describe('Ch 08 exercise 5: Write a function that will getPost then toUpperCase the post\'s title. ' +
         'getPost :: Int -> Task({id: Int, title: String})', function () {
    it("Uppercases the 'title' field of the object", function (done) {

        // the only way to write the solution is to look at the author's test spec first, used here.
        // It was unclear from the text what he was requiring for an answer.
        myGetPost(55).fork(console.log, function(res){
            assert.deepEqual(res, 'LOVE THEM FUTURES');
            done();
        })
    });
});
