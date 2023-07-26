// 2016년 1월 1일은 금요일
// a, b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴

function solution(a, b) {
  var day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var date = new Date(`2016.${a}.${b}`);
  return day[date.getDay()];
}

console.log(solution(4, 8));
