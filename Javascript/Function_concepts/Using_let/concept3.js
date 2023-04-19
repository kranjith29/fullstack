var x=200;
//using let
for(let x = 0; x <10; x=x+1){
    console.log(`The number is ${x}`);
}
console.log(`Original number is ${x}`);

//using var
for(var x = 0; x <10; x=x+1){
    console.log(`The number is ${x}`);
}
//Now Original x value is override because of var key word
console.log(`Original number is ${x}`);