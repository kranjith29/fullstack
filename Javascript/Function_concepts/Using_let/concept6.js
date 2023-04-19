// let a=20;
// let a=30;
// console.log(a); //SyntaxError: Identifier 'a' has already been declared


//if try to use let key word as outside any block does not end up in global scope
let a=19;
if(a >=10){
    let a=15;
    console.log(a);
}

console.log(a);


let b=12;
if(b >10){
    console.log(user);  //It is Temporal Dead Zone
    //ReferenceError: Cannot access 'user' before initialization
    let user = 'Ranjith'; 
}



