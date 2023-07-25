//자연수 뒤집어 배열로 만들기

//문제 설명

//자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
//에를 들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.

// 입출력 예
// n	return
// 12345	[5,4,3,2,1]

//문제 풀이

function solution(n) {
  let answer = [];
  let a = String(n).split("").reverse();

  for (let i = 0; i < a.length; i++) {
    answer.push(parseInt(a[i]));
  }
  //answer를 return할 것
  return answer;
}

//개선
function solution(n) {
  return String(n)
    .split("")
    .reverse()
    .map((num) => (num = parseInt(num)));
}
// 바로 배열로 반환해주는 map을 사용하면 간결해진다!
