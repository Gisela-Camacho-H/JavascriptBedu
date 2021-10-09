function calculateAverage(numbers){
    var sum = 0
    for(let i=0; i < numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum/numbers.length
}
var input = [7, 8, 9];
var output =  calculateAverage(input);
console.log(input);
console.log(output);