// ref: https://youtu.be/GhbhD1HR5vk?list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub
// there's no right way to create an object in js

// create an object
let dog = {
    sound: 'woof',
    talk: function () {
        console.log(this.sound);
    }
}

dog.talk(); // woof

let talkFunction = dog.talk;
talkFunction() // undefined, coz this is no longer bound to the 'dog' object
// this keyword does not refer to the context where it was defined
// it refers to the context where the function is being called
// here the talkFunction is being called in theglobal context which has not sound property

// however we can bind a function to another context/object
let boundFunction = talkFunction.bind(dog);
boundFunction()

// practical example
let button = document.getElementById('myNiceButton');

button.addEventListener(
    'click',
    dog.talk.bind(dog)
);

// TODO:
// https://github.com/taoqf/node-html-parser
// https://github.com/cheeriojs/cheerio