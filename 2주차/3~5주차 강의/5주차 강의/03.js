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

//자동차 만들기
let car1 = new Car("갤로퍼", 1996, "SUV", "15,000,000 원");
let car2 = new Car("갤로피", 1997, "Sedan", "25,000,000 원");
let car3 = new Car("갤로푸", 1998, "Sport", "35,000,000 원");
//정해진 자동차 클락션 울리기
car1.makeNoise();
car2.makeNoise();
car3.makeNoise();
//정해진 차량 연식 출력하기
car1.printModelYear();
car2.printModelYear();
car3.printModelYear();
