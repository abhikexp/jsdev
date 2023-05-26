// https://youtu.be/PIkA60I0dKU?list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub
function talk(sound) {
    console.log(sound);
}
talk('wooof');
let talk2 = function (){
    console.log(this.sound); // undefined when talk2 is called from global context
    // console.log(this);  // prints global obj context when talk2 is called from global context
}
talk2('wooof');
let boromir = {
    sound: "One does not simply walk into Mordor!"
}

// bind is means to explicitly specify which object's context we refer to while using 'this'
let talkBoundToBoromir = talk2.bind(boromir);
talkBoundToBoromir();
talk();

boromir.speak = talk2;  // add a function as a new prop to boromir
boromir.speak();

let gollum = {
    jabber: boromir.speak,  // prints `this.sound` but here this refers to gollum
    sound: 'My Preciousss..!'
}
gollum.jabber();