function flatten(arrays){
    var array =  arrays.map(flatten(arrays));
}
var arrays = [[1, 2, 3], [4, 5], [6]];
var array =  flatten(arrays);
console.log(array);