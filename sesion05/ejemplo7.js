var number= 1234567
var SumDigits= n =>{
    return n
    .toString()
    .split('')
    .map(Number)
    .reduce((acc,current)=> acc + current)
}
var number = 1234567
console.log(SumDigits(number));