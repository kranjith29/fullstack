//global_local_variable6

//Global variable
var user;  //undefined variable
user = 'Rajesh';  //value assingned
//function
function sayHi(){
    //Local variable
    var greeting; //undefined variable
    greeting = "It's so good to meet you!" //value assingned
    
    //nested function concept
    function greet(){
        return `He also says, ${greeting}`;
    }
    
    //user is accessible even its assigned outside the function
    console.log(`${user} says Hi!`);  //ReferenceError will come: if user is not defined
    // access the nested function
    console.log(greet());
}

sayHi();


