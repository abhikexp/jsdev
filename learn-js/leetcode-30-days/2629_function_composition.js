var compose = function(functions) {
    return function(x) {

    }
};

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)) // 9