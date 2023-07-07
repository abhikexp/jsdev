function getUser(id) {

    if(id <= 0) {
        return null;
    }

    // get the user from database
    // and return null if id does not exist
    // ...
    
    // if user was found, return the user
    return {
        id: id,
        username: 'admin',
        profile: {
            avatar: '/avatar.png',
            language: 'English'
        }
    }
}

let user = getUser(1);
let profile = user.profile;

console.log(user?.profile);
console.log(user?.profile?.avatar);
console.log(user?.profile?.picture);    // chaining

user = getUser(0);
console.log(user?.profile);
console.log(user?.profile?.avatar);

/* ref:
 * https://www.javascripttutorial.net/es-next/javascript-optional-chaining-operator/
 * https://javascript.info/optional-chaining
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 */