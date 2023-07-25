var numbers = [10, 20, 3, 16, 45];
var max = (min = numbers[0]); //10
numbers.forEach(function (number) {
  //현재 들어가는 숫자가 max보다 큰 경우
  if (number > max) {
    max = number;
  }

  if (number < min) {
    min = number;
  }
});

// console.log(max, min);

numbers.forEach(function (number, idx) {
  console.log(idx + "번쨰 값 => " + number);
});
