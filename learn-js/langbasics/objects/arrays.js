const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

const hobbies = ['Sports', 'Cooking'];
for (let hobby of hobbies) {
    console.log(hobby);
}
// built-in methods on arrays
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));   // returns new array
console.log(hobbies);   // orig arr is not changed

// Arrays and Objects are 'reference' types
hobbies.push('Programming');
console.log(hobbies);

/* ref:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */