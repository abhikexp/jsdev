// Anonymous function passed as an argument
let someFunction = function(callback) {
    console.log("Inside someFunction");
    callback();
};

someFunction(function() {
    console.log("Anonymous function passed as argument to someFunction");
});

// Anonymous function returned from another function
let anotherFunction = function() {
    return function() {
        console.log("Anonymous function returned from anotherFunction");
    };
};

let anonymous = anotherFunction();
anonymous();
