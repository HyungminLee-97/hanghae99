//문자열 자르기

// 입력받은 문자열을 잘라서 result 값이 아래와 같이 출력되도록 함수를 완성해 보세요.
// 메소드는 slice 를 이용해 보세요.

function getToken(str) {
	// 이 부분에 코드를 작성하세요.
var result = str.substring(0, 6);
    console.log(result)
}

const result = getToken("Bearer a012345");
console.log(result); // 출력 결과: 'a012345'