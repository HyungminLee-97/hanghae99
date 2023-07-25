//가운데 글자 가져오기

// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

//내 풀이 (실패)
// function solution(s) {
//     const length = s.length;
//     const middleIndex = length / 2;

//     if(length % 2 === 0) {
//         return.s.
//     }

//     (s>=1 &&  s<= 100);
//     var answer = '';
//     return answer;
// }

function solution(s) {
  const length = s.length; //s의 길이를 정의
  const middleIndex = Math.floor(length / 2);
  // Math.floor()를 사용하여 소수점 아래를 버림하여 정수값얻음

  if (length % 2 === 0) {
    //길이가 짝수이면
    return s.slice(middleIndex - 1, middleIndex + 1); //가운데 두 글자를 잘라내어 반환
    //slice() 메소드는 시작 인덱스를 포함하고 종료 인덱스를 포함하지 않으므로 [middleIndex - 1, middleIndex] 밤위를 추출
  } else {
    return s[middleIndex]; //홀수인 경우 가운데 글자를 반환
  }
}
