//global_local_variable4

//Global variable
var user = 'Ranjith';
//function
function sayHi(){
    //Local variable
    var greeting = "It's so good to meet you!";
    
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


