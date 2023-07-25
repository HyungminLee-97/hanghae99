//refactoring
//re : 다시
//factoring

var addCoffee = function (name) {
  return function (prevName) {
    //이 안에서도 새롭게 Promise를 만들어요
    return new Promise(function (resolve) {
      setTimeout(function () {
        //벡틱 ``
        var newName = prevName ? `${prevName}, ${name}` : name;
        console.log(newName);
        resolve(newName);
      }, 500);
    });
  };
};

addCoffee("에스프레소")()
  .then(addCoffee("아메리카노"))
  .then(addCoffee("파크리카"))
  .then(addCoffee("아프리카"))
  .then(addCoffee("아메리카"));
