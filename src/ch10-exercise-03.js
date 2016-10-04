require('./support-part2');
var _ = require('ramda');
var Task = require('data.task');

// Exercise 3
// ==========
// Run both getPost(n) and getComments(n) then render the page with both. (The n arg is arbitrary.)

function getPost(i) {
    return new Task(function (rej, res) {
        setTimeout(function () {
            res({id: i, title: 'Love them futures'});
        }, 300);
    });
};

function getComments(i) {
    return new Task(function (rej, res) {
        setTimeout(function () {
            res(["This book should be illegal", "Monads are like space burritos"]);
        }, 300);
    });
};

var makeComments = _.reduce(function (acc, c) {
    return acc + "<li>" + c + "</li>"
}, "");

var render = _.curry(function (p, cs) {
    return "<div>" + p.title + "</div>" + makeComments(cs);
});

// ex3 :: Task Error HTML

var ex3 = Task.of(render).ap(getPost(44)).ap(getComments(33));

module.exports = ex3;
