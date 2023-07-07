
let name = 'Hilda';
const person = {
    // A KV pair is also called a "property" or "field" of the object
    name: 'Max',
    age: 29,
    // 3 ways to add a function property to an object
    greet1: () => {
        console.log('Hi, I am ' + this.name);
    },
    greet: function() {
        console.log('Hi, I am ' + this.name);
    },
    greet2() {
        console.log('Hi, I am ' + this.name);
    }
}


console.log("🚀 | file: play.js:2 | person:", person);
person.greet();
person.greet2();
person.greet1();    // coz `this` in an arrow function is not bound to the scope of object it's defined in
                    // instead it refers to global object (globalThis)

/* ref:
 * globalThis:
 *  https://blog.logrocket.com/what-is-globalthis-why-use-it/
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis
 */