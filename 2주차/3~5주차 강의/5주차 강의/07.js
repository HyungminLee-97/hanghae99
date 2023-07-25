//5-4 강의

//클래스 연습해보기

//[요구사항]
//1. Car라는 새로운 클래스를 만들되, 처음 객체를 만들 때는
//  다음 네 개의 값이 필수로 입력돼야 합니다.
//  (1)modelName
//  (2)modelYear
//  (3)type
//  (4)price
//2. makeNoise() 메서드를 만들어 클락션을 출력해주세요.
//2-1. 해당 자동차가 몇년도 모델인지 출력하는 메서드 작성
//3. 이후 자동차를 3개 정도 만들어주세요(객체 생성)

//[추가 요구사항]
//1. 전기차 클래스 <- Car 클래스의 상속을 받을 것임

class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }

  //클락션을 울리는 메서드
  makeNoise() {
    console.log(`${this.modelName} 빵!`);
  }

  //   해당 자동차가 몇년도 모델인지 출력하는 메서드 작성
  printModelYear() {
    console.log(this.modelName + "은" + this.modelYear + "연도의 모델입니다.");
  }
}

//전기차 Class 정의
class ElectronicCar extends Car {
  constructor(modelName, modelYear, price, chargeTime) {
    //Car(부모 class)에게도 알려주기!!
    super(modelName, modelYear, "e", price);
    this._chargeTime = chargeTime;
  }

  set chargeTime(value) {
    this._chargeTime = value;
  }

  get chargeTime() {
    return this._chargeTime;
  }
}

const eleCar1 = new ElectronicCar("테슬라", "2023", 9000, 60);
eleCar1.makeNoise();
eleCar1.printModelYear();
console.log("---------------");
console.log(eleCar1._chargeTime);
eleCar1.chargeTime = 20;
console.log(eleCar1._chargeTime);

// //자동차 만들기
// let car1 = new Car("갤로퍼", 1996, "SUV", "15,000,000 원");
// let car2 = new Car("갤로피", 1997, "Sedan", "25,000,000 원");
// let car3 = new Car("갤로푸", 1998, "Sport", "35,000,000 원");
// //정해진 자동차 클락션 울리기
// car1.makeNoise();
// car2.makeNoise();
// car3.makeNoise();
// //정해진 차량 연식 출력하기
// car1.printModelYear();
// car2.printModelYear();
// car3.printModelYear();
