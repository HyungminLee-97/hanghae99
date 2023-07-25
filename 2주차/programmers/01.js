// 직사각형 별찍기

//문제 설명
// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// 제한 조건
// n과 m은 각각 1000 이하인 자연수입니다.

// 예시
// 입력
// 5 3

// 출력
// *****
// *****
// *****

//문제풀이 1(gpt 참고)
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => { //입력받은 숫자를 'data에 받는다'
//     const n = data.split(" "); // data(입력받은 숫자)를 배열로 변경
//     const a = Number(n[0]), b = Number(n[1]); //a는 한 줄에 대한 별의 갯수, b는 몇 줄 출력
//     for(let i=0; i<b; i++) {// i을 선언해주고 몇줄(b)만큼 반복
//         let str = ""; //출력할 변수 선언
//         for(let j=0; j<a; j++) { //j 선언 후 별을 한 줄에 몇 개 찍을 지 반복
//             str = str + "*"; //출력할 변수에 별을 담는다.
//         }
//         console.log(str); // 출력
//     }

// });

// //문제풀이 2
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => { //문제가 넣어주는 data 값 (5 3, 2 2)
//     const n = data.split(" "); //5 3, 2 2를 스페이스로 나누어준다. ->['5', '3'], ['2', '2']
//     const a = Number(n[0]), b = Number(n[1]); //a=5,3 ; b=2,2
//     for(let i = 0; i<b; i++) { //몇(b)줄 반복
//         let result = ''; //출력변수 지정
//         for(let j = 0; j < a; j++) { //한 줄에 들어갈 데이터 수(a) 결정
//             result += "*"; //출력변수에 *을 담아준다
//         }
//         console.log(result);
//     }
// });

//문제 풀이
process.stdin.setEncoding("utf8"); //인코딩 부분
process.stdin.on("data", (data) => {
  const n = data.split(" "); //뒤에 나와있는 것을 기준으로 쪼개주는 함수
  //공백을 기준으로 입력을 쪼개는 것
  console.log(n);
  const a = Number(n[0]),
    b = Number(n[1]);

  for (let i = 0; i < b; i++) {
    let result = "";
    for (let j = 0; j < a; j++) {
      result += "*";
    }
    console.log(result);
  }
});
