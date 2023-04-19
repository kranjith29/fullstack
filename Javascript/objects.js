//Objects and properties
// object->sentinel; 
// properties->name,empcount, city, country...etc; 
// property value: Ranjith, 50...

var sentinel={
    name: 'Ranjith Design\u{2122}',
    empCount: 50,
    city: 'Chennai',
    country: 'India',
    isListed: false,
}

//**1. Access the property value from object */
console.log(sentinel.name);

//**2. Access the property value from object */
console.log(sentinel['city']);

var propName = 'empCount';
console.log(sentinel[propName]) ;


console.log('Before modification');
console.log(sentinel)

//**3.modify/re-assign the property value**
sentinel.name='Rajesh Design\u{2122}';
sentinel.city='Delhi';
sentinel.country='US';
sentinel.isListed=true;
sentinel.empCount=100;
// console.log(sentinel.name);
console.log('After modification');
console.log(sentinel);

//**4. delete the property**
delete sentinel.city;
console.log('After delete city property from object');
console.log(sentinel);

//**5. create object using object constructor**

var currency = new Object();
currency.Japan = 'Yen';
currency.India = 'Rupee';
currency.US = 'US Dollar';
console.log('Create new object "currency" using object constructor by "dot. symbol"');
console.log(currency);
console.log("\n");
//**5. create object using object constructor**

var currency_value = new Object();
currency_value.Japan = 'Yen';
currency_value.India = 'Rupee';
currency_value.US = 'US Dollar';
console.log('Create new object "currency_value" using object constructor by "[] symbol"');
console.log(currency_value);
console.log("\n");

//**6. Dynamically fetch the property name**
console.log("Dynamically fetch the property name");
console.log(`The currency of ${sentinel.country} is ${currency[sentinel.country]}`);
console.log("\n");

//create nested objects
var nest_obj={
    name: 'Ranjith Design\u{2122}',
    empCount: 50,
    location: {
        city: 'Chennai',
        country: 'India',
    },
    isListed: false,
}

//**7. Dynamically fetch the property name from nested object**
console.log("Dynamically fetch the property name from nested object");
console.log(`The currency of ${nest_obj.location.country} is ${currency[nest_obj.location.country]}`);
console.log("\n");

var fruit = 'Apple';
var pie = fruit;
console.log(`Fruit: ${fruit}`);
console.log(`Pie: ${pie}`);

pie='Walnut';
console.log(`Pie: ${pie}`);
console.log("*****************************************");

console.log("Understand concept of Pass by reference")
var test_obj={
    name: 'Sentinel Design\u{2122}',
    empCount: 50,
    location: {
        city: 'Chennai',
        country: 'India',
    },
    isListed: false,
}

var surya = {
    name: 'Surya A',
    age: '33',
    designation: 'Sr. Designer',
    organization: test_obj.name,
    address: test_obj.location,
}

var rajesh = {
    name: 'Rajesh K',
    age: '32',
    designation: 'Warrant Officer',
    organization: test_obj.name,
    address: test_obj.location,
}

//**8. Pass by reference **
//If you try to re-assign value of city from surya, it take reference as test_obj.location and pass the value"
//new city changed in both surya and rajesh object even we try to change in surya object
surya.address.city = "Sholinganallur";

console.log(surya);
console.log(rajesh);

//To break this pass by reference,to assign like below
surya.address= {city: 'Gudalur', country: 'India',};
rajesh.address= {city: 'Theni', country: 'India',};

console.log(surya);
console.log(rajesh);
