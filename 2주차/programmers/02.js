// 짝수와 홀수

//정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

//num은 int 범위의 정수입니다.
//0은 짝수입니다.

function solution(num) {
    var answer = '';
    return answer;
}

// //내 풀이1. (오답)
// function solution(num) {
//     if(num % 2 ===0) {
//         return "Even"
//     } else if(num % 2 === 1) {
//         return "Odd"
//     }
//     var answer = '';
//     return answer;
// }

//내 풀이2.
function solution(num) {
    if(num % 2 ===0) {
        return "Even"
    } else {
        return "Odd"
    }
    var answer = '';
    return answer;
}