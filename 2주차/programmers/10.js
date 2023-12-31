//행렬의 덧셈

// 문제 설명
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

// 입출력 예
// arr1	arr2	return
// [[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
// [[1],[2]]	[[3],[4]]	[[4],[6]]

//문제 풀이 해답
function solution(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    //예시 1번의 arr1의 길이(2)만큼 반복하게 되면, arr1[0] = [1, 2], arr1[1] = [2,3]
    for (let j = 0; j < arr1[i].length; j++)
      //위 arr1[i] 길이(2)만큼 반복하게 되면, arr1[0][0] = 1, arr1[0][1] = 2, arr1[1][0] = 2, arr1[1][1] = 3 이렇게 총 4개의 값이 나온다.
      arr1[i][j] += arr2[i][j];
    //4개의 값에 arr1과 같은 길이를 가지고 있는 arr2[i][j]를 더해준다.
  }
  return arr1;
}

//문제 풀이
function solution(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) arr1[i][j] += arr2[i][j];
  }
  return arr1;
}
