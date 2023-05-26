const _ = require('lodash');

// ref:
// https://www.digitalocean.com/community/conceptual-articles/understanding-this-bind-call-and-apply-in-javascript
console.log(this);

function greet(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
}

var object = { 'user': 'fred' };

var bound = _.bind(greet, object, 'hi');
console.log(bound('?'));    // => 'hi fred?'

// Bound with placeholders.
var bound = _.bind(greet, object, _, '!');
console.log(bound('hi'));   // => 'hi fred!'

// ref:
// https://lodash.com/docs/#bind