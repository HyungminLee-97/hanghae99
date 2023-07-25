//이상한 문자 만들기

//문제 설명

//문자열 s는 한 개 이상의 단어로 구성되어있다.
//각 단어는 하나 이상의 공백문자로 구분되어 있다.
//각 단어의 짝수번째 알파벳은 대문자로,
//홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

// 입출력 예
// s	return
// "try hello world"	"TrY HeLlO WoRlD"

// 입출력 예 설명
// "try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다.
//  각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다.
//  따라서 "TrY HeLlO WoRlD" 를 리턴합니다.

//문제 해답
function solution(s) {
  let answer = "";
  let index = 0;
  for (let spell of s) {
    answer += index % 2 === 0 ? spell.toUpperCase() : spell.toLowerCase();
    index += 1;
    if (spell === " ") index = 0;
  }
  return answer;
}

//문제 풀이

function solution(s) {
  let answer = "";
  let index = 0;
  for (let spell of s) {
    answer += index % 2 === 0 ? spell.toUpperCase() : spell.toLowerCase();
    index += 1;
    if (spell === " ") index = 0;
  }
  return answer;
}

// answer 변수는 빈 문자열로 초기화되어 문자열 변환 결과를 저장할 변수입니다.

// index 변수는 인덱스 값을 저장하는 변수입니다. 문자열의 각 문자에 접근할 때 사용됩니다.

// for...of 반복문을 사용하여 문자열 s의 각 문자 spell에 대해 반복합니다.

// (index % 2 === 0) ? spell.toUpperCase() : spell.toLowerCase();는 삼항 연산자를 사용하여 짝수 인덱스인 경우 spell을 대문자로 변환하고, 홀수 인덱스인 경우 spell을 소문자로 변환합니다.

// 변환된 문자를 answer에 누적하여 저장합니다.

// if (spell === ' ') index = 0;는 공백(' ')을 만났을 때 index를 0으로 초기화하여 다음 단어의 첫 글자를 대문자로 변환할 수 있도록 합니다.

// 반복이 끝난 후 answer를 반환합니다.
