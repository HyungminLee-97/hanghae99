//while
// let i=0;

// while(i < 10) {
//     console.log(i);
//     i++;
// }

//while문을 활용해서, 3초과 100 미만의 숫자 중 5의 배수인 것만 출력하는 예
// let i = 3;
// while(i<100) {
//     if(i%5 === 0 && i>=5){
//         console.log(i + "는 5의 배수입니다.");
//     }
//     i++;
// }

//do ~ while문

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while(i < 10);

//break ~ continue 문

//break문
// for(let i = 0; i<10; i ++) {
//     if(i ===5){
//         break; //i가 되는 순간 for문 밖으로 나가버리는 것.
//     }
//     console.log(i);
// }

//continue문
for(let i = 0; i<10; i ++) {
    if(i ===5){
        continue; //continue를 만났을 때 밑으로 안가고 그냥 넘어간 것.
    }
    console.log(i);
}
//break는 그 자리에서 끝낸다.
//continue는 그 다음 순서로 넘어간다.