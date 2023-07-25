//ES6

//2015년도 이전 => var
//(1) es6 => let(변수 선언), const(상수 선언)

// const a = 1;
// a = 2; //이렇게 했을 때 오류가 남. const는 재할당이 안되기 때문.

// let a = 1;
// a = 3; //let은 이렇게 해도 오류가 안남. let은 재할당이 됨.

// var a = 1;
// var a = 2; //var은 위 코드와 같이 선언도 다시할 수 있음.

// let a = 1;
// let a = 2; //let과 const는 선언 다시하면 오류 발생.
// //let은 재할당은 할 수 있지만 선언을 다시할 수는 없음
// //const는 재할당도 안되고 선언도 다시할 수 없음.

//(2) arrow function
function add () {

}

var add = function() {

}

var add = (x) => {
    return 1;
}
//return문이 한 줄인 경우, 중괄호{}도 생략하고 아래와 같은 코드로 표현할 수 있음.
var add = (x) => 1;

//(3) 삼항 연산자
// condition ? true일 경우 : false일 경우
// console.log(true ? '참' : '거짓'); //'참'
// console.log(false ? '참' : '거짓'); // '거짓'
// console.log(1 === 1 ? '참' : '거짓'); //'참'
// console.log(1 !== 1 ? '참' : '거짓'); //거짓'