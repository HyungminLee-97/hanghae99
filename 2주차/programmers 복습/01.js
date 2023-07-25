//직사각형 별찍기
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  for (i = 0; i < b; i++) {
    let reult = ""; //세로 줄 나눠줌
    for (j = 0; j < a; j++) {
      result += "*"; //가로는 별로 채워줌
    }
    console.log(result); //결과값 출력
  }
});
