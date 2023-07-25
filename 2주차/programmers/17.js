//문자열 다루기 기본

//문제 설명
//문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성해주세요.
//예를 들어 s가 "a234"이면 False를 리턴하고
//"1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.
// 입출력 예
// s	return
// "a234"	false
// "1234"	true

//해답
function solution(s) {
  var answer = true;
  if (s.length !== 4 && s.length !== 6) {
    answer = false; //일단 s의 길이를 체크하고
  } else {
    const arr = s.split(""); //s를 문자 하나씩 자르고
    arr.forEach((el) => {
      isNaN(el) ? (answer = false) : null; //문자 하나라도 숫자가 아니면 (true) answer = false, 맞으면 null
    });
  }
  return answer;
}

//내 풀이
function solution(s) {
  var answer = true;
  if (s.length !== 4 && s.length !== 6) {
    answer = false;
  } else {
    const arr = s.split("");
    arr.forEach((element) => {
      isNaN(element) ? (answer = false) : null;
    });
  }
  return answer;
}
