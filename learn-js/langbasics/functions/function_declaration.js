
let userName = "John";  // global var

/* Function declarations are not part of the regular top-to-bottom flow of control.
 * They are conceptually moved to the top of their scope and can be used by all the code in that scope.
 * This is sometimes useful because it offers the freedom to order code in a way that seems meaningful,
 * without worrying about having to define all functions before they are used.
 */
// function declaration notation
function showMessage() {
    console.log(`Hello ${userName}!`);
    userName = "Jack";  // modify global var
    console.log(`Hello ${userName}!`);
}

function showMessage2() {
    let userName = "Amanda";    // shadows global var (global value is ignored)
    console.log(`Hello ${userName}!`);
}

console.log("Outer/Global value: " + userName);
showMessage();
console.log("Outer/Global value: " + userName);
showMessage2();
console.log("Outer/Global value: " + userName);

console.log('---------------')

// side-effect => showMessage() gets redefined here
function showMessage(from, text) { // parameters: from, text
    console.log(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)

showMessage("Ann"); // When argument is not provided, then the corresponding value becomes 'undefined'

/* Default Parameters */
function showMessage2(from, text = "no text given") {
    console.log( from + ": " + text );
}

showMessage2("Ann"); // Ann: no text given
showMessage2("Ann", undefined); // Ann: no text given

/* calls a function if argument text is not provided */
function showMessage(from, text = function anotherFunction() {"parameter empty"}) {
    // anotherFunction() only executed if no text given
    // its result becomes the value of text
    console.log( from + ": " + text );
}

showMessage("Ann");

