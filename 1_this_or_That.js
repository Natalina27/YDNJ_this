
//1.
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

speak.call(me); //Hello, I'm DASHA
speak.call(you); //Hello, I'm MISHA

//2.

function foo(num) {
    console.log('foo: ' + num);
    this.count++;
  //  console.log(this );
}

foo.count = 0;

for(let i = 0; i < 10; i++){
    if(i > 5){
        foo(i);
    }
}
console.log(foo.count);

//3.
function foo1() {
    foo1.count = 4; // `foo` ссылается на саму себя
}

setTimeout( function(){
    // анонимная функция (без имени), не может
    // ссылаться на себя
}, 10 );

// right solution

function fooR(num) {
    console.log('foo: ' + num);
    this.count++;
    //  console.log(this );
}

fooR.count = 0;

for(let i = 0; i < 10; i++){
    if(i > 5){
        //foo(i);
        foo.call(fooR, i); // it works
    }
}
console.log(fooR.count);

//scope
function fooScope() {
    let a = 2;
    this.bar();
    //bar();
    //console.log(this);

}

function bar() {
    console.log( this.a );
}
bar();//undefined
fooScope(); //TypeError: this.bar is not a function



