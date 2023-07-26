const x = 1;

// 1
function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}

//outer 함수를 '실행'해서, innerFunc에 담죠
//outer 함수의 return 부분을 innerFunc에 담는다는 얘기
const innerFunc = outer();
//--------------- 여기서는.... outer 함수의 실행 컨텍스트는?

innerFunc();
