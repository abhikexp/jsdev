const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

const printName = (p) => {
    console.log(p.name);
}
printName(person);

const printName2 = ({ name }) => {
    console.log(name);
}
printName2(person);

const { pname, age, gender } = person; // the destructured variable must be present and have the same property name in the object
console.log(pname, age, gender);

// extracts the props, but assigns it to a different name.
let user = {
    id: 339,
    name: 'Fred',
    age: 42
};
const { name: callSign } = user;
console.log(callSign); //prints: Fred

// destructuring also works for nested objects.
user = {
    id: 339,
    name: 'Fred',
    age: 42,
    education: {
        degree: 'Masters'
    }
};
const { education: { degree } } = user;
console.log(degree); //prints: Masters

// what happens when the nested object is missing?
user = {
    id: 339,
    name: 'Fred',
    age: 42
};
// const { education: { year } } = user;  // TypeError: Cannot match against 'undefined' or 'null'.

// can solve this by adding a default value
user = {
    id: 339,
    name: 'Fred',
    age: 42
};
const { education: { year } = {} } = user;
console.log(year); //prints: undefined
// const { education: { year='2010' } = {} } = user;
// console.log(year); //prints: 2010

// Follow ref[2] for the following 2 examples
user = {
    id: 339,
    name: 'Fred',
    age: 42
};
const { education: { school: { name = 'BITS' } = {} } = {} } = user;
console.log(name); //prints: BITS

// assign a default value for education
user = {
    id: 339,
    name: 'Fred',
    age: 42
};
const { education: { school: { schoolName } } = { school: { schoolName: 'IIT' } } } = user;
console.log(schoolName); //prints: IIT

/* Array Destructuring */
const hobbies = ['Sports', 'Cooking'];
const [h1, h2, h3] = hobbies;   // here we can choose any variable names we want as arrays don't have property names
console.log(h1, h2, h3);

/* ref:
 * [1] https://www.javascripttutorial.net/es6/javascript-object-destructuring/
 * [2] https://medium.com/@pyrolistical/destructuring-nested-objects-9dabdd01a3b8
 * [3] https://stackoverflow.com/questions/40622385/es6-deep-nested-object-destructuring
 * [4] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#nested_object_and_array_destructuring
 * [5] https://stackoverflow.com/questions/34211076/destructuring-deep-properties
 * [6] https://varundey.me/blog/destructuring-and-default-values/
 * [7] https://stackoverflow.com/questions/57065348/destructuring-and-rename-property
 */