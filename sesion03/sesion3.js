function calculateAge(birthYear){
    var age = 2021 - birthYear;
    return age;
}
var EthienAge = calculateAge(1984)
console.log("Ethien is "+EthienAge + " years old.");

function yearsUntilRetirement(year, name){
    var EthienAge = calculateAge(year)
    var retirement = 65 - EthienAge
    console.log(name + " retires in "+ retirement + " years.");
}

yearsUntilRetirement(1984, "Ethien")
