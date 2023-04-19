//undefined is premitive data type
var car;
console.log(car);
console.log(`Type of: ${typeof car}`);


//Null 
var cost = null;
var cart = null;
console.log(cost);
console.log(`Type of cost: ${typeof cost}`);
console.log(`Type of cart: ${typeof cart}`);

//Not a Number (NaN)

var car = 'Honda' + 2021;
console.log(car);
console.log(Number.isNaN(car));
console.log(`Type of car: ${typeof car}`);

var car = 'Honda' - 2021;
console.log(car);
console.log(Number.isNaN(car));
console.log(`Type of car: ${typeof car}`);

var car = 'Honda' * 2021;
console.log(car);
console.log(Number.isNaN(car));
console.log(`Type of car: ${typeof car}`);