/* JavaScript distinguishes not just global and local bindings. Blocks and functions can be created
 * inside other blocks and functions, producing multiple degrees of locality.
 */
// function inside function are allowed since a function is also another value
/* A function value can do all the things that other values can do
 * you can use it in arbitrary expressions, not just call it.
 */
const hummus = function(factor) {   // this is function expression notation
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

hummus(1);
/* It is possible to store a function value in a new binding, pass it as an argument to a function, and so on
 * Similarly, a binding that holds a function is still just a regular binding and can,
 * if not constant, be assigned a new value, like so:
 */
let launchMissiles = function() {
    missileSystem.launch("now");
};
if (safeMode) {
    launchMissiles = function() {/* do nothing */};
}