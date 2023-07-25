//배열

//1. 생성
//1-1.기본 생성
// let fruits = ["사과", "바나나", "오렌지"];


//1-2. 크기 지정
// let number = new Array(5);

// console.log(fruits);
// console.log(fruits.length);
// console.log(number);
// console.log(number.length);

// //2. 요소 접근
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

//3. 배열 메소드
//3-1. push
// let fruits = ["사과", "바나나"]
// console.log("1 => ", fruits);

// fruits.push("오렌지");
// console.log("2 => ", fruits);

//3-2. pop
// let fruits = ["사과", "바나나"]
// console.log("1 => ", fruits);
// fruits.pop();
// //pop은 가장 마지막 요소가 사라짐.
// console.log("2 => ", fruits);

//3-3. shift
//배열의 가장 첫번째 요소가 사라짐.
// let fruits = ["사과", "바나나", "오렌지"];
// fruits.shift();
// console.log("2 => ", fruits);

//3-4. unshift
//인덱스의 맨 앞에 요소가 붙음
// fruits.unshift("포도");
// console.log(fruits);

//3-5. splice
// fruits.splice(1, 1, "포도");
// //인덱스의 첫번째 요소 자리부터 첫번째 자리 요소까지 삭제 후 "포도"를 넣어라.
// fruits.splice()
// console.log(fruits);

//3-6. slice
// let fruits = ["사과", "바나나", "오렌지"];
// let slicedFruits = fruits.slice(1, 2);
// console.log(slicedFruits);
//두번째 요소부터 세번째 요소까지 새로운 배열로 만든다는 뜻


//(1) forEach, map, filter, find
// let numbers = [4, 1, 5, 4, 5];

//매개변수 자리에 함수를 넣는 것 : 콜백 함수
// numbers.forEach(function(item){
//     // console.log('item 입니다 => ' + item)
// });

//(2) map : 항상 원본 배열의 길이만큼이 return 된다.
//기존에 있던 배열을 가공해서 새로운 배열을 생산해내는 역할을 함
//return 필수
// let newNumbers = numbers.map(function(item){
//     return item * 2;
// })

// console.log(newNumbers);

//(3) filter
//조건에 해당되는 것만 리턴
// let numbers = [4, 1, 5, 4, 5];

// let filteredNumbers = numbers.filter(function (item){
//     return item === 5;
// });

// console.log(filteredNumbers);

//(4) find
let numbers = [4, 1, 5, 4, 5];

let result = numbers.find(function(item){
return item > 3;
});
console.log(result); //4
//첫 번째 4만 반환


