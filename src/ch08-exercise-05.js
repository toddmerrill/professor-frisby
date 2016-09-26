require('./support-part2');
var Task = require('data.task');
var _ = require('ramda');

// Exercise 5
// ==========
// Write a function that will getPost then toUpperCase the post's title.
// getPost :: Int -> Future({id: Int, title: String})

var getPost = function(i) {
    return new Task(function(rej, res) {
        setTimeout(function() {
            res({
                id: i,
                title: 'Love them futures',
            });
        }, 300);
    });
};

var ex5 = _.compose(map(_.toUpper), map(_.prop('title')), getPost);

module.exports = ex5;