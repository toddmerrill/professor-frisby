require('./support-part2');
var _ = require('ramda');

// Exercise 4
// ==========
// Use validateEmail, addToMailingList, and emailBlast to implement ex4's type
// signature.

// addToMailingList :: Email -> IO([Email])
var addToMailingList = (function(list) {
    return function(email) {
        return new IO(function() {
            list.push(email);
            return list;
        });
    };
})([]);

function emailBlast(list) {
    return new IO(function() {
        return 'emailed: ' + list.join(',');
    });
}

var validateEmail = function(x) {
    return x.match(/\S+@\S+\.\S+/) ? (new Right(x)) : (new Left('invalid email'));
};

// ex4 :: Email -> Either String (IO String)
var ex4 = _.compose(map(emailBlast), map(addToMailingList), validateEmail);

module.exports = ex4;
