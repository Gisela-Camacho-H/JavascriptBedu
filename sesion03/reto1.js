function power(base, exponente){
    var answer = 1;
    for (var i = 0; i<exponente; i++){
        answer =  answer * base;
    }
    return answer
}
console.log(power(5,3));