var assert = require('chai').assert;
var startGame = require('../src/ch10-exercise-04');

describe("Write an IO that gets both player1 and player2 from the cache and starts the game", function () {
    it('returns start game message', function(){
        assert.equal(startGame.unsafePerformIO(), 'toby vs sally')
    });


});
