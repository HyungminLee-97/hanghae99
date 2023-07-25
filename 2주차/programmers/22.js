//자릿수 더하기

//문제 설명

//자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어주세요.
//예를들어 N = 123이면 1 + 2+ 3 = 6을 return하면 됩니다.

//제한사항
//N의 범위 : 100,000,000 이하의 자연수

// 입출력 예
// N	answer
// 123	6
// 987	24

// 입출력 예 설명
// 입출력 예 #1
// 문제의 예시와 같습니다.

// 입출력 예 #2
// 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.

//문제 풀이
function solution(n) {
  let answer = 0; //초기값 0
  let letters = n.toString(); //문자열로 바꿈

  for (let i = 0; i < letters.length; i++) {
    answer += Number(letters[i]);
  } //문자열을 for문을 돌며 숫자로 변환하여 답에 더해줌

  return answer;
}
