const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

const hobbies = ['Sports', 'Cooking'];

/* rest and spread operators */
const copiedArr = hobbies.slice();
console.log(copiedArr);

let copiedArr2 = [hobbies];    // This creates a nested array, not what we want
let copiedArr3 = [...hobbies];    // spread operator, pulls out all elements/properties from an array/object

console.log(copiedArr2);
console.log(copiedArr3);

const copiedPerson = {...person};
console.log(copiedPerson);

// rest operator is opposite of spread operator, combines arguments into an array
// it looks the same, behaviour depends on where it is used
const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3));
console.log(toArray(1, 2, 3, 4, 5));

// more examples
const arrValue = ['My', 'name', 'is', 'Jack'];

console.log(arrValue);   // ["My", "name", "is", "Jack"]
console.log(...arrValue); // Equivalent to `console.log('My', 'name', 'is', 'Jack');` => My name is Jack

const arr1 = ['one', 'two'];
const arr2 = [...arr1, 'three', 'four', 'five'];

console.log(`arr2: ${arr2}`); 

const obj1 = { x : 1, y : 2 };
const obj2 = { z : 3 };

// add members obj1 and obj2  to obj3
const obj3 = {...obj1, ...obj2};

// https://stackoverflow.com/questions/46146860/javascript-template-strings-dont-pretty-print-objects
console.log(`obj3: ${JSON.stringify(obj3)}`); // {x: 1, y: 2, z: 3}

/* ref:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * https://javascript.info/rest-parameters-spread
 * https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/
 */