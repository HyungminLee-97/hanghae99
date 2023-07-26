//최초 놀이기구 이용료 : price
//놀이기구 N번 이용 시, N * price
//놀이기구 이용 횟수 : count  시,
// -> return 현재 보유금액 - count * price
//금액 부족 x -> return 0

// 문제 풀이 1.
function solution(price, money, count) {
  var total_price = 0;
  for (let i = 0; i <= count; i++) {
    total_price += price * i;
  }
  var answer = total_price - money;
  if (answer <= 0) {
    return 0;
  } else {
    return answer;
  }
}
