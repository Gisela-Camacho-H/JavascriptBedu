function loop (start, test, update, body){
    for (let index = 0; test(index); index = update(index)) {
        body(loop);
    }
}
var test = function(n){

}
var update = function(n){
    return -1
}
loop(3, test, update, console.log);