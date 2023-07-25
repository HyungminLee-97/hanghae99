//클래스라는 설계도를 만들어봅시다!
class Person {
  //우리는 사람이기 때문에 필수요소
  //name, age
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //메서드 형태의 동사 표현
  sayHello() {
    console.log(`${this.name}님 안녕하세요!`);
    0;
  }

  // 내 나이는 ~살이예요! 라고 출력하는 메서드를 만들어주세요!
  printMyAge() {
    console.log(`${this.name} 나이는 ${this.age}살 입니다.`);
  }
}

//설계도를 통해 인스턴스(실제 사물) 만들어봅시다!
//해석: 이름은 이형민이고, 나이는 25살인 사람 하나를 만들어줘(설계도에 근거해서)
const person1 = new Person("이형민", 25);
const person2 = new Person("이형만", 27);
// person1.sayHello();
// person2.sayHello();

person1.printMyAge();
