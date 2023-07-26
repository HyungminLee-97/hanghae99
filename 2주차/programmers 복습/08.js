function solution(arr) {
  var answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i]; //arr의 모든 값들을 더해서
  }
  return answer / arr.length; //arr 길이만큼 나눠라
}
