//일급객체로써의 함수 (2)
const person = {
    name: 'John',
    age: 31,
    isMarreid: true,
    sayHello: function() {
        console.log(`Hello, My name is ${this.name}`);
        // console.log("Hello, May name is " + this.name);
    }
    // sayHello: () => {
    //     console.log(`Hello, My name is ${this.name}`);
    // } // 이런 케이스에서는 화살표 함수를 쓰면 안된다.
};

person.sayHello();