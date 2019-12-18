function identify() {
    return this.name.toUpperCase();


}

function speak() {
    let greeting = 'Hello, I\'m ' + identify.call(this);
    console.log(greeting);
}

const me ={
    name: 'Dasha',
};

const you ={
    name: 'Misha',
};

identify.call(me);
identify.call(you);

speak.call(me);
speak.call(you);


