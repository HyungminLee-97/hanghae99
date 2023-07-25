//정수 내림차순으로 배치하기

//문제 설명

//함수 solution은 정수 n을 매개변수로 입력받습니다,
//n의 각 자릿수를 큰 것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
//예를 드어 n이 118372면 873211을 리턴하게 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.

// 입출력 예
// n	return
// 118372	873211

//문제풀이 해답
function solution(n) {
    const sortedDigits = String(n).split('').sort((a, b) => b - a);
    return Number(sortedDigits.join(''));
  }
  

//문제풀이
function solution(n) {
    const answer = String(n).split('').sort((a, b) = b - a);
    //'n'을 문자열로 변환한 후, 'split('')' 메서드를 사용하여 각 자릿수를 배열로 만든다
    //'sort()' 메서드를 사용하여 각 자릿수를 큰 것부터 작은 순으로 정렬한다.
    //'sort()' 메서드에 비교 함수를 전달하여 내림차순으로 정렬하도록 한다.
    return Number(answer.join(''));
    //정렬된 배열을 'join('')' 메서드를 사용하여 다시 문자열로 만든다.
    //'Number()' 함수를 사용하여 문자열을 다시 정수로 변환한 후, 결과를 반환한다
}