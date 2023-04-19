//global_local_variable3

//Global variable
var user = 'Ranjith';
//function
function sayHi(){

    //Local variable
    var greeting = "It's so good to meet you!";
    //user is accessible even its assigned outside the function
    console.log(`${user} says Hi!`);  //ReferenceError will come: if user is not defined
    console.log(greeting);
}

sayHi();

//If try to access var greeting from outside, we will get "ReferenceError: greeting is not defined"
console.log(greeting); 

