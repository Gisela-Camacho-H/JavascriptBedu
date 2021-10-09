var Person = function (name){
    this.name = name;
}
var Developer = function (name, skill, yearsOfExperience){
    Person.call(this, name)
    this.skill = skill
    this.yearsOfExperience = yearsOfExperience
}
var Leslie = new Developer ('Leslie', 'JS', 3)
console.log(Leslie);