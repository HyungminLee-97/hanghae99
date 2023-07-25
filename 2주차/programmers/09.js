//핸드폰번호 가리기

//프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때,
// 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// phone_number는 길이 4 이상, 20이하인 문자열입니다.

// 입출력 예
// phone_number	return
// "01033334444"	"*******4444"
// "027778888"	"*****8888"

function solution(phone_number) {
    var answer = '';
    var back_number = phone_number.substr(-4, 4); //phone_number의 뒤에서 4번째 index부터 4개를 빼라
    var front_number = phone_number.substring(0,phone_number.length -4);
    //phone_number의 0번째 index 부터 뒤에서 4번 째 index까지 빼라
    front_number.replace(/[0-9]/g, '*'); // 검색범위를 전역으로 확장하고 0~9 사이의 문자를 찾아서 '*'로 대체해라
    answer = front_number.replace(/[0-9]/g,'*') + back_number;
    return answer;
}