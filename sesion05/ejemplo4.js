var Person = function(name, birthYear, job){
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
}
Person.prototype.calculateAge = function(){
    var today = new Date()
    var year = today.getFullYear();
    console.log(year - this.birthYear);
}
var Gisela =  new Person ('Gisela', 1990, 'Fullstack Developer')
var Leslie =  new Person ('Leslie', 1996, 'Movile Developer')
var Ana =  new Person ('Ana', 1992, 'JS Developer')
console.log(Gisela.calculateAge());
console.log(Leslie.calculateAge());
console.log(Ana.calculateAge());







