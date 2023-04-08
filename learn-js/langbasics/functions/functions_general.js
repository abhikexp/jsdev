/* OPTIONAL ARGUMENTS */

/* JavaScript is extremely broad-minded about the number of arguments you pass to a function.
 * If you pass too many, the extra ones are ignored. If you pass too few,
 * the missing parameters get assigned the value undefined.*/
function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));
// → 16

function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5

/* Default Arguments */
function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(power(4));  // exponent=2 is used when 2nd arg is not passed or undefined
console.log(power(4, null));    // null is different though
console.log(power(4, undefined));
// → 16
console.log(power(2, 6));
// → 64