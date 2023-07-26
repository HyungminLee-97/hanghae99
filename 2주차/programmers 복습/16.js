function solution(s) {
  var answer = true;

  let str = s.toLowerCase();
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (str[i] === "p") count++;
    if (str[i] === "y") count--;
  }

  return count === 0 ? true : false;
}
