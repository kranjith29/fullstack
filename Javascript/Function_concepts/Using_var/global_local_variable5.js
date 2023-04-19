//global_local_variable5

//Global variable
var user = 'Ranjith';
//function
function sayHi(){
    //Local variable
    var greeting = "How are you now!";
    
    //nested function concept
    function greet(){
        //Local variable
        var newLetter = `He also says, ${greeting}`;
        return newLetter;
    }
    
    //user is accessible even its assigned outside the function
    console.log(`${user} says Hi!`);  //ReferenceError will come: if user is not defined
    // access the nested function
    console.log(greet());
}

sayHi();


