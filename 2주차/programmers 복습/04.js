//두 정수 사이의 합

function solution(a, b) {
  let result = 0;

  const min = Math.min(a, b);
  const max = Math.max(a, b);

  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
}

//  JavaScript에서 `const` 키워드는 변수에 할당한 값을 재할당할 수 없도록 상수를 선언하는 데 사용됩니다.
//  한 번 할당된 값은 변경할 수 없으며, 변수가 선언될 때 초기화되어야 합니다.
//  반면에 `let` 키워드는 변수를 선언하는 데 사용되며, 값을 재할당할 수 있습니다.

// 이 코드에서 `result` 변수를 `const result = 0;`으로 선언하면 오류가 발생하는 이유는 다음과 같습니다:

// 1. `const result = 0;`은 `result` 변수에 초기값인 0을 할당합니다.
//  `const` 키워드로 선언된 변수는 재할당이 허용되지 않기 때문에
//   이후에 `result += i;`와 같은 재할당이 일어나면 오류가 발생합니다.

// 2. `result += i;`와 같이 값을 변경하려고 하면 `result`가 `const`로 선언되었기 때문에
//  재할당이 허용되지 않아 오류가 발생합니다.

// 따라서 `result` 변수를 변경할 필요가 있기 때문에
//  `let result = 0;`와 같이 `let` 키워드를 사용하여 변수를 선언해야 합니다.
//   이렇게 하면 `result` 변수를 선언한 후에 값을 변경하는 것이 가능하며,
//    두 정수 사이의 합을 계산하여 올바른 결과를 반환할 수 있습니다.
