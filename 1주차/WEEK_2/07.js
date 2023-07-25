function multiflyBy(num) {
    return function (x) {
        return x * num;
    };
}

function add (x, y){
    return x + y
};

const multiplyByTwo = multiflyBy(2);
const multiflyByThree = multiflyBy(3);

console.log(multiplyByTwo(10));
console.log(multiflyByThree(10));

const result = add(multiplyByTwo(5), multiflyByThree(10));
console.log(`FINAL => ${result}`);