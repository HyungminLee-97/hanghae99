//제일 작은 수 제거하기

//문제 설명

//정수를 저장한 배열, arr에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
//단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
//예를 들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴하고, [10]이면 [-1]을 리턴합니다.

//제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

// 입출력 예
// arr	return
// [4,3,2,1]	[4,3,2]
// [10]	[-1]

//문제 해답
function solution(arr) {
  //주어진 배열의 길이가 1인 경우, 배열에 하나의 요소만 있는 경우
  if (arr.length === 1) {
    return [-1]; //빈 배열 대신 [-1]을 반환
  }
  //배열에서 가장 작은 값을 찾는다
  const min = Math.min(...arr);

  // 배열에서 가장 작은 값(min)을 제외한 요소들로 이루어진 새로운 배열 생성
  const answer = arr.filter((num) => num !== min);

  //새로운 배열을 반환
  return answer;
}

//문제 풀이
function solution(arr) {
  if (arr.length === 1) {
    return [-1];
  }
  const min = Math.min(...arr);
  const answer = arr.filter((num) => num !== min);
  return answer;
}
