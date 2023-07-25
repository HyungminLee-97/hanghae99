//1.
    function solution(s){
    let str = s.toUpperCase();
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        if(str[i] ==="P") count++;
        if(str[i] === "Y") count--;
    }
    return count === 0? true : false
}

// 대소문자 상관없어서 toUpperCase()로 다 소문자로 만들어주고, 반복문을 돌린다.

// p가 있으면 1을 더하고 y가 있으면 1을 빼서 마지막에 count값이 0이라면 트루이고, 아니면 false이다. 


//2-1. 
function solution(absolutes, signs) {
    var answer = 0;

    for(let i = 0; i<absolutes.length; i++) {
        signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
    }
    return answer;
}

//2-2.
function solution(absolutes, signs) {
    var answer = 0;

    for(let i = 0; i<absolutes.length; i++) {
        if(signs[i] === true){
            answer = answer + absolutes[i]
        }else if(signs[i] === false) {
            answer = answer - absolutes[i]
        }
    }
    return answer;
}
//궁금한 점.
//위 코드에서 for문이 의미하는 게 제대로 뭔지 모르겠음
//2-1. 코드는 되는데, 2-2. 코드는 안되는 이유가 뭔지 모르겠음.