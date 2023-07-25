//구조분해할당 : destructuring(de + structure + ing)
// de = not
//structure = 구조
//구조를 찢어서 각각을 다 할당하는 것
//배열이나, 객체의 속성


//(1) 배열의 경우
// let [value1, value2] = [1, "new"];
// console.log("1", value1);
// console.log("2", value2);

// let arr = ["value1", "value2", "value3", "value4"];
// let[a, b, c, d=4] = arr;

// console.log(a); //"value1"
// console.log(b); //"value2"
// console.log(c); //"value3" 
// console.log(d); //undefined, arr 배열에 "value4"가 존재하지 않을 때에 기본값을 설정하지 않으면 undefined로 출력
// console.log(d); //4, arr 배열에 "value4"가 존재하지 않을 때에 d=4로 기본값을 설정하면 4로 출력
// console.log(d); //"value4"

//(2) 객체인 경우
// let user = {
//     name: "abc",
//     age: 30,
// }

//구조분해할당
// let {name, age} = {
//         name: "abc",
//         age: 30,
//     };

//     console.log("name => " + name); //string
//     console.log("age => " + age); //number


//새로운 이름으로 할당
let user = {
    name: "abc",
    age: 30,
    birthday: "yesterday",
}

// let{name : newName, age: newAge} = user;
// console.log('newName => ' + newName);
// console.log('newAge => ' + newAge);

let{name, age, birthday = "today"} = user;
console.log(name);
console.log(age);
console.log(birthday);//undefined이 난 경우, 초기값으로 설정한 "today"가 출력됨.