require('./support-part2');
var _ = require('ramda');
var Task = require('data.task');

// Exercise 4
// ==========
// Write an IO that gets both player1 and player2 from the cache and starts the game.

var localStorage = {};
localStorage.player1 = "toby";
localStorage.player2 = "sally";

var getCache = function(x) {
    return new IO(function() { return localStorage[x]; });
};

var game = _.curry(function(p1, p2) { return p1 + ' vs ' + p2; });

// ex4 :: IO String
var ex4 = liftA2(game, getCache('player1'), getCache('player2'));

module.exports = ex4;
