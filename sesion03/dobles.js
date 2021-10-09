function multiplyByTwo(numbers){
    var byTwo = []
    for(let i=0; i < numbers.length; i++){
        byTwo.push(numbers[i]*2)
    }
    return byTwo
}
var input = [1, 3, 4, 7, 2, 1, 9, 0];
var output =  multiplyByTwo(input);
console.log(input);
console.log(output);