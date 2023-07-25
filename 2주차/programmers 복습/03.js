//가운데 글자 가져오기
function solution(s) {
  const length = s.length;
  const middleIndex = Math.floor(s.length / 2);

  if (length % 2 === 0) {
    //글자의 수가 짝수인 경우, 가운데 두 글자 출력
    return s[middleIndex - 1] + s[middleIndex];
  } else {
    //홀수인 경우, 가운데 한 글자 출력
    return s[middleIndex];
  }
}
