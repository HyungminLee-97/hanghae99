function solution(a, b) {
  var answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}

//정수배열 a, b가 매개변수
//a와 b의 내적을 return

//a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*bb[n-1]
