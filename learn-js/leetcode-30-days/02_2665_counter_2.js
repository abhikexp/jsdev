/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
/*
let createCounter = function(init) {
    return {
        orig: init,
        curr: init,
        increment() {
            this.curr += 1;
            return this.curr;
        },
        decrement() {
            this.curr -= 1;
            return this.curr;
        },
        reset() {
            this.curr = this.orig;
            return this.curr;
        },
    }
};
*/

let createCounter = function (init) {
    let curr = init;
    return {
        increment: () => ++curr,
        decrement: () => --curr,
        reset: () => curr = init,
    }
};

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4