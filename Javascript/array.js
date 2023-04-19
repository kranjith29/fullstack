//Array concept
//Array is object
var fruits = ['Apple', 'Kiwi', 'Banana', 'Strawberry', 'Mango'];
console.log("Type of fruits: ", typeof fruits);

console.log("Instance of fruits: ", fruits instanceof Array);

//Index based
console.log(`I love ${fruits[0]}`);
console.log(`I also like ${fruits[1]}`);

//length of the array
console.log('Length of fruits array: ',fruits.length);

//new item added in end of the array
fruits.push('Avocado');
console.log(fruits);
//length of the array after push
console.log('Length of fruits array after push: ',fruits.length);
//access last element of array
console.log(`Let's have a ${fruits[fruits.length-1]} milshake!!!`);


//item removed using pop which removed default in end of the array
fruits.pop();
console.log(fruits);
//length of the array after pop
console.log('Length of fruits array after pop: ',fruits.length);


//access last element of array
console.log(`Let's have a ${fruits[fruits.length-1]} milshake!!!`);

//new item added/modified using index value
fruits[4] = 'Pomogranete';
fruits[9] = 'Pineapple';
fruits[5] = 'Blueberries';
console.log(fruits);
console.log('Length of fruits array after added: ',fruits.length);

//nested array
var users = [
    [1, 'Ranjith'],
    [2, 'Rajesh'],
    [3, 'Jegadeesh'],
    [4, 'Surya']
];

console.log(users[3]);
console.log(users[2][1]);
//it provide undefined if u give unavailable index value  - not produce any error
console.log(users[2][2]);


//nested array of objects

var array_of_obj = [
    {id: 1,
    name: 'Rahul'},

    {id:2,
    name: 'Balaji'},

    {id:3,
    name: 'Vishal'},

    {id:4,
    name: 'Mahadev'},
];

console.log(array_of_obj[1]);
console.log(array_of_obj[6]);
console.log(array_of_obj[0]['name']);
console.log(array_of_obj[3]['name']);
console.log(array_of_obj.length);

var admin1 = array_of_obj;
admin1[2] = {id: 3, name: 'Santhanu'};
console.log(admin1[2]);
console.log(array_of_obj[2]);


//Shallow clone/Copy: shallow copy of an object refers to the reference location/address of the original object
//Syntax: we can use "[...object_name]" or "object_name.slice" 
// var admin = [...array_of_obj]; 
var admin = array_of_obj.slice;
admin[2] = {id: 3, name: 'Isai Prabha'};
console.log(admin[2]);
console.log(array_of_obj[2]);