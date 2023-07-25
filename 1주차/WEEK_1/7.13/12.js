//조건문의 중첩
let age = 20;
let gender = "여성";

//미성년자 구분
if(age >= 18) {
    if(gender === "여성") {
        console.log("성인 여성입니다.");
    }else {
        console.log("성인 남성입니다.");
    }
} else {
    if(gender === "여성") {
        console.log("미성년자 여성 입니다.");
    } else {
        console.log("미성년자 남성 입니다.");
    }
}
//위와 같은 중첩문을 많이 사용하는 것은 좋지 않음.
//코드의 가독성이 떨어지고,
//코드의 유지보수가 어려워짐.