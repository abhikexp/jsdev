async function f() {
    return "Hello, there!";
}

f().then(console.log);

async function s() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Wait over!"), 2000)
    });

    let result = await promise;     // wait until the promise resolves

    console.log(result);
}

s().then(r => console.log("Wrapping up!"));