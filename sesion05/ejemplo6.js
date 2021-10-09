var car = {
    brand: 'Nissan',
    model: 'Sentra',
    year: 2021
}
function addColor(car){
    car.color = 'red';
    return car;
}
console.log('Antes de llamar addColor()', car);
var resultCar = addColor(car)

console.log('[car] Despues de llamar addColor()', car);
console.log('[resultCar] Despues de llamar addColor', resultCar);
console.log('¿mismo auto?', car === resultCar)








