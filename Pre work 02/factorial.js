var factorial = function fac(number){
    return number < 2 ? 1 : number * fac(number - 1)
}
console.log(factorial(5));