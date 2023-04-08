/* Types in Js
 * Primitives (string, number, null, boolean, undefined, symbol)
 *  - immutable, not objects, don't have methods, stored in memory by value
 * Non-Primitives (functions, arrays and objects)
 *  - mutable, are objects, stored in memory by reference
 */

/* When you define a function, you're creating an object */
// Function declaration.
function showFavoriteIceCream() {
    const favIceCream = 'chocolate';

    console.log(`My favorite ice cream is ${favIceCream}`);
}

// Let's assign a property.
showFavoriteIceCream.flavours = ['chocolate', 'vanilla', 'strawberry'];

// Let's log the showFavoriteIceCream function.
console.log(showFavoriteIceCream);

// Log
// { [Function: showFavoriteIceCream]
// flavours: [ 'chocolate', 'vanilla', 'strawberry' ] } -> property assigned

// Let's assign a function.
showFavoriteIceCream.showFlavours = function () {
    return this.flavours;
};

// Let's log the showFavoriteIceCream function.
console.log(showFavoriteIceCream);

// Log
// { [Function: showFavoriteIceCream]
// flavours: [ 'chocolate', 'vanilla', 'strawberry' ],
// showFlavours: [Function] } -> function assigned

/* As you can see, the showFavoriteIceCream function besides performing an action,
 * is also behaving as an object, we are able to assign properties and methods to it.
 * function are known as first-class objects which means that they can do more than that:
 */
/* 1. They can be stored in variables. */
// stored in a variable. (Function expression)
const showFavIceCreams = function () {};

// stored in an array.
const listOfData = ['vanilla', 5, showFavIceCreams];

// stored in object.
const thisIsAnObject = {
    showListOfIceCreams: function () {},
};

/* 2. They can be passed as parameters in another function. */
