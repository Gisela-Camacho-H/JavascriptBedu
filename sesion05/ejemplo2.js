var Vector = function (x, y){
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function(vector){
    return new Vector(this.x + vector.x, this.y + vector.y);
}
var v1 = new Vector(3, 6)
var v2 = new Vector(6, 9)
console.log(v1);
console.log(v2);
console.log(v1.plus(v2));