/**
 * @param {number} n
 * @return {Function} counter
 */
/*
let createCounter = function(n) {
    let i = 0;
    return function() {
        return n + i++;
    };
};
*/

let createCounter = function(n) {
    let x = n;
    return function() {
        return x++;
    };
};

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
