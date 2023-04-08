console.log(JSON.parse("1"))
console.log(JSON.parse("-0"))
console.log(JSON.parse("10e5"))
console.log(JSON.stringify(NaN))
console.log(JSON.stringify(Infinity))
console.log(JSON.parse("9007199254740995"))
// console.log(JSON.parse("0x1"))

/*class Foo {
    #foo: number;

    constructor() {
        this.#foo = 5;
    }
}*/

// JSON.stringify(new Foo())
console.log(JSON.stringify(undefined))
// console.log(JSON.parse(JSON.stringify(undefined)))
console.log(JSON.stringify({foo: undefined}))
console.log(JSON.stringify([undefined]))
console.log(JSON.parse('"{\"foo\": NaN}"'))