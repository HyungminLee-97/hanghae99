//객체
//key - value pair
//객체의 장점 : 하나의 변수에 여러 개의 값을 넣을 수 있다.
//key에 할당되는 value에는 어떤 값도 올 수 있다.

//1. 객체 생성 방법
//1-1. 기본적인 객체 생성 방법
// let person = {
//     name: "홍길동",
//     age: 30,
//     gender: "남자",
//     //여기서 key는 name, age, gender
// };

//1-2. 생성자 함수를 이용한 객체 생성 방법
// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// let person1 = new Person("홍길동", 30, "남자");
// let person2 = new Person("홍길순", 20, "여자");
//이런 생성자 함수를 이용하면 많은 객체를 생성할 수 있게 된다.


//2. 접근하는 방법
// console.log('1', person.name);
// console.log('2', person.age);
// console.log('3', person.gender);

//3. 객체 메소드(객체가 가진 여러가지 기능 : object.~~~)
//3-1. Object.key() : key를 가져오는 메소드
let person = {
    name: "홍길동",
    age: 30,
    gender: "남자",
    //여기서 key는 name, age, gender
};

let keys = Object.keys(person);
// console.log("keys => ", keys);

//3-2. values
let values = Object.values(person);
// console.log("values => ", values);

//3-3. entries
//key와 value를 묶어서 배열로 만든 배열 (2차원 배열)
let entries = Object.entries(person);
// console.log("entries => ", entries);

//3-4. assign
//객체 복사
let newPerson = {};
Object.assign(newPerson, person, { gender: "여자"});
console.log("newPerson => ", newPerson);

//3-5. 객체 비교
//크기가 상당히 크다 -> 메모리에 저장할 때 별도의 공간에 저장
//person1 별도 공간에 대한 주소
// let person1 = {
//     name: "홍길동",
//     age: 30,
//     gender: "남자",
// };

// //person2 별도 공간에 대한 주소
// let person2 = {
//     name: "홍길동",
//     age: 30,
//     gender: "남자",
// };

// let str1 = "aaa";
// let str2 = "aaa";
//직접 저장하기 떄문에 두 개가 가ㅣㅌ다고 나옴

// console.log(person1 === person2); //false 출력
// console.log("answer2 => ", str1 === str2); //true

// console.log(JSON.stringify(person1) === JSON.stringify(person2));//true

//3-6. 객체 병합
let person1 = {
    name: "홍길동",
    age: 30,
};

//person2 별도 공간에 대한 주소
let person2 = {
    gender: "남자",
};

//... : spread operator
let perfectMan = {...person1, ...person2};
console.log(perfectMan);