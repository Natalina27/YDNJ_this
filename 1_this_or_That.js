function identify() {
    return this.name.toUpperCase();
}

function speak() {
    let greeting = 'Hello, I\'m ' + identify.call(this);
    console.log(greeting);
}