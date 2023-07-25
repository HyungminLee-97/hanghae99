//무슨 제어권? 2번째
//인자에 대한 제어권을 갖는다.
//map 함수입니다.

//index : 사람이 이해할 수 있는 변수명일 뿐
//currentValue : 사람이 이해할 수 있는 변수명일 뿐
var newArr = [10, 20, 30].map(function (index, currentValue) {
  console.log(index, currentValue);
  return currentValue + 5;
  //currentValue가 아니라, index에 5씩 더한 값이 나옴
});

//결과는 뭐가 될까?
console.log(newArr);
