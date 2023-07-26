function solution(s) {
  var answer = true;

  if (s.length !== 4 && s.length !== 6) {
    answert = false;
  } else {
    const arr = s.split("");
    arr.forEach((element) => {
      isNaN(element) ? (answer = false) : null;
    });
  }
  return answer;
}
