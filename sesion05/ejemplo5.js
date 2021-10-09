var Triangle = function (a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
}
Triangle.prototype.getPerimeter = function(){
    console.log(this.a+this.b+this.c);
}
var triangle = new Triangle (1, 2, 3);
console.log(triangle);
console.log(triangle.getPerimeter());