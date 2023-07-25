//정수 제곱근 판별

//문제 설명

//임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
//n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고,
//n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

//제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.

// 입출력 예
// n	return
// 121	144
// 3	-1

// 입출력 예 설명
// 입출력 예#1
// 121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.

// 입출력 예#2
// 3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.

//해답
function solution(n) {
  const sqrt = Math.sqrt(n); //함수는 숫자의 제곱근을 반환합니다.
  return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
  //Number.isInteger(sqrt)를 사용하여 'sqrt'가 정수인지 검사
  //만약 정수라면, n이 양의 정수 'x'의 제곱이라는 뜻

  //Math.pow(sqrt + 1,2)를 사용하여 x+1의 제곱을 계산하고, 이 값을 반환
  //(sqrt + 1) * (sqrt + 1)과 동일한 결과 반환
  //Math.pow(제곱할 숫자, 제곱할 지수)
  //예를 들어, Math.pow(3, 2)는 3을 제곱하여 9를 반환합니다.
  // Math.pow(4, 3)은 4를 세제곱하여 64를 반환합니다.

  //sqrt가 정수가 아니라면 -1을 반환
}

//문제풀이
function solution(n) {
  const sqrt = Math.sqrt(n);
  return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
}
