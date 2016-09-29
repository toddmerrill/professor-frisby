require('./support-part2');
var clog = require('../src/utils');
var Task = require('data.task');
var _ = require('ramda');

// Exercise 3
// ==========
// Use getPost() then pass the post's id to getComments().

var getPost = function(i) {
    return new Task(function (rej, res) {
        setTimeout(function () {
            res({ id: i, title: 'Love them tasks' }); // THE POST
        }, 300);
    });
};

var getComments = function(i) {
    return new Task(function (rej, res) {
        setTimeout(function () {
            res([{post_id: i, body: "This book should be illegal"}, {post_id: i, body:"Monads are like smelly shallots"}]);
        }, 300);
    });
};

var ex3 = _.compose(chain(getComments), map(_.prop('id')), getPost);

module.exports = ex3;
