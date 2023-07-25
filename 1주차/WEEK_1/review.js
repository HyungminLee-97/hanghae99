let x =10;
let y = 5;

if (x > y) {
    console.log("x is freater than y");
}else {
    console.log("x is less than or equal to y");
}

let a = true;
let b = false;

console.log(a && b); //false
//&& AND 연산자 (둘 다 true일 때만 true 출력)
console.log(a || b); //true
//|| OR 연산자 (둘 중 하나만이라도 true 일 시 true 출력)
console.log(b); //false