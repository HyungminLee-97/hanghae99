//명시적 형변환 -= 숫자 형변환

// 문자열을 입력받아도 result 값이 아래와 같이 출력되도록 함수를 완성해 보세요.
// if문과 typeof 키워드를 이용해야 합니다.

function add(a, b) {
	if(typeof a === 'string') {
        a = parseInt(a);
    }
    if(typeof b === 'string') {
        b = parseInt(b);
    }
    return a + b;
}

const result1 = add(5, "5");
const result2 = add("5", 5);

console.log(result1); // 출력 결과: 10
console.log(result2); // 출력 결과: 10

//parseInt();는 string(문자)로 표시된 값을 숫자로 변환
//String(숫자);는 Integer로 표시된 값을 문자로 변환 